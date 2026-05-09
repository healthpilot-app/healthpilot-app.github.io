import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  tilt?: number;
  delay?: number;
  className?: string;
  floating?: boolean;
};

export function PhoneFrame({
  src,
  alt,
  tilt = 0,
  delay = 0,
  className = "",
  floating = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: tilt * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={
          floating
            ? { y: [0, -8, 0] }
            : undefined
        }
        transition={
          floating
            ? { repeat: Infinity, duration: 6, ease: "easeInOut" }
            : undefined
        }
        className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[36px] border border-white/10 bg-ink-900 p-1.5 shadow-device"
      >
        <div className="absolute inset-x-12 top-2 z-10 h-5 rounded-b-2xl bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-ink-950">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
