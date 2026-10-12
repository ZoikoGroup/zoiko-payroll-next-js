"use client";

import React, { useEffect, useRef, useState } from "react";

export default function IntegrationsHero() {
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
      className="w-full bg-[#F1F3F4] px-4 py-8 sm:px-6 sm:py-10 lg:px-14 lg:py-12"
    >
      <div
        className={`relative mx-auto flex w-full max-w-[1320px] overflow-hidden rounded-2xl bg-[#12324A] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/zoiko-payroll-integrations/bg.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,42,61,0.94)_0%,rgba(15,42,61,0.82)_45%,rgba(15,42,61,0.52)_75%,rgba(15,42,61,0.32)_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[680px] flex-col items-start gap-3.5 p-6 sm:p-8 lg:p-12">
          
          {/* Eyebrow */}
          <div
            className={`relative h-5 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#159BD7]" />

            <div className="pl-[11px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#8BD8F8]">
              Integrations
            </div>
          </div>

          {/* Heading */}
          <div
            className={`w-full pt-[1.59px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <h1 className="font-['Inter'] text-[30px] font-extrabold leading-[1.25] tracking-[-0.02em] text-white sm:text-4xl sm:leading-10">
              Connect Zoiko Payroll to
              <br className="hidden sm:block" />
              approved HR, finance, time and
              <br className="hidden sm:block" />
              payment systems.
            </h1>
          </div>

          {/* Description */}
          <div
            className={`w-full pb-[0.69px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            <p className="font-['Inter'] text-sm font-normal leading-6 text-[#D6E3EA] sm:text-base">
              Explore source-governed integration categories and published
              connections.
              <br className="hidden sm:block" />
              Provider availability, setup, direction and data scope follow the
              approved
              <br className="hidden sm:block" />
              Zoiko Payroll Integration Registry.
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex w-full flex-wrap items-start gap-3 pt-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "340ms" }}
          >
            {/* Primary */}
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#8BD8F8] px-6 py-3 font-['Inter'] text-sm font-extrabold leading-6 text-[#12324A] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)] active:translate-y-0"
            >
              Explore integrations
            </button>

            {/* Secondary */}
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 active:translate-y-0"
            >
              Explore Zoiko One Integration
            </button>
          </div>

          {/* Book a demo */}
          <div
            className={`w-full pt-[2.89px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            <button
              type="button"
              className="font-['Inter'] text-xs font-bold leading-5 text-[#8BD8F8] transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Book a demo →
            </button>
          </div>
        </div>
      </div>

      {/* Caption below hero */}
      <div
        className={`mx-auto mt-2 w-full max-w-[1320px] px-4 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        <p className="font-['Inter'] text-[10px] leading-4 text-[#8A9BA6] sm:text-xs">
          Only approved integrations are published; technical behavior varies
          by provider and configuration.
        </p>
      </div>
    </section>
  );
}