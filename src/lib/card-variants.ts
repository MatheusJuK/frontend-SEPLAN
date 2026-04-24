export type CardVariant =
  | "surface"
  | "light"
  | "yellow"
  | "primary"
  | "white"
  | "beige";

export const cardVariants: Record<
  CardVariant,
  { bg: string; title: string; description: string }
> = {
  surface: {
    bg: "var(--color-surface)",
    title: "white",
    description: "white",
  },
  light: {
    bg: "var(--color-primary-50)",
    title: "primary",
    description: "var(--color-neutral-default)",
  },
  yellow: {
    bg: "var(--color-yellow-400)",
    title: "var(--color-neutral-emphasis)",
    description: "var(--color-neutral-default)",
  },
  primary: {
    bg: "var(--color-primary-600)",
    title: "white",
    description: "white",
  },
  white: {
    bg: "var(--color-white)",
    title: "var(--color-neutral-emphasis)",
    description: "var(--color-neutral-default)",
  },
  beige: {
    bg: "var(--color-yellow-100)",
    title: "var(--color-neutral-emphasis)",
    description: "var(--color-neutral-default)",
  },
};
