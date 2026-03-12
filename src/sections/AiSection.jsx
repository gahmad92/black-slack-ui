import React from "react";

const aiItems = [
  "Organize your day with Blackbot",
  "Summarize a conversation you missed",
  "Get fast answers with Claude",
  "Turn on AI note-taking in huddles",
  "Review code with Github Copilot",
  "Lookup customer data in Agentforce",
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
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white px-4 py-3 text-[#1e1020]"
              >
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#4A154B]" />
                <span className="font-medium">{item}</span>
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
