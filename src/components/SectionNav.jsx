import React from "react";

const quickLinks = ["Knowledge", "People", "Process", "Platform"];

function SectionNav() {
  return (
    <div className="sticky top-[72px] z-40 w-full bg-white/90 py-3 backdrop-blur shadow-[0_12px_24px_-18px_rgba(74,21,75,0.45)]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#72009C]/40 bg-white px-4 py-2 text-lg text-[#5a0d7a] shadow-sm shadow-[#72009C]/15">
          {quickLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="royal-title rounded-full bg-[#72009C]/10 px-5 py-2 font-semibold text-[#5a0d7a] transition hover:bg-[#72009C] hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionNav;
