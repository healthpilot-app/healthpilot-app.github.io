import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max degrees of rotation per axis. */
  maxTilt?: number;
  /** Optional extra Z-translation for layered child glare. */
  glare?: boolean;
  /** Inner padding multiplier for the parallax depth. */
  depth?: number;
};

const SPRING = { stiffness: 220, damping: 20, mass: 0.4 };

export function CardTilt({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  depth = 1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Normalised mouse position relative to the card center, range [-0.5, 0.5].
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [maxTilt, -maxTilt]), SPRING);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-maxTilt, maxTilt]), SPRING);

  // Glare highlight follows the cursor.
  const glareX = useTransform(mx, [-0.5, 0.5], ["20%", "80%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: `translateZ(${20 * depth}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glareX, glareY] as never,
              ([x, y]: string[]) =>
                `radial-gradient(280px circle at ${x} ${y}, rgba(255,255,255,0.12), transparent 60%)`,
            ),
            mixBlendMode: "plus-lighter",
          }}
          whileHover={{ opacity: 1 }}
        />
      )}
    </motion.div>
  );
}
