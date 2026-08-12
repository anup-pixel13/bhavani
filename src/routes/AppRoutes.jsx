import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Brands from "../pages/Brands";
import Clients from "../pages/Clients";
import Installations from "../pages/Installations";
import ServiceAreas from "../pages/ServiceAreas";
import Contact from "../pages/Contact";
import GetQuote from "../pages/GetQuote";
import Enquiry from "../pages/Enquiry";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/installations" element={<Installations />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
