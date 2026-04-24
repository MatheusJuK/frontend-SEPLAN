"use client";

import { Anchor, Button, Group } from "@mantine/core";

export function HeroActions() {
  function handleDownloadButtonClick() {}

  return (
    <Group justify="center" mt={{ base: 8, md: 12 }} w="100%">
      <Anchor href="#etapas">
        <Button size="md" radius="md">
          Conheça as 5 Etapas
        </Button>
      </Anchor>

      <Button
        size="md"
        radius="md"
        variant="outline"
        onClick={handleDownloadButtonClick}
      >
        Baixar Guia Completo
      </Button>
    </Group>
  );
}
