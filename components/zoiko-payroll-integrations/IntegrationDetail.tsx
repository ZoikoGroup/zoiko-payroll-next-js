"use client";

import React, { useEffect, useRef, useState } from "react";

type DetailRow = {
  label: string;
  value: string;
};

const overviewRows: DetailRow[] = [
  {
    label: "Purpose",
    value: "Business workflow supported",
  },
  {
    label: "Data direction",
    value: "Registry-driven",
  },
  {
    label: "Data scope",
    value: "High-level public description",
  },
  {
    label: "System of record",
    value: "Only if contract defines",
  },
];

const setupRows: DetailRow[] = [
  {
    label: "Authentication",
    value: "Approved public-safe description",
  },
  {
    label: "Prerequisites",
    value: "Plan / permissions / config",
  },
  {
    label: "Setup steps",
    value: "Discovery → Configure → Test → Activate",
  },
  {
    label: "Support",
    value: "Approved escalation route",
  },
];

export default function IntegrationDetail() {
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
        {/* Heading */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-start gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#159BD7]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Integration detail
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-10 tracking-[-0.02em] text-[#12324A] sm:text-3xl">
              Purpose, direction and scope — never a
              <br className="hidden sm:block" />
              vague description.
            </h2>
          </div>
        </div>

        {/* Detail cards */}
        <div
          className={`flex w-full flex-col items-stretch gap-5 pt-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:flex-row ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          <DetailCard title="Overview" rows={overviewRows} />

          <DetailCard title="Setup & support" rows={setupRows} />
        </div>

        {/* Bottom note */}
        <div
          className={`flex w-full flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          <p className="max-w-[1050px] text-center font-['Inter'] text-xs font-normal leading-5 text-[#58798A]">
            Sync frequency and real-time behavior are never published without a
            technical source. A &quot;no results&quot; search state always offers
            a clear reset or contact path — never an unsupported-provider
            promise.
          </p>
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  title,
  rows,
}: {
  title: string;
  rows: DetailRow[];
}) {
  return (
    <div className="flex flex-1 flex-col items-start rounded-xl border border-[#E4E7E9] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_8px_24px_rgba(10,46,75,0.06)]">
      {/* Card title */}
      <div className="flex w-full flex-col items-start pb-3">
        <h3 className="w-full font-['Inter'] text-sm font-bold leading-6 text-[#12324A]">
          {title}
        </h3>
      </div>

      {/* Rows */}
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex w-full items-start justify-between gap-5 py-2.5 ${
            index !== rows.length - 1
              ? "border-b border-[#E4E7E9]"
              : ""
          }`}
        >
          <div className="flex min-w-0 flex-1 flex-col items-start">
            <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#12324A]">
              {row.label}
            </span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-start">
            <span className="font-['Inter'] text-xs font-normal leading-5 text-[#58798A]">
              {row.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}