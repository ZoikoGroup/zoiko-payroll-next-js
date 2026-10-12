"use client";

import React, { useEffect, useRef, useState } from "react";

const steps = ["Discovery", "Configure", "Test", "Activate"];

export default function ImplementationGuidance() {
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
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7">
        {/* Heading */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-start gap-4 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div
            className="flex w-full items-center justify-center gap-1.5"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex h-5 items-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#159BD7]" />
            </div>

            <span className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Implementation guidance
            </span>
          </div>

          {/* Heading */}
          <div
            className="flex w-full flex-col items-center"
            style={{ transitionDelay: "180ms" }}
          >
            <h2 className="font-['Inter'] text-2xl font-extrabold leading-9 text-[#12324A] sm:text-3xl sm:leading-10">
              Discovery to activation — only where the
              <br className="hidden sm:block" />
              real process supports it.
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div
          className={`flex w-full flex-wrap items-center justify-center gap-1 overflow-hidden py-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "280ms" }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div
                className="flex min-w-[120px] items-center justify-center rounded-[10px] border border-[#E4E7E9] bg-white px-8 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#159BD7]/40 hover:shadow-[0px_6px_18px_rgba(10,46,75,0.10)] sm:min-w-[128px] sm:px-9"
              >
                <span className="text-center font-['Inter'] text-xs font-bold leading-5 text-[#12324A]">
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <span className="hidden w-4 text-center font-['Inter'] text-base font-normal leading-6 text-[#159BD7] sm:block">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Featured image banner */}
      <div
        className={`mx-auto mt-4 flex min-h-[220px] w-full max-w-[1116px] items-center overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "380ms" }}
      >
        {/* Background image */}
        <img
          src="/images/zoiko-payroll-integrations/bg2.png"
          alt="Integration setup guidance"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Figma overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,42,61,0.88)_0%,rgba(18,50,74,0.75)_55%,rgba(21,155,215,0.40)_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[620px] flex-col items-start gap-4 p-8 sm:p-10 lg:p-12">
          {/* Eyebrow */}
          <div className="flex h-5 items-center gap-2">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#8BD8F8]" />

            <span className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#8BD8F8]">
              Self-serve, assisted or enterprise-assisted
            </span>
          </div>

          {/* Banner heading */}
          <h3 className="font-['Inter'] text-lg font-extrabold leading-6 text-white sm:text-xl">
            Setup model follows the approved route for each
            <br className="hidden sm:block" />
            integration.
          </h3>
        </div>
      </div>
    </section>
  );
}