import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

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
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
