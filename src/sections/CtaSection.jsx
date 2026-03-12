import React from "react";

function CtaSection() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#1c0f1f] md:text-4xl lg:text-5xl">
          See all you can accomplish in Black.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-[#4A154B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4A154B]/25 transition hover:brightness-110">
            Get started
          </button>
          <button className="rounded-full border border-[#4A154B] px-6 py-3 text-sm font-semibold text-[#4A154B] transition hover:bg-[#4A154B]/10">
            Request a demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
