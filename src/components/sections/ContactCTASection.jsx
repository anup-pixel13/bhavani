import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { contact } from "../../data/contact";

export default function ContactCTASection() {
  return (
    <section className="home-section contact-cta">
      <div className="container">
        <Card>
          <SectionHeading
            label="Get In Touch"
            title="Call us for the best security solutions"
            description={`Mobile: ${contact.mobile} | Email: ${contact.email}`}
          />
          <div className="cta-actions">
            <Button to="/contact">Contact Page</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}