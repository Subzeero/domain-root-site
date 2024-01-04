import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import NotFound404 from "./NotFound404";
import Footer from "./Footer";
import "./App.css";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
