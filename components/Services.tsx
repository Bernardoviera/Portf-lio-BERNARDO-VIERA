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
      "Páginas de captura otimizadas para converter visitantes em leads qualificados. Foco em velocidade, clareza e CTA irresistível.",
    highlights: ["Alta taxa de conversão", "Copy persuasivo", "Design responsivo"],
  },
  {
    icon: TrendingUp,
    title: "Páginas de Venda",
    description:
      "Long-form sales pages com estrutura psicológica, prova social e elementos de urgência que levam o visitante à ação.",
    highlights: ["Estrutura de alta conversão", "Copy + design integrado", "Storytelling de marca"],
  },
  {
    icon: ShoppingBag,
    title: "Páginas de Produto",
    description:
      "Apresentação visual e estratégica dos seus produtos para maximizar a decisão de compra com menos fricção.",
    highlights: ["Apresentação visual", "Gatilhos mentais", "CTA otimizado"],
  },
  {
    icon: FileText,
    title: "Copy Estratégico",
    description:
      "Textos persuasivos que comunicam valor, quebram objeções e geram ação imediata do visitante em qualquer etapa do funil.",
    highlights: ["Quebra de objeções", "Proposta de valor clara", "Texto orientado a dados"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            O que eu faço
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Soluções para converter
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              visitantes em clientes
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Especializado em criar experiências digitais que guiam o visitante até a conversão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Icon size={22} className="text-amber-400" />
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
                      <CheckCircle size={13} className="text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
