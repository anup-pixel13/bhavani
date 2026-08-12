import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { solutions } from "../../data/solutions";

export default function SolutionsSection() {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading
          label="Advanced Solutions"
          title="Beyond Surveillance"
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