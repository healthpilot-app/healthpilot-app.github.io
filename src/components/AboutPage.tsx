import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Linkedin,
  Mail,
  ArrowLeft,
  Code2,
  Sparkles,
} from "lucide-react";
import { BrandMark } from "./BrandMark";

const LINKEDIN_URL = "https://www.linkedin.com/in/tarungupta003/";
const SUPPORT_EMAIL = "ai.healthpilot@gmail.com";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

const facts = [
  {
    icon: Briefcase,
    label: "Now",
    value: "Director of Engineering, Masters' Union",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Executive MBA · PGP Rise, Masters' Union (2024–2025)",
  },
  {
    icon: Code2,
    label: "Past",
    value: "Engineering at Outgrow and VenturePact — Senior Engineer to Director",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Himachal Pradesh, India",
  },
];

const stack = [
  "TypeScript",
  "React Native",
  "Node.js",
  "MERN",
  "AI / LLM tooling",
  "Apple HealthKit",
  "SQLite",
  "Expo",
];

export function AboutPage() {
  return (
    <article className="relative px-6 pb-24 pt-16 md:pt-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white/70 backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to HealthPilot
          </a>
        </motion.div>

        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-violet-200"
        >
          <Sparkles className="h-3 w-3" />
          About
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[56px] text-balance"
        >
          Built by{" "}
          <span className="bg-gradient-to-r from-violet-300 via-violet-200 to-violet-400 bg-clip-text text-transparent">
            Tarun Gupta.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty"
        >
          I lead engineering at Masters' Union and ship HealthPilot on the side.
          It started because my own Apple Health data was sitting unused — six
          years of steps, sleep, and workouts no app was ever going to read for me.
        </motion.p>

        {/* Identity card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10 flex flex-col items-start gap-6 rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:flex-row md:items-center md:p-7"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-violet-600/30 blur-2xl" />
            <div className="rounded-2xl border border-white/10 bg-ink-900 p-3">
              <BrandMark size={64} animate={false} />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[18px] font-semibold tracking-tight">Tarun Gupta</div>
            <div className="mt-1 text-[14.5px] text-white/65">
              Director of Engineering · Masters' Union
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/10"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/10"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <section className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-[17px] leading-relaxed text-white/75"
          >
            <h2 className="text-[24px] font-semibold tracking-tight text-white md:text-[28px]">
              Why this app exists
            </h2>
            <p>
              The good stuff — sleep depth, VO₂ max, blood-pressure trend, the
              workout I did three Tuesdays ago — was already on my phone. What
              was missing was a coach who could read all of it at once and give
              me one calm, useful thing to do today. Generic dashboards weren't
              that. Charts in twenty different apps weren't that.
            </p>
            <p>
              HealthPilot is the version I wanted to use. A daily score
              calibrated to <em>my</em> goals. A coach with full context and my
              own AI key. Snap a photo of food, log water in one tap, get a
              Sunday briefing that actually reads itself. Everything stays on
              the phone — no server, no account, no analytics on health data.
            </p>
            <p>
              I build it from Himachal, in evenings and on long weekends, and I
              still use it every morning before anyone else does.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-4"
              >
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200/80">
                  <f.icon className="h-3.5 w-3.5" />
                  {f.label}
                </div>
                <div className="mt-2 text-[14.5px] leading-snug text-white/85">
                  {f.value}
                </div>
              </div>
            ))}
          </motion.aside>
        </section>

        {/* Stack */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:p-8"
        >
          <h2 className="text-[20px] font-semibold tracking-tight">
            What HealthPilot is built on
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">
            iOS-first via Expo prebuild, with native HealthKit and on-device
            SQLite. Designed so the AI Coach is the only thing that ever leaves
            the phone — and only with your own key.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12.5px] font-medium text-white/75"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950/60 via-ink-900/60 to-ink-950/60 p-8 text-center md:p-10"
        >
          <h3 className="text-[22px] font-semibold tracking-tight md:text-[26px]">
            Got a question, or an idea for the app?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/65">
            I read every email. Feedback shapes what ships next — the roadmap is
            mostly things real users have asked for.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-ink-950 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[14px] font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
