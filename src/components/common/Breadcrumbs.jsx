import { Link, useLocation } from "react-router-dom";
import "../../styles/components/breadcrumbs.css";

const LABELS = {
  "": "Home",
  about: "About Us",
  services: "Services",
  solutions: "Advanced Solutions",
  products: "Products",
  clients: "Clients",
  brands: "Brands",
  installations: "Installations",
  "service-areas": "Service Areas",
  contact: "Contact",
  "get-quote": "Get a Quote",
  enquiry: "Enquiry",
  "privacy-policy": "Privacy Policy",
  terms: "Terms & Conditions",
};

// Pages that have a dark background — breadcrumb text should be light
const DARK_BG_PAGES = ["/about"];

function toLabel(segment) {
  return LABELS[segment] ?? segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = [
    { label: "Home", path: "/" },
    ...segments.map((seg, i) => ({
      label: toLabel(seg),
      path: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  const isDark = DARK_BG_PAGES.some((p) => pathname.startsWith(p));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `https://bhavanienterprises.in${crumb.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`breadcrumbs${isDark ? " breadcrumbs--dark" : ""}`}
      >
        <ol className="breadcrumbs__list">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={crumb.path} className="breadcrumbs__item">
                {isLast ? (
                  <span aria-current="page" className="breadcrumbs__current">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link to={crumb.path} className="breadcrumbs__link">
                      {crumb.label}
                    </Link>
                    <span className="breadcrumbs__sep" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}