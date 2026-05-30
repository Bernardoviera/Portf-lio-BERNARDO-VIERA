import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-amber-500/6 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
          Vamos trabalhar juntos
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-[1.1]">
          Tem um projeto em mente?
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
            Me chama no WhatsApp.
          </span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Apresente sua ideia ou briefing. Vou analisar o que você precisa e te dizer se consigo
          ajudar, sem compromisso.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-200 hover:scale-105 shadow-2xl shadow-green-500/25 group"
        >
          <MessageCircle size={24} />
          Falar comigo no WhatsApp
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-slate-600 text-sm mt-5">
          Respondo com agilidade. Sem enrolação.
        </p>
      </div>
    </section>
  );
}
