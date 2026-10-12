"use client";

import React, { useEffect, useRef, useState } from "react";

type Category = {
  title: string;
  description: React.ReactNode;
  note: React.ReactNode;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    title: "HR systems",
    description: (
      <>
        Connect approved people/employment
        <br className="hidden sm:block" />
        context relevant to payroll workflows.
      </>
    ),
    note: (
      <>
        Never infers source-of-record ownership,
        <br className="hidden sm:block" />
        write-back or employee fields.
      </>
    ),
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.33 10H10.67"
          stroke="#159BD7"
          strokeWidth="1.33"
          strokeLinecap="round"
        />
        <circle
          cx="6.33"
          cy="4"
          r="2"
          stroke="#159BD7"
          strokeWidth="1.33"
        />
        <path
          d="M10.67 2.09V14"
          stroke="#159BD7"
          strokeWidth="1.33"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Finance systems",
    description: (
      <>
        Connect approved finance/accounting
        <br className="hidden sm:block" />
        context or outputs.
      </>
    ),
    note: (
      <>
        Never infers journals, GL structures,
        <br className="hidden sm:block" />
        settlement or accounting treatment.
      </>
    ),
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2.67"
          width="12"
          height="9.66"
          rx="1"
          stroke="#159BD7"
          strokeWidth="1.33"
        />
        <path
          d="M2 6.67H14"
          stroke="#159BD7"
          strokeWidth="1.33"
        />
      </svg>
    ),
  },
  {
    title: "Time systems",
    description: (
      <>
        Connect approved time/attendance
        <br className="hidden sm:block" />
        inputs where supported.
      </>
    ),
    note: (
      <>
        Never infers timesheet approval, overtime or
        <br className="hidden sm:block" />
        labor-law logic.
      </>
    ),
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="#159BD7"
          strokeWidth="1.33"
        />
        <path
          d="M8 4.67V8.67"
          stroke="#159BD7"
          strokeWidth="1.33"
          strokeLinecap="round"
        />
        <path
          d="M8 8.67L10.67 10"
          stroke="#159BD7"
          strokeWidth="1.33"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Payment systems",
    description: (
      <>
        Connect approved payment-related
        <br className="hidden sm:block" />
        systems where supported.
      </>
    ),
    note: (
      <>
        Never implies funds movement, banking
        <br className="hidden sm:block" />
        rails, settlement timing or MoR status.
      </>
    ),
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="3.33"
          y="7.33"
          width="9.34"
          height="6.67"
          rx="1"
          stroke="#159BD7"
          strokeWidth="1.33"
        />
        <path
          d="M5.33 7.33V5.67C5.33 4.01 6.53 2.67 8 2.67C9.47 2.67 10.67 4.01 10.67 5.67V7.33"
          stroke="#159BD7"
          strokeWidth="1.33"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function IntegrationCategories() {
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
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 lg:px-24">
        {/* Heading */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-start gap-3.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Four approved categories
            </div>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-10 tracking-[-0.02em] text-[#12324A] sm:text-3xl">
              Every integration fits one clear category.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`group flex min-h-[250px] flex-col items-start gap-1.5 rounded-2xl border border-[#E4E7E9] bg-white p-5 shadow-[0_1px_2px_rgba(18,50,74,0.02)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(18,50,74,0.08)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${280 + index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0F3F5] transition-transform duration-200 group-hover:scale-105">
                <div className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
                  {category.icon}
                </div>
              </div>

              {/* Title */}
              <div className="flex w-full flex-col items-start pt-[5px]">
                <h3 className="w-full font-['Inter'] text-sm font-bold leading-6 text-[#12324A]">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex w-full flex-col items-start">
                <p className="w-full font-['Inter'] text-xs font-normal leading-5 text-[#636F76]">
                  {category.description}
                </p>
              </div>

              {/* Divider + note */}
              <div className="mt-auto flex w-full flex-col items-start border-t border-[#E4E7E9] pt-3">
                <p className="font-['Inter'] text-xs font-normal leading-4 text-[#58798A]">
                  {category.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}