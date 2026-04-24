"use client";

import { Button, Card, Group, Text } from "@mantine/core";
import { Download } from "lucide-react";
import { bodyTextSize, cardTitleSize } from "@/lib/typography";

export function FerramentaCard() {
  const handleManualDownload = () => {
    // Lógica para baixar o manual técnico
  };
  return (
    <Card bg="primary" shadow="md" radius="lg" withBorder maw={460}>
      <Group justify="start" gap={12}>
        <Text c="white" fw={700} fz={cardTitleSize}>
          Manual Técnico
        </Text>

        <Text c="white" fw={500} fz={bodyTextSize}>
          Aprofunde-se em cada detalhe, critério e cálculo da metodologia. O
          guia completo para especialistas.
        </Text>

        <Button
          bg="var(--color-yellow-400)"
          leftSection={<Download size={16} />}
          fullWidth
          c="var(--color-neutral-emphasis)"
          onClick={handleManualDownload}
        >
          Baixar Manual Técnico
        </Button>
      </Group>
    </Card>
  );
}
