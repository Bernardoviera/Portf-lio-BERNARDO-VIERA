"use client";

import { motion } from "framer-motion";
import { Monitor, Eye, Target, Package, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Point {
  icon: LucideIcon;
  title: string;
  description: string;
}

const points: Point[] = [
  {
    icon: Monitor,
    title: "Desenvolvimento responsivo",
    description:
      "A página é desenvolvida para funcionar bem em todos os dispositivos, do celular ao desktop, sem comprometer a experiência do visitante.",
  },
  {
    icon: Eye,
    title: "Foco em experiência do usuário",
    description:
      "O layout é pensado para que o visitante entenda a oferta com clareza, sem distrações que desviem da ação principal.",
  },
  {
    icon: Target,
    title: "Estrutura pensada para conversão",
    description:
      "Hierarquia de informação, copy e CTAs posicionados de forma estratégica para guiar a leitura e facilitar a decisão.",
  },
  {
    icon: Package,
    title: "Entrega organizada",
    description:
      "Processo definido desde o briefing até a entrega: etapas claras, prazo combinado e alinhamento antes de iniciar.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação rápida",
    description:
      "Disponível para alinhar detalhes, responder dúvidas e ajustar o que for necessário durante todo o projeto.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function WhyMe() {
  return (
    <section id="por-que" className="py-24 bg-[#0a0000]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">

          {/* Left — sticky header */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={FADE_UP}
          >
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.22em] block mb-4">
              Por que trabalhar comigo?
            </span>
            <h2
              className="font-heading font-black text-white leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Comprometimento
              <br />e organização
              <br />
              <span className="text-red-500">em cada projeto</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Não entrego só uma página. Entrego um processo claro, comunicação direta
              e um resultado que você pode apresentar com confiança.
            </p>
          </motion.div>

          {/* Right — list */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={FADE_UP}
                  className="flex items-start gap-4 py-6 border-b border-red-950/40 last:border-0 group"
                >
                  <div className="bg-red-500/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/18 transition-colors duration-300 mt-0.5">
                    <Icon size={17} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1.5">
                      {point.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
