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
      "Desenvolvimento do design com copy persuasivo integrado. Cada elemento é pensado para guiar o visitante até a conversão.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega e Revisões",
    description:
      "Entrego a página com revisões incluídas. Ajustes até a perfeição, pronta para publicar e escalar seus resultados.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-[#000000]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <span className="text-red-500 text-xs font-bold uppercase tracking-[0.22em]">
            Meu processo
          </span>
          <h2
            className="font-heading font-black text-white mt-3 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Do briefing à entrega
            <br />
            <span className="text-red-500">em 4 etapas</span>
          </h2>
        </motion.div>

        <div className="relative pl-10 sm:pl-14">
          {/* Animated timeline spine */}
          <motion.div
            className="absolute left-3.5 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-red-500/70 via-red-700/35 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.8, ease: EASE, delay: 0.1 }}
          />

          <motion.div
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
                  className="relative mb-12 last:mb-0 group"
                >
                  {/* Node on the line */}
                  <div className="absolute -left-10 sm:-left-14 top-0 w-7 h-7 rounded-full bg-black border border-red-700/50 flex items-center justify-center group-hover:border-red-500/80 group-hover:bg-red-950/30 transition-all duration-300">
                    <Icon size={13} className="text-red-400" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-red-500/45 uppercase tracking-widest font-heading">
                        {step.number}
                      </span>
                      <h3 className="font-heading font-bold text-white text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                      {step.description}
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
