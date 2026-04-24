import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "var(--font-sans)",
  headings: {
    fontFamily: "var(--font-sans)",
    fontWeight: "700",
  },
  colors: {
    primary: [
      "#EDF8FD",
      "#DBEDF5",
      "#B2DAED",
      "#86C7E5",
      "#66B6DF",
      "#3992C2",
      "#15719A",
      "#0E4F6C",
      "#003F5B",
      "#063246",
    ],
  },
  primaryColor: "primary",
  breakpoints: {
    xs: "20em",
    sm: "39.5em",
    md: "48em",
    lg: "64em",
    xl: "80em",
  },
  spacing: {
    xs: rem(8),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(16),
    md: rem(16),
    lg: rem(18),
    xl: rem(22),
  },
  defaultRadius: "md",
  components: {
    Card: {
      styles: {
        root: {
          borderColor: "var(--color-primary-500)",
        },
      },
    },
  },
});
