import type { Metadata } from "next";
import { Karla, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import CookieBanner from "@/components/CookieBanner";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Biomedica - Profesjonalny Gabinet Biorezonansu",
  description: "Zapraszamy na terapie i testy alergiczne w Nowym Sączu.",
  icons: {
    icon: "/images/Biomedica_fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${karla.variable} ${montserrat.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <CookieBanner />
      </body>
    </html>
  );
}
