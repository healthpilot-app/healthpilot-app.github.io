import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function TracingBeam({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const update = () =>
      setHeight(ref.current?.getBoundingClientRect().height ?? 0);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
  });

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.85], [0, height]), {
    stiffness: 240,
    damping: 28,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [40, height]), {
    stiffness: 240,
    damping: 28,
  });

  return (
    <div ref={ref} className="relative w-full">
      {/* Beam rail — hidden on mobile, sits in the page gutter on desktop. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-0 hidden h-full w-px lg:block"
      >
        <motion.div
          className="absolute left-1.5 top-3 h-3 w-3 rounded-full border border-violet-300/40 bg-ink-900 shadow-[0_0_18px_rgba(167,139,250,0.45)]"
          animate={{
            boxShadow: [
              "0 0 10px rgba(167,139,250,0.35)",
              "0 0 22px rgba(167,139,250,0.65)",
              "0 0 10px rgba(167,139,250,0.35)",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg
          viewBox={`0 0 20 ${height}`}
          width="20"
          height={height}
          className="ml-[5px] block"
          aria-hidden
        >
          <motion.path
            d={`M 1 0 V ${height}`}
            fill="none"
            stroke="url(#beam-rail)"
            strokeWidth="1.2"
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 1 0 V ${height}`}
            fill="none"
            stroke="url(#beam-active)"
            strokeWidth="1.6"
            style={{
              pathLength: useTransform(
                [y1, y2],
                ([a, b]: number[]) => Math.max(0.001, (b - a) / Math.max(height, 1)),
              ),
              pathOffset: useTransform([y1] as never, ([a]: number[]) => (a as number) / Math.max(height, 1)),
            }}
          />
          <defs>
            <linearGradient id="beam-rail" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#A78BFA" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
            <linearGradient id="beam-active" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#A78BFA" stopOpacity="0" />
              <stop offset="0.2" stopColor="#A78BFA" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="lg:pl-12">{children}</div>
    </div>
  );
}
