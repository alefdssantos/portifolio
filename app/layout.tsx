import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alef Santos | Desenvolvedor Fullstack",
  description: "Portfolio de Alef Santos - Desenvolvedor Fullstack com foco em Backend. Especializado em Node.js, TypeScript, React e bancos de dados SQL/NoSQL.",
  keywords: ["desenvolvedor", "fullstack", "backend", "nodejs", "typescript", "react", "portfolio"],
  authors: [{ name: "Alef Santos" }],
  openGraph: {
    title: "Alef Santos | Desenvolvedor Fullstack",
    description: "Desenvolvedor Fullstack com foco em Backend",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

