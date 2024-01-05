import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import AboutOutlet from "./about/AboutOutlet";
import AboutHome from "./about/AboutHome";
import AboutMe from "./about/AboutMe";
import AboutProjects from "./about/AboutProjects";
import AboutContact from "./about/AboutContact";
import NotFound404 from "./NotFound404";
import "./App.css";

axios.defaults.baseURL = "http://localhost:4000";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AboutOutlet />}>
          <Route path="/about" element={<Navigate to={"/about/home"} />} />
          <Route path="/about/home" element={<AboutHome />} />
          <Route path="/about/me" element={<AboutMe />} />
          <Route path="/about/projects" element={<AboutProjects />} />
          <Route path="/about/contact" element={<AboutContact />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
