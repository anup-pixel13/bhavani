import { useSEO } from "../hooks/useSEO";
import { services } from "../data/services";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/services.css";

import imgCctv       from "../assets/images/services/cctv.png";
import imgIpCamera   from "../assets/images/services/ip-camera.png";
import imgNetworking from "../assets/images/services/networking.png";
import imgBiometric  from "../assets/images/services/biometric.png";
import imgVideoDoor  from "../assets/images/services/video-door.png";
import imgAmc        from "../assets/images/services/amc.png";

const SERVICE_IMAGES = {
  "cctv":             imgCctv,
  "ip-camera":        imgIpCamera,
  "networking":       imgNetworking,
  "biometric":        imgBiometric,
  "video-door-epabx": imgVideoDoor,
  "amc":              imgAmc,
};

const ICON_FALLBACK = {
  camera: "📷", video: "🎥", wifi: "📶", fingerprint: "🔏", phone: "📞", tools: "🔧",
};

export default function Services() {
  useSEO(
    "Services",
    "Bhavani Enterprises offers CCTV installation, IP camera setup, networking, biometric access control, video door phone, EPABX systems, and AMC services across Navi Mumbai, Panvel, and Kharghar."
  );

  return (
    <section className="page-section services-page">
      <div className="container">
        <BackButton fallback="/" dark />
        <div className="section-heading">
          <span className="pill-label">Our Services</span>
          <h1>Surveillance &amp; Networking Solutions</h1>
          <p>From CCTV installation to enterprise networking, we deliver end-to-end security infrastructure tailored to your needs across Navi Mumbai, Panvel, and Kharghar.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__image-wrap">
                {SERVICE_IMAGES[service.id] ? (
                  <img
                    src={SERVICE_IMAGES[service.id]}
                    alt={service.title}
                    className="service-card__image"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className="service-card__image-fallback"
                  style={{ display: SERVICE_IMAGES[service.id] ? "none" : "flex" }}
                >
                  {ICON_FALLBACK[service.icon] || "🔒"}
                </div>
              </div>
              <div className="service-card__body">
                <h2 className="service-card__title">{service.title}</h2>
                <p className="service-card__desc">{service.description}</p>
                {service.features && (
                  <ul className="service-card__features">
                    {service.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}
                  </ul>
                )}
              </div>
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