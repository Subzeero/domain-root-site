import Footer from "./Footer";

function NotFound404(): JSX.Element {
  return (
    <div id="not-found">
      <div>
        <h2>❌ 404: Not Found</h2>
        <h5>The page you requested could not be found.</h5>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound404;
