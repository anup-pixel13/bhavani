import { useSEO } from "../hooks/useSEO";
import { services } from "../data/services";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/services.css";

const ICONS = { camera: "📷", video: "🎥", wifi: "📶", fingerprint: "🔏", phone: "📞", tools: "🔧" };

export default function Services() {
  useSEO(
    "Services",
    "Bhavani Enterprises offers CCTV installation, IP camera setup, networking, biometric access control, video door phone, EPABX systems, and AMC services across Navi Mumbai, Panvel, and Kharghar."
  );

  return (
    <section className="page-section services-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Our Services</span>
          <h1>Surveillance &amp; Networking Solutions</h1>
          <p>From CCTV installation to enterprise networking, we deliver end-to-end security infrastructure tailored to your needs across Navi Mumbai, Panvel, and Kharghar.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card card">
              <div className="service-card__icon" aria-hidden="true">{ICONS[service.icon] || "🔒"}</div>
              <h2 className="service-card__title">{service.title}</h2>
              <p className="service-card__desc">{service.description}</p>
              {service.features && (
                <ul className="service-card__features">
                  {service.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/get-quote" className="btn">Request a Quote</Link>
        </div>
      </div>
    </section>
  );
}
