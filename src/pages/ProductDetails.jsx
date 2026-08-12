import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { company } from "../data/company";
import { useSEO } from "../hooks/useSEO";
import BackButton from "../components/common/BackButton";
import "../styles/pages/product-details.css";

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
      <section className="page-section">
        <div className="container">
          <BackButton fallback="/products" />
          <div className="section-heading">
            <h1>Product Not Found</h1>
            <p>The product you are looking for does not exist or may have been removed.</p>
            <Link to="/products" className="btn" style={{ marginTop: "1rem" }}>Back to Products</Link>
          </div>
        </div>
      </section>
    );
  }

  const waUrl = buildWhatsAppUrl(company.whatsapp, product.whatsappMessage);

  return (
    <section className="page-section product-details-page">
      <div className="container">
        <BackButton fallback="/products" />
        <div className="product-details-layout">
          <div className="product-details__image-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="product-details__image"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="product-details__info">
            <span className="pill-label">{product.category}</span>
            <h1 className="product-details__name">{product.name}</h1>
            <p className="product-details__price">{product.priceLabel}</p>
            <p className="product-details__desc">{product.description || product.shortDescription}</p>

            {product.specs && product.specs.length > 0 && (
              <div className="product-details__specs">
                <h2>Specifications</h2>
                <ul>
                  {product.specs.map((spec) => (
                    <li key={spec.label}>
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-details__actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                &#128172; WhatsApp Enquiry
              </a>
              <Link to="/get-quote" className="btn btn--outline">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
