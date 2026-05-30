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
    number: "1",
    icon: MessageSquare,
    title: "Briefing Estratégico",
    description:
      "Entendo seu negócio, produto, público-alvo e objetivos. Uma conversa aprofundada que define a estratégia de conversão da página.",
  },
  {
    number: "2",
    icon: Lightbulb,
    title: "Estratégia e Estrutura",
    description:
      "Com base no briefing, planejo a arquitetura da página: hierarquia de informação, blocos de copy e fluxo psicológico de conversão.",
  },
  {
    number: "3",
    icon: Paintbrush,
    title: "Design e Copy",
    description:
      "Desenvolvimento do design premium com copy persuasivo integrado. Cada elemento é pensado para guiar o visitante até a conversão.",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Entrega e Revisões",
    description:
      "Entrego a página com revisões incluídas. Ajustes até a perfeição, pronta para publicar e escalar seus resultados.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 mb-5 mx-auto transition-colors duration-300">
                  <Icon size={28} className="text-amber-400" />
                  <span className="absolute -top-2.5 -right-2.5 bg-amber-500 text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center font-heading">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
