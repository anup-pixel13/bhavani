import BackButton from "../components/common/BackButton";
import { company } from "../data/company";
import { services } from "../data/services";
import { products } from "../data/products";
import "../styles/pages/enquiry.css";
import { useState } from "react";

const INITIAL = {
  name: "", phone: "", email: "",
  subject: "", message: "", consent: false, _honey: "",
};

export default function Enquiry() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.phone.trim()) e.phone = "Phone is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter your message.";
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
    if (form._honey) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      data.append("_subject", `Enquiry from ${form.name}`);
      data.append("_captcha", "false");
      const res = await fetch(`https://formsubmit.co/${company.adminEmail}`, {
        method: "POST", body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); setForm(INITIAL); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const allTopics = [
    ...services.map((s) => s.title),
    ...products.map((p) => p.name),
    "General Enquiry",
    "AMC / Maintenance",
    "Other",
  ];

  return (
    <section className="page-section enquiry-page">
      <div className="container">
        <BackButton fallback="/contact" />
        <div className="enquiry-layout">
          <div className="enquiry-info">
            <span className="pill-label">Enquiry</span>
            <h1>Send Us an Enquiry</h1>
            <p>
              Have a question about our services or products? Fill in the form
              and we will get back to you promptly.
            </p>
            <div className="enquiry-contact-cards">
              <a href={`tel:${company.mobile}`} className="enquiry-contact-card card">
                <span aria-hidden="true">&#128222;</span>
                <div>
                  <strong>Call Us</strong>
                  <span>{company.mobile}</span>
                </div>
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="enquiry-contact-card card"
              >
                <span aria-hidden="true">&#128172;</span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Chat instantly</span>
                </div>
              </a>
            </div>
          </div>

          <div className="enquiry-form-wrap card">
            {status === "success" ? (
              <div className="form-success">
                <span className="form-success__icon" aria-hidden="true">&#10003;</span>
                <h2>Enquiry Sent!</h2>
                <p>Thank you for reaching out. We will respond within 24 hours.</p>
                <button className="btn" onClick={() => setStatus("idle")}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Enquiry form">
                <input type="text" name="_honey" value={form._honey} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="form-row">
                  <FormField label="Full Name *" error={errors.name}>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" autoComplete="name" />
                  </FormField>
                  <FormField label="Phone *" error={errors.phone}>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="9867933763" autoComplete="tel" />
                  </FormField>
                </div>

                <FormField label="Email *" error={errors.email}>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
                </FormField>

                <FormField label="Subject / Topic" error={errors.subject}>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    {allTopics.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </FormField>

                <FormField label="Message *" error={errors.message}>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Type your enquiry here…" />
                </FormField>

                <FormField error={errors.consent} className="form-field--checkbox">
                  <label className="checkbox-label">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
                    I agree to be contacted by Bhavani Enterprises regarding this enquiry.
                  </label>
                </FormField>

                {status === "error" && (
                  <p className="form-error-msg" role="alert">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <button type="submit" className="btn form-submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Send Enquiry"}
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
