"use client";

import React, { useEffect, useRef, useState } from "react";

const validationStates = [
  {
    icon: "○",
    label: "Not run",
  },
  {
    icon: "◐",
    label: "Running",
  },
  {
    icon: "✓",
    label: "Passed",
  },
  {
    icon: "✕",
    label: "Failed",
  },
  {
    icon: "⚠",
    label: "Warning",
  },
  {
    icon: "⊘",
    label: "Service unavailable",
  },
  {
    icon: "🔒",
    label: "Permission issue",
  },
  {
    icon: "⇄",
    label: "Conflict",
  },
  {
    icon: "?",
    label: "Unknown",
  },
];

export default function ValidationExceptions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-14 md:px-10 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-4 px-0 md:px-12 lg:px-24">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className={`flex w-full max-w-[680px] flex-col items-center gap-4 transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}

          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#1687C9]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#1687C9]">
              Validation &amp; exceptions
            </div>
          </div>

          {/* Heading */}

          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B]">
              Failure is a first-class, recoverable state —
              <br className="hidden md:block" />
              never hidden.
            </h2>
          </div>
        </div>

        {/* =====================================================
            VALIDATION STATES
            3 COLUMNS × 3 ROWS
        ====================================================== */}

        <div
          className={`grid w-full grid-cols-1 gap-2 pt-3 transition-all duration-700 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: "180ms",
          }}
        >
          {validationStates.map((state, index) => (
            <div
              key={state.label}
              className={`group flex h-12 w-full items-center gap-2.5 rounded-[10px] border border-[#E1E5E8] bg-white px-3.5 py-2.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D3E2EB] hover:bg-[#FCFDFE] hover:shadow-[0px_5px_18px_rgba(10,46,75,0.07)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: `${250 + index * 65}ms`,
              }}
            >
              {/* Icon */}

              <div className="flex h-6 w-[18px] shrink-0 items-center justify-center">
                <span className="font-['Inter'] text-sm font-normal leading-6 text-[#0A2E4B] transition-transform duration-300 group-hover:scale-110">
                  {state.icon}
                </span>
              </div>

              {/* Label */}

              <div className="flex flex-1 flex-col items-start">
                <div className="font-['Inter'] text-xs font-bold leading-5 text-[#0A2E4B]">
                  {state.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            FOOTNOTE
        ====================================================== */}

        <div
          className={`flex w-full flex-col items-center transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "850ms",
          }}
        >
          <p className="m-0 text-center font-['Inter'] text-xs font-normal leading-5 text-[#71889A]">
            A failed validation always shows the plain-language issue, the
            affected field or context, and a recovery action — text and icon
            first, never color alone.
          </p>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE / REDUCED MOTION
      ====================================================== */}

      <style jsx>{`
        @media (max-width: 767px) {
          h2 {
            font-size: 28px;
            line-height: 36px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 25px;
            line-height: 33px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}