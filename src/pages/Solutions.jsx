import { useSEO } from "../hooks/useSEO";
import { solutions } from "../data/solutions";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/solutions.css";

import imgBiometric from "../assets/images/services/biometric.png";
import imgVideoDoor from "../assets/images/services/video-door.png";
import imgAmc       from "../assets/images/services/amc.png";

const SOLUTION_IMAGES = {
  "biometric":       imgBiometric,
  "video-door-epabx": imgVideoDoor,
  "amc":             imgAmc,
};

export default function Solutions() {
  useSEO(
    "Solutions",
    "Advanced security solutions from Bhavani Enterprises — biometric access control, video door phones, EPABX, IP networking, and annual maintenance contracts in Navi Mumbai."
  );

  return (
    <section className="page-section solutions-page">
      <div className="container">
        <BackButton fallback="/" dark />
        <div className="section-heading">
          <span className="pill-label">Advanced Solutions</span>
          <h1>Beyond Surveillance</h1>
          <p>In addition to CCTV and networking, we provide advanced security solutions including biometric access control, video door phones, EPABX systems, and annual maintenance contracts.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((sol) => (
            <article key={sol.id} className="solution-card">
              <div className="solution-card__image-wrap">
                {SOLUTION_IMAGES[sol.id] ? (
                  <img
                    src={SOLUTION_IMAGES[sol.id]}
                    alt={sol.title}
                    className="solution-card__image"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className="solution-card__image-fallback"
                  style={{ display: SOLUTION_IMAGES[sol.id] ? "none" : "flex" }}
                >
                  <span aria-hidden="true">🔐</span>
                </div>
              </div>
              <div className="solution-card__body">
                <h2 className="solution-card__title">{sol.title}</h2>
                <p className="solution-card__desc">{sol.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/get-quote" className="btn btn--glass">Get a Quote</Link>
          <Link to="/contact" className="btn btn--outline-white">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}