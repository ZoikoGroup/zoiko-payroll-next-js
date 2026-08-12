"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What are the six payroll stages?",
    answer:
      "Prepare, Calculate, Validate, Review, Approve and Complete — a consistent operating model for every run, in every jurisdiction.",
  },
  {
    question: "How are exceptions handled?",
    answer:
      "Every warning and failure is raised as an owned exception with a severity, an accountable team and a stated impact. High-severity exceptions block completion until they are resolved, and nothing is cleared silently.",
  },
  {
    question: "Can a completed run be corrected?",
    answer:
      "Yes, through a governed reopen. A documented reason is required, the prior version is preserved as superseded, the new version goes back through review and approval, and the historical version stays retrievable.",
  },
  {
    question: "How does this page differ from Payroll Approvals?",
    answer:
      "This page covers the full processing cycle from prepared inputs to a locked final version. Payroll Approvals covers the decision itself in depth — decision rights, delegation, separation of duties and version-bound sign-off.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl">
            Questions about payroll processing.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-10 max-w-4xl">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-bold text-slate-900">{item.question}</span>
                  <span className="shrink-0 text-blue-600">
                    {isOpen ? <CloseIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
