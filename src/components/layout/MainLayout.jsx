import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTop from "../common/ScrollToTop";
import Breadcrumbs from "../common/Breadcrumbs";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";

// Pages with a dark background — app-main bg + breadcrumbs must match
const DARK_BG_PAGES = ["/about", "/services"];

function ScrollManager() {
  useScrollRestoration();
  return null;
}

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDark = DARK_BG_PAGES.some((p) => location.pathname.startsWith(p));

  return (
    <div className="app-shell">
      <ScrollManager />
      <Header />
      <main className={`app-main${isDark ? " app-main--dark" : ""}`}>
        {!isHome && <Breadcrumbs />}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}