import BackButton from "../components/common/BackButton";
import { company } from "../data/company";
import "../styles/pages/terms.css";

export default function Terms() {
  return (
    <section className="page-section">
      <div className="container">
        <BackButton fallback="/" />
        <article className="legal-page">
          <h1>Terms &amp; Conditions</h1>
          <span className="legal-updated">Last updated: August 2026</span>

          <p>
            By accessing this website or engaging {company.name} for services,
            you agree to the following terms and conditions.
          </p>

          <h2>Services</h2>
          <p>
            {company.name} provides CCTV installation, networking, biometric
            access control, video door phone, EPABX, and AMC services. All
            service engagements are subject to a separate written agreement or
            quotation.
          </p>

          <h2>Quotations</h2>
          <p>
            All quotations provided are valid for 30 days from the date of
            issue unless stated otherwise. Prices are subject to change
            depending on site conditions and material costs.
          </p>

          <h2>Payments</h2>
          <p>
            Payment terms are specified in the project quotation. We do not
            process any online payments through this website. All transactions
            are handled directly between the client and {company.name}.
          </p>

          <h2>Warranty</h2>
          <p>
            Products supplied are covered by the respective manufacturer&apos;s
            warranty. Labour warranty periods are specified in the project
            agreement. AMC contracts provide extended coverage as outlined in
            the AMC agreement.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            {company.name} shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services beyond
            the scope of the signed project agreement.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, design, and images, is
            the property of {company.name} unless otherwise stated.
          </p>

          <h2>Contact</h2>
          <p>
            For any queries, contact us at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
            <a href={`tel:${company.mobile}`}>{company.mobile}</a>.
          </p>
        </article>
      </div>
    </section>
  );
}
