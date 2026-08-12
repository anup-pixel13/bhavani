import Button from "../ui/Button";
import { company } from "../../data/company";

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill-label">Security & Networking Solutions</span>
          <h1>{company.name}</h1>
          <p>{company.tagline}</p>
          <p className="hero-areas">{company.serviceAreas.join(" | ")}</p>
          <div className="hero-actions">
            <Button to="/contact">Contact Us</Button>
            <Button to="/services">Our Services</Button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-frame">
            <div className="hero-image-placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}