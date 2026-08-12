import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { solutions } from "../../data/solutions";

export default function SolutionsDetailSection() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          label="Advanced Solutions"
          title="Beyond Surveillance"
          description="Additional systems and support services that extend the company’s core offering."
        />

        <div className="grid-3">
          {solutions.map((solution) => (
            <Card key={solution.title}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}