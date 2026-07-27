"use client";

const items = [
  "Landing Pages",
  "Páginas de Venda",
  "Páginas Institucionais",
  "Conversão",
  "Design Premium",
  "Copy Estratégico",
  "Páginas de Produto",
  "White-label",
];

const repeated = [...items, ...items, ...items];

export default function Marquee() {
  return (
    <div className="py-4 bg-red-950/20 border-y border-red-950/40 overflow-hidden select-none">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 pr-10 text-xs font-bold text-red-400/50 uppercase tracking-[0.22em]"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-red-600/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
