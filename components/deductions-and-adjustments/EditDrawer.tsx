"use client";

import React, { useEffect, useRef, useState } from "react";

const fields = [
  {
    title: "Change type",
    description: "Recurring / one-time / corrective",
  },
  {
    title: "Context selector",
    description: "Privacy & permission aware",
  },
  {
    title: "Change value fields",
    description: "Rendered from schema",
  },
  {
    title: "Effective date",
    description: "Where supported",
  },
  {
    title: "Reason / note",
    description: "Optional, privacy-guided",
  },
  {
    title: "Validation panel",
    description: "Live or on-submit",
  },
];

export default function EditDrawer() {
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
      className="w-full bg-[#EEF3F8] px-6 py-14 md:px-10 lg:px-14 lg:py-20"
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
              Create &amp; edit drawer
            </div>
          </div>

          {/* Heading */}

          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B]">
              A controlled input pattern — fields render
              <br />
              from your configuration.
            </h2>
          </div>

          {/* Description */}

          <div className="flex w-full max-w-[600px] flex-col items-center">
            <p className="m-0 text-center font-['Inter'] text-base font-normal leading-7 text-[#66727D]">
              Change value fields render from your organization&apos;s schema
              and product
              <br />
              contract — never hard-coded or guessed.
            </p>
          </div>
        </div>

        {/* =====================================================
            3 LEFT + 3 RIGHT
        ====================================================== */}

        <div
          className={`grid w-full max-w-[760px] grid-cols-1 gap-2 pt-3 transition-all duration-700 ease-out sm:grid-cols-2 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: "180ms",
          }}
        >
          {fields.map((field, index) => (
            <div
              key={field.title}
              className={`group flex min-h-[62px] w-full flex-col items-start justify-center gap-px rounded-[10px] border border-[#E1E5E8] bg-white px-3.5 py-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D4E4EE] hover:bg-[#FCFDFE] hover:shadow-[0px_5px_18px_rgba(10,46,75,0.07)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: `${250 + index * 70}ms`,
              }}
            >
              {/* Field title */}

              <div className="flex w-full flex-col items-start">
                <div className="w-full font-['Inter'] text-xs font-bold leading-5 text-[#0A2E4B]">
                  {field.title}
                </div>
              </div>

              {/* Field description */}

              <div className="flex w-full flex-col items-start pb-[0.8px]">
                <div className="w-full font-['Inter'] text-xs font-normal leading-4 text-[#71889A]">
                  {field.description}
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
            transitionDelay: "700ms",
          }}
        >
          <p className="m-0 text-center font-['Inter'] text-xs font-normal leading-5 text-[#71889A]">
            Unsaved-change warnings are always shown before navigating away.
            Errors appear as a top summary plus inline messages — never hidden.
          </p>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE
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