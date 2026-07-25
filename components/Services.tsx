"use client";

import { motion } from "framer-motion";
import { Layout, TrendingUp, ShoppingBag, FileText, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}

const services: Service[] = [
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de captura estruturadas para apresentar uma oferta com clareza e direcionar o visitante para uma única ação: entrar em contato ou deixar os dados.",
    highlights: ["Estrutura focada em conversão", "Copy direto e objetivo", "Design responsivo"],
  },
  {
    icon: TrendingUp,
    title: "Páginas de Venda",
    description:
      "Páginas long-form com estrutura pensada para guiar a decisão de compra: apresentação da oferta, benefícios, prova social e chamadas para ação bem posicionadas.",
    highlights: ["Estrutura de copy completa", "Design e texto integrados", "Fluxo de leitura estratégico"],
  },
  {
    icon: ShoppingBag,
    title: "Páginas de Produto",
    description:
      "Apresentação visual e estratégica de produtos físicos ou digitais, com foco em destacar benefícios, reduzir dúvidas e facilitar a decisão de compra.",
    highlights: ["Apresentação visual do produto", "Seções de benefícios e FAQ", "CTA bem posicionado"],
  },
  {
    icon: FileText,
    title: "Copy Estratégico",
    description:
      "Texto estruturado para comunicar o valor da oferta com clareza, antecipar objeções do visitante e estimular a ação em cada etapa da página.",
    highlights: ["Texto orientado à oferta", "Tratamento de objeções", "Linguagem adequada ao público"],
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
            O que eu faço
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Páginas construídas para
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              comunicar e converter
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Cada entrega é pensada do zero: estrutura, design e texto trabalhados juntos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={FADE_UP}
                className="group bg-[#120000] border border-slate-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/5"
              >
                {/* Card index */}
                <span className="text-xs font-bold text-slate-700 font-heading mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors duration-300">
                  <Icon size={22} className="text-red-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={13} className="text-red-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
