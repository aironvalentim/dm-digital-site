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
import PrivacyPolicy from "./components/PrivacyPolicy";

function getPath() {
  const base = import.meta.env.BASE_URL;
  let path = window.location.pathname;
  if (path.startsWith(base)) path = path.slice(base.length);
  return path.replace(/^\/+|\/+$/g, "");
}

export default function App() {
  const path = getPath();

  if (path === "politica-de-privacidade") {
    return <PrivacyPolicy />;
  }

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
