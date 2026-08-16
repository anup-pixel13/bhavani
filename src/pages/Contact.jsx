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
        <BackButton fallback="/" dark />

        <div className="section-heading">
          <span className="pill-label">Contact Us</span>
          <h1>Get in Touch</h1>
          <p className="contact-tagline">
            Call us for the best security solutions in Navi Mumbai &amp; Panvel
          </p>
        </div>

        <div className="contact-layout">
          {/* ── Left: contact info cards ── */}
          <div className="contact-cards">
            <a href={`tel:${company.mobile}`} className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">📞</span>
              <div>
                <strong>Mobile</strong>
                <span>{company.mobile}</span>
              </div>
            </a>

            <a href={`mailto:${company.email}`} className="contact-card">
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
              className="contact-card contact-card--whatsapp"
            >
              <span className="contact-card__icon" aria-hidden="true">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <span>Chat instantly</span>
              </div>
            </a>

            <div className="contact-card contact-card--address">
              <span className="contact-card__icon" aria-hidden="true">📍</span>
              <div>
                <strong>{company.name}</strong>
                <span>GST No. : {company.gst}</span>
                <span>Pan No. : {company.pan}</span>
                <span>{company.address.full}</span>
              </div>
            </div>
          </div>

          {/* ── Right: map + CTA ── */}
          <div className="contact-map-col">
            <div className="contact-map-wrap">
              <iframe
                className="contact-map"
                title="Bhavani CCTV and Networking — Kharghar, Navi Mumbai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.382072773417!2d73.06760731064301!3d19.04693188207724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d097b7c4f7%3A0x3d0e394197b6387b!2sBHAVANI%20CCTV%20AND%20NETWORKING!5e0!3m2!1sen!2sin!4v1786611672197!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
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