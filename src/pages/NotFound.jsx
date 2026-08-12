import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import "../styles/pages/not-found.css";

export default function NotFound() {
  useSEO(
    "Page Not Found",
    "The page you are looking for does not exist. Return to Bhavani Enterprises home page for CCTV, networking, and security solutions in Navi Mumbai."
  );

  return (
    <section className="page-section not-found-page">
      <div className="container not-found-container">
        <div className="not-found-code" aria-hidden="true">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn">Go Home</Link>
          <Link to="/contact" className="btn btn--outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
