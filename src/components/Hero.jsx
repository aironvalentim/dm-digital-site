import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { whatsappLink, stats } from "../data/content";

export default function Hero() {
  return (
    <section id="inicio" className="pt-36 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-body uppercase tracking-[0.2em] text-xs text-bronze mb-5">
            Marketing digital de resultado
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-espresso">
            Transformamos sua empresa em uma{" "}
            <span className="text-bronze italic">máquina de vendas.</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-ink/70 mt-6 max-w-xl leading-relaxed">
            A DM Digital ajuda empresas a vender mais através de estratégias
            inteligentes de marketing digital. Resultados reais, mensuráveis
            e escaláveis.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm bg-espresso text-cream px-7 py-4 rounded-md hover:bg-bronze transition-colors"
            >
              Solicitar orçamento <HiArrowRight />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.dataLayer?.push({ event: "whatsapp_click", location: "hero" })}
              className="inline-flex items-center gap-2 font-body font-semibold text-sm border border-bronze text-espresso px-7 py-4 rounded-md hover:bg-bronze/10 transition-colors"
            >
              <FaWhatsapp size={18} /> Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-espresso/10 max-w-2xl">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl sm:text-4xl text-espresso">{s.value}</p>
              <p className="font-body text-xs sm:text-sm text-ink/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
