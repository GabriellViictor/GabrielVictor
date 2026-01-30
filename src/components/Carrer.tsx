"use client";
import React from "react";
// 1. IMPORTAR O HOOK
import { useLanguage } from "@/context/LanguageContext";

export const Carrer = () => {
    // 2. PEGAR O TEXTO (t)
    const { t } = useLanguage();

    // 3. MOVER A LISTA PARA DENTRO (Para traduzir os cargos)
    const companies = [
        {
            name: "Sofiti",
            role: t.career.roles.mobile_dev, // Traduzido
            logo: "/assets/Sofiti.jpg"
        },
        {
            name: "RR Sane",
            role: t.career.roles.intern, // Traduzido
            logo: "/assets/rr_sane_logo.jpg"
        },
    ];

    return (
        <section id="carrer" className="py-20 bg-neutral-950 flex flex-col items-center">

            {/* Cabeçalho */}
            <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-start mb-16 px-4">
                <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-pixel)] text-white mb-8 md:mb-0 uppercase">
                    {/* TÍTULO TRADUZIDO */}
                    {t.career.title}
                </h2>
                <p className="text-neutral-400 max-w-md text-lg md:text-right leading-relaxed">
                    {/* DESCRIÇÃO TRADUZIDA */}
                    {t.career.description}
                </p>
            </div>

            {/* GRID DE CARREIRA */}
            <div className="max-w-7xl w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="group relative w-full h-[300px] bg-neutral-900 border border-white/[0.1] rounded-[2rem] flex flex-col items-center justify-center overflow-hidden hover:bg-neutral-800 transition-all duration-500 hover:border-white/20"
                        >

                            {/* Logo da Empresa */}
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-24 w-auto object-contain mb-6 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                            />

                            {/* Nome e Cargo */}
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-bold tracking-wide mb-1">
                                    {company.name}
                                </h3>
                                <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest group-hover:text-neutral-300 transition-colors">
                                    {company.role}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};