import { Text } from "@mantine/core";
import { governanceCards } from "@/data/gip-content";
import { bodyTextSize, sectionTitleSize } from "@/lib/typography";
import { SectionBadge } from "../subComponents/Badge";
import { InfoCard } from "../subComponents/Cards";

export function Governanca() {
  return (
    <section
      id="governancia"
      className="flex flex-col justify-center items-start gap-8 bg-primary-800 text-white px-5 py-8 sm:flex-row md:px-8 md:py-12 lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="flex flex-col justify-center items-start gap-4">
        <SectionBadge>governancia</SectionBadge>

        <div className="flex flex-col justify-center items-start">
          <Text fw={700} lh={1.2} fz={sectionTitleSize}>
            Decisões Inteligentes,
          </Text>
          <Text fw={700} lh={1.2} fz={sectionTitleSize}>
            Estrutura Robusta
          </Text>
        </div>

        <Text c="var(--color-foreground)" fw={500} fz={bodyTextSize} lh={1.6}>
          O sucesso da GIP depende de uma governança bem definida, que garante
          avaliações técnicas, imparciais e alinhadas à capacidade fiscal do
          Estado.
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        {governanceCards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            description={card.description}
            variant="surface"
          />
        ))}
      </div>
    </section>
  );
}
