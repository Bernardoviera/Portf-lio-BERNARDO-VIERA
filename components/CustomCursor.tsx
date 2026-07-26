"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.45, ease: "power2.out" });
    };

    const expand = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button")) {
        gsap.to(dot, { scale: 0.2, duration: 0.2 });
        gsap.to(ring, { scale: 2.8, opacity: 0.3, duration: 0.3 });
      } else {
        gsap.to(dot, { scale: 1, duration: 0.2 });
        gsap.to(ring, { scale: 1, opacity: 0.55, duration: 0.3 });
      }
    };

    const hide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const show = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", expand);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", expand);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-red-500 rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-red-400/55 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 opacity-55 hidden md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
