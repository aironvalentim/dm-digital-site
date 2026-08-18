import { modules } from "../data/content";
import Reveal from "./Reveal";

export default function Modules() {
  return (
    <section id="servicos" className="py-20 px-6 bg-secondary text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center mb-2">
          Como funciona
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-14" />

        <div className="grid sm:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <Reveal key={m.n} delay={i * 100}>
              <div className="bg-dark rounded-xl p-8 flex gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-sans font-bold text-lg flex items-center justify-center shrink-0">
                  {m.n}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-primary mb-2">{m.title}</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
