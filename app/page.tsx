import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <WhyMe />
      <Process />
      <Partners />
      <About />
      <FeaturedProjects />
      <Marquee />
      <CtaSection />
      <Footer />
    </main>
  );
}
