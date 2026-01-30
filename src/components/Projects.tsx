"use client";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { ProjectModal } from "@/components/Projects/ProjectModal";
import {
    IconBrandFigma,
    IconDeviceMobile,
} from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";

type ProjectData = {
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    role: string;
    timeline: string;
    features: string[];
    modalHeroImage: string;
};

export const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    // --- DADOS 1: Nossa Coop ---
    const nossaCoopData: ProjectData = {
        title: t.projects.nossa_coop.title,
        shortDescription: t.projects.nossa_coop.short_desc,
        fullDescription: t.projects.nossa_coop.full_desc,
        modalHeroImage: "/assets/Iphone 15 Pro.png",
        techStack: ["Flutter", "Node.js", "Firebase", "Figma"],
        role: t.projects.nossa_coop.role,
        timeline: "2023 - Present",
        features: t.projects.nossa_coop.features 
    };

    // --- DADOS 2: Coopanest BA (NOVO) ---
    const coopanestData: ProjectData = {
        title: t.projects.coopanest.title,
        shortDescription: t.projects.coopanest.short_desc,
        fullDescription: t.projects.coopanest.full_desc,
        modalHeroImage: "/assets/Iphone 16.png", // Imagem solicitada
        techStack: ["React Native", "TypeScript", "Supabase"], // Exemplo, ajuste se necessário
        role: t.projects.coopanest.role,
        timeline: "2024",
        features: t.projects.coopanest.features 
    };

    const projectsList = [
        // Card 1: Nossa Coop (Grande)
        {
            id: "nossacoop",
            title: (
                <div className="flex items-center gap-2">
                    <span>{t.projects.nossa_coop.title}</span>
                    <IconDeviceMobile className="h-5 w-5 text-neutral-400" />
                </div>
            ),
            description: t.projects.nossa_coop.short_desc,
            header: (
                <img
                    src="/assets/NossaCoop.webp"
                    alt="App"
                    className="w-full h-full object-cover"
                />
            ),
        },
        // Card 2: Figma
        {
            id: "figma",
            title: (
                <div className="flex items-center gap-2">
                    <span>{t.projects.figma.title}</span>
                    <IconBrandFigma className="h-5 w-5 text-neutral-400" />
                </div>
            ),
            description: t.projects.figma.short_desc,
            header: (
                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    alt="Dashboard"
                    className="w-full h-full object-cover"
                />
            ),
        },
        // Card 3: Coopanest BA (NOVO - Grande)
        {
            id: "coopanest",
            title: (
                <div className="flex items-center gap-2">
                    <span>{t.projects.coopanest.title}</span>
                    <IconDeviceMobile className="h-5 w-5 text-neutral-400" />
                </div>
            ),
            description: t.projects.coopanest.short_desc,
            header: (
                <img
                    // Usando a mesma imagem do modal ou outra capa se tiver
                    src="/assets/Frame 1.png" 
                    alt="App Coopanest"
                    className="w-full h-full object-cover" // Ajuste visual para celular
                />
            ),
        },
    ];

    return (
        <section id="projects" className="w-full py-20 bg-neutral-950">

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                data={selectedProject}
            />

            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h2 className="text-4xl md:text-6xl text-white font-[family-name:var(--font-pixel)] mb-4">
                    {t.projects.title} <span className="text-neutral-600">{t.projects.subtitle}</span>
                </h2>
                <p className="text-neutral-400 max-w-xl">
                    {t.projects.description}
                </p>
            </div>
            <BentoGrid className="max-w-7xl w-full mx-auto px-4">
                            {projectsList.map((item, i) => (
                                <BentoGridItem
                                    key={i}
                                    title={item.title}
                                    description={item.description}
                                    header={item.header}
                                    icon={null}
                                    
                                    // --- AQUI ESTÁ A MUDANÇA ---
                                    // Item 0 (Nossa Coop): col-span-2 (2/3 da tela)
                                    // Item 2 (Coopanest): col-span-3 (3/3 da tela - LARGURA TOTAL)
                                    // Outros (Figma): Padrão (1/3 da tela)
                                    className={
                                        i === 0 ? "md:col-span-2" : 
                                        i === 2 ? "md:col-span-3" : 
                                        ""
                                    }

                                    onClick={() => {
                                        if (item.id === "nossacoop") setSelectedProject(nossaCoopData);
                                        if (item.id === "coopanest") setSelectedProject(coopanestData);
                                    }}
                                />
                            ))}
                        </BentoGrid>

            <div className="w-full mt-16 flex justify-center">
                <p className="text-neutral-400 text-center text-lg whitespace-nowrap">
                    {t.projects.see_more}{" "}
                    <a
                        href="https://github.com/GabriellViictor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 font-bold hover:text-white transition-colors underline decoration-orange-500/30 hover:decoration-orange-500"
                    >
                        {t.projects.github}
                    </a>
                </p>
            </div>

        </section>
    );
};