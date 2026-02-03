"use client";
import React, { useState } from "react";
import { ProjectModal } from "@/components/Projects/ProjectModal";
import { useLanguage } from "@/context/LanguageContext";

// Tipagem
type ProjectFullData = {
    id: string;
    project_counter: string;
    title: string;
    project_subtitle: string;
    stats?: { value: string; label: string }[];
    year: string;
    role: string;
    services: string[];
    short_desc: string;
    full_desc: string;
    techStack?: string[];
    features?: string[];
    modalHeroImage: string;
    cardImage: string;
    backgroundImage: string;
};

// Componente do Card Individual
const ProjectCard = ({ 
    project, 
    index, 
    total, 
    onClick 
}: { 
    project: ProjectFullData, 
    index: number, 
    total: number,
    onClick: (p: ProjectFullData) => void 
}) => {
    const topOffset = 100 + (index * 40); 
    
    return (
        <div 
            className={`sticky mb-24 w-full max-w-7xl mx-auto`}
            style={{ top: `${topOffset}px` }}
        >
            <div 
                onClick={() => onClick(project)}
                className={`
                    group relative bg-[#0E1016] border border-white/10 rounded-[3rem] overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-500 
                    p-8 flex flex-col md:flex-row gap-6 md:p-12 md:gap-8 shadow-2xl min-h-[600px]
                `}
            >
                {/* --- 1. BANNER DE FUNDO --- */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img 
                        src={project.backgroundImage} 
                        alt="" 
                        className="w-full h-full object-cover blur-[80px] scale-110 opacity-60 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-950/50 group-hover:bg-neutral-950/40 transition-colors duration-500" />
                </div>

                {/* --- CONTEÚDO --- */}

                {/* COLUNA 1: Detalhes (Esquerda) */}
                <div className="relative z-10 flex flex-col justify-between h-full md:w-1/4 order-2 md:order-1 py-2">
                    
                    {/* 1. TOPO: Título Principal (AJUSTADO PARA NÃO QUEBRAR) */}
                    <div>
                        {/* whitespace-nowrap impede a quebra de linha */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter group-hover:text-white/90 transition-colors drop-shadow-xl whitespace-nowrap">
                            {project.title}
                        </h2>
                    </div>
                    
                    {/* 2. MEIO: Estatísticas */}
                    <div className="flex flex-col gap-6 justify-center my-6">
                        {project.stats && project.stats.map((stat, i) => (
                            <div key={i}>
                                <p className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md">{stat.value}</p>
                                <p className="text-neutral-300 text-sm font-medium drop-shadow-md tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* 3. BAIXO: Subtítulo/Descrição */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                            {project.project_subtitle}
                        </h3>
                    </div>
                </div>

                {/* COLUNA 2: Imagem Central */}
                <div className="relative z-10 md:flex-[1.5] h-[350px] md:h-auto order-1 md:order-2 flex items-center justify-center pointer-events-none">
                    <img
                        src={project.cardImage}
                        alt={project.title}
                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 scale-125 group-hover:scale-135"
                    />
                </div>

                {/* COLUNA 3: Informações Técnicas (Direita) */}
                <div className="relative z-10 flex flex-col justify-between h-full md:w-1/5 order-3 text-left md:text-right py-2">
                    
                    <div>
                        <h4 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md">Year</h4>
                        <p className="text-white text-xl font-medium drop-shadow-md">{project.year}</p>
                    </div>

                    <div className="flex flex-col justify-center my-6">
                        <h4 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md">Role</h4>
                        <p className="text-white text-xl font-medium drop-shadow-md leading-tight">{project.role}</p>
                    </div>

                    <div>
                        <h4 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-3 drop-shadow-md">Services</h4>
                        <ul className="flex flex-col gap-2 items-start md:items-end">
                            {project.services.map((service, i) => (
                                <li key={i} className="text-white/90 font-medium text-sm drop-shadow-md">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<ProjectFullData | null>(null);

    const projectsList: ProjectFullData[] = [
        {
            ...t.projects.nossa_coop,
            id: "nossa_coop",
            cardImage: "/assets/iPhone-coopanest.png", 
            backgroundImage: "/assets/nossacoop.webp",
            modalHeroImage: "/assets/iphone_15_pro.png"
        },
        {
            ...t.projects.coopanest,
            id: "coopanest",
            cardImage: "/assets/iphone_15.png",
            backgroundImage: "/assets/frame_1.png", 
            modalHeroImage: "/assets/iphone_16.png"
        },
    ];

    const modalData = selectedProject ? {
       title: selectedProject.title,
       shortDescription: selectedProject.short_desc,
       fullDescription: selectedProject.full_desc,
       techStack: selectedProject.techStack || selectedProject.services || [],
       role: selectedProject.role,
       timeline: selectedProject.year,
       features: selectedProject.features || [],
       modalHeroImage: selectedProject.modalHeroImage
    } : null;

    return (
        <section id="projects" className="w-full bg-neutral-950 relative pt-24 pb-48">
            
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                data={modalData}
            />

            <div className="relative max-w-7xl mx-auto px-8 mb-32 text-center">
                 <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[10rem] font-bold text-neutral-800/30 uppercase tracking-tighter whitespace-nowrap pointer-events-none blur-sm">
                    {t.projects.title}
                </h2>
                <h2 className="relative z-10 text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">
                    {t.projects.title}
                </h2>
                <p className="relative z-10 mt-6 text-neutral-400 max-w-xl mx-auto text-lg">
                    {t.projects.description}
                </p>
            </div>

            <div className="px-4">
                {projectsList.map((project, index) => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                        index={index}
                        total={projectsList.length}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            <div className="w-full mt-20 flex justify-center">
                <p className="text-neutral-500 text-center text-sm uppercase tracking-widest">
                    {t.projects.see_more}{" "}
                    <a
                        href="https://github.com/GabriellViictor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold hover:text-purple-400 transition-colors border-b border-white/20 hover:border-purple-400 ml-2 pb-0.5"
                    >
                        {t.projects.github}
                    </a>
                </p>
            </div>

        </section>
    );
};