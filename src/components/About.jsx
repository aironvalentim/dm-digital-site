import { HiOutlineChartBar, HiOutlineUserGroup, HiOutlineCheckCircle } from "react-icons/hi";

const points = [
  { icon: HiOutlineChartBar, title: "Resultados reais", desc: "Focamos em métricas que importam: vendas e crescimento." },
  { icon: HiOutlineUserGroup, title: "Equipe especializada", desc: "Profissionais dedicados e atualizados nas melhores ferramentas do mercado." },
  { icon: HiOutlineCheckCircle, title: "Atendimento humanizado", desc: "Proximidade e transparência em todas as etapas do projeto." },
];

export default function About() {
  return (
    <section id="quem-somos" className="py-20 px-6 bg-cream-dark/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="font-body uppercase tracking-[0.2em] text-xs text-bronze mb-4">Quem somos</p>
          <h2 className="font-display text-3xl sm:text-4xl text-espresso mb-6">
            Parceiros estratégicos do seu negócio
          </h2>
          <div className="w-14 h-[2px] bg-bronze mb-6" />
          <p className="font-body text-ink/70 leading-relaxed mb-4">
            A DM Digital nasceu com um propósito claro: entregar resultados de
            verdade. Somos mais do que uma agência — somos parceiros
            estratégicos do seu negócio.
          </p>
          <p className="font-body text-ink/70 leading-relaxed">
            Através de metodologias validadas e uma visão 360° de marketing,
            ajudamos pequenas e médias empresas a conquistar mais
            visibilidade, autoridade e, acima de tudo, clientes reais.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {points.map((p) => (
            <div key={p.title} className="bg-cream border border-espresso/10 rounded-xl p-6 flex gap-4">
              <p.icon className="text-bronze shrink-0 mt-1" size={26} />
              <div>
                <h3 className="font-display text-lg text-espresso mb-1">{p.title}</h3>
                <p className="font-body text-sm text-ink/65 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
