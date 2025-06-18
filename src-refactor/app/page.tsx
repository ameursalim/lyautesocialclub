import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Pricing from "@/components/sections/Pricing";
import Coaches from "@/components/sections/Coaches";

/**
 * Main homepage for Lyautey Social Club website
 * Contains all sections in a logical order
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Features />
        <Coaches />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
