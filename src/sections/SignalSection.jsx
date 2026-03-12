import React from "react";
import { motion } from "framer-motion";

function SignalSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-[#4A154B]/15 bg-white p-10 shadow-xl shadow-[#4A154B]/10">
        <motion.svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.path
            d="M0,260 C220,180 420,340 620,230 C820,120 980,140 1200,60"
            fill="none"
            stroke="rgba(74, 21, 75, 0.5)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,300 C240,220 460,360 680,250 C860,160 1010,200 1200,110"
            fill="none"
            stroke="rgba(74, 21, 75, 0.2)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.svg>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4A154B]">
            Flow on command
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1c0f1f] md:text-4xl">
            The curve that keeps your momentum visible
          </h2>
          <p className="mt-4 max-w-2xl text-[#3c243f]">
            This space is ready for a product video or walkthrough. Drop your media
            in and it will sit perfectly centered.
          </p>
        </div>

        <div className="relative z-10 mt-10 flex items-center justify-center">
          <div className="aspect-video w-full max-w-3xl rounded-2xl border border-dashed border-[#4A154B]/40 bg-[#4A154B]/5 shadow-lg shadow-[#4A154B]/10">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-[#4A154B]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#4A154B]/40 bg-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7-11-7Z" />
                </svg>
              </div>
              <p className="text-sm font-semibold">Video placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignalSection;
