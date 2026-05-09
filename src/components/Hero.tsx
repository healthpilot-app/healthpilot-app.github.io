import { motion } from "framer-motion";
import { BrandMark } from "./BrandMark";
import { PhoneFrame } from "./PhoneFrame";

const APP_STORE_URL =
  "https://apps.apple.com/app/healthpilot-ai-health-coach/id6764634374";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative px-6 pb-24 pt-16 md:pt-24 lg:px-10 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-mint shadow-[0_0_10px] shadow-accent-mint/60" />
            Now on the App Store · iPhone &amp; iPad
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-tight text-balance md:text-[60px] lg:text-[68px]"
          >
            Your Apple Health data,
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-violet-200 to-violet-400 bg-clip-text text-transparent">
              finally making sense.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty"
          >
            HealthPilot is the AI Health Coach that turns your steps, sleep, workouts and labs
            into clear, personalised guidance — privately, on your device.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.5)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase tracking-widest text-ink-700">
                  Download on the
                </span>
                <span className="mt-0.5 text-[17px] font-bold">App Store</span>
              </span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white/90 backdrop-blur transition-all hover:bg-white/10"
            >
              See how it works
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50"
          >
            <Bullet text="Apple HealthKit native" />
            <Bullet text="On-device storage" />
            <Bullet text="Bring your own AI key" />
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-none"
        >
          <HeroBackdrop />
          <div className="relative z-10 flex items-center gap-4">
            <PhoneFrame
              src="/screens/02-score.png"
              alt="HealthPilot home screen with daily score"
              tilt={-6}
              delay={0.4}
              className="hidden md:block w-[220px]"
            />
            <PhoneFrame
              src="/screens/03-coach.png"
              alt="HealthPilot AI Coach chat"
              tilt={4}
              delay={0.55}
              floating
              className="z-20 w-[260px]"
            />
            <PhoneFrame
              src="/screens/06-reports.png"
              alt="HealthPilot weekly reports"
              tilt={8}
              delay={0.7}
              className="hidden md:block w-[220px]"
            />
          </div>
          <FloatingChip
            text="Score 78 · improving"
            top="6%"
            left="-2%"
            delay={1.1}
          />
          <FloatingChip
            text="3,212 steps left to goal"
            bottom="10%"
            right="-2%"
            delay={1.25}
            tone="amber"
          />
          <FloatingChip
            text="Sleep 7h 42m · great"
            top="38%"
            right="-6%"
            delay={1.4}
            tone="mint"
          />
        </motion.div>
      </div>

      <ScrollHint />

      <BrandMarkBackdrop />
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-violet-300">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </span>
  );
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-3xl" />
      <div
        className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 animate-spin-slow"
        style={{
          background:
            "conic-gradient(from 200deg, transparent 0deg, rgba(167,139,250,0.5) 90deg, transparent 180deg, rgba(124,58,237,0.4) 270deg, transparent 360deg)",
          maskImage: "radial-gradient(closest-side, transparent 60%, black 62%, black 65%, transparent 67%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, transparent 60%, black 62%, black 65%, transparent 67%)",
        }}
      />
    </div>
  );
}

function FloatingChip({
  text,
  top,
  left,
  right,
  bottom,
  delay = 0,
  tone = "violet",
}: {
  text: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  tone?: "violet" | "mint" | "amber";
}) {
  const dotClass =
    tone === "mint"
      ? "bg-accent-mint"
      : tone === "amber"
        ? "bg-accent-amber"
        : "bg-violet-400";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ top, left, right, bottom }}
      className="glass-strong absolute z-30 hidden items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium shadow-ring md:inline-flex"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      {text}
    </motion.div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs text-white/40 lg:flex"
    >
      <motion.span
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        ↓
      </motion.span>
      Scroll to explore
    </motion.div>
  );
}

function BrandMarkBackdrop() {
  return (
    <div className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 hidden -translate-x-1/2 opacity-[0.08] md:block">
      <BrandMark size={520} animate={false} />
    </div>
  );
}
