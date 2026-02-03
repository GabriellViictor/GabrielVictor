import type { Metadata } from "next";
import { Syne, Pixelify_Sans } from "next/font/google";
import "./globals.css";
// IMPORTA O PROVIDER E O BOTÃO QUE CRIAMOS ACIMA
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Inter } from "next/font/google"; // 1. Importe a Inter
const inter = Inter({ subsets: ["latin"] });

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Gabriel Victor",
  description: "UX/UI Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${inter.className} font-sans antialiased bg-black`}>

        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}