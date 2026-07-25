"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function CtaSection() {
  return (
    <section className="py-28 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-amber-500/6 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.span variants={FADE_UP} className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
          Vamos trabalhar juntos
        </motion.span>

        <motion.h2
          variants={FADE_UP}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-[1.08]"
        >
          Tem um projeto em mente?
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
            Me chama no WhatsApp.
          </span>
        </motion.h2>

        <motion.p variants={FADE_UP} className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Apresente sua ideia ou briefing. Vou analisar o que você precisa e te dizer se consigo
          ajudar, sem compromisso.
        </motion.p>

        <motion.div variants={FADE_UP}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-200 hover:scale-105 shadow-2xl shadow-green-500/25 group"
          >
            <MessageCircle size={24} />
            Falar comigo no WhatsApp
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-600 text-sm mt-5">Respondo com agilidade. Sem enrolação.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
