import { HiOutlineSpeakerphone, HiOutlineTrendingUp, HiOutlineDesktopComputer, HiOutlinePencilAlt } from "react-icons/hi";
import { services } from "../data/content";

const icons = {
  megaphone: HiOutlineSpeakerphone,
  "trending-up": HiOutlineTrendingUp,
  monitor: HiOutlineDesktopComputer,
  feather: HiOutlinePencilAlt,
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-xs text-bronze mb-4">O que fazemos</p>
          <h2 className="font-display text-3xl sm:text-4xl text-espresso">Nossos serviços</h2>
          <p className="font-body text-ink/65 mt-4 leading-relaxed">
            Soluções completas para posicionar sua marca no mercado digital e
            aumentar seu faturamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.title}
                className="group border border-espresso/10 rounded-xl p-8 hover:border-bronze/50 hover:bg-cream-dark/30 transition-colors"
              >
                <Icon className="text-bronze mb-5" size={30} />
                <h3 className="font-display text-xl text-espresso mb-2">{s.title}</h3>
                <p className="font-body text-sm text-ink/65 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
