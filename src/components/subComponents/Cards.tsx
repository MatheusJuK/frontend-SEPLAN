import { Card, Text } from "@mantine/core";
import { type CardVariant, cardVariants } from "@/lib/card-variants";
import { bodyTextSize, cardTitleSize } from "@/lib/typography";

interface InfoCardProps {
  title: string;
  description: string;
  variant: CardVariant;
  className?: string;
}

export function InfoCard({
  title,
  description,
  variant,
  className,
}: InfoCardProps) {
  const palette = cardVariants[variant];

  return (
    <Card
      bg={palette.bg}
      shadow="xs"
      radius={12}
      px={20}
      py={20}
      className={className}
    >
      <Text c={palette.title} fw={700} fz={cardTitleSize}>
        {title}
      </Text>

      <Text c={palette.description} fw={500} fz={bodyTextSize}>
        {description}
      </Text>
    </Card>
  );
}
