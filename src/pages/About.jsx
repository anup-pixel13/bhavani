import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import "../styles/pages/about.css";

export default function About() {
  useSEO(
    "About Us",
    `Bhavani Enterprises — established ${company.established}, providing trusted CCTV, networking, and security solutions across Navi Mumbai, Panvel, and Kharghar. Learn about our team, values, and expertise.`
  );

  return (
    <section className="page-section about-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">About Us</span>
          <h1>Trusted. Experienced. Reliable.</h1>
        </div>

        <div className="about-intro">
          <div className="about-intro__image-wrap">
            <img
              src="/src/assets/images/hero/trust.png"
              alt="Bhavani Enterprises technician installing a CCTV camera"
              className="about-intro__image"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="about-intro__content">
            <p>
              Bhavani Enterprises is a leading provider of CCTV, security
              systems, and networking solutions serving businesses and
              government bodies across Navi Mumbai and Panvel.
            </p>
            <p>
              Founded on the principles of quality, integrity, and exceptional
              after-sales service, we deliver end-to-end security
              infrastructure tailored to your needs.
            </p>
            <p>
              Our team of certified technicians brings years of hands-on
              expertise across residential, commercial, and government projects
              &mdash; ensuring every installation meets the highest professional
              standards.
            </p>
            <div className="about-pillars">
              <div className="about-pillar"><strong>Quality</strong><span>Premium-grade products</span></div>
              <div className="about-pillar"><strong>Trust</strong><span>Government-approved work</span></div>
              <div className="about-pillar"><strong>Service</strong><span>24/7 support &amp; AMC</span></div>
            </div>
          </div>
        </div>

        <div className="section-heading" style={{ marginTop: "2rem" }}>
          <span className="pill-label">Contact Details</span>
          <h2>Reach Us</h2>
        </div>
        <div className="card" style={{ maxWidth: 480, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          <p><strong>{company.name}</strong></p>
          <p>&#128222; <a href={`tel:${company.mobile}`} style={{ color: "var(--primary)" }}>{company.mobile}</a></p>
          <p>&#9993;&#65039; <a href={`mailto:${company.email}`} style={{ color: "var(--primary)" }}>{company.email}</a></p>
          <p>&#128205; {company.address.full}</p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>GST: {company.gst} &nbsp;|&nbsp; PAN: {company.pan}</p>
        </div>
      </div>
    </section>
  );
}
