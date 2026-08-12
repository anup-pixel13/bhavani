import { useSEO } from "../hooks/useSEO";
import { solutions } from "../data/solutions";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/solutions.css";

export default function Solutions() {
  useSEO(
    "Solutions",
    "Advanced security solutions from Bhavani Enterprises — biometric access control, video door phones, EPABX, IP networking, and annual maintenance contracts in Navi Mumbai."
  );

  return (
    <section className="page-section solutions-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Advanced Solutions</span>
          <h1>Beyond Surveillance</h1>
          <p>In addition to CCTV and networking, we provide advanced security solutions including biometric access control, video door phones, EPABX systems, and annual maintenance contracts.</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((sol) => (
            <article key={sol.title} className="solution-card card">
              <div className="solution-card__image-wrap">
                <div className="solution-card__image-fallback"><span aria-hidden="true">🔐</span></div>
              </div>
              <h2 className="solution-card__title">{sol.title}</h2>
              <p className="solution-card__desc">{sol.description}</p>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/get-quote" className="btn">Get a Quote</Link>
          <Link to="/contact" className="btn btn--outline" style={{ marginLeft: "0.75rem" }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
