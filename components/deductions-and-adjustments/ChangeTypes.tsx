"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  RefreshCw,
  Clock3,
  SquareCheck,
} from "lucide-react";

export default function ChangeTypes() {
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
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const changeTypes = [
    {
      title: "Recurring",
      description: (
        <>
          Control changes intended to continue according to
          <br className="hidden xl:block" />
          approved payroll rules.
        </>
      ),
      icon: <RefreshCw size={16} strokeWidth={1.5} />,
    },
    {
      title: "One-time",
      description: (
        <>
          Manage changes intended to apply once within an
          <br className="hidden xl:block" />
          approved payroll context.
        </>
      ),
      icon: <Clock3 size={16} strokeWidth={1.5} />,
    },
    {
      title: "Corrective",
      description: (
        <>
          Track changes intended to correct a prior payroll-
          <br className="hidden xl:block" />
          related value or record.
        </>
      ),
      icon: <SquareCheck size={16} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#EEF3F8] pt-14 pb-20 overflow-hidden ${
        isVisible ? "change-types-visible" : ""
      }`}
    >
      {/* Main Figma container */}
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 px-6 md:px-12 lg:px-24">
        {/* =========================
            SECTION HEADING
        ========================= */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-start gap-4 text-center transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 flex-col items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#1687C9]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#1687C9]">
              Change types
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B]">
              Three distinct change types, never blurred
              <br />
              into one.
            </h2>
          </div>
        </div>

        {/* =========================
            CHANGE TYPE CARDS
        ========================= */}
        <div className="flex w-full items-start justify-center gap-4">
          {changeTypes.map((item, index) => (
            <div
              key={item.title}
              className={`group flex flex-1 flex-col items-start gap-2 rounded-2xl border border-[#E1E5E8] bg-white px-5 pb-6 pt-5 opacity-0 shadow-none transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#D5E2EA] hover:shadow-[0px_10px_28px_rgba(10,46,75,0.08)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10"
              }`}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#E8F3FA] text-[#1687C9] transition-all duration-300 group-hover:bg-[#DCEEF8] group-hover:scale-105">
                {item.icon}
              </div>

              {/* Title */}
              <div className="flex w-full flex-col items-start pt-1.5">
                <div className="w-full font-['Inter'] text-base font-bold leading-6 text-[#0A2E4B]">
                  {item.title}
                </div>
              </div>

              {/* Description */}
              <div className="flex w-full flex-col items-start pb-2.5">
                <div className="w-full font-['Inter'] text-xs font-normal leading-5 text-[#66727D]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            BOTTOM FEATURE IMAGE BOX
        ========================= */}
        <div
          className={`group relative flex min-h-[224px] w-full max-w-[1116px] items-center overflow-hidden rounded-3xl opacity-0 transition-all duration-800 ease-out ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-10 scale-[0.98]"
          }`}
          style={{
            transitionDelay: "550ms",
          }}
        >
          {/* Background image */}
          <img
            src="/images/deductions-and-adjustments/bg.png"
            alt="Controlled, traceable and recoverable payroll changes"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Figma overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B45]/90 via-[#0A2E4B]/75 via-[55%] to-[#1687C9]/40" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[224px] w-full max-w-[620px] flex-col items-start justify-start gap-4 p-12">
            {/* Eyebrow */}
            <div className="relative h-5 w-full">
              <div className="absolute left-[-1.49px] top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#8BD5FF]" />

              <div className="absolute left-[11px] top-[-0.5px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#8BD5FF]">
                Controlled, traceable, recoverable
              </div>
            </div>

            {/* Heading */}
            <div className="flex w-full flex-col items-start">
              <h3 className="m-0 font-['Inter'] text-xl font-extrabold leading-6 text-white">
                Every change keeps its type, timing, status and
                <br className="hidden md:block" />
                history visible.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          RESPONSIVE
      ========================= */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding-top: 48px;
            padding-bottom: 72px;
          }
        }

        @media (max-width: 767px) {
          section {
            padding-top: 40px;
            padding-bottom: 64px;
          }

          section > div {
            padding-left: 24px;
            padding-right: 24px;
          }

          section h2 {
            font-size: 28px;
            line-height: 36px;
          }

          section h2 br {
            display: none;
          }

          section > div > div:nth-child(2) {
            flex-direction: column;
          }

          section > div > div:nth-child(2) > div {
            width: 100%;
          }

          section > div > div:nth-child(3) {
            min-height: 220px;
          }

          section > div > div:nth-child(3) > div {
            padding: 32px 28px;
          }

          section > div > div:nth-child(3) h3 {
            font-size: 18px;
            line-height: 24px;
          }
        }

        @media (max-width: 480px) {
          section > div {
            padding-left: 20px;
            padding-right: 20px;
          }

          section h2 {
            font-size: 26px;
            line-height: 34px;
          }

          section > div > div:nth-child(3) {
            min-height: 220px;
            border-radius: 20px;
          }

          section > div > div:nth-child(3) > div {
            padding: 28px 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          section * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}