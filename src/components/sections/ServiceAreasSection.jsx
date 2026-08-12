import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { serviceAreas } from "../../data/serviceAreas";

export default function ServiceAreasSection() {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading
          label="Service Areas"
          title="Where We Operate"
          description="We provide prompt, professional security and networking services across the region."
        />
        <div className="grid-3">
          {serviceAreas.map((area) => (
            <Card key={area}>
              <h3>{area}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}