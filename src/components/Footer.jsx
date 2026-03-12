import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t border-[#4A154B]/20 bg-[#3a0f3e] py-12 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                B
              </span>
              Black
            </div>
            <p className="max-w-sm text-base text-white">
              A calmer, smarter workspace that keeps your team in sync.
            </p>
          </div>

          <div className="grid w-full gap-8 sm:grid-cols-2 md:w-auto md:grid-cols-3">
            <div className="space-y-3 text-base">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Product
              </p>
              <div className="flex flex-col gap-2 text-white">
                <a href="#knowledge" className="hover:text-[#72009C]">
                  Knowledge
                </a>
                <a href="#people" className="hover:text-[#72009C]">
                  People
                </a>
                <a href="#process" className="hover:text-[#72009C]">
                  Process
                </a>
                <a href="#platform" className="hover:text-[#72009C]">
                  Platform
                </a>
              </div>
            </div>
            <div className="space-y-3 text-base">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Company
              </p>
              <div className="flex flex-col gap-2 text-white">
                <span>About</span>
                <span>Careers</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="space-y-3 text-base">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Resources
              </p>
              <div className="flex flex-col gap-2 text-white">
                <span>Help Center</span>
                <span>Security</span>
                <span>Status</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white md:flex-row">
          <span>© 2026 Black Technologies, Inc. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
