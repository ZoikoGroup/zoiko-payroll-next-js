"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DeductionsHero() {
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
      className={`w-full overflow-hidden pt-12 pb-32 ${
        isVisible ? "hero-visible" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-center gap-14 px-6 md:px-12 lg:px-24">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-1 flex-col items-start gap-3.5">
          {/* Eyebrow */}
          <div
            className={`relative h-5 w-full translate-y-5 opacity-0 transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : ""
            }`}
          >
            <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#1687C9]" />

            <div className="absolute left-[11px] top-[-0.5px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#1687C9]">
              Deductions and Adjustments
            </div>
          </div>

          {/* Heading */}
          <div
            className={`w-full translate-y-5 pt-0.5 opacity-0 transition-all delay-100 duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : ""
            }`}
          >
            <h1 className="m-0 w-full font-['Inter'] text-4xl font-extrabold leading-10 text-[#0A2E4B]">
              Control recurring, one-time and corrective changes with a clear
              record of what changed.
            </h1>
          </div>

          {/* Description */}
          <div
            className={`w-full max-w-[600px] translate-y-5 pt-[1.28px] opacity-0 transition-all delay-200 duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : ""
            }`}
          >
            <p className="m-0 w-full font-['Inter'] text-base font-normal leading-7 text-[#66727D]">
              Manage payroll-related changes through a structured workflow
              <br />
              that keeps type, timing, status, validation and history visible.
              <br />
              Exact fields and rules follow approved Zoiko Payroll
              configuration
              <br />
              and policy.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div
            className={`flex w-full translate-y-5 flex-wrap items-start justify-start gap-3 pt-3 opacity-0 transition-all delay-300 duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : ""
            }`}
          >
            {/* SEE THE WORKFLOW */}
            <Link
              href="#workflow"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-r
                from-[#3FB97A]
                to-[#1687C9]
                px-6
                font-['Inter']
                text-sm
                font-bold
                leading-6
                text-white
                shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0px_8px_20px_0px_rgba(10,46,75,0.18)]
                active:translate-y-0
              "
            >
              See the workflow
            </Link>

            {/* BOOK A DEMO */}
            <Link
              href="/contact"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-lg
                border
                border-[#DFE5E9]
                bg-white
                px-6
                font-['Inter']
                text-sm
                font-bold
                leading-6
                text-[#0A2E4B]
                shadow-[0px_1px_2px_0px_rgba(10,46,75,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#BFCBD3]
                hover:bg-[#FAFCFD]
                hover:shadow-[0px_8px_20px_0px_rgba(10,46,75,0.10)]
                active:translate-y-0
              "
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`h-[380px] w-full flex-1 overflow-hidden rounded-2xl bg-[#0A2E4B] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] opacity-0 transition-all delay-200 duration-800 ease-out ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-[0.97]"
          } hover:-translate-y-1.5 hover:shadow-[0px_18px_42px_0px_rgba(10,46,75,0.18)]`}
        >
          <Image
            src="/images/deductions-and-adjustments/hero.png"
            alt="Deductions and Adjustments"
            width={528}
            height={380}
            priority
            className="h-full w-full rounded-[20px] object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section > div {
            gap: 40px;
          }

          h1 {
            font-size: 32px;
            line-height: 38px;
          }
        }

        @media (max-width: 767px) {
          section {
            padding-top: 40px;
            padding-bottom: 96px;
          }

          section > div {
            flex-direction: column;
            align-items: stretch;
            gap: 36px;
            padding-left: 24px;
            padding-right: 24px;
          }

          h1 {
            font-size: 30px;
            line-height: 36px;
          }

          p br {
            display: none;
          }

          section > div > div:last-child {
            height: 300px;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          section > div {
            padding-left: 20px;
            padding-right: 20px;
          }

          h1 {
            font-size: 28px;
            line-height: 34px;
          }

          section > div > div:first-child > div:last-child {
            flex-direction: column;
            align-items: stretch;
          }

          section > div > div:first-child > div:last-child a {
            width: 100%;
          }

          section > div > div:last-child {
            height: 260px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}