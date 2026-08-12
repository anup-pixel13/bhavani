import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { clients } from "../../data/clients";

export default function ClientsSection() {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading
          label="Our Clients"
          title="Trusted by Government & Private Sector"
        />
        <div className="grid-2">
          {clients.map((client) => (
            <Card key={client.name}>
              <h3>{client.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}