"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/locales/translations";

// Define os tipos
type Language = "pt" | "en";
type Translations = typeof translations.en;

interface LanguageContextType {
    language: Language;
    t: Translations; // 't' será o objeto com os textos
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>("en"); // Padrão Inglês

    // Carregar preferência salva no navegador
    useEffect(() => {
        const savedLang = localStorage.getItem("site-lang") as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        } else {
            // Opcional: Detectar língua do navegador
            const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
            setLanguageState(browserLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("site-lang", lang);
    };

    const toggleLanguage = () => {
        const newLang = language === "en" ? "pt" : "en";
        setLanguage(newLang);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                t: translations[language], // Entrega os textos da língua atual
                toggleLanguage,
                setLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para usar fácil
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};