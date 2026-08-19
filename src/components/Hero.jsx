import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/content";

export default function Hero() {
  const bg = `${import.meta.env.BASE_URL}images/hero-bg.jpg`;

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-x-0 top-20 bottom-0 bg-cover" style={{ backgroundImage: `url(${bg})`, backgroundPosition: "52% 0%" }} />
      <div className="absolute inset-x-0 top-20 bottom-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.25) 100%)" }} />
      <div className="absolute inset-x-0 top-20 bottom-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 32%, rgba(0,0,0,0) 62%)" }} />

      <div className="relative z-10 min-h-screen flex flex-col pt-20 px-6">
        <div className="flex-[3]" />
        <div className="flex-[2] flex flex-col justify-center items-center text-center text-white max-w-3xl mx-auto w-full pb-10 sm:pb-14">
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-5" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
            Transformamos sua empresa em uma{" "}
            <span className="text-primary">máquina de vendas.</span>
          </h1>
          <p className="font-sans text-base sm:text-lg opacity-90 mb-8 max-w-xl mx-auto" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}>
            A DM Digital ajuda empresas a vender mais através de estratégias inteligentes de marketing digital. Resultados reais, mensuráveis e escaláveis.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contato" className="font-sans font-semibold text-sm bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-lg">Solicitar orçamento</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => window.dataLayer?.push({ event: "whatsapp_click", location: "hero" })} className="font-sans font-semibold text-sm border-2 border-primary text-primary bg-white/5 px-8 py-4 rounded-lg hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              <FaWhatsapp size={18} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}