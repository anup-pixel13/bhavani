import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTop from "../common/ScrollToTop";
import Breadcrumbs from "../common/Breadcrumbs";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";

function ScrollManager() {
  useScrollRestoration();
  return null;
}

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-shell">
      <ScrollManager />
      <Header />
      <main className="app-main">
        {!isHome && <Breadcrumbs />}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}