import React from "react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-xl font-semibold text-[#4A154B]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A154B]/10 shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.9),_3px_3px_8px_rgba(74,21,75,0.2)]">
            B
          </span>
          Black
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#2c1830] lg:flex">
          <button className="flex items-center gap-1 hover:text-[#4A154B]">
            Features
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.5 7.5 10 12l4.5-4.5H5.5Z" />
            </svg>
          </button>
          <button className="hover:text-[#4A154B]">Solutions</button>
          <button className="hover:text-[#4A154B]">Enterprise</button>
          <button className="hover:text-[#4A154B]">Resources</button>
          <button className="hover:text-[#4A154B]">Pricing</button>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium">
          <button
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#4A154B]/20 text-[#4A154B] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.9),_3px_3px_8px_rgba(74,21,75,0.2)] hover:border-[#4A154B] lg:inline-flex"
            aria-label="Search"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
          <button className="hidden text-[#2c1830] hover:text-[#4A154B] lg:inline-flex">
            Sign in
          </button>
          <button className="rounded-full border border-[#4A154B] px-4 py-2 text-[#4A154B] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.9),_3px_3px_8px_rgba(74,21,75,0.2)] transition hover:bg-[#4A154B]/10">
            Request a demo
          </button>
          <button className="rounded-full bg-[#4A154B] px-4 py-2 text-white shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.15),_6px_6px_14px_rgba(74,21,75,0.3)] transition hover:brightness-110">
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
