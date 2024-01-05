import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

function Home(): JSX.Element {
  const [count, setCount] = useState<{ since: string; count: string }>({
    since: "00/00/0000, 00:00:00 AM",
    count: "...",
  });
  const [loaded, setLoaded] = useState<boolean>(false);

  async function fetchData(): Promise<void> {
    if (loaded) return;
    setLoaded(true);
    await axios
      .get("/count")
      .then((resp) => {
        setCount(JSON.parse(resp.data));
      })
      .catch((err) => {
        setCount({ since: "00/00/0000, 00:00:00 AM", count: "..." });
        setLoaded(false);
        console.error(`Failed to reach backend count endpoint: ${err}`);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="home">
      <div id="home-text">
        <h2>✅ You have reached subzeero.dev!</h2>
        {loaded && (
          <h5>
            ℹ️ You are visitor #{count.count} since{" "}
            {new Date(count.since).toLocaleString([])}.
          </h5>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
