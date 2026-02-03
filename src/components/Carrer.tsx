"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Carrer = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            company: "Sofiti",
            role: t.career.roles.mobile_dev, 
            logo: "/assets/Sofiti.jpg",
            date: "2024 - Present",
            description: "Desenvolvimento de aplicativos móveis com foco em performance, criando interfaces responsivas e integrando com APIs REST.", 
            tech: ["Flutter", "Dart", "Firebase", "Git"]
        },
        {
            company: "RR Sane",
            role: t.career.roles.intern, 
            logo: "/assets/rr_sane_logo.jpg",
            date: "2023 - 2024",
            description: "Suporte ao desenvolvimento de sistemas internos, manutenção de código e auxílio na implementação de novas features.",
            tech: ["JavaScript", "HTML/CSS", "Suporte", "SQL"]
        },
    ];

    return (
        <section id="career" className="py-20 bg-neutral-950 flex flex-col items-center">

            {/* Cabeçalho */}
            <div className="max-w-6xl w-full mb-12 px-4">
                <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-pixel)] text-white mb-4 uppercase">
                    {t.career.title}
                </h2>
                <p className="text-neutral-400 max-w-lg text-lg leading-relaxed">
                    {t.career.description}
                </p>
            </div>

            {/* GRID QUADRADO */}
            <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {experiences.map((item, index) => (
                    <div 
                        key={index} 
                        // MUDANÇA 1: Borda no hover agora é branca (white/20) em vez de roxa
                        className="group bg-[#0E1016] border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]"
                    >
                        {/* MUDANÇA 2: Brilho de fundo agora é neutro (white) */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>

                        {/* TOPO: Logo + Data */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-white p-1">
                                <img 
                                    src={item.logo} 
                                    alt={item.company} 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            
                            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-neutral-400 font-medium">
                                {item.date}
                            </span>
                        </div>

                        {/* MEIO: Textos */}
                        <div className="mb-8">
                            {/* MUDANÇA 3: Removi o hover:text-purple-400. Fica sempre branco. */}
                            <h3 className="text-2xl font-bold text-white mb-1 transition-colors">
                                {item.role}
                            </h3>
                            <p className="text-blue-400 font-medium text-sm mb-4">
                                {item.company}
                            </p>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* BASE: Tecnologias */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {item.tech.map((tech, i) => (
                                <span 
                                    key={i} 
                                    // MUDANÇA 4: Hover nas tags agora fica branco (neutro)
                                    className="px-3 py-1 bg-[#1A1D26] border border-white/5 text-neutral-300 text-xs rounded-full font-medium group-hover:border-white/20 group-hover:text-white transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};