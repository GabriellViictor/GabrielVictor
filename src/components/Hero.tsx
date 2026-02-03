"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  IconCurlyLoop, 
  IconMoodSmile, 
} from "@tabler/icons-react";
import { motion, Variants } from "framer-motion"; // Importe Variants

export const Hero = () => {
    const { t } = useLanguage();

    // 1. Tipagem explícita para o container pai
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
        },
    };

    // 2. Tipagem explícita para as letras
    // O segredo aqui é garantir que 'type' seja lido como o literal "spring"
    const letterVariants: Variants = {
        hidden: { 
            y: "100%", 
            opacity: 0 
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring", // TypeScript agora aceita pois Variants valida strings literais
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const AnimatedTitle = ({ text }: { text: string }) => (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex overflow-hidden"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    variants={letterVariants}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );

    return (
        <section id="home" className="relative w-full h-screen bg-transparent flex flex-col justify-between overflow-hidden pt-20">
            
            {/* GRADES DE FUNDO */}
            <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 border-t border-white/5 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-r border-white/5 h-full last:border-r-0" />
                ))}
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4">
                
                {/* LINHA 1 */}
                <div className="flex items-center gap-4 md:gap-8 py-2">
                    <h1 className="text-[10vw] md:text-[7rem] lg:text-[9rem] font-black text-white leading-none tracking-tighter uppercase font-[family-name:var(--font-pixel)] md:font-sans">
                       <AnimatedTitle text={t.hero.role_top || "WEB & MOBILE"} />
                    </h1>
                    
                    <motion.div 
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 12 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="hidden md:flex bg-orange-500 text-black rounded-full p-2 shrink-0"
                    >
                        <IconMoodSmile size={60} stroke={2.5} />
                    </motion.div>
                </div>

                {/* LINHA 2 */}
                <div className="flex items-center gap-4 md:gap-8 mt-[-10px] md:mt-[-20px] py-2">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hidden md:block text-neutral-500 shrink-0"
                    >
                        <IconCurlyLoop size={100} stroke={1} />
                    </motion.div>

                    <h1 className="text-[10vw] md:text-[7rem] lg:text-[9rem] font-black text-white leading-none tracking-tighter uppercase">
                        <AnimatedTitle text={t.hero.role_bottom || "DEVELOPER"} />
                    </h1>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="relative w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-neutral-800 ml-[-10px] md:ml-4 grayscale hover:grayscale-0 transition-all duration-500 shrink-0"
                    >
                        <img 
                            src="https://github.com/GabriellViictor.png" 
                            alt="Gabriel Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* DESCRIÇÃO */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="mt-8 max-w-lg text-center text-neutral-400 text-sm md:text-lg leading-relaxed font-medium"
                >
                    {t.hero.bio || "Hello there! I'm Gabriel - a developer crafting user-focused designs."}
                </motion.p>

            </div>

            <div className="relative z-20 w-full border-t border-white/10 bg-neutral-950/30 backdrop-blur-sm h-20" />
        </section>
    );
};