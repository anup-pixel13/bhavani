import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navigation } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{company.name}</h3>
          <p>{company.tagline}</p>
          <p>{company.address}</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Mobile: {company.mobile}</p>
          <p>Email: {company.email}</p>
          <p>GST: {company.gst}</p>
          <p>PAN: {company.pan}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}