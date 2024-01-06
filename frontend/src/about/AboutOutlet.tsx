import { Outlet, Link, useLocation } from "react-router-dom";
import closeupPhoto from "../assets/close-up.jpeg";

function AboutOutlet(): JSX.Element {
  const location = useLocation();
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
              data-bs-theme="dark"
              id="menu"
            >
              <li>
                <Link to="/about/me" className="text-decoration-none">
                  <span
                    className={
                      location.pathname == "/about/me"
                        ? "nav-link disabled px-sm-0 px-2"
                        : "nav-link px-sm-0 px-2"
                    }
                  >
                    <i className="fs-5 bi-person-circle"></i>
                    <span className="ms-1 d-none d-sm-inline">About</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/portfolio" className="text-decoration-none">
                  <span
                    className={
                      location.pathname == "/about/portfolio"
                        ? "nav-link disabled px-sm-0 px-2"
                        : "nav-link px-sm-0 px-2"
                    }
                  >
                    <i className="fs-5 bi-window-sidebar"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      Portfolio Website
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about/volunteer-connect"
                  className="text-decoration-none"
                >
                  <span
                    className={
                      location.pathname == "/about/volunteer-connect"
                        ? "nav-link disabled px-sm-0 px-2"
                        : "nav-link px-sm-0 px-2"
                    }
                  >
                    <i className="fs-5 bi-person-workspace"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      VolunteerConnect
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/the-senate" className="text-decoration-none">
                  <span
                    className={
                      location.pathname == "/about/the-senate"
                        ? "nav-link disabled px-sm-0 px-2"
                        : "nav-link px-sm-0 px-2"
                    }
                  >
                    <i className="fs-5 bi-discord"></i>
                    <span className="ms-1 d-none d-sm-inline">The Senate</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/homelab" className="text-decoration-none">
                  <span
                    className={
                      location.pathname == "/about/homelab"
                        ? "nav-link disabled px-sm-0 px-2"
                        : "nav-link px-sm-0 px-2"
                    }
                  >
                    <i className="fs-5 bi-motherboard"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      Homelab & Hosting
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about/s-chat" className="text-decoration-none">
                  <span
                    className={
                      location.pathname == "/about/s-chat"
                        ? "nav-link disabled px-sm-0 px-2"
                        : "nav-link px-sm-0 px-2"
                    }
                  >
                    <i className="fs-5 bi-chat-dots"></i>
                    <span className="ms-1 d-none d-sm-inline">S-Chat</span>
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
