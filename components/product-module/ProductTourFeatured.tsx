"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ProductTourFeatured() {
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
      className="w-full bg-white px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div
        className={`mx-auto flex w-full max-w-[1320px] overflow-hidden rounded-2xl bg-[#0F3552] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        {/* Image */}
        <div className="relative min-h-[320px] w-1/2 overflow-hidden lg:min-h-[397px]">
          <img
            src="/images/product-module/image9.png"
            alt="Zoiko Payroll product tour"
            className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
              isVisible ? "scale-100" : "scale-[1.03]"
            }`}
          />
        </div>

        {/* Content */}
        <div className="flex w-1/2 flex-col justify-center px-8 py-14 sm:px-10 lg:px-9 lg:py-24">
          {/* Featured badge */}
          <div
            className={`mb-3.5 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="inline-flex rounded-[20px] bg-[#8BD8F8] px-2.5 py-1">
              <span className="font-['Inter'] text-xs font-extrabold leading-4 tracking-wide text-[#0F3552]">
                FEATURED
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <h2 className="font-['Inter'] text-xl font-extrabold leading-9 text-white">
              See Zoiko Payroll in action.
            </h2>
          </div>

          {/* Description */}
          <div
            className={`mt-2.5 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            <p className="max-w-[522px] font-['Inter'] text-sm font-normal leading-5 text-[#D6E3EA]">
              A short, synthetic-data product tour focused on control,
              approvals, records and reporting.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`mt-5 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "340ms" }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-[#8BD8F8] px-6 py-3 font-['Inter'] text-sm font-extrabold leading-6 text-[#0F3552] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
            >
              Start the product tour →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}