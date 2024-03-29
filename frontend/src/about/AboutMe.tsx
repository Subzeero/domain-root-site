// AboutMe.tsx - React root element for "About" pages
// Subzeero (Zander Rommelaere)
// January 16, 2024

import headshot from "../assets/full-shot.jpeg";

function AboutMe(): JSX.Element {
  return (
    <div
      className="col vh-100 container pt-3 p-5 justify-content-center"
      style={{ maxWidth: "1320px" }}
    >
      <span className="text-center">
        <h2>About</h2>
        <h5 className="text-dark text-opacity-75">A Bit About Me</h5>
        <hr />
      </span>

      <div className="row justify-content-center">
        <span className="col-9 text-center">
          <img src={headshot} alt="Headshot" className="rounded w-75"></img>
        </span>
        <span className="col-10 d-flex flex-column justify-content-center text-center mt-3">
          <h3>Hello!</h3>
          <h5 className="fw-normal">
            I'm Zander Rommelaere, a third year Computer Science student at{" "}
            <a href="https://usask.ca" className="link-dark">
              USask
            </a>
            . I love working on projects and bringing ideas to life.
          </h5>
          <div className="d-flex justify-content-center">
            <a
              className="link-dark"
              href="mailto:zander.rommelaere@usask.ca"
              title="zander.rommelaere@usask.ca"
            >
              <i className="fs-4 m-1 bi-envelope-fill"></i>
            </a>
            <a
              className="link-dark"
              href="http://linkedin.com/in/zander-rommelaere"
              title="Zander Rommelaere"
            >
              <i className="fs-4 m-1 bi-linkedin"></i>
            </a>
            <a
              className="link-dark"
              href="http://github.com/Subzeero"
              title="@Subzeero"
            >
              <i className="fs-4 m-1 bi-github"></i>
            </a>
            <a
              className="link-dark"
              href="http://discord.com/users/296406728818425857"
              title="@subzeero"
            >
              <i className="fs-4 m-1 bi-discord"></i>
            </a>
          </div>
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
