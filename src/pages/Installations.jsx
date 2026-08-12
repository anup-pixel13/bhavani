import { useSEO } from "../hooks/useSEO";
import { installations } from "../data/installations";
import BackButton from "../components/common/BackButton";
import "../styles/pages/installations.css";

export default function Installations() {
  useSEO(
    "Installations",
    "Browse Bhavani Enterprises' completed CCTV, networking, and security installations across Navi Mumbai, Panvel, Kharghar, and Mumbai. Real projects, real results."
  );

  return (
    <section className="page-section installations-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-heading">
          <span className="pill-label">Our Work</span>
          <h1>Installation Gallery</h1>
          <p>
            A showcase of our completed CCTV, networking, and security
            installations across residential, commercial, and government
            sites in Navi Mumbai and beyond.
          </p>
        </div>

        <div className="installations-grid">
          {installations.map((item) => (
            <article key={item.id} className="installation-card card">
              <div className="installation-card__image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="installation-card__image"
                  onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }}
                />
                <div className="installation-card__image-fallback" style={{ display: "none" }}>
                  <span aria-hidden="true">📷</span>
                </div>
              </div>
              <div className="installation-card__body">
                <span className="installation-card__category">{item.category}</span>
                <h2 className="installation-card__title">{item.title}</h2>
                <p className="installation-card__location">📍 {item.location}</p>
                {item.description && (
                  <p className="installation-card__desc">{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
