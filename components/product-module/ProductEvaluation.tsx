"use client";

import React, { useEffect, useRef, useState } from "react";

const resources = [
  "Security and Trust",
  "Compliance and Assurance",
  "Data Residency",
  "Global Payroll Guide",
  "Pricing",
];

export default function ProductEvaluation() {
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
      className="w-full bg-[#F1F3F4] px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-4 lg:px-24">
        {/* Main Content */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-center gap-4 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div
            className="flex flex-wrap items-center justify-center gap-1.5"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex h-5 items-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#3FB97A]" />
            </div>

            <span className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#3FB97A]">
              Evaluating for your organization?
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-['Inter'] text-2xl font-extrabold leading-9 text-[#12324A] sm:text-3xl sm:leading-10"
            style={{ transitionDelay: "180ms" }}
          >
            Reduce procurement risk before you talk to
            <br className="hidden sm:block" />
            sales.
          </h2>

          {/* Description */}
          <p
            className="max-w-[600px] font-['Inter'] text-sm font-normal leading-6 text-[#596B78] sm:text-base sm:leading-7"
            style={{ transitionDelay: "260ms" }}
          >
            Security, compliance and residency explanations are never gated
            behind a demo.
          </p>
        </div>

        {/* Resource Pills */}
        <div
          className={`flex w-full flex-wrap justify-center gap-2.5 pt-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          {resources.map((resource, index) => (
            <button
              key={resource}
              type="button"
              className="rounded-[20px] border border-[#E1E4E6] bg-white px-4 py-2 font-['Inter'] text-xs font-semibold leading-5 text-[#24516B] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3FB97A] hover:shadow-[0_4px_12px_rgba(18,50,74,0.08)] active:translate-y-0"
              style={{
                transitionDelay: `${360 + index * 50}ms`,
              }}
            >
              {resource}
            </button>
          ))}
        </div>

        {/* Existing Customer Note */}
        <div
          className={`flex w-full flex-col items-center pt-1 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="font-['Inter'] text-xs font-normal leading-5 text-[#6E8796]">
            Existing customer? Product routes remain accessible without a
            forced acquisition path.
          </p>
        </div>
      </div>
    </section>
  );
}