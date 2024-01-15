import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import AboutOutlet from "./about/AboutOutlet";
import AboutMe from "./about/AboutMe";
import AboutPortfolio from "./about/AboutPortfolio";
import AboutVC from "./about/AboutVC";
import AboutSenate from "./about/AboutSenate";
import AboutHomelab from "./about/AboutHomelab";
import AboutSChat from "./about/AboutSChat";
import NotFound404 from "./NotFound404";
import "./App.css";

axios.defaults.baseURL = "https://subzeero.dev/api";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AboutOutlet />}>
          <Route path="/about" element={<Navigate to={"/about/me"} />} />
          <Route path="/about/me" element={<AboutMe />} />
          <Route path="/about/portfolio" element={<AboutPortfolio />} />
          <Route path="/about/volunteer-connect" element={<AboutVC />} />
          <Route path="/about/the-senate" element={<AboutSenate />} />
          <Route path="/about/homelab" element={<AboutHomelab />} />
          <Route path="/about/s-chat" element={<AboutSChat />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
