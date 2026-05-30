import { CheckCircle } from "lucide-react";

interface Project {
  label: "Projeto Real" | "Projeto Conceitual";
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
  accentFrom: string;
  accentTo: string;
  borderColor: string;
  labelStyle: string;
}

const projects: Project[] = [
  {
    label: "Projeto Real",
    category: "Landing Page de Produto",
    title: "E-commerce — Segmento de Saúde",
    description:
      "Desenvolvimento de landing page de produto com estrutura voltada para conversão. Foco na apresentação dos benefícios, redução de objeções e fluxo claro de decisão de compra.",
    deliverables: [
      "Estrutura de headline e benefícios",
      "Seção de prova social e FAQ",
      "CTA direto com oferta clara",
    ],
    tags: ["E-commerce", "Produto", "Copy"],
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    borderColor: "border-amber-500/25",
    labelStyle: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  },
  {
    label: "Projeto Conceitual",
    category: "Página de Vendas",
    title: "Curso Digital — Educação Online",
    description:
      "Estrutura completa de página de vendas long-form para lançamento de curso digital, com apresentação do método, módulos e seção de bônus.",
    deliverables: [
      "Storytelling e apresentação do criador",
      "Módulos, bônus e garantia",
      "CTAs ao longo da página",
    ],
    tags: ["Infoproduto", "Educação", "Long-form"],
    accentFrom: "from-blue-500",
    accentTo: "to-indigo-500",
    borderColor: "border-blue-500/25",
    labelStyle: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  },
  {
    label: "Projeto Conceitual",
    category: "Landing Page de Captação",
    title: "Serviço Local — Captação de Leads",
    description:
      "Landing page focada em captação de leads para negócio local, com proposta de valor clara, formulário de contato direto e chamada para ação objetiva.",
    deliverables: [
      "Proposta de valor e diferenciais",
      "Formulário de agendamento",
      "CTA e próximos passos",
    ],
    tags: ["Lead Gen", "Serviços", "Captação"],
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    borderColor: "border-emerald-500/25",
    labelStyle: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Exemplos de
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              trabalhos desenvolvidos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Projetos identificados como reais ou conceituais de forma transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative bg-slate-900 border ${project.borderColor} rounded-2xl overflow-hidden group hover:scale-[1.015] transition-all duration-300 hover:shadow-2xl flex flex-col`}
            >
              {/* Top accent line */}
              <div
                className={`h-1 bg-gradient-to-r ${project.accentFrom} ${project.accentTo} flex-shrink-0`}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Label + category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.labelStyle}`}>
                    {project.label}
                  </span>
                </div>

                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-white text-lg mt-1.5 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Deliverables */}
                <div className="bg-slate-800/60 rounded-xl p-4 mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    O que foi desenvolvido
                  </p>
                  <ul className="space-y-2">
                    {project.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
      </div>
    </section>
  );
}
