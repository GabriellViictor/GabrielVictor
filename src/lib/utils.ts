// src/lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Esta função combina classes condicionalmente (clsx) e resolve conflitos (twMerge)
// Ex: se você passar "bg-red-500" e depois "bg-blue-500", o twMerge garante que o azul vença.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}