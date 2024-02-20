// Footer.tsx - React footer element on Home & NotFound pages
// Subzeero (Zander Rommelaere)
// January 16, 2024

import { Link } from "react-router-dom";

function Footer(): JSX.Element {
  return (
    <footer className="position-absolute bottom-0 w-100">
      <Link to="/about" className="text-decoration-none">
        <p>🇨🇦❄️</p>
      </Link>
    </footer>
  );
}

export default Footer;
