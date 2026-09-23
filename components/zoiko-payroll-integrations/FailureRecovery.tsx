"use client";

import React, { useEffect, useRef, useState } from "react";

const recoveryItems = [
  {
    failure: "Authentication expired",
    recovery: "Reconnect / reauthorize path, if supported",
  },
  {
    failure: "Permission revoked",
    recovery: "Explains access issue — never data corruption",
  },
  {
    failure: "Provider outage",
    recovery: "Shows dependency issue and currentness",
  },
  {
    failure: "Mapping / config error",
    recovery: "Actionable, source-approved message",
  },
  {
    failure: "Sync failed",
    recovery: "Retry / support path, if canonical",
  },
  {
    failure: "Partial processing",
    recovery: "Never implies a complete sync",
  },
  {
    failure: "Duplicate event / data",
    recovery: "Backend owns idempotency and deduplication",
  },
  {
    failure: "Rate / limit issue",
    recovery: "User-relevant recovery — no unsafe internals exposed",
  },
  {
    failure: "Integration retired",
    recovery: "Clear migration path, only if approved",
  },
];

export default function FailureRecovery() {
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

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Failure &amp; recovery
            </span>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-9 tracking-[-0.02em] text-[#12324A] sm:text-3xl sm:leading-10">
              Partial processing is never shown as a
              <br className="hidden sm:block" />
              complete sync.
            </h2>
          </div>
        </div>

        {/* Table */}
        <div
          className={`w-full overflow-hidden rounded-2xl border border-[#E4E7E9] bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          {/* Desktop header */}
          <div className="hidden grid-cols-[34%_66%] md:grid">
            <div className="bg-[#F1F3F4] px-4 py-3">
              <span className="font-['Inter'] text-xs font-bold uppercase leading-4 text-[#1E526E]">
                Failure
              </span>
            </div>

            <div className="bg-[#12324A] px-4 py-3">
              <span className="font-['Inter'] text-xs font-bold uppercase leading-4 text-white">
                Recovery behavior
              </span>
            </div>
          </div>

          {/* Mobile header */}
          <div className="grid grid-cols-2 md:hidden">
            <div className="bg-[#F1F3F4] px-3 py-3">
              <span className="font-['Inter'] text-[11px] font-bold uppercase leading-4 text-[#1E526E]">
                Failure
              </span>
            </div>

            <div className="bg-[#12324A] px-3 py-3">
              <span className="font-['Inter'] text-[11px] font-bold uppercase leading-4 text-white">
                Recovery
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {recoveryItems.map((item, index) => (
              <div
                key={item.failure}
                className={`grid grid-cols-1 border-b border-[#E4E7E9] last:border-b-0 transition-all duration-500 hover:bg-[#FAFCFD] md:grid-cols-[34%_66%] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: `${240 + index * 50}ms`,
                }}
              >
                {/* Failure */}
                <div className="bg-[#F1F3F4] px-4 py-3 md:border-r md:border-[#E4E7E9]">
                  <span className="font-['Inter'] text-xs font-bold leading-5 text-[#12324A]">
                    {item.failure}
                  </span>
                </div>

                {/* Recovery */}
                <div className="px-4 py-3">
                  <span className="font-['Inter'] text-xs font-normal leading-5 text-[#12324A]">
                    {item.recovery}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}