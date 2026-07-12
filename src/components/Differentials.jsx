import { HiCheck } from "react-icons/hi";
import { differentials } from "../data/content";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 px-6 bg-espresso text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-xs text-bronze-light mb-4">Por que a DM Digital</p>
          <h2 className="font-display text-3xl sm:text-4xl">Nosso compromisso é o crescimento constante do seu negócio</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((d) => (
            <div key={d.title} className="border border-cream/15 rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-bronze/20 flex items-center justify-center mb-4">
                <HiCheck className="text-bronze-light" size={18} />
              </div>
              <h3 className="font-display text-lg mb-1.5">{d.title}</h3>
              <p className="font-body text-sm text-cream/65 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
