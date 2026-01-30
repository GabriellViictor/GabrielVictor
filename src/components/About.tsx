"use client";
import React from "react";
import { IconMapPin } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import { SiNextdotjs, SiReact, SiFlutter, SiPython, SiPostgresql, SiTypescript, SiFigma } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export const About = () => {
    const { t } = useLanguage();

    const techStack = [
        { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
        { name: "React", icon: <SiReact size={40} className="text-[#61DAFB]" /> },
        { name: "Flutter", icon: <SiFlutter size={40} className="text-[#02569B]" /> },
        { name: "Python", icon: <SiPython size={40} className="text-[#3776AB]" /> },
        { name: "SQL", icon: <SiPostgresql size={40} className="text-[#336791]" /> },
        { name: "TypeScript", icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
        { name: "UX/UI", icon: <MdDesignServices size={40} className="text-[#FF61F6]" /> },
        { name: "Figma", icon: <SiFigma size={40} className="text-[#F24E1E]" /> },
    ];

    // Multiplicamos a lista para garantir que ela seja maior que qualquer tela (Wide Screen)
    // Isso evita "buracos" em monitores grandes
    const infiniteStack = [...techStack, ...techStack, ...techStack, ...techStack];

    return (
        // REMOVIDO 'px-4 md:px-10' DAQUI para permitir que o carrossel toque as bordas
        <section id="about" className="w-full py-20 relative z-20 overflow-hidden">

            {/* --- CARD PRINCIPAL --- */}
            {/* Adicionei 'px-4 md:px-10' AQUI para manter o card alinhado, mas não o carrossel */}
            <div className="px-4 md:px-10 mb-20">
                <div className="max-w-5xl mx-auto bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm flex flex-col min-h-[500px] relative z-10">

                    {/* 1. TOPO */}
                    <div className="p-8 md:p-12 pb-0">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            <span className="text-neutral-500 font-bold text-xs tracking-[0.2em] uppercase">
                                {t.about.label}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {t.about.title_start} <span className="text-blue-500">{t.about.title_blue}</span>
                        </h2>
                    </div>

                    {/* 2. MEIO */}
                    <div className="flex-grow flex items-center justify-center p-8 md:p-12">
                        <p className="text-neutral-300 text-sm md:text-xl leading-relaxed text-center max-w-4xl font-medium whitespace-pre-line">
                            {t.about.description}
                        </p>
                    </div>

                    {/* 3. RODAPÉ */}
                    <div className="bg-black/40 border-t border-white/5 p-4 md:px-8 flex flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="bg-orange-500 p-2 rounded-full">
                                <IconMapPin className="text-black w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider leading-none hidden sm:block">
                                    {t.about.location_label || "Located in"}
                                </span>
                                <span className="text-xs text-white font-[family-name:var(--font-pixel)]">
                                    {t.about.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* --- CARROSSEL INFINITO (EDGE TO EDGE) --- */}
            <div className="w-full relative">
                
                {/* Máscaras laterais (Fade out) */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none"></div>

                <div className="flex w-full overflow-hidden select-none">
                    
                    {/* LISTA 1 */}
                    <div className="flex min-w-full shrink-0 gap-16 md:gap-24 animate-scroll items-center justify-around py-4 pl-16 md:pl-24">
                        {infiniteStack.map((tech, index) => (
                            <div key={`list1-${index}`} className="flex flex-col items-center gap-3 group opacity-40 hover:opacity-100 transition-opacity duration-300">
                                <div className="grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* LISTA 2 (Cópia exata para o loop perfeito) */}
                    <div className="flex min-w-full shrink-0 gap-16 md:gap-24 animate-scroll items-center justify-around py-4 pl-16 md:pl-24" aria-hidden="true">
                        {infiniteStack.map((tech, index) => (
                            <div key={`list2-${index}`} className="flex flex-col items-center gap-3 group opacity-40 hover:opacity-100 transition-opacity duration-300">
                                <div className="grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};