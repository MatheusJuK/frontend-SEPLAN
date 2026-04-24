import type { CardVariant } from "@/lib/card-variants";

export const topBarLinks = [
  { label: "Diálogos", href: "https://dialogos.seplan.pi.gov.br/" },
  { label: "OPA", href: "https://opa.seplan.pi.gov.br/" },
  { label: "dadosPI", href: "https://dados.gov.br/home" },
  {
    label: "Pactos pelo Piauí",
    href: "https://pactospelopiaui.seplan.pi.gov.br/",
  },
  {
    label: "Retribuir",
    href: "https://www.seplan.pi.gov.br/projetos/retribuir/",
  },
  { label: "PSI", href: "https://psi.seplan.pi.gov.br/" },
  {
    label: "Pilares",
    href: "https://www.seplan.pi.gov.br/projetos/pilares-ii/",
  },
];

export const sectionLinks = [
  { label: "Sobre", id: "sobre", icon: "info" },
  { label: "Etapas", id: "etapas", icon: "layers" },
  { label: "Governancia", id: "governancia", icon: "map" },
  { label: "Classificação", id: "classificacao", icon: "checks" },
];

export const timelineSteps = [
  {
    title: "Ideação e Concepção",
    description:
      "Onde as grandes ideias nascem e as propostas de projeto são elaboradas e alinhadas às necessidades do Piauí.",
  },
  {
    title: "Avaliação Prévia",
    description:
      "Análise técnica e de viabilidade para garantir que apenas os projetos sólidos avancem, com base em sua complexidade e valor.",
  },
  {
    title: "Priorização e Seleção",
    description:
      "Os projetos viáveis são hierarquizados com base no impacto estratégico e nos riscos, para otimizar a alocação do orçamento do Estado.",
  },
  {
    title: "Execução do Investimento",
    description:
      "Implementação e monitoramento do projeto aprovado, com registro de informações para garantir a transparência e o aprendizado.",
  },
  {
    title: "Avaliação Ex Post",
    description:
      "Após a entrega, os resultados são comparados com o planejado, gerando lições que aprimoram todos os futuros investimentos.",
  },
];

export const governanceCards = [
  {
    title: "Grupo Técnico de Investimento (GTI)",
    description:
      "Estuda a viabilidade orçamentária, avaliando a sustentabilidade financeira dos projetos.",
  },
  {
    title: "Grupo Técnico de Gestão Fiscal (GTF)",
    description:
      "Estuda a viabilidade orçamentária, avaliando a sustentabilidade financeira dos projetos.",
  },
  {
    title: "Órgão de Governança (CGRF)",
    description:
      "Delibera e decide, avaliando os pareceres técnicos e fiscais para aprovação final junto ao Governador.",
  },
];

export const classificationCards = [
  {
    title: "Estratégicos",
    description:
      "Projetos de caráter transformador, com alta contribuição para o desenvolvimento do Estado. Exigem uma avaliação prévia mais completa e extensiva.",
    variant: "beige" as CardVariant,
    className: "lg:col-span-2",
  },
  {
    title: "Complementares",
    description:
      "Empreendimentos de natureza tático-operacional e impacto localizado. A análise de viabilidade é simplificada, dependendo do volume de investimento.",
    variant: "primary" as CardVariant,
    className: "lg:col-span-2",
  },
  {
    title: "Parcerias e Concessões",
    description:
      "Projetos que envolvem a iniciativa privada e seguem um fluxo normativo específico, já previsto em legislação própria.",
    variant: "white" as CardVariant,
    className: "lg:col-span-2",
  },
  {
    title: "Emergenciais",
    description:
      "Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
    variant: "yellow" as CardVariant,
    className: "lg:col-span-3",
  },
  {
    title: "Pactos e Convênios",
    description:
      "Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
    variant: "yellow" as CardVariant,
    className: "md:col-span-1 lg:col-span-3",
  },
];

export const socialLinks = {
  instagram: "https://instagram.com",
  mail: "mailto:gip@landingpage.com",
  youtube: "https://youtube.com",
};
