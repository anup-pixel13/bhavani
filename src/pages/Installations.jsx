import { useState } from "react";
import { installations, installationCategories } from "../data/installations";
import BackButton from "../components/common/BackButton";
import "../styles/pages/installations.css";

export default function Installations() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === "All"
      ? installations
      : installations.filter((i) => i.category === activeCategory);

  const openLightbox = (item) => {
    setLightbox(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  // Close on Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section className="page-section installations-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Work Showcase</span>
          <h1>Our Installations in Action</h1>
          <p>
            A selection of real-world security and networking installations
            completed by our team across Navi Mumbai, Panvel, Kharghar, and
            beyond.
          </p>
        </div>

        {/* Category filter */}
        <div className="installations-categories" role="group" aria-label="Filter by category">
          {installationCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-btn${activeCategory === cat ? " cat-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="installations-grid">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              className="installation-card"
              onClick={() => openLightbox(item)}
              aria-label={`View ${item.title}`}
            >
              <div className="installation-card__image-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="installation-card__image"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div className="installation-card__fallback" style={{ display: "none" }}>
                  <span>&#128247;</span>
                </div>
              </div>
              <div className="installation-card__overlay">
                <span className="installation-card__category">{item.category}</span>
                <span className="installation-card__title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="installations-empty">No installations found in this category.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.alt}
              className="lightbox-image"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="lightbox-info">
              <span className="pill-label">{lightbox.category}</span>
              <h2>{lightbox.title}</h2>
              <p>{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
