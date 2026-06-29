import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
