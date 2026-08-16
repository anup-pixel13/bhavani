import { useSEO } from "../hooks/useSEO";
import { brands } from "../data/brands";
import BackButton from "../components/common/BackButton";
import "../styles/pages/brands.css";

import imgCpplus    from "../assets/images/brands/cpplus.png";
import imgHikvision from "../assets/images/brands/hikvision.png";
import imgDahua     from "../assets/images/brands/dahua.png";
import imgTpLinkDLink from "../assets/images/brands/tp-link-dlink.png"; // add when ready
import imgEssl        from "../assets/images/brands/essl.png";          // add when ready

const BRAND_IMAGES = {
  "cp-plus":    imgCpplus,
  "hikvision":  imgHikvision,
  "dahua":      imgDahua,
  "tp-link-d-link": imgTpLinkDLink,
  "essl":           imgEssl,
};

const BRAND_ICONS = {
  "tp-link-d-link": "📡",
  "essl":           "🔏",
};

export default function Brands() {
  useSEO(
    "Brands",
    "Bhavani Enterprises installs products from industry-leading brands including Hikvision, Dahua, CP Plus, D-Link, and more. Trusted across Navi Mumbai, Panvel, and Kharghar."
  );

  return (
    <section className="page-section brands-page">
      <div className="container">
        <BackButton fallback="/" dark />
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
          {brands.map((brand) => {
            const image = BRAND_IMAGES[brand.id];
            const icon = BRAND_ICONS[brand.id] || "🏷️";
            return (
              <article key={brand.id} className="brand-card">
                <div className="brand-card__image-wrap">
                  {image ? (
                    <img
                      src={image}
                      alt={`${brand.name} logo`}
                      className="brand-card__image"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="brand-card__image-placeholder"
                    style={{ display: image ? "none" : "flex" }}
                    aria-hidden="true"
                  >
                    <span>{icon}</span>
                    <span>Logo coming soon</span>
                  </div>
                </div>
                <div className="brand-card__body">
                  <h2 className="brand-card__name">{brand.name}</h2>
                  <span className="brand-card__tagline">{brand.tagline}</span>
                  <span className="brand-card__category">{brand.category}</span>
                  <p className="brand-card__desc">{brand.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}