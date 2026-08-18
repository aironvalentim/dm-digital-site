import { HiCheck } from "react-icons/hi";
import { differentials } from "../data/content";
import Reveal from "./Reveal";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-secondary text-center mb-2">
          Por que escolher a DM Digital
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-14" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="bg-gray-bg rounded-xl p-6 flex gap-4 h-full hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <HiCheck className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-secondary mb-1">{d.title}</h3>
                  <p className="font-sans text-sm text-text-gray leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
