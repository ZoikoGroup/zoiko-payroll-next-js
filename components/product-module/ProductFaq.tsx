"use client";

import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What is Zoiko Payroll?",
    answer:
      "A governed payroll platform for preparing, approving, reporting on and integrating global payroll — organized into Explore Product, Insight and Control, and Start Here paths above.",
  },
  {
    question: "How is the product organized?",
    answer:
      "Zoiko Payroll is organized around core payroll processing, approvals, deductions and adjustments, employee payroll records, reporting, integrations, security and product guidance.",
  },
  {
    question: "What's the fastest way to see it in action?",
    answer:
      "Start with the product tour to see representative Zoiko Payroll workflows covering control, approvals, records and reporting.",
  },
  {
    question: "How does Zoiko Payroll relate to Zoiko One?",
    answer:
      "Zoiko Payroll can operate as a focused payroll platform while also connecting into the broader Zoiko One suite through supported integrations.",
  },
  {
    question: "Do I need a demo to understand security and compliance?",
    answer:
      "No. Security, compliance and data residency information is available through the product resources without requiring a demo.",
  },
];

export default function ProductFaq() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);

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

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-9 lg:px-24">
        {/* Heading */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-center gap-3.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div
            className="flex flex-wrap items-center justify-center gap-1.5"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex h-5 items-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#3FB97A]" />
            </div>

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#3FB97A]">
              Frequently asked questions
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-center font-['Inter'] text-2xl font-extrabold leading-9 text-[#12324A] sm:text-3xl sm:leading-10"
            style={{ transitionDelay: "180ms" }}
          >
            Questions about Zoiko Payroll
          </h2>
        </div>

        {/* FAQ List */}
        <div
          className={`flex w-full max-w-[760px] flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#E1E4E6] py-4"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 text-left transition-opacity duration-200 hover:opacity-80"
                >
                  <span className="font-['Inter'] text-base font-bold leading-6 text-[#12324A]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-4 shrink-0 items-center justify-center font-['Inter'] text-xl font-normal leading-9 text-[#3FB97A] transition-transform duration-300 ${
                      isOpen ? "rotate-0" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pt-3 font-['Inter'] text-sm font-normal leading-6 text-[#596B78]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}