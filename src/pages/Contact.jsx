import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/contact.css";

export default function Contact() {
  useSEO(
    "Contact Us",
    `Contact Bhavani Enterprises for CCTV installation, networking, and security solutions in Navi Mumbai. Call ${company.mobile} or WhatsApp us for a free quote.`
  );

  return (
    <section className="page-section contact-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Contact Us</span>
          <h1>Get in Touch</h1>
          <p style={{ color: "var(--primary)", fontWeight: 600 }}>
            Call us for the best security solutions in Navi Mumbai &amp; Panvel
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-cards">
            <a href={`tel:${company.mobile}`} className="contact-card card">
              <span className="contact-card__icon" aria-hidden="true">📞</span>
              <div>
                <strong>Mobile</strong>
                <span>{company.mobile}</span>
              </div>
            </a>
            <a href={`mailto:${company.email}`} className="contact-card card">
              <span className="contact-card__icon" aria-hidden="true">✉️</span>
              <div>
                <strong>Email</strong>
                <span>{company.email}</span>
              </div>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card card contact-card--whatsapp"
            >
              <span className="contact-card__icon" aria-hidden="true">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <span>Chat instantly</span>
              </div>
            </a>
            <div className="contact-card card contact-card--address">
              <span className="contact-card__icon" aria-hidden="true">📍</span>
              <div>
                <strong>{company.name}</strong>
                <span>GST No. : {company.gst}</span>
                <span>Pan No. : {company.pan}</span>
                <span>{company.address.full}</span>
              </div>
            </div>
          </div>

          <div className="contact-cta-col">
            <div className="contact-cta-image-wrap">
              <img
                src="/src/assets/images/common/contact-handshake.jpg"
                alt="Professional business handshake"
                className="contact-cta-image"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <div className="contact-cta-actions">
              <Link to="/get-quote" className="btn">Get a Quote</Link>
              <Link to="/enquiry" className="btn btn--outline">Send Enquiry</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
