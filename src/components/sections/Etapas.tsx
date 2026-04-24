"use client";

import { Image, Text, Timeline } from "@mantine/core";
import { timelineSteps } from "@/data/gip-content";
import { bodyTextSize, sectionTitleSize } from "@/lib/typography";
import { SectionBadge } from "../subComponents/Badge";
import { InfoCard } from "../subComponents/Cards";

export function Etapas() {
  return (
    <section
      id="etapas"
      className="flex flex-col justify-center items-start gap-8 bg-white px-5 py-8 md:flex-row md:items-center md:py-12 lg:gap-12 lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="flex flex-col justify-center items-start gap-4">
        <SectionBadge>as 5 etapas</SectionBadge>

        <div className="flex flex-col justify-center items-start">
          <Text fw={700} lh={1.2} fz={sectionTitleSize}>
            O Caminho para o
          </Text>
          <Text c="primary" fw={700} lh={1.2} fz={sectionTitleSize}>
            Investimento de Impacto
          </Text>
        </div>

        <Text
          c="var(--color-neutral-default)"
          fz={bodyTextSize}
          lh={1.6}
          fw={500}
        >
          O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas
          estratégicas, baseadas nas melhores práticas nacionais e
          internacionais.
        </Text>

        <Image
          src="/Etapas.svg"
          w={{ base: 240, sm: 300, md: 360, lg: 420, xl: 500 }}
          h={{ base: 240, sm: 300, md: 360, lg: 420, xl: 500 }}
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <Timeline
        active={timelineSteps.length}
        bulletSize={28}
        lineWidth={2}
        color="primary"
      >
        {timelineSteps.map((step, index) => (
          <Timeline.Item
            key={step.title}
            bullet={index + 1}
            lineVariant="dashed"
          >
            <InfoCard
              variant="light"
              title={step.title}
              description={step.description}
            />
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
