import { motion } from "framer-motion";
import { SectionHeader } from "./Features";

const steps = [
  {
    n: "01",
    title: "Connect Apple Health",
    body: "Grant the categories you care about — steps, sleep, workouts, weight, vitals, labs. Everything stays on device.",
  },
  {
    n: "02",
    title: "Tell us about you",
    body: "Goals, conditions, medications, diet preference. The coach uses this for every reply, but it never leaves your phone.",
  },
  {
    n: "03",
    title: "Bring your AI key",
    body: "Anthropic, OpenAI, Google, OpenRouter — whichever you prefer. Requests go straight from your device to the provider.",
  },
  {
    n: "04",
    title: "Live the loop",
    body: "Log in seconds, ask anything, read the weekly briefing. Adjust. Repeat. The score moves; the habits stick.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              Set up in<span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent"> under three minutes.</span>
            </>
          }
          sub="No sign-up. No account creation. No server has your data because there is no server."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <div className="text-[13px] font-mono font-semibold tracking-widest text-violet-300/80">
                {s.n}
              </div>
              <h3 className="mt-4 text-[18px] font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-2px] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-violet-400/40 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
