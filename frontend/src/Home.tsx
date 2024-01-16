// Home.tsx - React element for landing page
// Subzeero (Zander Rommelaere)
// January 16, 2024

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

function Home(): JSX.Element {
  const [count, setCount] = useState<{ since: number | string; count: string }>(
    {
      since: 0,
      count: "...",
    }
  );
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
        setCount({ since: 0, count: "..." });
        setLoaded(false);
        console.error(`Failed to reach backend count endpoint: ${err}`);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center m-0 p-0"
      style={{
        color: "rgba(255, 255, 255, 0.85)",
        backgroundColor: "#1c1f23",
        minWidth: "320px",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2>
          <i className="bi bi-check-circle-fill text-success"></i> You have
          reached subzeero.dev!
        </h2>
        {loaded && (
          <h5 className="text-white text-opacity-75">
            <i className="bi bi-info-circle-fill"></i> You are visitor #
            {count.count} since {new Date(count.since).toLocaleString([])}.
          </h5>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
