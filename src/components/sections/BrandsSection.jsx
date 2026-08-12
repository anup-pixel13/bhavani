import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { brands } from "../../data/brands";

export default function BrandsSection() {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading
          label="Our Brands"
          title="We Work with Industry-Leading Brands"
          description="Every installation uses products from globally trusted manufacturers."
        />
        <div className="grid-3">
          {brands.map((brand) => (
            <Card key={brand.name}>
              <h3>{brand.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}