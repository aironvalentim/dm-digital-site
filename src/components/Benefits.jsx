import { HiOutlineSpeakerphone, HiOutlineTrendingUp, HiOutlineDesktopComputer } from "react-icons/hi";
import { benefits } from "../data/content";
import Reveal from "./Reveal";

const icons = {
  megaphone: HiOutlineSpeakerphone,
  "trending-up": HiOutlineTrendingUp,
  monitor: HiOutlineDesktopComputer,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-6 bg-gray-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-secondary text-center mb-2">
          O que fazemos por você
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-14" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <Reveal key={b.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2.5 transition-all duration-300 h-full">
                  <Icon className="text-primary mx-auto mb-6" size={40} />
                  <h3 className="font-sans font-bold text-lg text-secondary mb-3">{b.title}</h3>
                  <p className="font-sans text-sm text-text-gray leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
