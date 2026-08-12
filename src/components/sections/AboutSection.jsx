import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { company } from "../../data/company";

const valuePoints = [
  {
    title: "High Quality Products",
    text: "We source only from trusted brands and certified product lines.",
  },
  {
    title: "Experienced Team",
    text: "Our technicians bring practical experience across installations and maintenance.",
  },
  {
    title: "Reliable Service",
    text: "We focus on timely delivery, clean execution, and dependable support.",
  },
  {
    title: "After Sales Support",
    text: "We remain available after installation for maintenance and assistance.",
  },
];

export default function AboutSection() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          label="About Us"
          title="Trusted. Experienced. Reliable."
          description="Bhavani Enterprises is a security and networking solutions provider serving businesses and institutions across Navi Mumbai, Panvel, and nearby regions."
        />

        <div className="about-grid">
          <Card>
            <h3>{company.name}</h3>
            <p>{company.tagline}</p>
            <p>{company.address}</p>
          </Card>

          <div className="grid-2">
            {valuePoints.map((item) => (
              <Card key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}