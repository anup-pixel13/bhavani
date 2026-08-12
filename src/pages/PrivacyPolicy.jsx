import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import "../styles/pages/legal.css";

export default function PrivacyPolicy() {
  useSEO(
    "Privacy Policy",
    "Read Bhavani Enterprises' privacy policy to understand how we collect, use, and protect your personal information."
  );

  return (
    <section className="page-section legal-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Legal</span>
          <h1>Privacy Policy</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Last updated: January 2025</p>
        </div>
        <div className="legal-content card">
          <h2>1. Information We Collect</h2>
          <p>When you contact us via our website, WhatsApp, or phone, we may collect your name, phone number, email address, and details of your enquiry.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide solely to respond to your enquiry, prepare quotes, and deliver the services you request. We do not sell or share your data with third parties.</p>

          <h2>3. Data Storage</h2>
          <p>Enquiry data submitted through this website is transmitted via WhatsApp and is subject to WhatsApp&rsquo;s privacy policy. We do not store form submissions on our servers.</p>

          <h2>4. Cookies</h2>
          <p>This website does not use tracking cookies. Any session data is stored locally in your browser and is not transmitted to our servers.</p>

          <h2>5. Third-Party Links</h2>
          <p>Our website may contain links to third-party services (e.g., WhatsApp, Google Maps). We are not responsible for the privacy practices of those services.</p>

          <h2>6. Contact</h2>
          <p>For privacy-related queries, contact us at <a href={`mailto:${company.email}`}>{company.email}</a> or call <a href={`tel:${company.mobile}`}>{company.mobile}</a>.</p>
        </div>
      </div>
    </section>
  );
}
