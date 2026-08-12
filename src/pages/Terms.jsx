import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import "../styles/pages/legal.css";

export default function Terms() {
  useSEO(
    "Terms & Conditions",
    "Read the terms and conditions for using Bhavani Enterprises' website and engaging our CCTV, networking, and security services."
  );

  return (
    <section className="page-section legal-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Last updated: January 2025</p>
        </div>
        <div className="legal-content card">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing this website, you agree to be bound by these terms and conditions. If you do not agree, please do not use this website.</p>

          <h2>2. Services</h2>
          <p>{company.name} provides CCTV installation, networking, biometric access control, and related security services. All service details, pricing, and timelines are confirmed individually via direct communication.</p>

          <h2>3. Quotations</h2>
          <p>Quotes provided via this website or WhatsApp are estimates only and are subject to on-site assessment. Final pricing may vary based on site conditions and product availability.</p>

          <h2>4. Intellectual Property</h2>
          <p>All content on this website including text, images, and branding is the property of {company.name} and may not be reproduced without written permission.</p>

          <h2>5. Limitation of Liability</h2>
          <p>{company.name} shall not be liable for any indirect or consequential loss arising from use of this website or reliance on information provided herein.</p>

          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Navi Mumbai, Maharashtra.</p>

          <h2>7. Contact</h2>
          <p>For queries, contact <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </div>
      </div>
    </section>
  );
}
