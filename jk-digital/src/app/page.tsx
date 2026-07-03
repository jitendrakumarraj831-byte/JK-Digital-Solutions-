import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import TrustSignals from "@/components/TrustSignals";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AgencyVsFreelancer from "@/components/AgencyVsFreelancer";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FreeAudit from "@/components/FreeAudit";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContacts from "@/components/FloatingContacts";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <HeroStats />
        <TrustSignals />
        <Services />
        <TechStack />
        <WhyChooseUs />
        <AgencyVsFreelancer />
        <Process />
        <Results />
        <Portfolio />
        <CaseStudies />
        <Industries />
        <Testimonials />
        <Pricing />
        <FreeAudit />
        <Blog />
        <FAQ />
        <Contact />
        <Newsletter />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContacts />
    </>
  );
}
