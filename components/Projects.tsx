import { TrendingUp } from "lucide-react";

interface Project {
  category: string;
  title: string;
  description: string;
  result: string;
  resultLabel: string;
  tags: string[];
  accentFrom: string;
  accentTo: string;
  borderColor: string;
  resultBg: string;
}

const projects: Project[] = [
  {
    category: "Página de Produto",
    title: "E-commerce de Suplementos",
    description:
      "Redesign completo da página de produto com copy focado em benefícios, prova social e senso de urgência. Resultado medido em 30 dias de teste A/B.",
    result: "+43%",
    resultLabel: "taxa de conversão",
    tags: ["E-commerce", "Produto", "A/B Test"],
    accentFrom: "from-amber-500",
    accentTo: "to-orange-600",
    borderColor: "border-amber-500/25",
    resultBg: "bg-amber-500/10",
  },
  {
    category: "Página de Vendas",
    title: "Lançamento de Curso Online",
    description:
      "Página de vendas long-form com storytelling, depoimentos em vídeo, bônus estratégicos e múltiplos CTAs. Resultado direto no lançamento.",
    result: "R$180k",
    resultLabel: "em um lançamento",
    tags: ["Infoproduto", "Lançamento", "Long-form"],
    accentFrom: "from-blue-500",
    accentTo: "to-cyan-500",
    borderColor: "border-blue-500/25",
    resultBg: "bg-blue-500/10",
  },
  {
    category: "Landing Page",
    title: "Clínica de Estética",
    description:
      "Landing page de captação com formulário de agendamento, antes/depois e oferta de consulta grátis. Triplicou a geração de leads qualificados.",
    result: "3x",
    resultLabel: "mais leads por mês",
    tags: ["Saúde & Beleza", "Lead Gen", "Local"],
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    borderColor: "border-emerald-500/25",
    resultBg: "bg-emerald-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Projetos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Resultados que
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Cada página é construída com uma única obsessão: converter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative bg-slate-900 border ${project.borderColor} rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl flex flex-col`}
            >
              {/* Top accent line */}
              <div
                className={`h-1 bg-gradient-to-r ${project.accentFrom} ${project.accentTo} flex-shrink-0`}
              />

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-white text-xl mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Result highlight */}
                <div className={`${project.resultBg} rounded-xl p-4 mb-4 flex items-center gap-3`}>
                  <TrendingUp size={18} className="text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-2xl font-bold text-white font-heading">
                      {project.result}
                    </span>
                    <p className="text-xs text-slate-300 mt-0.5">{project.resultLabel}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs mt-8">
          * Dados de clientes reais. Resultados podem variar conforme produto e volume de tráfego.
        </p>
      </div>
    </section>
  );
}
