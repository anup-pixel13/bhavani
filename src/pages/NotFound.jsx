import { Link } from "react-router-dom";
import "../styles/pages/not-found.css";

export default function NotFound() {
  return (
    <section className="page-section not-found-page">
      <div className="container not-found-inner">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
    </section>
  );
}