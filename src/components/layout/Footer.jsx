import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { footerLinks } from "../../data/navigation";
import { services } from "../../data/services";
import "../../styles/layout/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const serviceLinks = services.map((s) => ({ label: s.title, path: "/services" }));

  const quickLinks = footerLinks.filter(
    (l) => !["/privacy-policy", "/terms"].includes(l.path)
  );

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-brand-mark">
            <div className="footer-brand-icon">BE</div>
            <div>
              <div className="footer-brand-name">{company.name}</div>
              <div className="footer-brand-tagline">{company.tagline}</div>
            </div>
          </div>
          <p className="footer-desc">
            Professional CCTV, networking, and security solutions serving
            businesses and government bodies across Navi Mumbai, Panvel,
            Kharghar &amp; beyond.
          </p>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <span aria-hidden="true">&#128172;</span> WhatsApp Us
          </a>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
{/*
        { Services }
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            {serviceLinks.map((s) => (
              <li key={s.label}>
                <Link to={s.path}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>*/}

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" aria-hidden="true">&#128222;</span>
            <a href={`tel:${company.mobile}`}>{company.mobile}</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" aria-hidden="true">&#9993;</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" aria-hidden="true">&#128205;</span>
            <span>{company.address.full}</span>
          </div>
          <div className="footer-contact-item" style={{ marginTop: "0.5rem", fontSize: "0.8rem", opacity: 0.6 }}>
            <span>GST: {company.gst}</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container footer-bottom">
        <p>© {year} {company.name}. All rights reserved.</p>
        <nav className="footer-legal-links" aria-label="Legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="/get-quote">Get a Quote</Link>
        </nav>
      </div>
    </footer>
  );
}
