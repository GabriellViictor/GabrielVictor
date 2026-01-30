"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
    const { t } = useLanguage();

    return (
        // MUDANÇA 1: h-screen (trava na altura da tela) e p-2 (diminui a margem preta em volta)
        <section id="home" className="w-full h-screen p-2 md:p-4 flex items-center justify-center bg-neutral-950">

            {/* MUDANÇA 2: Removi 'max-w-5xl' e mudei altura para 'h-full'. Agora ele estica. */}
            <div className="w-full h-full bg-[#F2F2F2] rounded-[2rem] md:rounded-[3rem] relative overflow-hidden flex flex-col justify-center px-6 md:px-24 py-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">

                {/* Decoração de "Terminal" */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 flex gap-3">
                    <div className="w-4 h-4 rounded-full bg-red-400 border border-black/10"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-400 border border-black/10"></div>
                    <div className="w-4 h-4 rounded-full bg-green-400 border border-black/10"></div>
                </div>

                <div className="flex flex-col items-start gap-8 mt-12 max-w-7xl">

                    {/* Linha de Comando 1: Quem */}
                    <div className="flex items-baseline gap-4 flex-wrap">
                        <span className="text-orange-500 font-[family-name:var(--font-pixel)] text-2xl md:text-3xl"></span>
                        <span className="text-neutral-500 font-bold tracking-widest text-sm md:text-base font-sans uppercase">
                            {t.hero.location_tag}
                        </span>
                    </div>

                    {/* Nome Gigante - Aumentei um pouco mais para preencher o espaço extra */}
                    <h1 className="text-[15vw] md:text-[11rem] text-black uppercase font-[family-name:var(--font-pixel)] leading-[0.85] tracking-tighter">
                        GABRIEL <br /> VICTOR<span className="animate-pulse text-orange-500">_</span>
                    </h1>

                    {/* Linha de Comando 2: O que */}
                    <div className="flex items-start gap-4 mt-4 md:mt-8 max-w-2xl">
                        <span className="text-orange-500 font-[family-name:var(--font-pixel)] text-2xl md:text-3xl shrink-0"></span>
                        <p className="text-neutral-800 text-lg md:text-2xl font-medium leading-relaxed font-[family-name:var(--font-syne)]">
                            {t.hero.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};