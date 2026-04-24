import { Image, Stack, Text, Title } from "@mantine/core";
import { bodyTextSize, sectionTitleSize } from "@/lib/typography";
import { SectionBadge } from "../subComponents/Badge";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="pt-16 pb-8 px-5 bg-white md:pt-24 md:pb-12 md:px-8 lg:pt-32 lg:pb-20 lg:px-16 xl:px-20"
    >
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10 lg:gap-12">
          <Image
            src="/about.svg"
            w={{ base: 240, sm: 300, md: 360, lg: 420, xl: 600 }}
            h={{ base: 240, sm: 300, md: 360, lg: 420, xl: 600 }}
            style={{
              objectFit: "contain",
            }}
          />

          <div className="w-full min-w-0 sm:max-w-xl">
            <Stack gap={10}>
              <SectionBadge>sobre</SectionBadge>

              <Title order={2} fw={700} lh={1.2} fz={sectionTitleSize}>
                O que é o GIP?
              </Title>

              <Text
                c="var(--color-neutral-default)"
                fz={bodyTextSize}
                lh={1.6}
                fw={500}
              >
                <Text span fw={700}>
                  A Gestão do Investimento Público (GIP)
                </Text>{" "}
                é um modelo inovador adotado pelo Governo do Piauí para{" "}
                <Text span fw={700}>
                  aumentar a eficiência, a transparência e a efetividade
                </Text>{" "}
                dos investimentos estaduais.
              </Text>

              <Text
                c="var(--color-neutral-default)"
                fz={bodyTextSize}
                lh={1.6}
                fw={500}
              >
                Com base nas melhores práticas nacionais e internacionais, o GIP
                organiza os projetos em um{" "}
                <Text span fw={700}>
                  ciclo de 5 etapas
                </Text>
                , assegurando que os recursos públicos sejam aplicados de forma{" "}
                <Text span fw={700}>
                  estratégica e sustentável
                </Text>
                .
              </Text>
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
}
