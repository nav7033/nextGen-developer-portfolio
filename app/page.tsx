import Image from "next/image";
import Header from "@/components/navbar/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Background from "@/components/hero/BackgroundGlow";
export default function PortfolioPage() {

  return (
    <div className="relative min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Background />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}