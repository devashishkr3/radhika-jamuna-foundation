import OurWork from "./components/OurWorks";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import CTA from "./components/CTA";
import Achivements from "./components/Achivements";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Achivements />
      <OurWork />
      <CTA />
      <ContactSection />
    </>
  );
}