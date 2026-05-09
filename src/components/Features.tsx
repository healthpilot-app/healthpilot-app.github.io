import { motion } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Camera,
  LineChart,
  ShieldCheck,
  Map,
} from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Daily Score",
    body: "A single number — calibrated to your goals — that tells you whether today's choices are moving you forward.",
    accent: "from-violet-500 to-violet-700",
  },
  {
    icon: Sparkles,
    title: "AI Coach",
    body: "Ask anything. Your coach knows your sleep, workouts, food, mood, labs, and history — and answers like a pro who's actually read it.",
    accent: "from-violet-400 to-violet-600",
  },
  {
    icon: Camera,
    title: "Meal Snap",
    body: "Photograph what you ate. Macros, portions, and a coach-aware critique appear in seconds.",
    accent: "from-accent-coral to-accent-amber",
  },
  {
    icon: LineChart,
    title: "Reports & Trends",
    body: "Weekly briefings spot wins, callouts, and the one thing worth focusing on next week.",
    accent: "from-accent-mint to-accent-sky",
  },
  {
    icon: Map,
    title: "Workouts &amp; Flyover",
    body: "Apple Health workouts auto-import. Replay your route as a cinematic 3D flyover and share it.",
    accent: "from-accent-sky to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Yours, fully private",
    body: "Data stays on your phone. AI calls go from your device straight to the provider you choose, with your key.",
    accent: "from-violet-300 to-violet-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What it does"
          title={
            <>
              Six tools, one
              <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">
                {" "}coherent coach.
              </span>
            </>
          }
          sub="HealthPilot stitches together every signal your phone already collects, then turns it into a quiet daily push toward the version of yourself you said you wanted."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(139,92,246,0.7), transparent)",
                }}
              />
              <div
                className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} shadow-lg shadow-black/20`}
              >
                <f.icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="relative mt-5 text-[19px] font-semibold tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: f.title }} />
              </h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-white/65">
                <span dangerouslySetInnerHTML={{ __html: f.body }} />
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-violet-200"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[44px] text-balance"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-[17px] leading-relaxed text-white/65 text-pretty"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
