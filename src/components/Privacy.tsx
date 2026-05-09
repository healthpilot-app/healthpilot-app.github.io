import { motion } from "framer-motion";
import { SectionHeader } from "./Features";

const claims = [
  {
    title: "On-device storage",
    body: "Profile, food logs, workouts, lab uploads — all stored locally in encrypted-at-rest iOS storage. There is no HealthPilot server.",
  },
  {
    title: "Bring your own AI key",
    body: "AI requests go straight from your iPhone to the provider you authorise. We do not proxy, log, or train on your data.",
  },
  {
    title: "Never sold, never shared",
    body: "No advertising SDKs. No analytics on your health data. No silent third-party transmission.",
  },
  {
    title: "Yours to wipe, anytime",
    body: "Revoke AI consent, delete your key, export your data, or wipe everything in a single tap from inside the app.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-950/60 via-ink-900/60 to-ink-950/60 p-8 md:p-14">
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-violet-500/30 blur-3xl"
          />
          <div className="relative">
            <SectionHeader
              eyebrow="Privacy"
              align="left"
              title={
                <>
                  Built so we<span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent"> couldn't</span> see your data,
                  <br />
                  even if we wanted to.
                </>
              }
              sub="Your health data is the most personal thing on your phone. HealthPilot is engineered so the only place it ever lives is between you and the AI provider you trust."
            />

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
              {claims.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-tight">{c.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/65">{c.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-[14px]">
              <a
                href="/privacy.html"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/85 transition-colors hover:bg-white/10"
              >
                Read the full Privacy Policy
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
              <p className="text-white/45">Last updated 9 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
