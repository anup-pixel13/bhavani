import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import { services } from "../data/services";
import { clients } from "../data/clients";
import { brands } from "../data/brands";
import { reviews } from "../data/reviews";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import "../styles/pages/home.css";

import imgCctv        from "../assets/images/services/cctv.png";
import imgIpCamera    from "../assets/images/services/ip-camera.png";
import imgNetworking  from "../assets/images/services/networking.png";
import imgBiometric   from "../assets/images/services/biometric.png";
import imgVideoDoor   from "../assets/images/services/video-door.png";
import imgAmc         from "../assets/images/services/amc.png";

import imgCpplus      from "../assets/images/brands/cpplus.png";
import imgHikvision   from "../assets/images/brands/hikvision.png";
import imgDahua       from "../assets/images/brands/dahua.png";

const SERVICE_IMAGES = {
  "cctv":             imgCctv,
  "ip-camera":        imgIpCamera,
  "networking":       imgNetworking,
  "biometric":        imgBiometric,
  "video-door-epabx": imgVideoDoor,
  "amc":              imgAmc,
};

const BRAND_IMAGES = {
  "cp-plus":   imgCpplus,
  "hikvision": imgHikvision,
  "dahua":     imgDahua,
};

function StarRating({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "star star--filled" : "star"} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

export default function Home() {
  useSEO(
    null,
    "Bhavani Enterprises provides professional CCTV installation, IP camera setup, networking, biometric access control, video door phone, EPABX, and AMC services across Navi Mumbai, Panvel, and Kharghar."
  );

  const waUrl = buildWhatsAppUrl(company.whatsapp, "Hello! I would like to enquire about your security solutions.");
  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <span className="pill-label">Navi Mumbai&rsquo;s Trusted Security Partner</span>
            <h1>Security &amp; Networking Solutions You Can Trust</h1>
            <p>
              Professional CCTV installation, IP networking, biometric access
              control, and surveillance solutions for homes, businesses, and
              government projects across Navi Mumbai, Panvel &amp; Kharghar.
            </p>
            <div className="hero-actions">
              <Link to="/get-quote" className="btn">Get a Free Quote</Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                &#128172; WhatsApp Us
              </a>
            </div>
          </div>
          <div className="intro-stats">
            <div className="intro-stat"><strong>10+</strong><span>Years of Experience</span></div>
            <div className="intro-stat"><strong>200+</strong><span>Projects Completed</span></div>
            <div className="intro-stat"><strong>50+</strong><span>Satisfied Clients</span></div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────── */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label">Services</span>
            <h2>What We Do</h2>
            <p>End-to-end security and networking solutions tailored for homes, businesses, and government projects.</p>
          </div>
          <div className="home-services-grid">
            {services.slice(0, 4).map((s) => (
              <article key={s.id} className="home-service-card">
                <div className="home-service-card__image-wrap">
                  {SERVICE_IMAGES[s.id] ? (
                    <img
                      src={SERVICE_IMAGES[s.id]}
                      alt={s.title}
                      className="home-service-card__image"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="home-service-card__image-fallback"
                    style={{ display: SERVICE_IMAGES[s.id] ? "none" : "flex" }}
                    aria-hidden="true"
                  >📷</div>
                </div>
                <div className="home-service-card__body">
                  <h3 className="home-service-card__title">{s.title}</h3>
                  <p className="home-service-card__desc">{s.shortDescription}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn--outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Parallax 1 ───────────────────────── */}
      <div className="parallax-section parallax-section--1" role="presentation" aria-hidden="true">
        <div className="parallax-overlay">
          <div className="container parallax-content">
            <span className="parallax-tagline">Trusted by Government &amp; Private Sector across Navi Mumbai</span>
          </div>
        </div>
      </div>

      {/* ── Clients ──────────────────────────── */}
      <section className="home-section home-section--dark">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label pill-label--light">Clients</span>
            <h2>Trusted By</h2>
            <p>Government bodies and leading private developers rely on us for their security infrastructure.</p>
          </div>
          <div className="clients-grid">
            {clients.slice(0, 6).map((c) => (
              <article key={c.id} className="client-card card card--dark">
                <div className="client-card__check" aria-hidden="true">✓</div>
                <div className="client-card__body">
                  <h3 className="client-card__name">{c.name}</h3>
                  <span className="client-card__type">{c.type}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/clients" className="btn">View All Clients</Link>
          </div>
        </div>
      </section>

      {/* ── Parallax 2 ───────────────────────── */}
      <div className="parallax-section parallax-section--2" role="presentation" aria-hidden="true">
        <div className="parallax-overlay">
          <div className="container parallax-content">
            <span className="parallax-tagline">Industry-leading brands, professionally installed</span>
          </div>
        </div>
      </div>

      {/* ── Brands ───────────────────────────── */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="section-heading">
            <span className="pill-label">Brands</span>
            <h2>Products We Install</h2>
            <p>We work exclusively with globally trusted manufacturers for every installation.</p>
          </div>
          <div className="brands-grid">
            {brands.slice(0, 3).map((b) => (
              <article key={b.id} className="home-brand-card">
                <div className="home-brand-card__logo-wrap">
                  {BRAND_IMAGES[b.id] ? (
                    <img src={BRAND_IMAGES[b.id]} alt={`${b.name} logo`} className="home-brand-card__logo" />
                  ) : (
                    <div className="home-brand-card__logo-placeholder" aria-hidden="true">LOGO</div>
                  )}
                </div>
                <div className="home-brand-card__body">
                  <h3 className="home-brand-card__name">{b.name}</h3>
                  <span className="home-brand-card__tagline">{b.tagline}</span>
                  <p className="home-brand-card__desc">{b.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/brands" className="btn btn--outline">View All Brands</Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────── */}
      <section className="home-section home-section--dark reviews-section">
        <div className="container">
          <div className="reviews-header">
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <span className="pill-label pill-label--light">Google Reviews</span>
              <h2>What Our Clients Say About Us</h2>
              <p>Rated 5★ on Google by satisfied clients across Navi Mumbai &amp; Panvel.</p>
            </div>
            <div className="reviews-rating-badge">
              <GoogleIcon />
              <div className="reviews-rating-badge__text">
                <div className="reviews-rating-badge__stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="star star--filled" aria-hidden="true">★</span>
                  ))}
                </div>
                <span className="reviews-rating-badge__score">{avgRating} / 5 on Google Reviews</span>
              </div>
            </div>
          </div>
          <div className="reviews-track-wrap">
            <div className="reviews-track">
              {[...reviews, ...reviews].map((r, i) => (
                <article key={`${r.id}-${i}`} className="review-card">
                  <div className="review-card__header">
                    <div className="review-avatar">{r.initials}</div>
                    <div className="review-card__meta-top">
                      <strong className="review-name">{r.name}</strong>
                      <span className="review-location">{r.location}</span>
                    </div>
                    <div className="review-card__google-icon"><GoogleIcon /></div>
                  </div>
                  <StarRating rating={r.rating} />
                  <p className="review-quote-mark">&ldquo;</p>
                  <p className="review-text">{r.text}</p>
                  <span className="review-date">{r.date}</span>
                </article>
              ))}
            </div>
            <div className="reviews-fade-left" aria-hidden="true" />
            <div className="reviews-fade-right" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="home-section home-section--cta">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="pill-label">Get Started</span>
          <h2 style={{ marginTop: "0.75rem", color: "#fff" }}>Ready to Secure Your Premises?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "1.75rem", marginTop: "0.5rem" }}>
            Contact us today for a free site assessment and no-obligation quote.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/get-quote" className="btn btn--glass">Get a Quote</Link>
            <Link to="/contact" className="btn btn--outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}