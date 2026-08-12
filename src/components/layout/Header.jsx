import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { company } from "../../data/company";
import "../../styles/layout/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Bhavani Enterprises home">
          <div className="brand-mark" aria-hidden="true">BE</div>
          <div className="brand-text">
            <strong>{company.name}</strong>
            <small>{company.tagline}</small>
          </div>
        </Link>

        <nav
          id="primary-navigation"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/get-quote" className="btn header-cta" onClick={closeMenu}>
          Get a Quote
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((p) => !p)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
