import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#parceiros", label: "Parceiros" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-slate-800/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl font-bold font-heading text-amber-400">BV</span>
              <span className="text-white font-semibold">Bernardo Vieira</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Criador de páginas de venda e landing pages de alta conversão para assessorias,
              gestores de tráfego e empresas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contato
            </h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
            >
              <MessageCircle size={15} />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {year} Bernardo Vieira. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Especialista em páginas de venda de alta conversão
          </p>
        </div>
      </div>
    </footer>
  );
}
