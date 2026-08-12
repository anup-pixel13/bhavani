import { clients } from "../data/clients";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/clients.css";

const TYPE_ICONS = {
  Government: "🏛️",
  "Private / Builder": "🏠",
  "Private / Infrastructure": "🏗️",
};

export default function Clients() {
  return (
    <section className="page-section clients-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Our Clients</span>
          <h1>Trusted by Government &amp; Private Sector</h1>
          <p>
            We are proud to serve some of the most prominent civic bodies and
            developers in the region — a testament to our reliability and
            professional standards.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <article key={client.id} className="client-card card">
              <div className="client-card__check" aria-hidden="true">
                {TYPE_ICONS[client.type] || "✓"}
              </div>
              <div className="client-card__body">
                <h2 className="client-card__name">{client.name}</h2>
                <span className="client-card__type">{client.type}</span>
                {client.location && (
                  <span className="client-card__location">📍 {client.location}</span>
                )}
                <p className="client-card__desc">{client.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/contact" className="btn">Work With Us</Link>
        </div>
      </div>
    </section>
  );
}
