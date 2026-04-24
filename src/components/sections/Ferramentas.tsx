import { Text } from "@mantine/core";
import { bodyTextSize, sectionTitleSize } from "@/lib/typography";
import { SectionBadge } from "../subComponents/Badge";
import { FerramentaCard } from "../subComponents/FerramentaCard";

export function Ferramentas() {
  return (
    <section className="flex flex-col justify-center items-start gap-8 bg-gradient-to-br from-primary-600 from-0% to-primary-500 to-95% text-white px-5 py-8 md:flex-row md:justify-between md:px-8 md:py-12 lg:w-full lg:rounded-2xl lg:px-11 lg:py-14">
      <div className="flex flex-col justify-center items-start gap-4">
        <SectionBadge>ferramentas e recursos</SectionBadge>

        <Text fw={700} lh={1.2} fz={sectionTitleSize}>
          Pronto para começar?
        </Text>

        <Text c="var(--color-foreground)" fz={bodyTextSize} lh={1.6} fw={500}>
          Acesse os recursos, aprofunde seu conhecimento e comece a aplicar a
          metodologia GIP hoje mesmo.
        </Text>
      </div>

      <FerramentaCard />
    </section>
  );
}
