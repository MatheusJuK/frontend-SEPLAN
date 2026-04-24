"use client";

import { Group, Menu, Text } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface TopHeaderMenuProps {
  label: string;
  items: Array<{ label: string; href: string }>;
  color?: string;
}

export function TopHeaderMenu({
  label,
  items,
  color = "white",
}: TopHeaderMenuProps) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Group gap={6} className="group cursor-pointer items-center">
          <Text fw={500} c={color}>
            {label}
          </Text>
          <ChevronDown size={16} />
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Outros Links</Menu.Label>
        {items.map((item) => (
          <Link href={item.href} key={item.label}>
            <Menu.Item>{item.label}</Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
