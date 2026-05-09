import { motion } from "framer-motion";

type Props = {
  size?: number;
  animate?: boolean;
  className?: string;
};

export function BrandMark({ size = 96, animate = true, className }: Props) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      initial={animate ? { scale: 0.92, opacity: 0 } : false}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <defs>
        <linearGradient id="bm-bg" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6D28D9" />
          <stop offset="0.6" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <radialGradient id="bm-shine" cx="307" cy="256" r="600" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1024" height="1024" rx="277" ry="277" fill="url(#bm-bg)" />
      <rect x="0" y="0" width="1024" height="1024" rx="277" ry="277" fill="url(#bm-shine)" />

      <g opacity="0.95" transform="translate(512 512)">
        <path
          d="M -246 246 A 348 348 0 1 1 246 246"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.25"
          strokeWidth="61"
          strokeLinecap="round"
        />
        <motion.path
          d="M -246 246 A 348 348 0 1 1 246 246"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="61"
          strokeLinecap="round"
          strokeDasharray="1230 10000"
          initial={animate ? { pathLength: 0 } : false}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </g>

      <motion.path
        d="M 296 532 L 374 532 L 426 412 L 478 644 L 530 532 L 564 504 L 598 532 L 728 532"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="46"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        animate={animate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
      />
    </motion.svg>
  );
}
