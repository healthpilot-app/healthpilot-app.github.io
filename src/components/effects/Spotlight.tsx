import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Spotlight color, defaults to violet glow. */
  fill?: string;
  /** Radius of the spotlight in px. */
  size?: number;
};

export function Spotlight({
  children,
  className = "",
  fill = "rgba(167,139,250,0.18)",
  size = 420,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);

  const sx = useSpring(mx, { stiffness: 180, damping: 28, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 180, damping: 28, mass: 0.6 });

  const background = useTransform(
    [sx, sy] as never,
    ([x, y]: number[]) =>
      `radial-gradient(${size}px circle at ${x}px ${y}px, ${fill}, transparent 70%)`,
  );

  function handleMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  function handleLeave() {
    mx.set(-1000);
    my.set(-1000);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        style={{ background }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
