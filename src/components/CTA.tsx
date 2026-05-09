import { motion } from "framer-motion";
import { BrandMark } from "./BrandMark";

const APP_STORE_URL =
  "https://apps.apple.com/app/healthpilot-ai-health-coach/id6764634374";

export function CTA() {
  return (
    <section className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-brand-gradient p-10 text-center md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 80% 0%, rgba(255,255,255,0.4), transparent), radial-gradient(60% 60% at 0% 100%, rgba(0,0,0,0.3), transparent)",
            }}
          />
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-20">
            <BrandMark size={220} animate={false} />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-[36px] font-semibold leading-[1.05] tracking-tight text-white md:text-[52px] text-balance">
              Make your health data finally pull its weight.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/85 text-pretty">
              Free to download. Bring your own AI key. Three minutes from install to first
              score.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-ink-950 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">
                    Download on the
                  </span>
                  <span className="mt-0.5 text-[18px] font-bold">App Store</span>
                </span>
              </a>
            </div>
            <p className="mt-6 text-[13px] text-white/70">
              iPhone &amp; iPad · iOS 15.5+
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
