"use client";

import React, { useEffect, useRef, useState } from "react";

const lifecycleItems = [
  {
    icon: "🟢",
    title: "Available",
    description: "Published for evaluation or setup.",
  },
  {
    icon: "🟡",
    title: "Setup required",
    description: "Prerequisites incomplete.",
  },
  {
    icon: "🔵",
    title: "Testing / connecting",
    description: "Only if an actual connection workflow exists.",
  },
  {
    icon: "🟢",
    title: "Connected",
    description: "Active per canonical connection state.",
  },
  {
    icon: "🟠",
    title: "Attention required",
    description: "User, config or auth issue.",
  },
  {
    icon: "🔴",
    title: "Provider unavailable",
    description: "Dependency issue — distinct from Zoiko errors.",
  },
  {
    icon: "⚪",
    title: "Disconnected",
    description: "No active connection.",
  },
  {
    icon: "🔒",
    title: "Permission denied",
    description: "Role or entitlement issue.",
  },
  {
    icon: "⚫",
    title: "Retired",
    description:
      "No longer supported; migration guidance where approved.",
  },
];

export default function ConnectionLifecycle() {
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

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Connection lifecycle
            </span>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-10 tracking-[-0.02em] text-[#12324A] sm:text-3xl">
              Provider outage is never confused with a
              <br className="hidden sm:block" />
              Zoiko error.
            </h2>
          </div>
        </div>

        {/* Lifecycle cards */}
        <div
          className={`grid w-full grid-cols-1 gap-3 pt-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          {lifecycleItems.map((item, index) => (
            <div
              key={item.title}
              className="flex min-h-[86px] flex-col items-start rounded-[10px] border border-[#E4E7E9] bg-white px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8DDE8] hover:shadow-[0px_6px_18px_rgba(10,46,75,0.07)]"
              style={{
                transitionDelay: `${220 + index * 60}ms`,
              }}
            >
              {/* Status */}
              <div className="flex w-full flex-col items-start">
                <div className="w-full font-['Inter'] text-xs font-bold leading-5 text-[#12324A]">
                  <span className="mr-1">{item.icon}</span>
                  {item.title}
                </div>
              </div>

              {/* Description */}
              <div className="flex w-full flex-col items-start pb-[0.59px]">
                <p className="w-full font-['Inter'] text-xs font-normal leading-4 text-[#58798A]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`flex w-full flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="max-w-[1050px] text-center font-['Inter'] text-xs font-normal leading-5 text-[#58798A]">
            Status shown for signed-in surfaces reflects your actual
            connection — the public directory shows availability only, never a
            customer-specific connection state.
          </p>
        </div>
      </div>
    </section>
  );
}