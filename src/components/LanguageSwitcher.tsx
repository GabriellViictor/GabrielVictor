"use client"; // <--- OBRIGATÓRIO PARA USAR HOOKS
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-bold text-xs uppercase hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg"
        >
            <span>{language === "en" ? "🇺🇸 EN" : "🇧🇷 PT"}</span>
        </motion.button>
    );
};