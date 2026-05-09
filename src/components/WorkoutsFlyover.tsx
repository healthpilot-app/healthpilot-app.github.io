import { motion } from "framer-motion";
import { Map, Satellite, Image as ImageIcon, Share2 } from "lucide-react";
import { SectionHeader } from "./Features";

const stills = [
  {
    src: "/screens/11-satellite.png",
    title: "Satellite route view",
    body: "Switch any walk, run or ride to a satellite map. Your path traced over the actual streets you covered.",
    icon: Satellite,
  },
  {
    src: "/screens/12-flyover.png",
    title: "3D Flyover replay",
    body: "Press Flyover and watch the camera glide along your route in 3D. Saved as a video, ready to share.",
    icon: Map,
  },
  {
    src: "/screens/13-photoshare.jpg",
    title: "Share with your own photo",
    body: "Drop a photo from the day onto your workout card. Stats laid over the moment — not a stock background.",
    icon: ImageIcon,
  },
];

export function WorkoutsFlyover() {
  return (
    <section
      id="workouts"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32"
    >
      {/* Map-themed backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Workouts & Flyover"
          title={
            <>
              Walks that play back
              <span className="bg-gradient-to-r from-emerald-300 via-violet-300 to-violet-500 bg-clip-text text-transparent">
                {" "}like films.
              </span>
            </>
          }
          sub="Every Apple Health workout becomes a satellite-mapped record. Hit Flyover and the camera glides over the actual terrain you covered — saved as a video you can share without rerecording."
        />

        {/* Hero: video phone + supporting copy */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[28px] font-semibold leading-tight tracking-tight md:text-[36px] text-balance"
            >
              The flight you took, replayed in 3D.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-[17px] leading-relaxed text-white/65 text-pretty"
            >
              The 3D Flyover renders right inside the app — no second device, no upload. Tap once, watch the camera trace your route over real-world satellite terrain, and share the saved clip straight to anywhere.
            </motion.p>

            <ul className="mt-8 space-y-3 text-[15px] text-white/75">
              <Bullet>Auto-imports from Apple Health with no extra setup.</Bullet>
              <Bullet>Saved flyover videos persist across app updates.</Bullet>
              <Bullet>Share to Stories, Messages, or any app — with or without stats.</Bullet>
              <Bullet>Optional: drop your own photo as the card background.</Bullet>
            </ul>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-500/10 px-4 py-2 text-[13px] text-emerald-100/90">
              <Share2 className="h-3.5 w-3.5" />
              No watermarks. No re-encoding. Your route, your clip.
            </div>
          </div>

          {/* Phone playing flyover MP4 */}
          <div className="order-1 flex justify-center lg:order-2">
            <VideoPhone />
          </div>
        </div>

        {/* Supporting stills */}
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stills.map((s, i) => (
            <motion.article
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div className="relative mx-auto w-[180px] overflow-hidden rounded-[26px] border border-white/10 bg-ink-900 p-1 shadow-device">
                <div className="absolute inset-x-10 top-1.5 z-10 h-3.5 rounded-b-xl bg-black" />
                <div className="aspect-[9/19.5] overflow-hidden rounded-[22px] bg-ink-950">
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-200">
                  <s.icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <h4 className="mt-3 text-[16px] font-semibold tracking-tight">{s.title}</h4>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/60">{s.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoPhone() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-3xl"
      />
      <div className="relative w-[300px] overflow-hidden rounded-[44px] border border-white/10 bg-ink-900 p-2 shadow-device sm:w-[340px]">
        <div className="absolute inset-x-16 top-2 z-10 h-6 rounded-b-3xl bg-black" />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[36px] bg-ink-950">
          <video
            src="/screens/flyover-demo.mp4"
            poster="/screens/12-flyover.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Floating chip */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -right-4 top-12 hidden items-center gap-2 rounded-full border border-white/15 bg-ink-900/80 px-3.5 py-2 text-[13px] font-medium backdrop-blur md:inline-flex"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
        Flyover saved
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="absolute -left-6 bottom-20 hidden items-center gap-2 rounded-full border border-white/15 bg-ink-900/80 px-3.5 py-2 text-[13px] font-medium backdrop-blur md:inline-flex"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_8px] shadow-violet-300/60" />
        5.32 km · 57m
      </motion.div>
    </motion.div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-4 w-4 shrink-0 text-violet-300">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}
