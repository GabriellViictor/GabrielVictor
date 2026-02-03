"use client";
import React from "react";
import Link from "next/link";
import { IconMail } from "@tabler/icons-react";
// 1. IMPORTAR O HOOK
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
    // 2. PEGAR OS TEXTOS (t)
    const { t } = useLanguage();

    return (
        <nav className="fixed bottom-10 inset-x-0 max-w-2xl mx-auto z-50 flex items-center justify-between p-2 pl-4 pr-2 border border-white/[0.2] rounded-full bg-black/60 backdrop-blur-md shadow-2xl">

            {/* LOGO (GV) */}
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-orange-500 rounded-xl flex items-center justify-center overflow-hidden border border-white/[0.2]">
                    <span className="text-black font-bold font-[family-name:var(--font-pixel)] text-lg pt-1">
                        GV
                    </span>
                </div>
            </div>

            {/* LINKS DO MENU (Desktop) */}
            {/* Adicionei 'uppercase' para garantir que 'Início' vire 'INÍCIO' e combine com o design */}
            <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest text-neutral-300 uppercase">
                <Link href="#home" className="hover:text-white transition-colors">
                    {t.nav.home}
                </Link>

                <Link href="#projects" className="hover:text-white transition-colors">
                    {t.nav.projects}
                </Link>

                <Link href="#about" className="hover:text-white transition-colors">
                    {t.nav.about}
                </Link>
                <Link href="#career" className="hover:text-white transition-colors">
                    {t.nav.career}
                </Link>
            </div>

            {/* BOTÃO DE CONTATO */}
            <Link
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2 uppercase"
            >
                <span>{t.nav.contact}</span>
                <IconMail className="w-4 h-4" />
            </Link>

        </nav>
    );
};