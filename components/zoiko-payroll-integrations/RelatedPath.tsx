"use client";

import React, { useEffect, useRef, useState } from "react";

export default function RelatedPath() {
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
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F1F3F4] px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div
        className={`mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10 px-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:flex-row lg:gap-14 lg:px-24 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        {/* Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-2">
          {/* Eyebrow */}
          <div className="relative flex h-5 items-center">
            <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#159BD7]" />

            <span className="ml-[11px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Related path
            </span>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-start pt-1.5">
            <h2 className="font-['Inter'] text-2xl font-extrabold leading-9 text-[#12324A] sm:text-3xl sm:leading-10">
              Zoiko One — an additive route,
              <br className="hidden sm:block" />
              not a replacement for this
              <br className="hidden sm:block" />
              directory.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px] pt-2">
            <p className="font-['Inter'] text-sm font-normal leading-6 text-[#3F4B53] sm:text-base sm:leading-7">
              If your organization uses or is evaluating the broader Zoiko One
              <br className="hidden lg:block" />
              ecosystem, explore how it connects alongside these payroll
              <br className="hidden lg:block" />
              integrations.
            </p>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center rounded-lg border border-[#E4E7E9] bg-white px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-[#12324A] shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#159BD7]/50 hover:shadow-[0px_6px_18px_rgba(10,46,75,0.10)] active:translate-y-0"
          >
            Explore Zoiko One Integration
          </button>
        </div>

        {/* Image */}
        <div className="group relative h-[300px] w-full flex-1 overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_34px_rgba(10,46,75,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_16px_38px_rgba(10,46,75,0.16)] sm:h-[380px]">
          <img
            src="/images/zoiko-payroll-integrations/ecosystem.png"
            alt="Zoiko One ecosystem integration"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}