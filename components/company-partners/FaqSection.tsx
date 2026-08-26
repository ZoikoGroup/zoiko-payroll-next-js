"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Who are Zoiko Payroll's partners?",
    answer:
      "Only current verified public relationships are shown. If a relationship is not published, this page must not infer or announce it. Use the verified relationship network when active.",
  },
  {
    question: "What does a Zoiko Payroll partnership mean?",
    answer:
      "It means a verified, scoped relationship exists between the approved Zoiko entity and another organization for a defined purpose. The relationship record states what is covered, its current status and its limitations — nothing beyond that scope is implied.",
  },
  {
    question: "Does a technology partner mean there is a live integration?",
    answer:
      "No. A relationship and a capability are separate objects. Product Integrations and Documentation own whether a connector exists, and a named technology partner can exist without any public integration.",
  },
  {
    question: "Does a local/service partner mean Zoiko Payroll is available in that country?",
    answer:
      "No. A service relationship never proves jurisdiction availability. Jurisdiction Coverage is the only authority on where Zoiko Payroll operates.",
  },
  {
    question: "Can a partner resell or represent Zoiko Payroll?",
    answer:
      "Only where resale or representation rights have been separately and explicitly approved in the relationship record. Appearing on this page grants no authority to bind Zoiko Payroll or quote prices.",
  },
  {
    question: "Can partners access payroll or employee data?",
    answer:
      "There is no automatic data sharing. Any access depends on an executed contractual and privacy scope, and is governed separately from the partnership itself.",
  },
  {
    question: "How can my organization become a partner?",
    answer:
      "Start with the pathway selector and the governed business inquiry above. Qualification, due diligence, agreement and enablement are separate stages, and acceptance and timing are never guaranteed.",
  },
  {
    question: "What happens when a partnership ends?",
    answer:
      "Rights and access are revoked and the public state is updated to reflect the transition. Ended and ending relationships are shown with their real status rather than quietly removed.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Frequently asked questions</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Questions about Partners
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[880px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 30} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-brand"
                >
                  <span className="text-sm font-bold text-brand-dark">{item.question}</span>
                  <span className="mt-0.5 shrink-0 text-brand">
                    {isOpen ? (
                      <CloseIcon className="h-3.5 w-3.5" />
                    ) : (
                      <PlusIcon className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pb-5 pr-8 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
