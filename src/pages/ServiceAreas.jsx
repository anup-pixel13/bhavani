import { useSEO } from "../hooks/useSEO";
import { serviceAreas } from "../data/serviceAreas";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/service-areas.css";

export default function ServiceAreas() {
  useSEO(
    "Service Areas",
    "Bhavani Enterprises provides CCTV installation, networking, and security services across Navi Mumbai, Panvel, Kharghar, Mumbai, and Jaipur. Fast on-site response."
  );

  return (
    <section className="page-section service-areas-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Service Areas</span>
          <h1>Where We Operate</h1>
          <p>
            We provide prompt, professional security and networking services
            across the entire Navi Mumbai and Panvel belt &mdash; with local
            expertise and rapid on-site response.
          </p>
        </div>

        <div className="service-areas-hero">
          <div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.02rem" }}>
              Headquartered in Kharghar, Sector 13, we serve residential
              complexes, corporate parks, government offices, and infrastructure
              projects across Mumbai, Navi Mumbai, Panvel, Kharghar, and
              Jaipur, Rajasthan.
            </p>
            <Link to="/get-quote" className="btn" style={{ marginTop: "1.25rem", display: "inline-flex" }}>
              Request On-Site Visit
            </Link>
          </div>
          <div className="service-areas-hero__image-wrap">
            <img
              src="/src/assets/images/areas/navi-mumbai.jpg"
              alt="Aerial view of Navi Mumbai city"
              className="service-areas-hero__image"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
        </div>

        <div className="areas-grid">
          {serviceAreas.map((area) => (
            <article
              key={area.id}
              className={`area-card card${area.highlight ? " area-card--highlight" : ""}`}
            >
              <div className="area-card__check" aria-hidden="true">✓</div>
              <div>
                <h2 className="area-card__name">{area.name}</h2>
                <p className="area-card__desc">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
