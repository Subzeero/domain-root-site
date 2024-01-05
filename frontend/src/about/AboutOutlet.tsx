import { Outlet, Link } from "react-router-dom";
import closeupPhoto from "../assets/close-up.jpeg";

function AboutOutlet(): JSX.Element {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
            <Link to="/about">
              <img
                src={closeupPhoto}
                alt="ZR"
                width="40"
                height="40"
                className="rounded-circle mb-2 mt-0 ml-2"
              ></img>
            </Link>
            <Link to="/about" className="text-decoration-none text-white">
              <p className="fs-4 d-none d-sm-inline">Zander Rommelaere</p>
            </Link>
            <ul
              className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/about/home" className="text-decoration-none">
                  <span className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi-house-door"></i>
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/me" className="text-decoration-none">
                  <span className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi-file-person"></i>
                    <span className="ms-1 d-none d-sm-inline">About</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/projects" className="text-decoration-none">
                  <span className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi-tools"></i>
                    <span className="ms-1 d-none d-sm-inline">Projects</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/contact" className="text-decoration-none">
                  <span className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi-envelope"></i>
                    <span className="ms-1 d-none d-sm-inline">Contact</span>
                  </span>
                </Link>
              </li>
            </ul>
            <Link to="/" className="text-decoration-none">
              <p className="mb-3 mt-2">🇨🇦❄️</p>
            </Link>
          </div>
        </div>
        <div className="col d-flex flex-column h-sm-100">
          <main className="row overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AboutOutlet;
