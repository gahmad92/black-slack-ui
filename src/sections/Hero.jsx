import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-10 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4A154B]"
      >
        Welcome to Black
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl font-semibold text-[#1c0f1f] md:text-5xl lg:text-6xl"
      >
        Black is your team&apos;s collective brain 🧠
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 max-w-2xl text-base text-[#3c243f] md:text-lg"
      >
        A beautifully calm workspace that keeps every idea, update, and decision
        flowing through one intelligent hub.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <button className="rounded-full bg-[#4A154B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4A154B]/25 transition hover:brightness-110">
          Find your plan
        </button>
        <button className="rounded-full border border-[#4A154B] px-6 py-3 text-sm font-semibold text-[#4A154B] transition hover:bg-[#4A154B]/10">
          Explore the workspace
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;
