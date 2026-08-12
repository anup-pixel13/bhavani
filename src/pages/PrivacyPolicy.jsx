import BackButton from "../components/common/BackButton";
import { company } from "../data/company";
import "../styles/pages/privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <section className="page-section">
      <div className="container">
        <BackButton fallback="/" />
        <article className="legal-page">
          <h1>Privacy Policy</h1>
          <span className="legal-updated">Last updated: August 2026</span>

          <p>
            {company.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you visit our website or
            contact us.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following information when you use our website:</p>
          <ul>
            <li>Name, phone number, and email address (via contact/quote forms)</li>
            <li>Company or organisation name</li>
            <li>General enquiry or message content</li>
            <li>Basic usage data (page visits) via standard web analytics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and quote requests</li>
            <li>To provide after-sales support and AMC services</li>
            <li>To improve our website and services</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. Your data is used solely to communicate with you regarding
            our services.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable precautions to protect your personal information.
            Our contact forms use FormSubmit, a third-party form handling
            service. Please review their privacy policy separately.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request the deletion of your personal data at any time by
            contacting us at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy-related queries, contact us at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
            <a href={`tel:${company.mobile}`}>{company.mobile}</a>.
          </p>
        </article>
      </div>
    </section>
  );
}
