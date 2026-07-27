"use client";

import { motion } from "framer-motion";
import { Layout, TrendingUp, ShoppingBag, FileText, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de captura estruturadas para apresentar uma oferta com clareza e direcionar o visitante para uma única ação: entrar em contato ou deixar os dados.",
    tags: ["Estrutura de conversão", "Copy direto", "Design responsivo"],
  },
  {
    icon: TrendingUp,
    title: "Páginas de Venda",
    description:
      "Páginas long-form com estrutura pensada para guiar a decisão de compra: apresentação da oferta, benefícios, prova social e chamadas para ação bem posicionadas.",
    tags: ["Copy completa", "Design + texto integrados", "Fluxo estratégico"],
  },
  {
    icon: ShoppingBag,
    title: "Páginas de Produto",
    description:
      "Apresentação visual e estratégica de produtos físicos ou digitais, com foco em destacar benefícios, reduzir dúvidas e facilitar a decisão de compra.",
    tags: ["Apresentação visual", "FAQ e objeções", "CTA bem posicionado"],
  },
  {
    icon: FileText,
    title: "Copy Estratégico",
    description:
      "Texto estruturado para comunicar o valor da oferta com clareza, antecipar objeções do visitante e estimular a ação em cada etapa da página.",
    tags: ["Orientado à oferta", "Tratamento de objeções", "Linguagem do público"],
  },
  {
    icon: Globe,
    title: "Páginas Institucionais",
    description:
      "Apresentação profissional da sua marca, empresa ou serviço. Estrutura pensada para transmitir credibilidade, comunicar diferenciais e criar uma presença digital sólida.",
    tags: ["Apresentação de marca", "Credibilidade", "Design profissional"],
  },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0000]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <span className="text-red-500 text-xs font-bold uppercase tracking-[0.22em]">
            O que eu faço
          </span>
          <h2
            className="font-heading font-black text-white mt-3 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Páginas construídas para
            <br />
            <span className="text-red-500">comunicar e converter</span>
          </h2>
        </motion.div>

        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={FADE_UP}
                whileHover="hover"
                className="group relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 py-10 border-b border-red-950/40 last:border-0"
              >
                <motion.div
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 0 },
                    hover: { scaleX: 1, transition: { duration: 0.45, ease: EASE } },
                  }}
                  className="absolute bottom-0 left-0 h-px bg-red-500/50 w-full pointer-events-none"
                  style={{ originX: 0 }}
                />
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/18 transition-colors duration-300">
                    <Icon size={19} className="text-red-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="font-heading font-bold text-white text-xl">{service.title}</h3>
                    <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-red-400/55 border border-red-950/60 px-2.5 py-1 rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
