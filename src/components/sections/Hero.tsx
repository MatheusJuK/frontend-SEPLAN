import {
  Box,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { heroTitleSize } from "@/lib/typography";
import { BarraColorida } from "../subComponents/BarraColorida";
import { HeroActions } from "../subComponents/BtnsHero";
import { HeroSubheader } from "../subComponents/SubHeader";

export function Hero() {
  return (
    <>
      <HeroSubheader />

      <Box style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div className="flex flex-col justify-center items-center bg-white px-5 py-12 sm:px-8 md:px-16 md:py-20 lg:px-20 lg:py-42 xl:py-52">
          <Container size="xl" px="lg" py="md">
            <Stack align="center" gap="lg">
              <Stack align="center" gap="sm">
                <Title
                  order={1}
                  ta="center"
                  fw={700}
                  lh={1.2}
                  fz={heroTitleSize}
                >
                  Investimento Público
                </Title>

                <Title
                  order={1}
                  ta="center"
                  fw={700}
                  lh={1.2}
                  fz={heroTitleSize}
                >
                  que{" "}
                  <Text span inherit c="primary">
                    Transforma o Piauí
                  </Text>
                </Title>
              </Stack>

              <Text
                ta="center"
                c="var(--color-neutral-default)"
                fz="md"
                lh={1.4}
                fw={500}
                maw={600}
              >
                O GIP é a metodologia que garante que cada investimento
                realizado pelo Estado gere desenvolvimento, qualidade de vida e
                mais oportunidades para a população.
              </Text>

              <HeroActions />
            </Stack>
          </Container>
        </div>

        <Group
          justify="space-between"
          style={{
            position: "absolute",
            bottom: -10,
            left: 0,
            right: 0,
            width: "100%",
            pointerEvents: "none",
          }}
          w="100%"
          display={{ base: "none", md: "flex" }}
        >
          <Image
            src="/Group 1.svg"
            w={{ md: 140, lg: 250, xl: 320 }}
            h={{ md: 140, lg: 250, xl: 320 }}
            ml={{ lg: 30, xl: 40 }}
            style={{
              objectFit: "contain",
              position: "absolute",
              left: 0,
            }}
            bottom={{ md: -23, lg: -50, xl: -67 }}
          />
          <Image
            src="/Group 2.svg"
            w={{ md: 140, lg: 250, xl: 320 }}
            h={{ md: 140, lg: 250, xl: 320 }}
            mr={{ lg: 30, xl: 40 }}
            style={{
              objectFit: "contain",
              position: "absolute",
              right: 0,
            }}
            bottom={{ md: 0, lg: -8, xl: -12 }}
          />
        </Group>
      </Box>
      <BarraColorida />
    </>
  );
}
