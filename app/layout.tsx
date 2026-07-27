import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bernardo Vieira | Criador de Páginas de Venda",
  description:
    "Criação de landing pages, páginas de venda, páginas institucionais e páginas de produto de alta conversão para assessorias, gestores de tráfego e empresas.",
  keywords: [
    "landing page",
    "página de venda",
    "copywriting",
    "conversão",
    "assessoria digital",
  ],
  authors: [{ name: "Bernardo Vieira" }],
  openGraph: {
    title: "Bernardo Vieira | Criador de Páginas de Venda",
    description:
      "Landing pages e páginas de venda que convertem. Para assessorias, gestores de tráfego e empresas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased bg-[#000000] text-slate-50`}
      >
        <SmoothScroll />
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
