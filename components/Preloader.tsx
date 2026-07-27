"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <motion.span
            className="font-heading font-black select-none"
            style={{ fontSize: "5rem", letterSpacing: "-0.04em" }}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <span className="text-white">B</span>
            <span className="text-red-500">V</span>
          </motion.span>

          <div className="mt-10 w-28 h-[2px] bg-slate-900 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-red-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.55, ease: EASE, delay: 0.15 }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
