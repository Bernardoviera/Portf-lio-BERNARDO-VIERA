"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import Magnetic from "@/components/Magnetic";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

// Masked line reveal — each headline line slides up from underneath
const lineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const lineReveal = {
  hidden: { y: "108%" },
  visible: { y: "0%", transition: { duration: 0.75, ease: EASE } },
};

const lines: { text: string; red?: boolean }[][] = [
  [{ text: "Tiro suas ideias" }],
  [{ text: "do papel e transformo" }],
  [{ text: "em " }, { text: "páginas de venda", red: true }],
  [{ text: "profissionais." }],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-16">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-red-600/7 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent hidden lg:block pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-28 w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeItem} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-red-500" />
          <span className="text-red-400 text-xs font-bold uppercase tracking-[0.22em]">
            Landing Pages · Páginas de Venda · Institucionais · Produto
          </span>
        </motion.div>

        {/* Headline — masked line-by-line reveal */}
        <motion.h1
          variants={lineContainer}
          className="font-heading font-black text-white leading-[0.95] tracking-tight mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          {lines.map((lineParts, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" variants={lineReveal}>
                {lineParts.map((part, j) =>
                  part.red ? (
                    <span key={j} className="text-red-500">{part.text}</span>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeItem}
          className="text-slate-400 text-lg sm:text-xl max-w-lg mb-12 leading-relaxed"
        >
          Para assessorias, gestores de tráfego e negócios digitais que precisam{" "}
          <span className="text-slate-200">converter mais.</span>
        </motion.p>

        {/* CTAs — magnetic */}
        <motion.div variants={fadeItem} className="flex flex-col sm:flex-row gap-4">
          <Magnetic>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={18} />
              Falar comigo no WhatsApp
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white border border-red-950/70 hover:border-red-500/40 px-8 py-4 rounded-xl text-base transition-all duration-200 group"
            >
              Conhecer meus serviços
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
