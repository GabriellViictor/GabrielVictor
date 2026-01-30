import type { Metadata } from "next";
import { Syne, Pixelify_Sans } from "next/font/google";
import "./globals.css";
// IMPORTA O PROVIDER E O BOTÃO QUE CRIAMOS ACIMA
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
  title: "Meu Portfólio",
  description: "UX/UI Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${syne.variable} ${pixel.variable} font-sans antialiased bg-black`}>

        {/* O PROVIDER ABRAÇA TUDO (Filhos + Botão) */}
        <LanguageProvider>
          {children}
          <LanguageSwitcher />
        </LanguageProvider>

      </body>
    </html>
  );
}