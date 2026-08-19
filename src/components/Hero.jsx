import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/content";

export default function Hero() {
  const bg = `${import.meta.env.BASE_URL}images/hero-bg.jpg`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${bg})`, backgroundPosition: "50% 25%" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
          Transformamos sua empresa em uma{" "}
          <span className="text-primary">máquina de vendas.</span>
        </h1>
        <p className="font-sans text-lg opacity-90 mb-10 max-w-xl mx-auto" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}>
          A DM Digital ajuda empresas a vender mais através de estratégias inteligentes de marketing digital. Resultados reais, mensuráveis e escaláveis.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contato" className="font-sans font-semibold text-sm bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-lg">Solicitar orçamento</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => window.dataLayer?.push({ event: "whatsapp_click", location: "hero" })} className="font-sans font-semibold text-sm border-2 border-primary text-primary bg-white/5 px-8 py-4 rounded-lg hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
            <FaWhatsapp size={18} /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}