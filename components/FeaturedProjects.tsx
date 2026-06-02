import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

interface FeaturedProject {
  id: string;
  label: string;
  labelStyle: string;
  category: string;
  name: string;
  description: string;
  url: string;
  screenshotUrl: string;
  tags: string[];
}

// Para adicionar um novo projeto, basta inserir um novo objeto neste array.
const featuredProjects: FeaturedProject[] = [
  {
    id: "dolceo",
    label: "Projeto Real",
    labelStyle: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    category: "Página de Venda / Landing Page",
    name: "Dolceo",
    description:
      "Página desenvolvida com foco em apresentação visual, experiência do usuário e conversão, utilizando uma estrutura moderna e responsiva.",
    url: "https://dolceo-page.vercel.app/index.html",
    screenshotUrl:
      "https://image.thum.io/get/width/1200/crop/630/https://dolceo-page.vercel.app/index.html",
    tags: ["Landing Page", "Conversão", "Design Premium", "Responsivo"],
  },
  {
    id: "orvia",
    label: "Projeto Real",
    labelStyle: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    category: "Página de Venda / Infoproduto",
    name: "Orvia",
    description:
      "Página de vendas para infoproduto desenvolvida para o mercado internacional. Estrutura moderna com foco em conversão, copy adaptado ao público-alvo e design responsivo.",
    url: "https://orviafr.vercel.app/",
    screenshotUrl:
      "https://image.thum.io/get/width/1200/crop/630/https://orviafr.vercel.app/",
    tags: ["Infoproduto", "Mercado Internacional", "Página de Venda", "Responsivo"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projetos-destaque" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Projetos em destaque
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Trabalhos{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              desenvolvidos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Alguns dos projetos que desenvolvi focando em design, performance e conversão.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="group relative bg-[#0c111d] border border-slate-800/80 hover:border-amber-500/35 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/8">
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px]">
        {/* ─── Screenshot panel ─── */}
        <div className="relative lg:col-span-3 h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-900">
          {/* Screenshot image */}
          <Image
            src={project.screenshotUrl}
            alt={`Preview do projeto ${project.name}`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          {/* Subtle vignette: darker on bottom (mobile) and right edge (desktop) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c111d]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0c111d]/80" />

          {/* "Projeto Real" badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${project.labelStyle}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              {project.label}
            </span>
          </div>

          {/* Hover overlay — "Ver projeto" pill */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/25 backdrop-blur-[2px]"
            tabIndex={-1}
            aria-hidden="true"
          >
            <span className="flex items-center gap-2 bg-slate-900/90 border border-amber-500/50 text-amber-400 font-semibold text-sm px-5 py-2.5 rounded-2xl shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ExternalLink size={15} />
              Abrir projeto
            </span>
          </a>
        </div>

        {/* ─── Content panel ─── */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-6 p-7 lg:p-10">
          <div>
            {/* Category */}
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-widest">
              {project.category}
            </span>

            {/* Project name */}
            <h3 className="font-heading font-bold text-white text-5xl sm:text-6xl mt-1 mb-4 leading-none tracking-tight">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-800/80 border border-slate-700/50 text-slate-400 px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/20 text-sm group/btn"
            >
              Ver Projeto
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-slate-700 hover:border-amber-500/40 text-slate-400 hover:text-amber-400 px-5 py-3.5 rounded-xl transition-all duration-200 text-sm"
            >
              <ExternalLink size={15} />
              Abrir em nova aba
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
