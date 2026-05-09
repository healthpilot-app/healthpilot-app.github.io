import { motion } from "framer-motion";

const beams = [
  { d: "M-200 100 Q 200 200 600 100 T 1400 100", delay: 0 },
  { d: "M-200 240 Q 300 340 700 240 T 1500 240", delay: 0.6 },
  { d: "M-200 380 Q 400 480 800 380 T 1600 380", delay: 1.1 },
  { d: "M-200 520 Q 250 620 700 520 T 1500 520", delay: 1.7 },
  { d: "M-200 660 Q 350 760 800 660 T 1600 660", delay: 2.2 },
  { d: "M-200 800 Q 200 900 600 800 T 1400 800", delay: 2.8 },
];

export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-stroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="40%" stopColor="#A78BFA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam-glow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="1" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>

        {beams.map((b, i) => (
          <g key={i}>
            <path
              d={b.d}
              stroke="url(#beam-stroke)"
              strokeWidth="1.2"
              opacity="0.55"
              fill="none"
            />
            <motion.path
              d={b.d}
              stroke="url(#beam-glow)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="60 360"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -1200 }}
              transition={{
                duration: 8 + i,
                delay: b.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
