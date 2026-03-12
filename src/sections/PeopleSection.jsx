import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function PeopleSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="people"
      className="relative w-full bg-white py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-[#1c0f1f] md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#4A154B] via-[#72009C] to-[#4A154B] bg-clip-text text-transparent">
              Let your people connect like people.
            </span>
          </h2>
        </div>

        <div className="relative mt-12 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="space-y-6">
            
            <h3 className="text-2xl font-semibold text-[#1c0f1f]">
              Anyone can automate in Black.
            </h3>
            <p className="text-sm leading-relaxed text-[#3c243f]">
              By click or by code, Black makes it easy for anyone to build time-saving
              automations of their own.
            </p>
            <button className="text-sm font-semibold text-[#4A154B] transition hover:text-[#72009C]">
              Learn about workflows
            </button>
            <div className="grid gap-3 pt-3 text-sm font-medium text-[#2f1a33]">
              <span>Manage projects and tasks.</span>
              <span>A simpler way to get started.</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-[#4A154B]/15 bg-white p-6 shadow-lg shadow-[#4A154B]/10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#4A154B]">
                Impact
              </p>
              <p className="mt-3 text-4xl font-semibold text-[#4A154B]">35%</p>
              <p className="mt-2 text-sm text-[#3c243f]">
                increase in time saved due to automations for Black users
              </p>
            </div>

            <div className="rounded-3xl border border-[#4A154B]/15 bg-white p-3 shadow-lg shadow-[#4A154B]/10">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-dashed border-[#4A154B]/30 bg-[#4A154B]/5">
                <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
                  <rect width="400" height="300" fill="#F6EEF7" />
                  <rect x="28" y="36" width="200" height="18" rx="8" fill="#4A154B" />
                  <rect x="28" y="64" width="260" height="12" rx="6" fill="#C8A8CD" />
                  <rect x="28" y="96" width="300" height="140" rx="18" fill="#FFFFFF" />
                  <rect x="52" y="126" width="220" height="16" rx="8" fill="#4A154B" />
                  <rect x="52" y="154" width="180" height="12" rx="6" fill="#C8A8CD" />
                  <rect x="52" y="176" width="140" height="12" rx="6" fill="#D9C3DE" />
                </svg>
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

export default PeopleSection;
