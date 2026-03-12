import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function KnowledgeSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="knowledge"
      className="relative w-full bg-white py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-[#1c0f1f] md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-[#4A154B] via-[#72009C] to-[#4A154B] bg-clip-text text-transparent">
                Give everyone instant context.
              </span>
            </h2>
            <p className="text-base text-[#3c243f] md:text-lg">
              Get access to every file, decision, and conversation, so you can build on
              past work instead of recreating it.
            </p>

            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 text-[#2f1a33]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#4A154B]">
                  Past work, faster
                </p>
                <h3 className="text-2xl font-semibold">
                  Meet Blackbot: Your personal agent for work.
                </h3>
                <p className="text-sm leading-relaxed text-[#3c243f]">
                  Blackbot isn&apos;t just any AI. It&apos;s AI that knows your team inside and
                  out. It adapts to your style, finds what you need, and helps work get
                  done faster.
                </p>
                <button className="text-sm font-semibold text-[#4A154B] transition hover:text-[#72009C]">
                  Learn more about Blackbot
                </button>
                <div className="grid gap-3 pt-3 text-sm font-medium text-[#2f1a33]">
                  <span>One search to rule them all.</span>
                  <span>Bring CRM data to the conversation.</span>
                </div>
              </div>

              <div className="rounded-3xl border border-[#4A154B]/15 bg-white p-6 shadow-lg shadow-[#4A154B]/10">
                <div className="flex h-full flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#4A154B]">
                      Results
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-[#4A154B]">
                      97 min
                    </p>
                    <p className="mt-2 text-sm text-[#3c243f]">
                      average time users can save weekly with AI in Black
                    </p>
                  </div>
                  <div className="rounded-2xl border border-dashed border-[#4A154B]/30 bg-[#4A154B]/5 p-6 text-center text-sm text-[#4A154B]">
                    Insight panel
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[#4A154B]/15 bg-white p-3 shadow-lg shadow-[#4A154B]/10">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-dashed border-[#4A154B]/30 bg-[#4A154B]/5">
                <svg
                  viewBox="0 0 400 300"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <rect width="400" height="300" fill="#F6EEF7" />
                  <rect x="32" y="32" width="160" height="24" rx="8" fill="#4A154B" />
                  <rect x="32" y="72" width="260" height="12" rx="6" fill="#C8A8CD" />
                  <rect x="32" y="94" width="220" height="12" rx="6" fill="#D9C3DE" />
                  <rect x="32" y="130" width="300" height="120" rx="16" fill="#FFFFFF" />
                  <circle cx="88" cy="190" r="28" fill="#4A154B" />
                  <rect x="140" y="170" width="200" height="16" rx="8" fill="#4A154B" />
                  <rect x="140" y="196" width="160" height="12" rx="6" fill="#C8A8CD" />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute right-0 top-0 flex h-full items-start justify-end">
              <div className="relative h-full w-1 overflow-hidden rounded-full bg-[#4A154B]/10">
                <motion.div
                  className="absolute left-0 top-0 w-full rounded-full bg-[#4A154B]"
                  style={{ height: "100%", scaleY: progress, transformOrigin: "top" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeSection;
