"use client";

import { Anchor, Burger, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Info, Layers, ListChecks, Map as LucideMap } from "lucide-react";
import Image from "next/image";
import { sectionLinks } from "@/data/gip-content";
import { ExclusiveAccessButton } from "./BtnExclusivo";

const navIcons = {
  checks: <ListChecks size={16} />,
  info: <Info size={16} />,
  layers: <Layers size={16} />,
  map: <LucideMap size={16} />,
};

export function HeroSubheader() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className="flex w-full items-center justify-between border-b-2 border-b-foreground bg-white px-5 py-2 sm:px-5 md:px-8 xl:px-20">
      <div className="flex items-center">
        <Image
          src="/Projetos.svg"
          alt="Logo do GIP"
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </div>

      <nav className="flex lg:hidden">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} color="primary" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Acesse</Menu.Label>
            {sectionLinks.map((item) => (
              <Menu.Item
                key={item.id}
                leftSection={navIcons[item.icon as keyof typeof navIcons]}
              >
                <Anchor
                  href={`#${item.id}`}
                  size="sm"
                  fw={500}
                  c="var(--color-neutral-default)"
                  onClick={close}
                >
                  {item.label}
                </Anchor>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </nav>

      <nav className="hidden lg:flex">
        <Group gap="lg">
          {sectionLinks.map((item) => (
            <Anchor
              key={item.id}
              size="md"
              fw={500}
              c="var(--color-neutral-default)"
              href={`#${item.id}`}
            >
              {item.label}
            </Anchor>
          ))}

          <ExclusiveAccessButton />
        </Group>
      </nav>
    </header>
  );
}
