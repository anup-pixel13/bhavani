import BackButton from "../components/common/BackButton";
import { company } from "../data/company";
import { services } from "../data/services";
import "../styles/pages/quote.css";
import { useState } from "react";

const INITIAL = {
  name: "", phone: "", email: "", company: "",
  service: "", message: "", consent: false, _honey: "",
};

export default function GetQuote() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.consent) e.consent = "Please accept to continue.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._honey) return; // honeypot
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append("_subject", `Quote Request from ${form.name}`);
      data.append("_captcha", "false");
      const res = await fetch(`https://formsubmit.co/${company.adminEmail}`, {
        method: "POST", body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); setForm(INITIAL); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section className="page-section quote-page">
      <div className="container">
        <BackButton fallback="/contact" />
        <div className="quote-layout">
          <div className="quote-info">
            <span className="pill-label">Get a Quote</span>
            <h1>Request a Free Quote</h1>
            <p>
              Fill in your details and we will get back to you with a tailored
              quote for your security or networking requirement.
            </p>
            <ul className="quote-benefits">
              <li><span aria-hidden="true">&#10003;</span> Free site assessment</li>
              <li><span aria-hidden="true">&#10003;</span> No obligation quote</li>
              <li><span aria-hidden="true">&#10003;</span> Fast response within 24 hours</li>
              <li><span aria-hidden="true">&#10003;</span> Serving Navi Mumbai, Panvel &amp; Kharghar</li>
            </ul>
          </div>

          <div className="quote-form-wrap card">
            {status === "success" ? (
              <div className="form-success">
                <span className="form-success__icon" aria-hidden="true">&#10003;</span>
                <h2>Quote Request Sent!</h2>
                <p>Thank you, <strong>{form.name || "there"}</strong>. We will contact you within 24 hours.</p>
                <button className="btn" onClick={() => setStatus("idle")}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Get a quote form">
                {/* Honeypot */}
                <input type="text" name="_honey" value={form._honey} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="form-row">
                  <FormField label="Full Name *" error={errors.name}>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" />
                  </FormField>
                  <FormField label="Phone *" error={errors.phone}>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="9867933763" autoComplete="tel" />
                  </FormField>
                </div>

                <div className="form-row">
                  <FormField label="Email *" error={errors.email}>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
                  </FormField>
                  <FormField label="Company / Organisation" error={errors.company}>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Optional" autoComplete="organization" />
                  </FormField>
                </div>

                <FormField label="Service Required *" error={errors.service}>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other / Not listed</option>
                  </select>
                </FormField>

                <FormField label="Message / Additional Details" error={errors.message}>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your requirement, site details, or any questions…" />
                </FormField>

                <FormField error={errors.consent} className="form-field--checkbox">
                  <label className="checkbox-label">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
                    I agree to be contacted by Bhavani Enterprises regarding this enquiry.
                  </label>
                </FormField>

                {status === "error" && (
                  <p className="form-error-msg" role="alert">
                    Something went wrong. Please try again or WhatsApp us directly.
                  </p>
                )}

                <button type="submit" className="btn form-submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Submit Quote Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, error, children, className = "" }) {
  return (
    <div className={`form-field ${className}`}>
      {label && <label className="form-label">{label}</label>}
      {children}
      {error && <span className="form-field-error" role="alert">{error}</span>}
    </div>
  );
}
