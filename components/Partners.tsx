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
    desc: "Ofereça páginas de alta conversão para seus clientes sem precisar de um time interno especializado.",
  },
  {
    icon: Zap,
    title: "Gestores de Tráfego",
    desc: "Melhore o ROAS dos seus clientes com destinos otimizados para cada campanha de mídia paga.",
  },
  {
    icon: Shield,
    title: "Agências Digitais",
    desc: "Escale sua capacidade de entrega com um parceiro especialista em conversão e copy estratégico.",
  },
];

const benefits = [
  "Entrega profissional para impressionar seus clientes",
  "Modelo white-label disponível",
  "Comunicação direta, sem intermediários",
  "Foco total em conversão e resultados mensuráveis",
  "Suporte e ajustes pós-entrega incluídos",
  "Condições especiais para parcerias frequentes",
];

export default function Partners() {
  return (
    <section id="parceiros" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/4 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Para assessorias e parceiros
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Seja meu parceiro e
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              escale seus resultados
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trabalho em modelo white-label com assessorias, agências e gestores de tráfego.
            Você foca em estratégia e gestão. Eu cuido das páginas de alta conversão.
          </p>
        </div>

        {/* Partner type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {partnerTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-amber-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{type.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{type.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits + CTA card */}
        <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-heading font-bold text-white text-2xl mb-6">
              O que você ganha ao trabalhar comigo
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle size={17} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-amber-500/8 border border-amber-500/20 rounded-2xl p-6 mb-6">
              <p className="text-amber-200/80 text-sm italic leading-relaxed">
                &ldquo;Meu objetivo é ser o especialista em páginas de venda que faz parte do seu time,
                entregando qualidade premium para seus clientes.&rdquo;
              </p>
              <p className="text-amber-400 font-semibold mt-3 text-sm">— Bernardo Vieira</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20 w-full"
            >
              <MessageCircle size={20} />
              Quero ser parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
