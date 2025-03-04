import ContactSection from "@/components/Contact";
import ExperienceEducation from "@/components/ExperienceEducation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <ServicesSection/>
      <Project />
      <ExperienceEducation/>
      <SkillsSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

