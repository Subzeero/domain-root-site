import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [count, setCount] = useState({
    since: "00/00/0000, 00:00:00 AM",
    count: "...",
  });
  const [loaded, setLoaded] = useState(false);

  async function fetchData() {
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
    </div>
  );
}

export default Home;
