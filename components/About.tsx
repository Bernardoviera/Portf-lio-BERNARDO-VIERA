"use client";

import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function About() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center">
              <span className="font-heading font-bold text-amber-400 text-xl">BV</span>
            </div>

            <div>
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
                Sobre meu trabalho
              </span>
              <blockquote className="font-heading text-xl sm:text-2xl font-medium text-white leading-relaxed mt-3 mb-4">
                &ldquo;Atualmente atuo no desenvolvimento de páginas de venda e landing pages para
                projetos digitais, buscando sempre unir design, velocidade e conversão.&rdquo;
              </blockquote>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trabalho com assessorias, gestores de tráfego, infoprodutores e negócios digitais
                que precisam de páginas bem estruturadas, desenvolvidas com atenção aos detalhes e
                clareza na entrega.
              </p>
              <p className="text-slate-500 text-sm mt-3 font-medium">— Bernardo Vieira</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
