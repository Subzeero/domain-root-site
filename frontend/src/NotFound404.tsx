// NotFound404.tsx - React element for any page not found
// Subzeero (Zander Rommelaere)
// January 16, 2024

import Footer from "./Footer";

function NotFound404(): JSX.Element {
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
          <i className="bi bi-x-circle-fill text-danger"></i> 404: Not Found
        </h2>
        <h5 className="text-white text-opacity-75">
          <i className="bi bi-info-circle-fill"></i> The page you requested
          could not be found.
        </h5>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound404;
