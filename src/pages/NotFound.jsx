import React, { useEffect } from "react";
import Navigation from "../components/Navigation";

export default function NotFound() {
  useEffect(() => {
    // 🚨 auto-redirect if it's under /poem/
    if (window.location.pathname.startsWith("/poem/")) {
      window.location.replace("/"); // push straight to homepage
    }
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    if (document.referrer && document.referrer !== window.location.href) {
      window.history.back();
    } else {
      window.location.href = "https://misterjk.com/";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Paper / subtle noise background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.015" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Navigation */}
      <Navigation />

      {/* 404 Content */}
      <div className="w-full mt-[6rem]">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-white to-neutral-200 shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
            <div className="relative rounded-lg border border-neutral-300 bg-white">
              <div className="rounded-lg p-8 bg-gradient-to-b from-white to-neutral-50 text-center">
                <div className="text-8xl font-extrabold text-neutral-300 mb-4">
                  404
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-6">
                  Page Not Found
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  Looks like this page went on tour without telling us. Let’s get
                  you back to the music.
                </p>

                <button
                  onClick={handleBack}
                  className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] active:shadow-inner active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-lg font-semibold"
                >
                  <span className="link-text-black-to-rainbow">
                    ← Return Home
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-10 px-4 py-6">
        <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
          <p className="text-xs text-neutral-700">
            © MRJK Records, a division of Jake Robison Records. © Georgia Wixen
            Records, a division of Jake Robison Records. The Nice Girls™ name,
            photos, and music are the property of Jake Robison Records.
          </p>
        </div>
      </footer>
    </div>
  );
}
