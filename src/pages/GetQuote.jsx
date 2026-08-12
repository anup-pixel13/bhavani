import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import BackButton from "../components/common/BackButton";
import "../styles/pages/get-quote.css";

export default function GetQuote() {
  useSEO(
    "Get a Free Quote",
    "Request a free quote from Bhavani Enterprises for CCTV installation, networking, biometric access control, or AMC services in Navi Mumbai, Panvel, and Kharghar."
  );

  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Hi, I would like a quote.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section className="page-section get-quote-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Free Quote</span>
          <h1>Get a Free Quote</h1>
          <p>Fill in the form below and we&rsquo;ll get back to you within 24 hours with a tailored quote for your security needs.</p>
        </div>

        {submitted ? (
          <div className="quote-success card">
            <span aria-hidden="true" style={{ fontSize: "2rem" }}>✅</span>
            <h2>Thank you, {form.name}!</h2>
            <p>Your quote request has been sent via WhatsApp. We&rsquo;ll be in touch shortly.</p>
          </div>
        ) : (
          <form className="quote-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
              <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
              <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service" name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service…</option>
                <option>CCTV Installation</option>
                <option>IP Camera Setup</option>
                <option>Networking</option>
                <option>Biometric Access Control</option>
                <option>Video Door Phone</option>
                <option>EPABX System</option>
                <option>AMC / Maintenance</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Details</label>
              <textarea id="message" name="message" rows={4} placeholder="Describe your requirements…" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              &#128172; Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
