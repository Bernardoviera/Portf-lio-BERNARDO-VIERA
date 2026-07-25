"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, Shield, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface PartnerType {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const partnerTypes: PartnerType[] = [
  {
    icon: Users,
    title: "Assessorias de Marketing",
    desc: "Entregue páginas profissionais para seus clientes sem precisar ampliar sua equipe interna.",
  },
  {
    icon: Zap,
    title: "Gestores de Tráfego",
    desc: "Tenha destinos bem estruturados para suas campanhas, com páginas alinhadas à estratégia de cada cliente.",
  },
  {
    icon: Shield,
    title: "Infoprodutores e Negócios Digitais",
    desc: "Estruture suas páginas de venda e lançamentos com um profissional focado em copy e design.",
  },
];

const benefits = [
  "Posso atuar em modelo white-label, sem interferir na relação com seu cliente",
  "Comunicação direta e organizada do início ao fim do projeto",
  "Entregas dentro do prazo combinado",
  "Revisões incluídas no processo",
  "Alinhamento de briefing antes de iniciar qualquer desenvolvimento",
  "Abertura para parcerias contínuas com condições diferenciadas",
];

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function Partners() {
  return (
    <section id="parceiros" className="py-24 bg-[#000000] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/4 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
            Para assessorias e parceiros
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Parceria white-label para
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              escalar suas entregas
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Posso atuar como parceiro white-label para assessorias e gestores de tráfego que
            precisam entregar páginas profissionais aos seus clientes{" "}
            <span className="text-slate-300">sem aumentar a equipe interna.</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {partnerTypes.map((type) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                variants={FADE_UP}
                className="bg-[#120000] border border-slate-800 hover:border-red-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-red-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{type.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-[#120000] border border-red-500/20 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={FADE_UP}
        >
          <div>
            <h3 className="font-heading font-bold text-white text-2xl mb-6">
              Como funciona a parceria
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle size={17} className="text-red-400 flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-red-500/8 border border-red-500/20 rounded-2xl p-6 mb-6">
              <p className="text-rose-200/80 text-sm italic leading-relaxed">
                &ldquo;Meu objetivo é ser um parceiro confiável para assessorias e gestores que precisam
                de alguém dedicado às páginas. Você foca na estratégia e no relacionamento com o
                cliente. Eu cuido do desenvolvimento.&rdquo;
              </p>
              <p className="text-red-400 font-semibold mt-3 text-sm">— Bernardo Vieira</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20 w-full"
            >
              <MessageCircle size={20} />
              Quero conversar sobre parceria
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
