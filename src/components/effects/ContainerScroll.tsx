import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

type Props = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
};

export function ContainerScroll({ titleComponent, children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const spring = (v: MotionValue<number>) =>
    useSpring(v, { stiffness: 90, damping: 22, mass: 0.6 });

  const rotate = spring(useTransform(scrollYProgress, [0, 0.4], [22, 0]));
  const scale = spring(useTransform(scrollYProgress, [0, 0.4], [1.06, 1]));
  const translateY = spring(useTransform(scrollYProgress, [0, 0.4], [-60, 0]));
  const titleY = spring(useTransform(scrollYProgress, [0, 0.4], [-30, 0]));
  const titleOpacity = spring(useTransform(scrollYProgress, [0, 0.4], [0.6, 1]));

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="will-change-transform"
      >
        {titleComponent}
      </motion.div>

      <motion.div
        style={{
          rotateX: rotate,
          scale,
          y: translateY,
          transformStyle: "preserve-3d",
          transformOrigin: "50% 0%",
        }}
        className="mt-8 will-change-transform md:mt-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
