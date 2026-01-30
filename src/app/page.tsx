// src/app/page.tsx
import { Navbar } from "@/components/Navbar";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { Hero } from "@/components/Hero";       // <--- Novo Hero Branco
import { Projects } from "@/components/Projects"; // <--- Nova Seção de Projetos
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Carrer } from "@/components/Carrer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    // Fundo preto geral (o Hero tem fundo branco interno)
    <main className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">

      {/* Elementos Fixos */}
      <Navbar />
      <MouseSpotlight />

      <Hero />
      {/*<Clients />*/}
      <Projects />
      <About />
      <Contact />
      <Carrer />
      <Footer />

    </main>
  );
}