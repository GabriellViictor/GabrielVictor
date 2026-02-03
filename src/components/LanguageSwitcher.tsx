"use client";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    // CONTAINER: Fundo mais escuro, blur (vidro) e borda mais forte
    <div className="flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md border border-white/20 rounded-full p-1.5 shadow-2xl z-50">
      
      {/* BOTÃO PT */}
      <button
        onClick={() => setLanguage("pt")}
        className={`
          px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300
          ${
            language === "pt"
              ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" // Ativo: Branco com brilho
              : "text-neutral-400 hover:text-white hover:bg-white/10" // Inativo
          }
        `}
      >
        PT
      </button>

      {/* BOTÃO EN */}
      <button
        onClick={() => setLanguage("en")}
        className={`
          px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300
          ${
            language === "en"
              ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" // Ativo: Branco com brilho
              : "text-neutral-400 hover:text-white hover:bg-white/10" // Inativo
          }
        `}
      >
        EN
      </button>
      
    </div>
  );
};