import { useState, useRef, useEffect } from "react";
import { useSEO } from "../hooks/useSEO";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import { Link } from "react-router-dom";
import "../styles/pages/quote.css";

/* ── Field limits ─────────────────────────────────────────── */
const LIMITS = { name: 60, phone: 15, email: 80, message: 400 };

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

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";

  return errors;
}

export default function GetQuote() {
  useSEO(
    "Get a Free Quote",
    "Request a free quote from Bhavani Enterprises for CCTV installation, networking, biometric access control, or AMC services in Navi Mumbai, Panvel, and Kharghar."
  );

  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });
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
    if (limit && value.length > limit) return; // hard cap
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error on change once touched
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
    // Mark all fields touched
    setTouched({ name: true, phone: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const lines = [
      `Hi, I'd like a free quote from Bhavani Enterprises.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.service ? `*Service:* ${form.service}` : null,
      form.message ? `*Details:* ${form.message}` : null,
    ].filter(Boolean);

    const encoded = lines.join("%0A").replace(/ /g, "%20");
    window.open(`https://wa.me/${company.whatsapp}?text=${encoded}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section className="page-section get-quote-page">
      <div className="container">
        <BackButton fallback="/" dark />

        <div className="section-heading">
          <span className="pill-label">Free Quote</span>
          <h1>Get a Free Quote</h1>
          <p>Fill in the form below and we&rsquo;ll get back to you within 24 hours with a tailored quote for your security needs.</p>
        </div>

        {submitted ? (
          /* ── Success ── */
          <div className="quote-success" ref={successRef} role="alert">
            <div className="quote-success__icon" aria-hidden="true">✓</div>
            <h2>Thank you, {form.name.split(" ")[0]}!</h2>
            <p>
              Your quote request has been sent via WhatsApp to our team.<br />
              We&rsquo;ll get back to you within 24 hours.
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
              Responses go to WhatsApp: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{company.mobile}</strong>
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button
                type="button"
                className="btn"
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); setTouched({}); setErrors({}); }}
              >
                Submit Another
              </button>
              <Link to="/" className="btn btn--outline-white" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff" }}>
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          /* ── Form ── */
          <form className="quote-form" onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                <span className={`char-count${form.name.length > LIMITS.name * 0.85 ? " char-count--warn" : ""}`}>
                  {form.name.length}/{LIMITS.name}
                </span>
              </div>
              <input
                id="name" name="name" type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.name}
                autoComplete="name"
                className={errors.name && touched.name ? "input--error" : ""}
                aria-describedby={errors.name ? "name-err" : undefined}
              />
              {errors.name && touched.name && (
                <span id="name-err" className="field-error" role="alert">⚠ {errors.name}</span>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                <span className={`char-count${form.phone.length > LIMITS.phone * 0.85 ? " char-count--warn" : ""}`}>
                  {form.phone.length}/{LIMITS.phone}
                </span>
              </div>
              <input
                id="phone" name="phone" type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.phone}
                autoComplete="tel"
                className={errors.phone && touched.phone ? "input--error" : ""}
                aria-describedby={errors.phone ? "phone-err" : undefined}
              />
              {errors.phone && touched.phone && (
                <span id="phone-err" className="field-error" role="alert">⚠ {errors.phone}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="email">Email Address <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>(optional)</span></label>
                <span className={`char-count${form.email.length > LIMITS.email * 0.85 ? " char-count--warn" : ""}`}>
                  {form.email.length}/{LIMITS.email}
                </span>
              </div>
              <input
                id="email" name="email" type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.email}
                autoComplete="email"
                className={errors.email && touched.email ? "input--error" : ""}
                aria-describedby={errors.email ? "email-err" : undefined}
              />
              {errors.email && touched.email && (
                <span id="email-err" className="field-error" role="alert">⚠ {errors.email}</span>
              )}
            </div>

            {/* Service */}
            <div className="form-group">
              <label htmlFor="service">Service Required <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>(optional)</span></label>
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

            {/* Message */}
            <div className="form-group">
              <div className="form-group__meta">
                <label htmlFor="message">Additional Details <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>(optional)</span></label>
                <span className={`char-count${form.message.length > LIMITS.message * 0.85 ? " char-count--warn" : ""}`}>
                  {form.message.length}/{LIMITS.message}
                </span>
              </div>
              <textarea
                id="message" name="message" rows={4}
                placeholder="Describe your requirements — location, number of cameras, area size, etc."
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={LIMITS.message}
              />
            </div>

            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
              💬 This form sends directly to our WhatsApp: <strong style={{ color: "rgba(255,255,255,0.6)" }}>{company.mobile}</strong>
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