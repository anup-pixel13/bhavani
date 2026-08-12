import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

export default function CompanyIntroSection() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="grid-2">
          <Card>
            <SectionHeading
              label="About Us"
              title="Trusted. Experienced. Reliable."
              description="Bhavani Enterprises is a leading provider of CCTV, security systems, and networking solutions serving businesses and government bodies across Navi Mumbai and Panvel."
            />
          </Card>

          <Card>
            <h3>What We Focus On</h3>
            <p>High quality products, professional installation, and dependable after-sales support.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}