import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const points = [
  { title: "High Quality Products", text: "We source only from globally certified, industry-leading brands." },
  { title: "Experienced Team", text: "Our certified technicians bring years of hands-on expertise." },
  { title: "Reliable Service", text: "On-time delivery and installation backed by strict quality checks." },
  { title: "After Sales Support", text: "Dedicated post-installation support, AMC packages, and rapid response." },
];

export default function ValuePointsSection() {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading label="Why Choose Us" title="The Bhavani Advantage" />
        <div className="grid-2">
          {points.map((point) => (
            <Card key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}