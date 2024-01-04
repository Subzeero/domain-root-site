import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Home";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
