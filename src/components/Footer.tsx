"use client";
import React from "react";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
// 1. IMPORTAR O HOOK
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
    // 2. PEGAR O TEXTO (t)
    const { t } = useLanguage();

    return (
        <footer id="footer" className="w-full bg-neutral-950 pt-20 pb-10 px-4 md:px-10 border-t border-white/10 relative overflow-hidden">

            {/* Container Principal */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 mb-20">

                {/* COLUNA 1: Email */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                        {/* Texto Traduzido */}
                        {t.footer.stay_connected}
                    </h3>
                    <a
                        href="mailto:gabrielteixeira@edu.univali.br"
                        className="text-2xl md:text-3xl font-[family-name:var(--font-pixel)] text-white hover:text-orange-500 transition-colors"
                    >
                        GABRIELVICTORGT129@<br />GMAIL.COM
                    </a>
                    <p className="text-neutral-500 text-sm max-w-xs mt-2">
                        {/* Descrição Traduzida */}
                        {t.footer.description}
                    </p>
                </div>

                {/* COLUNA 2: Navegação Rápida */}
                <div className="flex flex-col gap-4 md:items-center">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
                            {t.footer.navigation}
                        </h3>
                        {/* Links Traduzidos usando o objeto 'nav' */}
                        <Link href="#home" className="text-neutral-300 hover:text-white transition-colors">
                            {t.nav.home}
                        </Link>
                        <Link href="#about" className="text-neutral-300 hover:text-white transition-colors">
                            {t.nav.about}
                        </Link>
                        <Link href="#projects" className="text-neutral-300 hover:text-white transition-colors">
                            {t.nav.projects}
                        </Link>
                        <Link href="#carrer" className="text-neutral-300 hover:text-white transition-colors">
                            {t.nav.career}
                        </Link>
                    </div>
                </div>

                {/* COLUNA 3: Social Media */}
                <div className="flex flex-col gap-4 md:items-end">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                        {t.footer.social}
                    </h3>

                    <div className="flex gap-4">
                        {/* GITHUB */}
                        <a
                            href="https://github.com/GabriellViictor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
                        >
                            <IconBrandGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://www.linkedin.com/in/gabrielviictor/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10 hover:bg-[#0077B5] hover:text-white hover:border-transparent transition-all duration-300 group"
                        >
                            <IconBrandLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>

                        {/* EMAIL */}
                        <a
                            href="mailto:gabrielteixeira@edu.univali.br"
                            className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300 group"
                        >
                            <IconMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>


        </footer>
    );
};