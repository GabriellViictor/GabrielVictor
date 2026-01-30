"use client"; // <--- ÚNICA ADIÇÃO RECOMENDADA (Para garantir interatividade do onClick)
import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-2xl transition duration-500 shadow-none bg-black border border-white/[0.1] h-[400px]",
                onClick ? "cursor-pointer" : "cursor-default",
                className
            )}
        >
            {/* 1. A Imagem de Fundo (Header) */}
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover/bento:scale-110">
                {header}
            </div>

            {/* 2. O Degradê */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

            {/* 3. O Conteúdo (Texto) */}
            <div className="absolute bottom-0 left-0 p-6 transition-all duration-300 group-hover/bento:translate-y-[-8px]">

                {/* Ícone */}
                {icon && (
                    <div className="mb-3 opacity-70 bg-black/50 w-fit p-2 rounded-full backdrop-blur-sm border border-white/10">
                        {icon}
                    </div>
                )}

                {/* Título - Já recebe o texto traduzido do Projects.tsx */}
                <div className="font-bold text-white text-2xl mb-1 uppercase tracking-wide">
                    {title}
                </div>

                {/* Descrição - Já recebe o texto traduzido do Projects.tsx */}
                <div className="font-normal text-neutral-300 text-sm line-clamp-2">
                    {description}
                </div>
            </div>
        </div>
    );
};