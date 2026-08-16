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
        <BackButton fallback="/" dark />

        <div className="section-heading">
          <span className="pill-label">Service Areas</span>
          <h1>Where We Operate</h1>
          <p>
            We provide prompt, professional security and networking services
            across the entire Navi Mumbai and Panvel belt &mdash; with local
            expertise and rapid on-site response.
          </p>
        </div>

        {/* ── Hero: text + map ── */}
        <div className="service-areas-hero">
          <div className="service-areas-hero__text">
            <p>
              Headquartered in Kharghar, Sector 13, we serve residential
              complexes, corporate parks, government offices, and infrastructure
              projects across Mumbai, Navi Mumbai, Panvel, Kharghar, and
              Jaipur, Rajasthan.
            </p>
            <Link to="/get-quote" className="btn">
              Request On-Site Visit
            </Link>
          </div>

          {/* Google Maps embed — Kharghar, Navi Mumbai */}
          <div className="service-areas-hero__map-wrap">
            <iframe
              className="service-areas-hero__map"
              title="Bhavani Enterprises service area — Kharghar, Navi Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60508.36737924103!2d73.03541!3d19.04876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db1f196b2f%3A0x66fa44a56bae0b3e!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── Area cards ── */}
        <div className="areas-grid">
          {serviceAreas.map((area) => (
            <article
              key={area.id}
              className={`area-card${area.highlight ? " area-card--highlight" : ""}`}
            >
              <div className="area-card__check" aria-hidden="true">
                {area.highlight ? "★" : "✓"}
              </div>
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