import { useState, useEffect, useCallback } from "react";
import { useSEO } from "../hooks/useSEO";
import { installations, installationCategories } from "../data/installations";
import BackButton from "../components/common/BackButton";
import "../styles/pages/installations.css";

/* ── Media imports — uncomment as you add files ─────────────
   Images → src/assets/images/installations/
   Videos → src/assets/videos/installations/
   Thumbnails → src/assets/images/installations/
──────────────────────────────────────────────────────────── */

import imgDomeCamera        from "../assets/images/installations/dome-camera.png";
 import imgBulletCamera      from "../assets/images/installations/bullet-camera.png";
 import imgNetworkingRack    from "../assets/images/installations/networking-rack.png";
 import imgBiometricAccess   from "../assets/images/installations/biometric-access.png";
 import imgNvrSetup          from "../assets/images/installations/nvr-setup.png";
 import imgWifiAccessPoint   from "../assets/images/installations/wifi-access-point.png";
import thumbCctvWalkthrough from "../assets/images/installations/cctv-walkthrough-thumb.png";
import thumbNetworkTimelapse from "../assets/images/installations/cctv-walkthrough-thumb.jpg";
 import vidCctvWalkthrough   from "../assets/videos/installations/cctv-walkthrough.mp4";
 import vidNetworkTimelapse  from "../assets/videos/installations/networking-timelapse.mp4";

const MEDIA_MAP = {
   "dome-camera":              { src: imgDomeCamera },
   "bullet-camera":            { src: imgBulletCamera },
   "server-rack-networking":   { src: imgNetworkingRack },
  "biometric-access":         { src: imgBiometricAccess },
   "nvr-setup":                { src: imgNvrSetup },
   "wifi-access-point":        { src: imgWifiAccessPoint },
  "cctv-walkthrough-video":   { src: vidCctvWalkthrough, thumb: thumbCctvWalkthrough },
   "networking-timelapse-video": { src: vidNetworkTimelapse, thumb: thumbNetworkTimelapse },
};

const CATEGORY_ICONS = {
  "CCTV": "📷",
  "Networking": "📡",
  "Biometric": "🔏",
  "DVR / NVR": "🖥️",
};

export default function Installations() {
  useSEO(
    "Installations",
    "Browse Bhavani Enterprises' completed CCTV, networking, and security installations across Navi Mumbai, Panvel, Kharghar, and Mumbai. Real projects, real results."
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === "All"
    ? installations
    : installations.filter((i) => i.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i < filtered.length - 1 ? i + 1 : i));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goPrev, goNext]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const activeLightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="page-section installations-page">
      <div className="container">
        <BackButton fallback="/" dark />
        <div className="section-heading">
          <span className="pill-label">Our Work</span>
          <h1>Installation Gallery</h1>
          <p>
            A showcase of our completed CCTV, networking, and security
            installations across residential, commercial, and government
            sites in Navi Mumbai and beyond.
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

        {/* Grid */}
        <div className="installations-grid">
          {filtered.length === 0 ? (
            <div className="installations-empty">
              <p>No installations in this category yet.</p>
            </div>
          ) : (
            filtered.map((item, index) => {
              const media = MEDIA_MAP[item.id];
              const isVideo = item.type === "video";
              const thumbSrc = media?.thumb || (isVideo ? null : media?.src) || null;

              return (
                <button
                  key={item.id}
                  className="installation-card"
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${item.title}`}
                  type="button"
                >
                  <div className="installation-card__image-wrap">
                    {thumbSrc ? (
                      <img
                        src={thumbSrc}
                        alt={item.alt || item.title}
                        className="installation-card__image"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className="installation-card__placeholder"
                      style={{ display: thumbSrc ? "none" : "flex" }}
                    >
                      <span>{isVideo ? "🎬" : (CATEGORY_ICONS[item.category] || "📷")}</span>
                      <span>{isVideo ? "Video coming soon" : "Image coming soon"}</span>
                    </div>
                  </div>

                  {/* Play badge for videos */}
                  {isVideo && (
                    <div className="installation-card__play-badge" aria-hidden="true">
                      <div className="installation-card__play-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="installation-card__overlay">
                    <span className="installation-card__category">{item.category}</span>
                    <h2 className="installation-card__title">{item.title}</h2>
                    {item.location && (
                      <span className="installation-card__location">📍 {item.location}</span>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Lightbox */}
      {activeLightboxItem && (
        <div
          className="lightbox-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${activeLightboxItem.title}`}
        >
          <div className="lightbox-modal">
            {/* Close */}
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              type="button"
              className="lightbox-prev"
              onClick={goPrev}
              disabled={lightboxIndex === 0}
              aria-label="Previous item"
            >
              ←
            </button>

            {/* Next */}
            <button
              type="button"
              className="lightbox-next"
              onClick={goNext}
              disabled={lightboxIndex === filtered.length - 1}
              aria-label="Next item"
            >
              →
            </button>

            {/* Media */}
            {(() => {
              const media = MEDIA_MAP[activeLightboxItem.id];
              const isVideo = activeLightboxItem.type === "video";

              if (isVideo && media?.src) {
                return (
                  <video
                    key={activeLightboxItem.id}
                    src={media.src}
                    className="lightbox-video"
                    controls
                    autoPlay
                  />
                );
              }

              if (!isVideo && media?.src) {
                return (
                  <img
                    src={media.src}
                    alt={activeLightboxItem.alt || activeLightboxItem.title}
                    className="lightbox-image"
                  />
                );
              }

              return (
                <div className="lightbox-media-placeholder">
                  <span>{isVideo ? "🎬" : (CATEGORY_ICONS[activeLightboxItem.category] || "📷")}</span>
                  <span>{isVideo ? "Video coming soon" : "Image coming soon"}</span>
                </div>
              );
            })()}

            {/* Info */}
            <div className="lightbox-info">
              <span className="lightbox-info__category">{activeLightboxItem.category}</span>
              <h2 className="lightbox-info__title">{activeLightboxItem.title}</h2>
              {activeLightboxItem.location && (
                <span className="lightbox-info__location">📍 {activeLightboxItem.location}</span>
              )}
              {activeLightboxItem.description && (
                <p className="lightbox-info__desc">{activeLightboxItem.description}</p>
              )}
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}