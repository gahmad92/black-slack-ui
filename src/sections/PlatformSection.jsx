import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function PlatformSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative w-full bg-white py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-[#1c0f1f] md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#4A154B] via-[#72009C] to-[#4A154B] bg-clip-text text-transparent">
              Secure. Scaleable. Silo-free.
            </span>
          </h2>
        </div>

        <div className="relative mt-12 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-base text-[#3c243f] md:text-lg">
              From Atlassian to Zoom.
            </p>
            <p className="text-sm leading-relaxed text-[#3c243f]">
              Google Drive. ChatGPT. Vercel. Box. Asana. Workday. You name it, it
              works in Black.
            </p>
            <button className="text-sm font-semibold text-[#4A154B] transition hover:text-[#72009C]">
              See all integrations
            </button>
            <div className="grid gap-3 pt-3 text-sm font-medium text-[#2f1a33]">
              <span>Customize Black to fit your needs.</span>
              <span>Work without worry.</span>
            </div>
            <div className="mt-4 rounded-3xl border border-[#4A154B]/15 bg-[#4A154B]/5 p-5 text-sm text-[#2f1a33]">
              <p className="italic">
                “Work starts in conversation. That&apos;s why we see Black as the natural
                place to build our agents.”
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4A154B]">
                Guillermo Rauch, CEO, Vercel
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-[#4A154B]/15 bg-white p-3 shadow-lg shadow-[#4A154B]/10">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-dashed border-[#4A154B]/30 bg-[#4A154B]/5">
                <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
                  <rect width="400" height="300" fill="#F6EEF7" />
                  <rect x="24" y="28" width="240" height="18" rx="8" fill="#4A154B" />
                  <rect x="24" y="56" width="260" height="12" rx="6" fill="#C8A8CD" />
                  <rect x="24" y="90" width="320" height="160" rx="18" fill="#FFFFFF" />
                  <circle cx="86" cy="140" r="26" fill="#4A154B" />
                  <rect x="128" y="126" width="200" height="16" rx="8" fill="#4A154B" />
                  <rect x="128" y="154" width="160" height="12" rx="6" fill="#C8A8CD" />
                  <rect x="128" y="176" width="190" height="12" rx="6" fill="#D9C3DE" />
                </svg>
              </div>
            </div>

            <div className="rounded-3xl border border-[#4A154B]/15 bg-white p-6 shadow-lg shadow-[#4A154B]/10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#4A154B]">
                Platform health
              </p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-semibold text-[#4A154B]">99.99%</p>
                  <p className="text-xs text-[#3c243f]">service uptime</p>
                </div>
                <div className="rounded-full border border-[#4A154B]/20 bg-[#4A154B]/10 px-3 py-1 text-xs text-[#4A154B]">
                  Live
                </div>
              </div>
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
    </section>
  );
}

export default PlatformSection;
