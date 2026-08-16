import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { company } from "../data/company";
import { useSEO } from "../hooks/useSEO";
import BackButton from "../components/common/BackButton";
import "../styles/pages/product-details.css";

/* ── Product image imports ─────────────────────────────────
   Uncomment each line when you add the image file.
──────────────────────────────────────────────────────────── */
import imgCctvDome2mp           from "../assets/images/products/cctv-dome-2mp.png";
import imgCctvBullet4mp         from "../assets/images/products/cctv-bullet-4mp.png";
 import imgNvr8ch                from "../assets/images/products/nvr-8ch.png";
import imgDvr4ch                from "../assets/images/products/dvr-4ch.png";
 import imgEnterpriseWifi        from "../assets/images/products/enterprise-wifi-router.png";
import imgPoeSwitch8port        from "../assets/images/products/poe-switch-8port.png";
 import imgBiometricFingerprint  from "../assets/images/products/biometric-fingerprint.png";
 import imgVideoDoorPhone        from "../assets/images/products/video-door-phone.png";

const PRODUCT_IMAGES = {
  "cctv-dome-2mp":          imgCctvDome2mp,
   "cctv-bullet-4mp":        imgCctvBullet4mp,
   "nvr-8ch":                imgNvr8ch,
   "dvr-4ch":                imgDvr4ch,
   "wifi-router-enterprise": imgEnterpriseWifi,
   "poe-switch-8port":       imgPoeSwitch8port,
   "biometric-fingerprint":  imgBiometricFingerprint,
   "video-door-phone":       imgVideoDoorPhone,
};

const CATEGORY_ICONS = {
  "CCTV Cameras":               "📷",
  "DVR / NVR":                  "🖥️",
  "Networking":                 "📡",
  "Biometric & Access Control": "🔏",
  "Video Door Phone & EPABX":   "📞",
};

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useSEO(
    product ? product.name : "Product Not Found",
    product
      ? `${product.name} — ${product.shortDescription}. Available from Bhavani Enterprises, Navi Mumbai.`
      : "Product not found."
  );

  if (!product) {
    return (
      <section className="page-section product-details-page">
        <div className="container">
          <BackButton fallback="/products" dark />
          <div className="product-not-found">
            <h1>Product Not Found</h1>
            <p>The product you are looking for does not exist or may have been removed.</p>
            <Link to="/products" className="btn" style={{ marginTop: "1rem", display: "inline-flex" }}>
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const waUrl = buildWhatsAppUrl(company.whatsapp, product.whatsappMessage);
  const image = PRODUCT_IMAGES[product.id];
  const fallbackIcon = CATEGORY_ICONS[product.category] || "🔒";

  return (
    <section className="page-section product-details-page">
      <div className="container">
        <BackButton fallback="/products" dark />

        <div className="product-details-layout">
          {/* ── Image ── */}
          <div className="product-details__image-wrap">
            {image ? (
              <img
                src={image}
                alt={product.name}
                className="product-details__image"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="product-details__image-fallback"
              style={{ display: image ? "none" : "flex" }}
              aria-hidden="true"
            >
              <span style={{ fontSize: "4rem" }}>{fallbackIcon}</span>
              <span>Image coming soon</span>
            </div>
          </div>

          {/* ── Info ── */}
          <div className="product-details__info">
            <span className="pill-label">{product.category}</span>
            <h1 className="product-details__name">{product.name}</h1>
            <p className="product-details__price">{product.priceLabel}</p>
            <p className="product-details__desc">{product.description || product.shortDescription}</p>

            {product.features && product.features.length > 0 && (
              <ul className="product-details__features">
                {product.features.map((f) => (
                  <li key={f}>
                    <span className="feature-check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="product-details__actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                &#128172; WhatsApp Enquiry
              </a>
              <Link to="/get-quote" className="btn btn--outline">Get a Quote</Link>
            </div>
          </div>
        </div>

        {/* ── Specifications ── */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="product-specs">
            <h2 className="product-specs__title">Specifications</h2>
            <table className="product-specs__table" aria-label="Product specifications">
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.key}>
                    <th scope="row">{spec.key}</th>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}