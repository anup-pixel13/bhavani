import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import "../styles/pages/product-details.css";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="page-section">
        <div className="container">
          <BackButton fallback="/products" />
          <div className="product-not-found">
            <h1>Product Not Found</h1>
            <p>The product you are looking for does not exist or may have been removed.</p>
            <Link to="/products" className="btn">Browse All Products</Link>
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

        <div className="product-details-grid">
          {/* Image */}
          <div className="product-details__image-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="product-details__image"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="product-details__image-fallback" style={{ display: "none" }}>
              <span>&#128247;</span>
            </div>
          </div>

          {/* Info */}
          <div className="product-details__info">
            <span className="pill-label">{product.category}</span>
            <h1 className="product-details__name">{product.name}</h1>
            <p className="product-details__desc">{product.description}</p>

            <p className="product-details__price">{product.priceLabel}</p>

            {product.features && product.features.length > 0 && (
              <ul className="product-details__features">
                {product.features.map((f) => (
                  <li key={f}>
                    <span className="feature-check" aria-hidden="true">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="product-details__actions">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Enquire on WhatsApp
              </a>
              <Link to="/get-quote" className="btn btn--outline">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications table */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="product-specs">
            <h2 className="product-specs__title">Specifications</h2>
            <table className="product-specs__table">
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
