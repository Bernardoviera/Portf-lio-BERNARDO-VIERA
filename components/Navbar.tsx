"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#parceiros", label: "Parceiros" },
];

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
};

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bChar, setBChar] = useState("B");
  const [vChar, setVChar] = useState("V");
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLogoHover() {
    if (scrambleRef.current) clearInterval(scrambleRef.current);
    let frame = 0;
    scrambleRef.current = setInterval(() => {
      frame++;
      setBChar(frame > 7 ? "B" : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]);
      setVChar(frame > 9 ? "V" : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]);
      if (frame >= 12) {
        clearInterval(scrambleRef.current!);
        scrambleRef.current = null;
      }
    }, 45);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0000]/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group" onMouseEnter={handleLogoHover}>
            {/* Two-colour monogram with scramble */}
            <span
              className="font-heading font-black leading-none select-none"
              style={{ fontSize: "1.7rem", letterSpacing: "-0.04em" }}
            >
              <span className="text-white group-hover:text-slate-100 transition-colors duration-200">{bChar}</span>
              <span className="text-red-500 group-hover:text-red-400 transition-colors duration-200">{vChar}</span>
            </span>

            {/* Divider + stacked name */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-px h-6 bg-red-900/50" />
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-[9px] font-bold text-red-500/60 uppercase tracking-[0.2em]">Bernardo</span>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">Vieira</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white p-2 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden border-t border-slate-800 py-4 space-y-1 bg-[#0a0000]/95 backdrop-blur-md"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-400 hover:text-white hover:bg-slate-800/50 px-3 py-2.5 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
