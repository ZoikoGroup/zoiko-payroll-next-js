"use client";

import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What integration categories does Zoiko Payroll support?",
    answer:
      "Four approved categories: HR systems, finance systems, time systems and payment systems — each with its own published scope and boundary.",
  },
  {
    question: "Where do I see the current list of published providers?",
    answer:
      "The current published provider list is available in the Integration Directory and is based only on the approved Integration Registry.",
  },
  {
    question: "What does direction and capability mean for an integration?",
    answer:
      "Direction describes where approved information moves, while capability describes the supported integration behavior and published scope.",
  },
  {
    question: "My system isn't listed — what should I do?",
    answer:
      "Not being listed does not necessarily mean unsupported. Use the available contact route to discuss your system and integration requirements.",
  },
  {
    question: "What happens if a connected provider has an outage?",
    answer:
      "The connection lifecycle distinguishes provider availability from Zoiko errors. Provider outages are shown as dependency issues, with recovery behavior based on the supported integration workflow.",
  },
];

export default function IntegrationsFaq() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

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
      { threshold: 0.15 }
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
      className="w-full bg-[#F1F3F4] px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-9">
        {/* Header */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-center gap-3.5 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div
            className="flex items-center justify-center gap-1.5"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex h-5 items-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#159BD7]" />
            </div>

            <span className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#159BD7]">
              Frequently asked questions
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-['Inter'] text-2xl font-extrabold leading-9 text-[#12324A] sm:text-3xl sm:leading-10"
            style={{ transitionDelay: "180ms" }}
          >
            Questions about Integrations
          </h2>
        </div>

        {/* FAQ */}
        <div
          className={`w-full max-w-[760px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "280ms" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#E4E7E9] py-4"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 text-left transition-opacity duration-200 hover:opacity-80"
                >
                  <span className="font-['Inter'] text-sm font-bold leading-6 text-[#12324A] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-5 shrink-0 items-center justify-center font-['Inter'] text-xl font-normal leading-9 text-[#159BD7] transition-transform duration-200 ${
                      isOpen ? "rotate-0" : "rotate-0"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pt-3 font-['Inter'] text-sm font-normal leading-6 text-[#3F4B53]">
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