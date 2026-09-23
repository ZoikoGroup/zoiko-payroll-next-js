"use client";

import React, { useEffect, useRef, useState } from "react";

const modules = [
  {
    image: "/images/product-module/image5.png",
    title: "Reporting and analytics",
    description: (
      <>
        Review payroll totals, trends, exports
        <br className="hidden sm:block" />
        and history.
      </>
    ),
    link: "Explore Reporting and Analytics →",
  },
  {
    image: "/images/product-module/image6.png",
    title: "Integrations",
    description: (
      <>
        Connect approved HR, finance, time
        <br className="hidden sm:block" />
        and payment systems.
      </>
    ),
    link: "Explore Integrations →",
  },
  {
    image: "/images/product-module/image7.png",
    title: "Security and trust",
    description: (
      <>
        Review access, audit, privacy and
        <br className="hidden sm:block" />
        assurance controls.
      </>
    ),
    link: "Explore Security and Trust →",
  },
  {
    image: "/images/product-module/image8.png",
    title: "Product tour",
    description: (
      <>
        See representative Zoiko Payroll
        <br className="hidden sm:block" />
        workflows in action.
      </>
    ),
    link: "Start Product Tour →",
  },
];

export default function ProductInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20"
    >
      <div
        className={`
          mx-auto
          flex
          w-full
          max-w-[1320px]
          flex-col
          items-center
          justify-start
          gap-[5.2px]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }
        `}
      >
        {/* Section Label */}
        <div
          className={`
            flex
            w-full
            flex-col
            items-center
            justify-start
            pb-[0.59px]
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
          style={{ transitionDelay: "100ms" }}
        >
          <div
            className="
              text-center
              font-['Inter']
              text-xs
              font-extrabold
              uppercase
              leading-4
              tracking-wide
              text-[#159BD7]
            "
          >
            Insight and Control
          </div>
        </div>

        {/* Heading */}
        <div
          className={`
            flex
            w-full
            max-w-[680px]
            flex-col
            items-center
            justify-start
            pb-[0.58px]
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
          style={{ transitionDelay: "180ms" }}
        >
          <h2
            className="
              text-center
              font-['Inter']
              text-2xl
              font-extrabold
              leading-8
              text-[#12324A]
              sm:text-3xl
              sm:leading-10
            "
          >
            See results, connect systems, and trust the
            <br className="hidden sm:block" />
            platform.
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            pt-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {modules.map((module, index) => (
            <div
              key={module.title}
              className={`
                group
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#E4E7E9]
                bg-white
                shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-1
                hover:shadow-[0px_8px_24px_rgba(10,46,75,0.10)]
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${280 + index * 100}ms`,
              }}
            >
              {/* Image */}
              <div
                className="
                  flex
                  h-44
                  w-full
                  items-center
                  justify-start
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#E5E8EA]
                  to-[#DCEFF7]
                "
              >
                <img
                  src={module.image}
                  alt={module.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  flex
                  min-h-[190px]
                  w-full
                  flex-col
                  items-start
                  justify-between
                  p-5
                "
              >
                {/* Title */}
                <div className="w-full pb-2">
                  <h3
                    className="
                      w-full
                      font-['Inter']
                      text-base
                      font-bold
                      leading-6
                      text-[#12324A]
                    "
                  >
                    {module.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="w-full flex-1 pb-3.5">
                  <p
                    className="
                      w-full
                      font-['Inter']
                      text-xs
                      font-normal
                      leading-5
                      text-[#596773]
                    "
                  >
                    {module.description}
                  </p>
                </div>

                {/* Link */}
                <div className="w-full">
                  <button
                    type="button"
                    className="
                      text-left
                      font-['Inter']
                      text-xs
                      font-bold
                      leading-5
                      text-[#159BD7]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {module.link}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}