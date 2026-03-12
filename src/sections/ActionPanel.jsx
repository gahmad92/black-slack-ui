import React from "react";
import { motion } from "framer-motion";

const actions = [
  {
    label: "Plan launch",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 19l4-2 9-9-2-2-9 9-2 4Z" />
        <path d="M15 5l2 2" />
      </svg>
    ),
  },
  {
    label: "Run project",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14" />
        <path d="M13 5l6 7-6 7" />
      </svg>
    ),
  },
  {
    label: "Chat with clients",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 5h16v10H7l-3 3V5Z" />
      </svg>
    ),
  },
  {
    label: "Ask an agent",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="6" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    label: "Automate tasks",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l2.5 5L20 10l-5 2 1 6-4-3-4 3 1-6-5-2 5.5-2 2.5-5Z" />
      </svg>
    ),
  },
];

const companies = ["IBM", "Stripe", "OpenAI", "Ollama"];

function ActionPanel() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-[#4A154B]/15 bg-white/80 p-10 shadow-xl shadow-[#4A154B]/10 backdrop-blur"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4A154B]">
            Focused workflows
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#1c0f1f] md:text-4xl">
            Buttons that guide every important moment
          </h2>

          <p className="mt-4 text-[#3c243f]">
            Each action stays centered, calm, and beautifully animated with the
            Black color story.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {actions.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex items-center gap-2 rounded-full border border-[#4A154B] px-5 py-2 text-sm font-semibold text-[#4A154B] transition hover:bg-[#4A154B] hover:text-white"
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Company Names */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-sm font-semibold text-[#4A154B]/60">
          {companies.map((name, index) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="tracking-wider hover:text-[#4A154B] transition"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ActionPanel;