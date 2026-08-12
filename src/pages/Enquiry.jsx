import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import "../styles/pages/enquiry.css";

export default function Enquiry() {
  useSEO(
    "Send Enquiry",
    "Send a product or service enquiry to Bhavani Enterprises. We'll respond promptly for CCTV, networking, biometric, and security solution queries in Navi Mumbai."
  );

  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Enquiry from website.%0AName: ${form.name}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section className="page-section enquiry-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Enquiry</span>
          <h1>Send an Enquiry</h1>
          <p>Have a question about a product or service? Fill in the form and we&rsquo;ll get back to you promptly.</p>
        </div>

        {submitted ? (
          <div className="enquiry-success card">
            <span aria-hidden="true" style={{ fontSize: "2rem" }}>✅</span>
            <h2>Enquiry sent!</h2>
            <p>Thank you, {form.name}. We&rsquo;ll respond via WhatsApp shortly.</p>
          </div>
        ) : (
          <form className="enquiry-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="enq-name">Full Name <span aria-hidden="true">*</span></label>
              <input id="enq-name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="enq-phone">Phone Number <span aria-hidden="true">*</span></label>
              <input id="enq-phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="enq-subject">Subject</label>
              <input id="enq-subject" name="subject" type="text" placeholder="Product enquiry, service info…" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="enq-message">Message <span aria-hidden="true">*</span></label>
              <textarea id="enq-message" name="message" rows={5} required placeholder="Write your message here…" value={form.message} onChange={handleChange} />
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
