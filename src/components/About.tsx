"use client";
import React from "react";
import { IconMapPin, IconApi, IconServer } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import { 
    SiNextdotjs, SiReact, SiFlutter, SiPython, SiPostgresql, SiTypescript, SiFigma
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export const About = () => {
    const { t } = useLanguage();

    const tools = [
        { name: "Figma", desc: t.about.stacks.tools.figma, icon: <SiFigma size={22} className="text-[#F24E1E]" /> },
        { name: "Flutter", desc: t.about.stacks.tools.flutter, icon: <SiFlutter size={22} className="text-[#02569B]" /> },
        { name: "API REST", desc: t.about.stacks.tools.api, icon: <IconApi size={22} className="text-white" /> },
        { name: "TOTVS", desc: t.about.stacks.tools.totvs, icon: <IconServer size={22} className="text-[#008CA7]" /> },
        { name: "TypeScript", desc: t.about.stacks.tools.typescript, icon: <SiTypescript size={22} className="text-[#3178C6]" /> },
        { name: "Python", desc: t.about.stacks.tools.python, icon: <SiPython size={22} className="text-[#3776AB]" /> },
    ];

    const techStack = [
        { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
        { name: "React", icon: <SiReact size={32} className="text-[#61DAFB]" /> },
        { name: "Flutter", icon: <SiFlutter size={32} className="text-[#02569B]" /> },
        { name: "Python", icon: <SiPython size={32} className="text-[#3776AB]" /> },
        { name: "SQL", icon: <SiPostgresql size={32} className="text-[#336791]" /> },
        { name: "TypeScript", icon: <SiTypescript size={32} className="text-[#3178C6]" /> },
        { name: "UX/UI", icon: <MdDesignServices size={32} className="text-[#FF61F6]" /> },
        { name: "Figma", icon: <SiFigma size={32} className="text-[#F24E1E]" /> },
    ];

    // Mantemos uma lista base simples, pois vamos duplicá-la explicitamente no JSX
    const infiniteStack = [...techStack, ...techStack];

    return (
        <section id="about" className="w-full py-20 relative z-20 overflow-hidden bg-transparent">

            {/* --- CARD PRINCIPAL --- */}
            <div className="px-4 md:px-10 mb-16">
                <div className="max-w-[1280px] mx-auto bg-neutral-900/40 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md shadow-2xl">
                    <div className="p-8 md:p-16">
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
                                <span className="text-neutral-500 font-bold text-[10px] tracking-[0.4em] uppercase">
                                    {t.about.label}
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                                {t.about.title_start} <br />
                                <span className="text-blue-500">{t.about.title_blue}</span>
                            </h2>
                        </div>
                        <div className="w-full space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                            <p className="w-full whitespace-pre-line text-justify md:text-left">
                                {t.about.description}
                            </p>
                            <div className="pt-2">
                                <p className="text-neutral-400 border-l-2 border-blue-500/30 pl-8 italic md:text-2xl w-full">
                                    {t.hero.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/[0.02] border-t border-white/5 p-6 md:px-16 flex flex-row items-center justify-start">
                        <div className="flex items-center gap-4">
                            <div className="bg-neutral-800 p-2.5 rounded-xl border border-white/10">
                                <IconMapPin className="text-blue-500 w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-[0.3em] mb-0.5">
                                    {t.about.location_label}
                                </span>
                                <span className="text-sm text-white font-semibold tracking-wide">
                                    {t.about.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- GRID "MY STACKS" --- */}
            <div className="px-4 md:px-10 mb-16">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-10 px-4">
                        <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">
                            {t.about.stacks.title}
                        </h3>
                        <p className="text-neutral-500 text-base max-w-2xl">
                            {t.about.stacks.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {tools.map((tool, index) => (
                            <div 
                                key={index}
                                className="group flex items-center gap-5 p-6 rounded-[2rem] bg-[#0E1016] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-all duration-500 cursor-default shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-all duration-500 shrink-0 shadow-2xl">
                                    {tool.icon}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-white font-bold text-base tracking-tight">
                                        {tool.name}
                                    </span>
                                    <span className="text-neutral-500 text-[11px] leading-snug font-medium uppercase tracking-wider">
                                        {tool.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CARROSSEL INFINITO (CORRIGIDO) --- */}
            <div className="w-full relative py-12 border-y border-white/[0.03] bg-white/[0.01] overflow-hidden flex">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none"></div>

                {/* Lista 1: Animação normal */}
                <div className="flex min-w-full shrink-0 gap-24 animate-scroll items-center justify-around px-12">
                    {infiniteStack.map((tech, index) => (
                        <div key={`list1-${index}`} className="flex flex-col items-center gap-4 group transition-all duration-500 text-center min-w-[100px]">
                            <div className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                {tech.icon}
                            </div>
                            <span className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Lista 2: Cópia exata para o loop perfeito (aria-hidden para acessibilidade) */}
                <div className="flex min-w-full shrink-0 gap-24 animate-scroll items-center justify-around px-12" aria-hidden="true">
                    {infiniteStack.map((tech, index) => (
                        <div key={`list2-${index}`} className="flex flex-col items-center gap-4 group transition-all duration-500 text-center min-w-[100px]">
                            <div className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                {tech.icon}
                            </div>
                            <span className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};