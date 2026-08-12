import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { contact } from "../../data/contact";
import { company } from "../../data/company";

export default function ContactDetailSection() {
  return (
    <section className="page-section contact-page">
      <div className="container">
        <SectionHeading
          label="Contact Us"
          title="Get in Touch"
          description="Call us for the best security solutions in Navi Mumbai & Panvel."
        />

        <div className="contact-grid">
          <Card>
            <h3>Mobile</h3>
            <p>{contact.mobile}</p>
          </Card>

          <Card>
            <h3>Email</h3>
            <p>{contact.email}</p>
          </Card>

          <Card>
            <h3>Business Details</h3>
            <p>GST No.: {contact.gst}</p>
            <p>PAN No.: {contact.pan}</p>
          </Card>

          <Card>
            <h3>Address</h3>
            <p>{company.address}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}