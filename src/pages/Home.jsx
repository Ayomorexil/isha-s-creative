import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../features/home/Hero";
import Services from "../features/home/Services";
import Portfolio from "../features/home/Portfolio";
import Contact from "../features/home/Contact";

export default function Home() {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}