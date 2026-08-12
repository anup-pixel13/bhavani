import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { products, productCategories } from "../data/products";
import { usePagination } from "../hooks/usePagination";
import { useSEO } from "../hooks/useSEO";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { company } from "../data/company";
import BackButton from "../components/common/BackButton";
import "../styles/pages/products.css";

export default function Products() {
  useSEO(
    "Products",
    "Browse security cameras, networking equipment, access control systems, and more from Bhavani Enterprises. Professional-grade products available for enquiry in Navi Mumbai."
  );

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  const { currentPage, totalPages, perPage, pageItems, totalItems, listTopRef, goToPage, next, prev, changePerPage, hasPrev, hasNext } = usePagination(filtered, 6);

  return (
    <section className="page-section products-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="products-header">
          <div className="section-heading">
            <span className="pill-label">Our Products</span>
            <h1>Security &amp; Networking Products</h1>
            <p>Browse our range of professional-grade security and networking equipment. All products are available for enquiry &mdash; no online checkout.</p>
          </div>
          <div className="products-toolbar">
            <input type="search" className="products-search" placeholder="Search products…" value={search} aria-label="Search products" onChange={(e) => { setSearch(e.target.value); goToPage(1); }} />
            <label className="products-per-page">Show
              <select value={perPage} onChange={(e) => changePerPage(e.target.value)} aria-label="Items per page">
                {[4, 6, 8, 12].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
              per page
            </label>
          </div>
        </div>
        <div className="products-categories" role="group" aria-label="Filter by category">
          {productCategories.map((cat) => (
            <button key={cat} type="button" className={`cat-btn${activeCategory === cat ? " cat-btn--active" : ""}`} onClick={() => { setActiveCategory(cat); goToPage(1); }}>{cat}</button>
          ))}
        </div>
        <p className="products-count" aria-live="polite">
          {totalItems === 0 ? "No products found." : `Showing ${(currentPage - 1) * perPage + 1}–${Math.min(currentPage * perPage, totalItems)} of ${totalItems} product${totalItems !== 1 ? "s" : ""}`}
        </p>
        <div className="products-grid" ref={listTopRef}>
          {pageItems.length === 0 ? (
            <div className="products-empty">
              <p>No products match your search. Try a different keyword or category.</p>
              <button type="button" className="btn" onClick={() => { setSearch(""); setActiveCategory("All"); }}>Clear filters</button>
            </div>
          ) : (
            pageItems.map((product) => <ProductCard key={product.id} product={product} />)
          )}
        </div>
        {totalPages > 1 && (
          <nav className="pagination" aria-label="Products pagination">
            <button type="button" className="pagination__btn" onClick={prev} disabled={!hasPrev} aria-label="Previous page">&#8592; Prev</button>
            <div className="pagination__pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} type="button" className={`pagination__page${n === currentPage ? " pagination__page--active" : ""}`} onClick={() => goToPage(n)} aria-label={`Page ${n}`} aria-current={n === currentPage ? "page" : undefined}>{n}</button>
              ))}
            </div>
            <button type="button" className="pagination__btn" onClick={next} disabled={!hasNext} aria-label="Next page">Next &#8594;</button>
          </nav>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const waUrl = buildWhatsAppUrl(company.whatsapp, product.whatsappMessage);
  return (
    <article className="product-card card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }} />
        <div className="product-card__image-fallback" style={{ display: "none" }}><span>&#128247;</span></div>
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.shortDescription}</p>
        <p className="product-card__price">{product.priceLabel}</p>
        <div className="product-card__actions">
          <Link to={`/products/${product.slug}`} className="btn btn--outline">View Details</Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">WhatsApp Enquiry</a>
        </div>
      </div>
    </article>
  );
}
