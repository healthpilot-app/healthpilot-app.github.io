import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Features } from "./components/Features";
import { ScreenShowcase } from "./components/ScreenShowcase";
import { WorkoutsFlyover } from "./components/WorkoutsFlyover";
import { HowItWorks } from "./components/HowItWorks";
import { Privacy } from "./components/Privacy";
import { BuilderCard } from "./components/BuilderCard";
import { CTA } from "./components/CTA";

export default function App() {
  // Vite mounts the DOM after React hydration, so the browser's initial
  // hash-scroll happens before the target exists. Re-trigger after mount.
  // overflow-x-clip on the Layout breaks scrollIntoView, so use scrollTo
  // with the element's absolute Y position.
  useEffect(() => {
    const scrollToHash = (smooth = false) => {
      if (!window.location.hash) return;
      const id = window.location.hash.slice(1);
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (!el) return false;
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: smooth ? "smooth" : "instant" });
        return true;
      };
      if (tryScroll()) return;
      // Element may not be in DOM yet on first mount — retry a few frames.
      let frame = 0;
      const tick = () => {
        if (tryScroll() || frame++ >= 5) return;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Initial mount: jump (instant) to whatever hash is in the URL.
    scrollToHash(false);
    // Subsequent in-page hash changes (clicking a nav link while already on
    // the home page): smooth-scroll to the new section.
    const onHashChange = () => scrollToHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <Features />
      <ScreenShowcase />
      <WorkoutsFlyover />
      <HowItWorks />
      <Privacy />
      <BuilderCard />
      <CTA />
    </Layout>
  );
}
