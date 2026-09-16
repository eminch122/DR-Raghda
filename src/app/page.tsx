import HeroSection from '@/components/sections/HeroSection';
import ContactStrip from '@/components/sections/ContactStrip';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechShowcase from '@/components/sections/TechShowcase';
import ClinicalCases from '@/components/sections/ClinicalCases';
import CabinetShowcase from '@/components/sections/CabinetShowcase';
import ReviewsSection from '@/components/sections/ReviewsSection';
import SimulatorSection from '@/components/sections/SimulatorSection';
import InternationalSection from '@/components/sections/InternationalSection';
import LocationSection from '@/components/sections/LocationSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactStrip />
      <AboutSection />
      <ServicesSection />
      <TechShowcase />
      <ClinicalCases />
      <CabinetShowcase />
      <ReviewsSection />
      <SimulatorSection />
      <InternationalSection />
      <LocationSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
