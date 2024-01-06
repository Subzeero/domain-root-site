import Footer from "./Footer";

function NotFound404(): JSX.Element {
  return (
    <div id="not-found">
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
