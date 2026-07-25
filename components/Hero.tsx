"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-16">
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-500/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-500/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/[0.025] rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
            Landing Pages · Páginas de Venda · Páginas de Produto
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-heading text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-white">Tiro suas ideias do papel</span>
          <br />
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
            e transformo em páginas
          </span>
          <br />
          <span className="text-white">de venda profissionais.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Criação de landing pages, páginas de vendas e páginas de produto para{" "}
          <span className="text-slate-200 font-medium">
            assessorias, gestores de tráfego e negócios digitais
          </span>{" "}
          que precisam converter mais.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Falar comigo no WhatsApp
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl text-lg transition-all duration-200 w-full sm:w-auto justify-center group"
          >
            Conhecer meus serviços
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}
