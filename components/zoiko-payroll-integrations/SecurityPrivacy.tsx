"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SecurityPrivacy() {
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
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 lg:px-24">
        {/* Top content */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
          {/* Left content */}
          <div
            className={`flex w-full flex-1 flex-col items-start gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Eyebrow */}
            <div className="relative flex h-5 w-full items-center">
              <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#159BD7]" />

              <span className="pl-[11px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
                Security, privacy &amp; data ownership
              </span>
            </div>

            {/* Heading */}
            <div className="flex w-full flex-col items-start pb-[0.58px]">
              <h2 className="font-['Inter'] text-2xl font-extrabold leading-9 tracking-[-0.02em] text-[#12324A] sm:text-3xl sm:leading-10">
                No claim without an approved
                <br className="hidden sm:block" />
                Trust source behind it.
              </h2>
            </div>

            {/* Description */}
            <div className="flex w-full max-w-[600px] flex-col items-start">
              <p className="font-['Inter'] text-sm font-normal leading-6 text-[#465F6D] sm:text-base sm:leading-7">
                Encryption, certifications, SSO, auditability, residency and
                <br className="hidden sm:block" />
                retention are stated only where approved Trust sources exist.
                <br className="hidden sm:block" />
                OAuth, API key, SFTP and webhook terminology appear only
                <br className="hidden sm:block" />
                where the integration actually supports it.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative flex h-[320px] w-full flex-1 overflow-hidden rounded-[20px] bg-white/[0.02] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[380px] ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-[0.98] opacity-0"
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <img
              src="/images/zoiko-payroll-integrations/image.png"
              alt="Security, privacy and data ownership"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Never exposed callout */}
        <div
          className={`flex w-full flex-col items-start gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "280ms" }}
        >
          <div className="w-full rounded-xl border border-[#E4E7E9] border-l-4 border-l-[#159BD7] bg-white px-5 py-5 transition-all duration-300 hover:shadow-[0px_6px_18px_rgba(10,46,75,0.07)] sm:px-7 sm:py-6">
            <p className="font-['Inter'] text-sm leading-6">
              <span className="font-bold text-[#12324A]">
                Never exposed:
              </span>{" "}
              <span className="font-normal text-[#1E526E]">
                credentials, tokens, secrets, employee data or payroll payloads
                in public marketing specimens. Source and destination system
                responsibility is stated explicitly only where the Product and
                Integration contracts define it.
              </span>
            </p>
          </div>

          {/* Security link */}
          <div className="flex w-full items-center justify-center pb-0.5 pt-[2.5px]">
            <button
              type="button"
              className="font-['Inter'] text-xs font-bold leading-5 text-[#159BD7] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              View security information →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}