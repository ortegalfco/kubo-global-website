"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <div className="max-w-[620px] text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 text-[11px] md:text-xs tracking-[0.28em] uppercase text-cyan-200/75"
      >
        Search • AI • Digital Commerce • Enterprise Platforms
      </motion.p>

      <h2
        className="
          text-3xl
          md:text-4xl
          lg:text-[3.25rem]
          font-normal
          leading-[1.12]
          tracking-[-0.02em]
          text-white
        "
      >
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="block text-white"
        >
          Estrategia primero.
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
          className="block text-slate-200"
        >
          Ejecución después.
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34, ease: "easeOut" }}
          className="block text-white"
        >
          Tecnología cuando <span className="text-[#c9ef0a]">agrega valor.</span>
        </motion.span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="mt-10 md:mt-12 flex justify-center gap-4"
      >
        <a
          href="/contact"
          className="
            bg-[#c9ef0a]
            text-black
            px-6 py-3
            rounded-lg
            font-medium
            shadow-[0_0_20px_rgba(215,247,14,0.35)]
            hover:brightness-110
            transition
          "
        >
          Conversar
        </a>
      </motion.div>
    </div>
  );
}