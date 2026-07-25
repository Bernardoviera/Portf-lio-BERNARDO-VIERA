"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Paintbrush, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Briefing Estratégico",
    description:
      "Entendo seu negócio, produto, público-alvo e objetivos. Uma conversa aprofundada que define a estratégia de conversão da página.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia e Estrutura",
    description:
      "Com base no briefing, planejo a arquitetura da página: hierarquia de informação, blocos de copy e fluxo psicológico de conversão.",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Design e Copy",
    description:
      "Desenvolvimento do design premium com copy persuasivo integrado. Cada elemento é pensado para guiar o visitante até a conversão.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega e Revisões",
    description:
      "Entrego a página com revisões incluídas. Ajustes até a perfeição, pronta para publicar e escalar seus resultados.",
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Meu processo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Do briefing à entrega
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              em 4 etapas
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Um processo claro e colaborativo para entregar páginas que realmente convertem.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={FADE_UP}
                className="relative bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-7 overflow-hidden group transition-colors duration-300"
              >
                {/* Large background number */}
                <span
                  aria-hidden="true"
                  className="absolute -right-1 top-2 text-[6.5rem] font-black text-slate-800/70 font-heading leading-none select-none pointer-events-none"
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Icon size={22} className="text-amber-400" />
                </div>

                <h3 className="relative font-heading font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="relative text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
