import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { serviceAreas } from "../../data/serviceAreas";

export default function ServiceAreasDetailSection() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          label="Service Areas"
          title="Where We Operate"
          description="Bhavani Enterprises serves the locations visible in the screenshots."
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