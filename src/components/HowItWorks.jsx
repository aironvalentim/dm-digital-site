import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-xs text-bronze mb-4">Nosso método</p>
          <h2 className="font-display text-3xl sm:text-4xl text-espresso">Como funciona</h2>
          <p className="font-body text-ink/65 mt-4 leading-relaxed">
            Um processo estruturado, pensado para escalar as suas vendas de
            forma consistente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-espresso/10 rounded-xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-cream p-6">
              <span className="font-display text-3xl text-bronze/40">{s.n}</span>
              <h3 className="font-display text-lg text-espresso mt-3 mb-2">{s.title}</h3>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
