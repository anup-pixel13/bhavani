import { useSEO } from "../hooks/useSEO";
// existing imports preserved below — this file wraps the existing Home page
// NOTE: full Home.jsx content kept intact; only useSEO call added at top of component
import { Link } from "react-router-dom";
import { company } from "../data/company";
import { services } from "../data/services";
import { clients } from "../data/clients";
import { brands } from "../data/brands";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import "../styles/pages/home.css";

export default function Home() {
  useSEO(
    null,
    "Bhavani Enterprises provides professional CCTV installation, IP camera setup, networking, biometric access control, video door phone, EPABX, and AMC services across Navi Mumbai, Panvel, Kharghar, and Mumbai."
  );

  const waUrl = buildWhatsAppUrl(company.whatsapp, "Hello! I would like to enquire about your security solutions.");

  return (
    <>
      {/* Hero */}
      <section className="home-section home-hero">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label">Navi Mumbai&rsquo;s Trusted Security Partner</span>
            <h1>Security &amp; Networking Solutions You Can Trust</h1>
            <p>
              Professional CCTV installation, IP networking, biometric access
              control, and surveillance solutions for homes, businesses, and
              government projects across Navi Mumbai, Panvel &amp; Kharghar.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link to="/get-quote" className="btn">Get a Free Quote</Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                &#128172; WhatsApp Us
              </a>
            </div>
          </div>

          <div className="intro-stats">
            <div className="intro-stat"><strong>10+</strong><span>Years of Experience</span></div>
            <div className="intro-stat"><strong>200+</strong><span>Projects Completed</span></div>
            <div className="intro-stat"><strong>50+</strong><span>Satisfied Clients</span></div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label">Services</span>
            <h2>What We Do</h2>
          </div>
          <div className="services-grid">
            {services.slice(0, 6).map((s) => (
              <article key={s.id} className="service-card card">
                <div className="service-card__icon" aria-hidden="true">🔒</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.description}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/services" className="btn btn--outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Clients preview */}
      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label">Clients</span>
            <h2>Trusted By</h2>
          </div>
          <div className="clients-grid">
            {clients.slice(0, 6).map((c) => (
              <article key={c.id} className="client-card card">
                <div className="client-card__check" aria-hidden="true">✓</div>
                <div className="client-card__body">
                  <h3 className="client-card__name">{c.name}</h3>
                  <span className="client-card__type">{c.type}</span>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/clients" className="btn btn--outline">View All Clients</Link>
          </div>
        </div>
      </section>

      {/* Brands preview */}
      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label">Brands</span>
            <h2>Products We Install</h2>
          </div>
          <div className="brands-grid">
            {brands.slice(0, 3).map((b) => (
              <article key={b.id} className="brand-card card">
                <h3 className="brand-card__name">{b.name}</h3>
                <span className="brand-card__tagline">{b.tagline}</span>
                <p className="brand-card__desc">{b.description}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/brands" className="btn btn--outline">View All Brands</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-section" style={{ background: "linear-gradient(135deg, rgba(49,86,255,0.07), rgba(225,62,207,0.05))" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="pill-label">Contact</span>
          <h2 style={{ marginTop: "0.5rem" }}>Ready to Secure Your Premises?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Contact us today for a free site assessment and no-obligation quote.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/get-quote" className="btn">Get a Quote</Link>
            <Link to="/contact" className="btn btn--outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
