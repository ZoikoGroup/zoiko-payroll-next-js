"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Integration = {
  title: string;
  description: string;
  category: "HR" | "Finance" | "Time" | "Payment";
  direction: string;
  setup: string;
  image: string;
};

const integrations: Integration[] = [
  {
    title: "HR System Connector",
    description:
      "Bring approved worker and employment context into payroll workflows.",
    category: "HR",
    direction: "Inbound",
    setup: "Self-serve setup",
    image: "/images/zoiko-payroll-integrations/image1.png",
  },
  {
    title: "Finance System Connector",
    description:
      "Connect approved finance and accounting context or outputs.",
    category: "Finance",
    direction: "Outbound",
    setup: "Assisted setup",
    image: "/images/zoiko-payroll-integrations/image2.png",
  },
  {
    title: "Time System Connector",
    description:
      "Bring approved time and attendance inputs into payroll, where supported.",
    category: "Time",
    direction: "Inbound",
    setup: "Self-serve setup",
    image: "/images/zoiko-payroll-integrations/image3.png",
  },
  {
    title: "Payment System Connector",
    description:
      "Connect approved payment-related systems where supported.",
    category: "Payment",
    direction: "Outbound",
    setup: "Enterprise-assisted setup",
    image: "/images/zoiko-payroll-integrations/image4.png",
  },
  {
    title: "Identity / SSO Connector",
    description:
      "Connect approved identity providers for authentication where supported.",
    category: "HR",
    direction: "Bidirectional",
    setup: "Self-serve setup",
    image: "/images/zoiko-payroll-integrations/image5.png",
  },
];

const categories = [
  "All categories",
  "HR",
  "Finance",
  "Time",
  "Payment",
  "Available",
];

export default function IntegrationDirectory() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All categories");

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

  const filteredIntegrations = integrations.filter((integration) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      !searchValue ||
      integration.title.toLowerCase().includes(searchValue) ||
      integration.description.toLowerCase().includes(searchValue) ||
      integration.category.toLowerCase().includes(searchValue);

    const matchesCategory =
      activeCategory === "All categories" ||
      activeCategory === "Available" ||
      integration.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F1F3F4] px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-5 lg:px-24">
        {/* Section heading */}
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
              Integration directory
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-2xl font-extrabold leading-10 tracking-[-0.02em] text-[#12324A] sm:text-3xl">
              Provider names from the Integration
              <br className="hidden sm:block" />
              Registry only.
            </h2>
          </div>
        </div>

        {/* Search and filters */}
        <div
          className={`flex w-full max-w-[1000px] flex-col items-start gap-3.5 rounded-2xl border border-[#E4E7E9] bg-white px-5 pb-5 pt-7 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          {/* Search row */}
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <div className="flex min-h-12 flex-1 items-center overflow-hidden rounded-lg border border-[#E4E7E9] bg-white px-3.5 py-3.5 transition-colors duration-200 focus-within:border-[#159BD7]">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by provider or integration name"
                className="w-full bg-transparent font-['Inter'] text-sm font-normal text-[#12324A] outline-none placeholder:text-[#6B7378]"
              />
            </div>

            <button
              type="button"
              className="min-h-12 rounded-lg bg-gradient-to-r from-[#56BCE8] to-[#159BD7] px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0px_6px_18px_rgba(10,46,75,0.16)] active:translate-y-0"
            >
              Search
            </button>
          </div>

          {/* Category filters */}
          <div className="flex w-full flex-wrap items-start gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-1.5 font-['Inter'] text-xs font-semibold leading-5 transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-[#12324A] text-white shadow-sm"
                      : "bg-[#F1F3F4] text-[#31556B] hover:bg-[#E8EDF0]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Integration cards */}
        <div className="w-full pt-3">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((integration, index) => (
              <IntegrationCard
                key={integration.title}
                integration={integration}
                index={index}
                isVisible={isVisible}
              />
            ))}

            {/* Don't see your system */}
            <div
              className={`flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-[#E4E7E9] bg-white pb-0.5 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0px_10px_28px_rgba(10,46,75,0.08)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${580 + filteredIntegrations.length * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-28 w-full overflow-hidden bg-gradient-to-r from-[#E4E8EA] to-[#D9F0F8]">
                <Image
                  src="/images/zoiko-payroll-integrations/image6.png"
                  alt="Integration support"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-start gap-1.5 p-4">
                <div className="flex w-full flex-col items-start">
                  <h3 className="w-full font-['Inter'] text-sm font-bold leading-6 text-[#12324A]">
                    Don&apos;t see your system?
                  </h3>
                </div>

                <div className="flex w-full flex-col items-start">
                  <p className="w-full font-['Inter'] text-xs font-normal leading-5 text-[#636F76]">
                    Not listed does not mean unsupported — reach our team about
                    your needs.
                  </p>
                </div>

                <div className="flex w-full flex-col items-start pb-[0.59px] pt-[2.99px]">
                  <span className="w-full font-['Inter'] text-xs font-normal leading-4 text-[#58798A]">
                    Contact route
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#56BCE8] to-[#159BD7] px-6 pb-3 pt-4 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0px_6px_18px_rgba(10,46,75,0.16)] active:translate-y-0"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>

          {/* Empty state */}
          {filteredIntegrations.length === 0 && (
            <div className="mt-4 rounded-2xl border border-[#E4E7E9] bg-white px-6 py-12 text-center">
              <p className="font-['Inter'] text-sm font-medium text-[#636F76]">
                No integrations found.
              </p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div
          className={`flex w-full flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-center font-['Inter'] text-xs font-normal leading-5 text-[#58798A]">
            Illustrative example cards for this design template. Provider names,
            availability and behavior are shown only from the approved
            Integration Registry in production.
          </p>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  integration,
  index,
  isVisible,
}: {
  integration: Integration;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-[#E4E7E9] bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0px_10px_28px_rgba(10,46,75,0.08)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${280 + index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-28 w-full overflow-hidden bg-gradient-to-r from-[#E4E8EA] to-[#D9F0F8]">
        <Image
          src={integration.image}
          alt={integration.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col items-start gap-1.5 p-4">
        {/* Title */}
        <div className="flex w-full flex-col items-start">
          <h3 className="w-full font-['Inter'] text-sm font-bold leading-6 text-[#12324A]">
            {integration.title}
          </h3>
        </div>

        {/* Description */}
        <div className="flex w-full flex-col items-start">
          <p className="w-full font-['Inter'] text-xs font-normal leading-5 text-[#636F76]">
            {integration.description}
          </p>
        </div>

        {/* Category */}
        <div className="flex w-full flex-col items-start pb-[0.59px] pt-[2.99px]">
          <p className="w-full font-['Inter'] text-xs font-normal leading-4 text-[#58798A]">
            Category: {integration.category} · {integration.direction} ·{" "}
            {integration.setup}
          </p>
        </div>

        {/* View details */}
        <button
          type="button"
          className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-[#E4E7E9] bg-white px-6 pb-3 pt-4 font-['Inter'] text-sm font-bold leading-6 text-[#12324A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#159BD7] hover:bg-[#F7FBFD] hover:text-[#159BD7] active:translate-y-0"
        >
          View details
        </button>
      </div>
    </div>
  );
}