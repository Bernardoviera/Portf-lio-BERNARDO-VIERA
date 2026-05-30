import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const stats = [
  { number: "50+", label: "Páginas criadas" },
  { number: "93%", label: "Clientes satisfeitos" },
  { number: "3x", label: "Média de crescimento" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-16">
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <Sparkles size={14} />
          Especialista em Páginas de Alta Conversão
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-white">Páginas que vendem.</span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
            Resultados que crescem.
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Crio landing pages e páginas de venda de alta conversão para{" "}
          <span className="text-slate-200 font-medium">
            assessorias, gestores de tráfego e empresas
          </span>{" "}
          que querem transformar tráfego em receita real.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Falar comigo no WhatsApp
          </a>
          <a
            href="#projetos"
            className="flex items-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl text-lg transition-all duration-200 w-full sm:w-auto justify-center group"
          >
            Ver meus projetos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4">
              {i > 0 && (
                <div className="hidden sm:block w-px h-10 bg-slate-800" />
              )}
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 font-heading">{stat.number}</div>
                <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}
