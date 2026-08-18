import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Modules from "./components/Modules";
import About from "./components/About";
import Differentials from "./components/Differentials";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";

export default function App() {
  return (
    <div className="bg-white text-text min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Modules />
        <About />
        <Differentials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
