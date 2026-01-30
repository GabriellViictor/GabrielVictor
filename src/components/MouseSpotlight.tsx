// src/components/MouseSpotlight.tsx
"use client"; // Este componente precisa rodar no navegador para acessar o mouse

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const MouseSpotlight = () => {
    // 1. Criamos valores de movimento que não causam re-renderização do React (melhor performance)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. Criamos versões "elásticas" desses valores para o movimento ser suave
    // damping: quanto maior, menos "bouncy" fica. stiffness: rigidez da mola.
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Função que atualiza a posição quando o mouse mexe
        const handleMouseMove = (e: MouseEvent) => {
            // Subtraímos metade do tamanho do spotlight (ex: 256px / 2 = 128)
            // para que o centro do brilho fique exatamente na ponta do mouse.
            mouseX.set(e.clientX - 128);
            mouseY.set(e.clientY - 128);
        };

        // Adiciona o "ouvinte" no navegador inteiro
        window.addEventListener("mousemove", handleMouseMove);

        // Limpeza: remove o ouvinte quando o componente desmonta (boa prática)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        // Esta é a "luz". É uma div fixa que ignora cliques.
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
            style={{
                // Conectamos a posição da div aos valores elásticos
                x: springX,
                y: springY,
            }}
        >
            {/* Aqui definimos o visual da luz.
         - w-[256px] h-[256px]: Tamanho da bola de luz
         - bg-gradient-to-r...: As cores da luz (roxo para azul)
         - blur-[100px]: O segredo! Um desfoque gigante que transforma a bola num brilho suave.
         - opacity-30: Para não ficar forte demais.
      */}
            <div className="h-[256px] w-[256px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-[100px] opacity-30" />
        </motion.div>
    );
};