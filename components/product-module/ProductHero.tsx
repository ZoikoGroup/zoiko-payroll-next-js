"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ProductHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = heroRef.current;

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
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-14 lg:py-16">
      <div
        ref={heroRef}
        className={`
          relative
          mx-auto
          w-full
          max-w-[1320px]
          overflow-hidden
          rounded-xl
          bg-[#0F2A3D]
          bg-cover
          bg-center
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }
        `}
        style={{
          backgroundImage: "url('/images/product-module/bg.png')",
        }}
      >
        {/* Background overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(15,42,61,0.90)_0%,rgba(15,42,61,0.65)_55%,rgba(15,42,61,0.25)_100%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[680px]
            flex-col
            items-start
            justify-start
            gap-3.5
            p-6
            sm:p-8
            lg:p-12
          "
        >
          {/* Product Overview */}
          <div
            className={`
              relative
              h-5
              w-full
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "100ms",
            }}
          >
            <div
              className="
                absolute
                left-0
                top-[3px]
                h-3.5
                w-1.5
                rounded-[2px]
                bg-[#159BD7]
              "
            />

            <div
              className="
                pl-[11px]
                font-['Inter']
                text-xs
                font-bold
                uppercase
                leading-5
                tracking-wider
                text-[#8BD8F8]
              "
            >
              Product Overview
            </div>
          </div>

          {/* Heading */}
          <div
            className={`
              w-full
              pt-0.5
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "180ms",
            }}
          >
            <h1
              className="
                font-['Inter']
                text-[28px]
                font-extrabold
                leading-[34px]
                text-white
                sm:text-[32px]
                sm:leading-[38px]
                lg:text-4xl
                lg:leading-10
              "
            >
              The complete map of the Zoiko
              <br className="hidden sm:block" />
              Payroll product.
            </h1>
          </div>

          {/* Description */}
          <div
            className={`
              w-full
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "260ms",
            }}
          >
            <p
              className="
                max-w-[620px]
                font-['Inter']
                text-sm
                font-normal
                leading-[22px]
                text-[#D6E3EA]
                sm:text-[15px]
                sm:leading-6
                lg:text-base
                lg:leading-6
              "
            >
              Zoiko Payroll is a governed platform for preparing, approving,
              reporting on and integrating global payroll. Explore the product
              map below and choose the path that fits what you need next.
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`
              flex
              w-full
              flex-col
              items-stretch
              justify-start
              gap-3
              pt-2.5
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              sm:flex-row
              sm:items-start
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "340ms",
            }}
          >
            {/* Primary CTA */}
            <button
              type="button"
              className="
                w-full
                rounded-lg
                bg-[#8BD8F8]
                px-6
                py-3
                text-center
                font-['Inter']
                text-sm
                font-extrabold
                leading-6
                text-[#12324A]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:opacity-90
                active:translate-y-0
                sm:w-auto
              "
            >
              Explore Payroll Processing
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              className="
                w-full
                rounded-lg
                border
                border-white/40
                bg-transparent
                px-6
                py-3
                text-center
                font-['Inter']
                text-sm
                font-bold
                leading-6
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/60
                hover:bg-white/10
                active:translate-y-0
                sm:w-auto
              "
            >
              Start Product Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}