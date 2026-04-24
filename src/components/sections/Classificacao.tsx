import { Text } from "@mantine/core";
import { classificationCards } from "@/data/gip-content";
import { bodyTextSize, sectionTitleSize } from "@/lib/typography";
import { SectionBadge } from "../subComponents/Badge";
import { InfoCard } from "../subComponents/Cards";

export function Classificacao() {
  return (
    <section
      id="classificacao"
      className="flex flex-col bg-primary-10 gap-8 px-5 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20 xl:p-24 xl:pb-32 xl:gap-12"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionBadge>classificação</SectionBadge>

        <Text fw={700} lh={1.2} fz={sectionTitleSize}>
          Nem todo projeto é igual
        </Text>

        <Text
          c="var(--color-neutral-default)"
          fz={bodyTextSize}
          lh={1.6}
          fw={500}
        >
          A GIP adapta a profundidade da análise conforme a natureza e o impacto
          de cada projeto.
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {classificationCards.map((card) => (
          <div key={card.title} className={`h-full ${card.className}`}>
            <InfoCard
              variant={card.variant}
              title={card.title}
              description={card.description}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
