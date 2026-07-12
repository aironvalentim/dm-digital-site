export const WHATSAPP_NUMBER = "5500000000000"; // formato: 55 + DDD + número
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site da DM Digital e gostaria de solicitar um orçamento.";
export const whatsappLink = (customMsg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMsg || WHATSAPP_MESSAGE)}`;

export const services = [
  {
    icon: "megaphone",
    title: "Gestão de Redes Sociais",
    desc: "Conteúdo estratégico, calendário editorial e gerenciamento das suas redes para engajar seu público e gerar resultados autênticos.",
  },
  {
    icon: "trending-up",
    title: "Tráfego Pago",
    desc: "Google Ads, Meta Ads, remarketing e campanhas de conversão para atrair clientes qualificados diretamente para o seu negócio.",
  },
  {
    icon: "monitor",
    title: "Criação de Sites",
    desc: "Sites institucionais e landing pages responsivas, otimizadas para SEO e para converter visitantes em clientes.",
  },
  {
    icon: "feather",
    title: "Logomarcas e Branding",
    desc: "Identidade visual forte e memorável, com manual de marca completo para consistência em todos os seus canais.",
  },
];

export const differentials = [
  { title: "Atendimento personalizado", desc: "Cada cliente tem um plano pensado para o seu momento de negócio." },
  { title: "Estratégias sob medida", desc: "Nada de fórmula pronta — cada ação nasce de um diagnóstico real." },
  { title: "Relatórios transparentes", desc: "Você acompanha exatamente onde seu investimento está gerando retorno." },
  { title: "Foco em resultados", desc: "Métricas que importam de verdade: vendas, leads e crescimento." },
  { title: "Suporte rápido", desc: "Resposta ágil sempre que você precisar ajustar o rumo da estratégia." },
  { title: "Equipe especializada", desc: "Profissionais atualizados com as ferramentas e práticas mais recentes do mercado." },
];

export const steps = [
  { n: "01", title: "Diagnóstico", desc: "Analisamos seu negócio, seu mercado e identificamos oportunidades reais de crescimento." },
  { n: "02", title: "Planejamento", desc: "Criamos uma estratégia personalizada com metas claras e indicadores bem definidos." },
  { n: "03", title: "Execução", desc: "Colocamos o plano em ação com excelência, usando as melhores práticas do mercado." },
  { n: "04", title: "Otimização", desc: "Monitoramos o desempenho das campanhas e ajustamos continuamente para melhorar o retorno." },
  { n: "05", title: "Crescimento", desc: "Escalamos o que funciona e evoluímos a estratégia junto com o seu negócio." },
];

export const faqs = [
  {
    q: "Quanto custa os serviços da DM Digital?",
    a: "O investimento varia de acordo com os objetivos e o tamanho do seu negócio. Preencha o formulário ou fale no WhatsApp para receber uma proposta personalizada, sem compromisso.",
  },
  {
    q: "Quanto tempo demora para ver resultados?",
    a: "Ações de tráfego pago costumam gerar os primeiros retornos em poucas semanas. Resultados de branding e posicionamento orgânico são consistentes ao longo de alguns meses. No diagnóstico inicial, alinhamos um cronograma realista com você.",
  },
  {
    q: "Vocês atendem qualquer cidade?",
    a: "Sim. Como o trabalho é feito de forma remota e digital, atendemos empresas de qualquer cidade do Brasil.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Trabalhamos com planos mensais recorrentes, definidos conforme o escopo do projeto. Os detalhes são combinados na proposta antes do início do trabalho.",
  },
  {
    q: "Preciso ter redes sociais para contratar?",
    a: "Não. Se você ainda não tem presença digital, ajudamos a criar suas redes sociais e sua identidade visual do zero.",
  },
];

export const stats = [
  { value: "+150", label: "Projetos entregues" },
  { value: "+50", label: "Clientes ativos" },
  { value: "+R$ 2M", label: "Em resultados gerados" },
];
