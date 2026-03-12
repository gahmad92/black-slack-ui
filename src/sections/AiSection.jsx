import React from "react";

const aiItems = [
  {
    label: "Organize your day with Blackbot",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 6h8" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
        <rect x="5" y="3" width="14" height="18" rx="2" />
      </svg>
    ),
  },
  {
    label: "Summarize a conversation you missed",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v10H7l-3 3V6Z" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </svg>
    ),
  },
  {
    label: "Get fast answers with Claude",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l2.5 5L20 10l-5 2 1 6-4-3-4 3 1-6-5-2 5.5-2 2.5-5Z" />
      </svg>
    ),
  },
  {
    label: "Turn on AI note-taking in huddles",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h10a4 4 0 0 1 4 4v8H8l-4 4V6Z" />
        <path d="M9 10h6" />
        <path d="M9 13h4" />
      </svg>
    ),
  },
  {
    label: "Review code with Github Copilot",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7l-4 5 4 5" />
        <path d="M16 7l4 5-4 5" />
        <path d="M10 19l4-14" />
      </svg>
    ),
  },
  {
    label: "Lookup customer data in Agentforce",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-3.5-3.5" />
        <path d="M8.5 10.5h5" />
      </svg>
    ),
  },
];

function AiSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4A154B] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70 starfield" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-white/40 bg-white/5">
              <span className="text-sm font-semibold text-white/80">
                Product image placeholder
              </span>
            </div>
          </div>
          <p className="max-w-md text-sm uppercase tracking-[0.3em] text-white/70">
            AI-ready experiences
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 text-left">
          <h2 className="royal-title text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Reimagine what&apos;s possible with AI and agents.
          </h2>
          <p className="text-base text-white/85 md:text-lg">
            AI in Black doesn&apos;t make you think, it helps you do. It summarizes and
            searches based on actual conversations, and with it, makes every app
            and agent more helpful and contextually aware than ever.
          </p>
          <ul className="mt-2 w-full space-y-3 text-sm md:text-base">
            {aiItems.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white px-4 py-3 text-[#1e1020]"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#4A154B]/10 text-[#4A154B]">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="block h-20 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C360,120 720,0 1080,48 C1260,72 1380,96 1440,80 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}

export default AiSection;
