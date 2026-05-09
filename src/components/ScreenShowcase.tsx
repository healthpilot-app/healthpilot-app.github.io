import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./Features";

const tabs = [
  {
    id: "score",
    label: "Score",
    src: "/screens/02-score.png",
    title: "A single number — that knows you",
    body: "Your Daily Score is built from your sleep, activity, nutrition, mood and labs. It's calibrated to you, not a generic average. Tap it to see exactly what moved the needle.",
  },
  {
    id: "coach",
    label: "AI Coach",
    src: "/screens/03-coach.png",
    title: "Ask the coach. It already knows.",
    body: "Type a question. The coach has read your last 30 days, your goals, and your medical history. Replies cite the data they're based on so you can trust them.",
  },
  {
    id: "log",
    label: "Daily Log",
    src: "/screens/05-log.png",
    title: "Log in seconds, not minutes",
    body: "Snap a photo for macros. Tap pre-set water and protein increments. Pull steps, sleep and workouts straight from Apple Health.",
  },
  {
    id: "reports",
    label: "Reports",
    src: "/screens/06-reports.png",
    title: "Weekly briefing, written for you",
    body: "Every Sunday: wins, things that need attention, and the one habit to focus on next week. A coach in your pocket — without the calendar invite.",
  },
  {
    id: "trends",
    label: "Trends",
    src: "/screens/09-trends.png",
    title: "Long-game patterns, surfaced",
    body: "Spot the seasonality in your sleep. Watch your VO₂ max climb. See how a 6-week training block actually changed your resting heart rate.",
  },
];

export function ScreenShowcase() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="screens" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The app"
          title={
            <>
              Built for the<span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent"> ten seconds</span> you have.
            </>
          }
          sub="Every screen earns its place. No filler, no nags, no dark patterns — just the next useful thing, surfaced when it matters."
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === t.id
                  ? "text-white"
                  : "text-white/55 hover:text-white/85"
              }`}
            >
              {active === t.id && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-violet-400/30 bg-violet-500/15"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <motion.h3
              key={`title-${current.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[28px] font-semibold leading-tight tracking-tight md:text-[36px] text-balance"
            >
              {current.title}
            </motion.h3>
            <motion.p
              key={`body-${current.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              className="mt-5 text-[17px] leading-relaxed text-white/65 text-pretty"
            >
              {current.body}
            </motion.p>

            <ul className="mt-8 space-y-3 text-[15px] text-white/75">
              {tabs.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => setActive(t.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                      active === t.id
                        ? "border-violet-400/30 bg-violet-500/10"
                        : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        active === t.id
                          ? "bg-violet-300 shadow-[0_0_8px] shadow-violet-300/60"
                          : "bg-white/30"
                      }`}
                    />
                    <span
                      className={`text-[14px] font-medium ${
                        active === t.id ? "text-white" : "text-white/70"
                      }`}
                    >
                      {t.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone */}
          <div className="order-1 flex justify-center lg:order-2">
            <ShowcasePhone src={current.src} key={current.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcasePhone({ src }: { src: string }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[300px] overflow-hidden rounded-[44px] border border-white/10 bg-ink-900 p-2 shadow-device sm:w-[340px]"
      >
        <div className="absolute inset-x-16 top-2 z-10 h-6 rounded-b-3xl bg-black" />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[36px] bg-ink-950">
          <motion.img
            key={src}
            src={src}
            alt="HealthPilot screen"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </div>
  );
}
