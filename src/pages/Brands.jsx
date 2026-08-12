import { useSEO } from "../hooks/useSEO";
import { brands } from "../data/brands";
import BackButton from "../components/common/BackButton";
import "../styles/pages/brands.css";

export default function Brands() {
  useSEO(
    "Brands",
    "Bhavani Enterprises installs products from industry-leading brands including Hikvision, Dahua, CP Plus, D-Link, and more. Trusted across Navi Mumbai, Panvel, and Kharghar."
  );

  return (
    <section className="page-section brands-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Our Brands</span>
          <h1>We Work with Industry-Leading Brands</h1>
          <p>
            Every installation uses products from globally trusted manufacturers
            &mdash; ensuring performance, warranty backing, and long-term
            reliability for our clients.
          </p>
        </div>
        <div className="brands-grid">
          {brands.map((brand) => (
            <article key={brand.id} className="brand-card card">
              <div className="brand-card__image-wrap">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="brand-card__image"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <h2 className="brand-card__name">{brand.name}</h2>
              <span className="brand-card__tagline">{brand.tagline}</span>
              <span className="brand-card__category">{brand.category}</span>
              <p className="brand-card__desc">{brand.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
