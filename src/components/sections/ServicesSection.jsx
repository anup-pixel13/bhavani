import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading
          label="Our Services"
          title="Surveillance & Networking Solutions"
        />
        <div className="grid-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}