"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function CtaSection() {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden">
      {/* Strong red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />

      <motion.div
        className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Eyebrow with flanking lines */}
        <motion.div variants={FADE_UP} className="flex items-center justify-center gap-4 mb-10">
          <div className="w-14 h-px bg-red-500/50" />
          <span className="text-red-400 text-xs font-bold uppercase tracking-[0.22em]">
            Vamos trabalhar juntos
          </span>
          <div className="w-14 h-px bg-red-500/50" />
        </motion.div>

        <motion.h2
          variants={FADE_UP}
          className="font-heading font-black text-white leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          Tem um projeto
          <br />
          em mente?
          <br />
          <span className="text-red-500">Me chama.</span>
        </motion.h2>

        <motion.p variants={FADE_UP} className="text-slate-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          Apresente sua ideia ou briefing. Vou analisar o que você precisa e te
          dizer se consigo ajudar, sem compromisso.
        </motion.p>

        <motion.div variants={FADE_UP}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-200 hover:scale-105 shadow-2xl shadow-green-500/20 group"
          >
            <MessageCircle size={22} />
            Falar comigo no WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-700 text-sm mt-6">Respondo com agilidade. Sem enrolação.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
