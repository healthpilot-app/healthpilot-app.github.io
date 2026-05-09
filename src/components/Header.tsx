import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrandMark } from "./BrandMark";

const APP_STORE_URL =
  "https://apps.apple.com/app/healthpilot-ai-health-coach/id6764634374";

const NAV_LINKS = [
  { href: "features", label: "Features" },
  { href: "screens", label: "Screens" },
  { href: "workouts", label: "Workouts" },
  { href: "how", label: "How it works" },
  { href: "privacy", label: "Privacy" },
];

function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "/index.html" || pathname === "";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onHome, setOnHome] = useState(true);

  useEffect(() => {
    setOnHome(isHomePath(window.location.pathname));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the landing page, use bare hash anchors so the browser smooth-scrolls
  // without a navigation. On any other page, prefix with `/` so clicking takes
  // you home and then to the section.
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const logoHref = onHome ? "#top" : "/";

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href={logoHref} className="flex items-center gap-2.5">
          <BrandMark size={32} animate={false} className="rounded-[8px]" />
          <span className="text-[15px] font-semibold tracking-tight">HealthPilot</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={sectionHref(link.href)}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-violet-500/20"
        >
          <span>Download</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
        </a>
      </div>
    </motion.header>
  );
}
