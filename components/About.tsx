"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function About() {
  return (
    <section className="py-24 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
          className="relative"
        >
          {/* Decorative quotation mark */}
          <span
            className="absolute -top-8 -left-4 sm:-left-8 select-none pointer-events-none text-red-500/10 font-heading font-black leading-none"
            style={{ fontSize: "clamp(6rem, 15vw, 10rem)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative">
            <blockquote
              className="font-heading font-bold text-white leading-[1.2] mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              Atualmente atuo no desenvolvimento de páginas de venda e landing
              pages para projetos digitais, buscando sempre unir design,
              velocidade e conversão.
            </blockquote>

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-2xl">
              Trabalho com assessorias, gestores de tráfego, infoprodutores e negócios
              digitais que precisam de páginas bem estruturadas, desenvolvidas com
              atenção aos detalhes e clareza na entrega.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-red-500" />
              <div>
                <span className="text-white font-semibold text-sm">Bernardo Vieira</span>
                <span className="text-slate-500 text-sm"> — Criador de páginas de venda</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
