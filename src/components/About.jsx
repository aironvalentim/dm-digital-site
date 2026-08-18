import { HiOutlineChartBar, HiOutlineUserGroup, HiOutlineCheckCircle } from "react-icons/hi";
import { stats } from "../data/content";
import Reveal from "./Reveal";

const highlights = [
  { icon: HiOutlineChartBar, text: "Focamos em métricas que importam: vendas e crescimento." },
  { icon: HiOutlineUserGroup, text: "Profissionais dedicados e atualizados nas melhores ferramentas do mercado." },
  { icon: HiOutlineCheckCircle, text: "Proximidade e transparência em todas as etapas do projeto." },
];

export default function About() {
  const photo = `${import.meta.env.BASE_URL}images/sobre-deyne.jpeg`;

  return (
    <section id="sobre" className="py-20 px-6 bg-gray-bg">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-14 items-center">
        <Reveal>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img src={photo} alt="Deyne - DM Digital" className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-secondary mb-2">Quem somos</h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="font-sans text-text-gray leading-relaxed mb-8">
            Através de metodologias validadas e uma visão 360° de marketing,
            ajudamos pequenas e médias empresas a conquistar mais visibilidade,
            autoridade e, acima de tudo, clientes reais.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-sans font-extrabold text-2xl sm:text-3xl text-primary">{s.value}</p>
                <p className="font-sans text-xs text-text-gray mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div key={h.text} className="flex items-center gap-3">
                <h.icon className="text-primary shrink-0" size={22} />
                <p className="font-sans text-sm text-text">{h.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}