import HeroSection from "../components/sections/HeroSection";
import CompanyIntroSection from "../components/sections/CompanyIntroSection";
import ServicesSection from "../components/sections/ServicesSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import ValuePointsSection from "../components/sections/ValuePointsSection";
import BrandsSection from "../components/sections/BrandsSection";
import ClientsSection from "../components/sections/ClientsSection";
import ServiceAreasSection from "../components/sections/ServiceAreasSection";
import ContactCTASection from "../components/sections/ContactCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyIntroSection />
      <ServicesSection />
      <SolutionsSection />
      <ValuePointsSection />
      <BrandsSection />
      <ClientsSection />
      <ServiceAreasSection />
      <ContactCTASection />
    </>
  );
}