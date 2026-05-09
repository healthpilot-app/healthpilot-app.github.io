import { motion } from "framer-motion";

const items = [
  { label: "Apple HealthKit", icon: "heart" },
  { label: "On-device storage", icon: "lock" },
  { label: "No tracking", icon: "shield" },
  { label: "Bring your own AI", icon: "key" },
  { label: "Encrypted at rest", icon: "fingerprint" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[13px] font-medium uppercase tracking-[0.18em] text-white/45"
        >
          {items.map((item, i) => (
            <motion.span
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="inline-flex items-center gap-2"
            >
              <Icon name={item.icon} />
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = {
    width: 14,
    height: 14,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "heart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "key":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="8" cy="15" r="4" />
          <path d="M10.5 12.5l9-9M16 7l3 3" />
        </svg>
      );
    case "fingerprint":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 12a6 6 0 0112 0v3M9 17v-5a3 3 0 016 0v5M12 12v9" />
        </svg>
      );
    default:
      return null;
  }
}
