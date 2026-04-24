import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "GIP | Gestão do Investimento Público do Piauí",
  description:
    "Landing page institucional do GIP com metodologia, governança, classificação e recursos de apoio.",
};

export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={figtree.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
