import { useState, useRef, useEffect } from "react";
import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/enquiry.css";

/* ── Field limits ─────────────────────────────────────────── */
const LIMITS = { name: 60, phone: 15, subject: 100, message: 500 };

/* ── Validators ───────────────────────────────────────────── */
function validate(form) {
  const errors = {};

  if (!form.name.trim())
    errors.name = "Full name is required.";
  else if (form.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";

  const phone = form.phone.replace(/\s+/g, "");
  if (!phone)
    errors.phone = "Phone number is required.";
  else if (!/^[+\d]{7,15}$/.test(phone))
    errors.phone = "Enter a valid phone number.";

  if (!form.message.trim())
    errors.message = "Please enter your message.";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
}

export default function Enquiry() {
  useSEO(
    "Send Enquiry",
    "Send a product or service enquiry to Bhavani Enterprises. We'll respond promptly for CCTV, networking, biometric, and security solution queries in Navi Mumbai."
  );

  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  /* Scroll to success message after submission */
  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  function handleChange(e) {
    const { name, value } = e.target;
    const limit = LIMITS[name];
    if (limit && value.length > limit) return;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, phone: true, subject: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const lines = [
      `Enquiry from Bhavani Enterprises website.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.subject ? `*Subject:* ${form.subject}` : null,
      `*Message:* ${form.message}`,
    ].filter(Boolean);

    const encoded = lines.join("%0A").replace(/ /g, "%20");
    window.open(`https://wa.me/${company.whatsapp}?text=${encoded}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section className="page-section enquiry-page">
      <div className="container">
        <BackButton fallback="/" dark />

        <div className="section-heading">
          <span className="pill-label">Enquiry</span>
          <h1>Send an Enquiry</h1>
          <p>Have a question about a product or service? Fill in the form and we&rsquo;ll get back to you promptly.</p>
        </div>

        {submitted ? (
          /* ── Success ── */
          <div className="enquiry-success" ref={successRef} role="alert">
            <div className="enquiry-success__icon" aria-hidden="true">✓</div>
            <h2>Enquiry Sent!</h2>
            <p>
              Thank you, {form.name.split(" ")[0]}.<br />
              We&rsquo;ll respond via WhatsApp shortly.
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
              Responses go to WhatsApp: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{company.mobile}</strong>
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", subject: "", message: "" });
                  setTouched({});
                  setErrors({});
                }}
              >
                Send Another
              </button>
              <Link
                to="/"
                className="btn"
                style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", boxShadow: "none" }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          /* ── Form ── */
          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="enq-name">Full Name <span aria-hidden="true">*</span></label>
                <span className={`char-count${form.name.length > LIMITS.name * 0.85 ? " char-count--warn" : ""}`}>
                  {form.name.length}/{LIMITS.name}
                </span>
              </div>
              <input
                id="enq-name" name="name" type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.name}
                autoComplete="name"
                className={errors.name && touched.name ? "input--error" : ""}
                aria-describedby={errors.name ? "enq-name-err" : undefined}
              />
              {errors.name && touched.name && (
                <span id="enq-name-err" className="field-error" role="alert">⚠ {errors.name}</span>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="enq-phone">Phone Number <span aria-hidden="true">*</span></label>
                <span className={`char-count${form.phone.length > LIMITS.phone * 0.85 ? " char-count--warn" : ""}`}>
                  {form.phone.length}/{LIMITS.phone}
                </span>
              </div>
              <input
                id="enq-phone" name="phone" type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.phone}
                autoComplete="tel"
                className={errors.phone && touched.phone ? "input--error" : ""}
                aria-describedby={errors.phone ? "enq-phone-err" : undefined}
              />
              {errors.phone && touched.phone && (
                <span id="enq-phone-err" className="field-error" role="alert">⚠ {errors.phone}</span>
              )}
            </div>

            {/* Subject */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="enq-subject">
                  Subject <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>(optional)</span>
                </label>
                <span className={`char-count${form.subject.length > LIMITS.subject * 0.85 ? " char-count--warn" : ""}`}>
                  {form.subject.length}/{LIMITS.subject}
                </span>
              </div>
              <input
                id="enq-subject" name="subject" type="text"
                placeholder="Product enquiry, service info…"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.subject}
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="enq-message">Message <span aria-hidden="true">*</span></label>
                <span className={`char-count${form.message.length > LIMITS.message * 0.85 ? " char-count--warn" : ""}`}>
                  {form.message.length}/{LIMITS.message}
                </span>
              </div>
              <textarea
                id="enq-message" name="message" rows={5}
                placeholder="Write your message here — product name, service needed, location, etc."
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.message}
                className={errors.message && touched.message ? "input--error" : ""}
                aria-describedby={errors.message ? "enq-message-err" : undefined}
              />
              {errors.message && touched.message && (
                <span id="enq-message-err" className="field-error" role="alert">⚠ {errors.message}</span>
              )}
            </div>

            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
              💬 This enquiry sends directly to our WhatsApp: <strong style={{ color: "rgba(255,255,255,0.6)" }}>{company.mobile}</strong>
            </p>

            <button type="submit" className="btn btn-submit">
              &#128172; Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}