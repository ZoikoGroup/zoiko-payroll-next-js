"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ProductReadyCta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 pt-16 pb-24 sm:px-8 sm:pb-28 lg:px-14 lg:pt-20 lg:pb-32"
    >
      {/* Dark Blue CTA Box */}
      <div
        className={`mx-auto flex w-full max-w-[1320px] flex-col items-center gap-3.5 rounded-2xl bg-[#12324A] px-6 py-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 lg:px-24 lg:py-20 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        {/* Eyebrow */}
        <div
          className={`flex flex-wrap items-center justify-center gap-1.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex h-5 items-center py-[3px]">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#8BD8F8]" />
          </div>

          <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#8BD8F8]">
            Ready to go further?
          </span>
        </div>

        {/* Heading */}
        <div
          className={`w-full max-w-[640px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
            Choose where to start.
          </h2>
        </div>

        {/* Buttons */}
        <div
          className={`flex w-full flex-wrap justify-center gap-3.5 pt-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "280ms" }}
        >
          {/* Primary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#56BCE8] to-[#159BD7] px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0px_6px_18px_rgba(10,46,75,0.18)] active:translate-y-0"
          >
            Explore Payroll Processing
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 active:translate-y-0"
          >
            Start Product Tour
          </button>
        </div>
      </div>
    </section>
  );
}