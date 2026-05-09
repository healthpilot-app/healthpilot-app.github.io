import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function BuilderCard() {
  return (
    <section className="relative px-6 pb-4 pt-8 lg:px-10 lg:pb-8">
      <div className="mx-auto max-w-4xl">
        <motion.a
          href="/about.html"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col items-start gap-5 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
        >
          {/* Glow on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(139,92,246,0.7), transparent)",
            }}
          />

          <div className="relative shrink-0">
            <div className="absolute inset-0 -z-10 rounded-xl bg-violet-600/30 blur-xl" />
            <div className="rounded-xl border border-white/10 bg-ink-900 p-2">
              <BrandMark size={40} animate={false} />
            </div>
          </div>

          <div className="relative flex-1 min-w-0">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200/80">
              Built by
            </div>
            <div className="mt-1 truncate text-[16px] font-semibold tracking-tight">
              Tarun Gupta
            </div>
            <div className="mt-0.5 text-[13.5px] leading-snug text-white/60">
              Director of Engineering at Masters' Union. The story behind the app, the stack, and why it's privacy-first.
            </div>
          </div>

          <div className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-semibold text-white/85 transition-colors group-hover:bg-white/10 group-hover:text-white">
            Read the story
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
