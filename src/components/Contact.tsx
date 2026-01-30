"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { IconCheck, IconX } from "@tabler/icons-react";
// 1. IMPORTAR O EMAILJS
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [spamError, setSpamError] = useState("");

    const SPAM_COOLDOWN = 120000; // 2 minutos

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSpamError("");

        // --- ÁREA DE DEBUG (CONSOLE LOGS) ---
        console.log("--- TENTANDO ENVIAR EMAIL ---");
        console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
        console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
        console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        console.log("Dados do Form:", formData);
        // ------------------------------------

        if (!formData.firstName || !formData.email || !formData.message) {
            alert("Por favor, preencha os campos obrigatórios.");
            return;
        }

        // --- PROTEÇÃO ANTI-SPAM ---
        const lastSent = localStorage.getItem("lastEmailSent");
        if (lastSent) {
            const timeSinceLastSend = Date.now() - parseInt(lastSent);
            if (timeSinceLastSend < SPAM_COOLDOWN) {
                const minutesLeft = Math.ceil((SPAM_COOLDOWN - timeSinceLastSend) / 60000);
                setSpamError(`Aguarde ${minutesLeft} minuto(s) para enviar outra mensagem.`);
                return;
            }
        }

        setIsLoading(true);

        // --- PREPARANDO OS DADOS PARA O TEMPLATE DO EMAILJS ---
        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: formData.message,
        };

        try {
            // --- ENVIO REAL ---
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            // Sucesso!
            localStorage.setItem("lastEmailSent", Date.now().toString());
            setShowModal(true);
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
            
            setTimeout(() => setShowModal(false), 6000);

        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Ocorreu um erro ao enviar. Verifique o console (F12) para mais detalhes.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
            <div className="relative z-10 max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* COLUNA ESQUERDA */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-6xl md:text-8xl text-white font-[family-name:var(--font-pixel)] leading-tight whitespace-pre-line">
                        {t.contact.title}
                    </h2>
                    <p className="text-neutral-300 text-lg max-w-md font-sans">
                        {t.contact.description}
                    </p>
                </div>

                {/* COLUNA DIREITA: Formulário */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {spamError && (
                            <div className="bg-red-500/10 border border-red-500/50 p-3 rounded-lg flex items-center gap-2 text-red-200 text-sm animate-fadeIn">
                                <IconX size={16} />
                                {spamError}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-neutral-400 uppercase">
                                    {t.contact.form.first_name}
                                </label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder={t.contact.form.placeholders.first}
                                    className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-neutral-400 uppercase">
                                    {t.contact.form.last_name}
                                </label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder={t.contact.form.placeholders.last}
                                    className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-neutral-400 uppercase">
                                {t.contact.form.email}
                            </label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder={t.contact.form.placeholders.email}
                                className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-neutral-400 uppercase">
                                {t.contact.form.message}
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                                placeholder={t.contact.form.placeholders.message}
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className={`
                                font-bold py-4 rounded-xl transition-all uppercase tracking-wide flex justify-center items-center gap-2
                                ${isLoading 
                                    ? "bg-neutral-600 cursor-not-allowed text-neutral-400" 
                                    : "bg-white text-black hover:bg-neutral-200 active:scale-95"}
                            `}
                        >
                            {isLoading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-neutral-400 border-t-white rounded-full animate-spin"></span>
                                    Enviando...
                                </>
                            ) : (
                                t.contact.form.submit
                            )}
                        </button>

                    </form>
                </div>
            </div>

            {/* MODAL DE SUCESSO */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
                    <div className="bg-neutral-900 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl max-w-sm w-full relative flex flex-col items-center text-center animate-slideUp">
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                        >
                            <IconX size={20} />
                        </button>

                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                            <IconCheck size={40} stroke={3} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                            Mensagem Enviada!
                        </h3>
                        
                        {/* AQUI AJUSTEI O NOME DINÂMICO TAMBÉM */}
                        <p className="text-neutral-400 mb-6">
                            Obrigado pelo contato, {formData.firstName || "Visitante"}! Recebi sua mensagem e retornarei em breve.
                        </p>

                        <button 
                            onClick={() => setShowModal(false)}
                            className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-neutral-200 transition-colors uppercase text-sm tracking-widest"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};