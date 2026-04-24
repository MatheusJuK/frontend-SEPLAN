import { Badge } from "@mantine/core";

interface SectionBadgeProps {
  children: React.ReactNode;
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <Badge
      variant="light"
      color="yellow"
      radius="sm"
      size="md"
      tt="lowercase"
      fw={600}
      fz={{ base: 12, lg: 14 }}
      lh={14}
    >
      {children}
    </Badge>
  );
}
