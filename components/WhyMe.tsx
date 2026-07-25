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
      "Processo definido desde o briefing até a entrega: etapas claras, prazo combinado e alinhamento antes de iniciar o desenvolvimento.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação rápida",
    description:
      "Disponível para alinhar detalhes, responder dúvidas e ajustar o que for necessário durante todo o andamento do projeto.",
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function WhyMe() {
  return (
    <section id="por-que" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Por que trabalhar comigo?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Comprometimento e organização
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              em cada projeto
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Não entrego só uma página. Entrego um processo claro, comunicação direta e um
            resultado que você pode apresentar com confiança.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
                className="flex items-start gap-4 bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-5 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="bg-amber-500/10 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300 mt-0.5">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
