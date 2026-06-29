import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyDigital from "@/components/WhyDigital";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <WhyDigital />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
