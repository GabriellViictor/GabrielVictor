"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        title: string;
        shortDescription: string;
        fullDescription: string;
        techStack: string[];
        role: string;
        timeline: string;
        features: string[];
        modalHeroImage: string;
    } | null;
}

export const ProjectModal = ({ isOpen, onClose, data }: ProjectModalProps) => {
    const { t } = useLanguage();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    if (!isOpen || !data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">

                    {/* Fundo Escuro */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* A "Mini Página" */}
                    <motion.div
                        initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-[95%] h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Botão Fechar */}
                        <button onClick={onClose} className="absolute top-6 right-6 z-50 bg-neutral-900 hover:bg-neutral-700 text-white p-3 rounded-full transition-all">
                            <IconX className="w-5 h-5" />
                        </button>

                        <div className="w-full md:w-1/2 bg-neutral-100 flex items-center justify-center p-4 relative overflow-hidden">
                            {/* Aumentei um pouco a bolinha de luz atrás também para acompanhar */}
                            <div className="absolute w-[1000px] h-[1000px] bg-white rounded-full blur-3xl opacity-60" />

                            <motion.img
                                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                src={data.modalHeroImage}
                                alt={data.title}
                                className="relative z-10 w-full max-w-[1000px] h-auto object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* --- LADO DIREITO: DESCRIÇÃO --- */}
                        <div className="w-full md:w-1/2 p-10 md:p-20 overflow-y-auto bg-white">
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>

                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                    <span className="text-neutral-500 font-bold text-xs tracking-widest uppercase">
                                        {t.projects.modal.badge}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 font-[family-name:var(--font-pixel)]">
                                    {data.title}
                                </h1>

                                <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                                    {data.shortDescription}
                                </p>

                                {/* Dados Rápidos */}
                                <div className="grid grid-cols-2 gap-6 mb-10 border-t border-b border-neutral-100 py-6">
                                    <div>
                                        <h4 className="text-neutral-900 font-bold text-sm uppercase">
                                            {t.projects.modal.role}
                                        </h4>
                                        <p className="text-neutral-500 text-sm">{data.role}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-neutral-900 font-bold text-sm uppercase">
                                            {t.projects.modal.timeline}
                                        </h4>
                                        <p className="text-neutral-500 text-sm">{data.timeline}</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                    {t.projects.modal.challenge}
                                </h3>
                                <p className="text-neutral-500 leading-relaxed whitespace-pre-line mb-8">
                                    {data.fullDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {data.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-lg text-xs font-bold">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};