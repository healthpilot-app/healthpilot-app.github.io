import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <BackgroundOrbs />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-violet-700/30 blur-3xl" />
      <div className="absolute top-[40vh] -left-32 h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute top-[80vh] -right-32 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
