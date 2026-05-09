import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-3">
          <BrandMark size={32} animate={false} className="rounded-[8px]" />
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold tracking-tight">HealthPilot</div>
            <div className="text-xs text-white/45">
              © {new Date().getFullYear()} HealthPilot · All rights reserved
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
          <a
            href="/about.html"
            className="transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="/privacy.html"
            className="transition-colors hover:text-white"
          >
            Privacy
          </a>
          <a
            href="mailto:ai.healthpilot@gmail.com"
            className="transition-colors hover:text-white"
          >
            Support
          </a>
          <a
            href="https://apps.apple.com/app/healthpilot-ai-health-coach/id6764634374"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            App Store
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center text-[12px] leading-relaxed text-white/35">
        HealthPilot's AI Coach is for informational and educational purposes only and is not a
        substitute for professional medical advice, diagnosis, or treatment. Always consult a
        qualified healthcare provider before making any medical decisions.
      </div>
    </footer>
  );
}
