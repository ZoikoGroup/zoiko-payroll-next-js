"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Who can access payroll data?",
    answer:
      "Access is role-based and scoped by organization — every query, filter and export is server-authorized, not just hidden in the UI.",
  },
  {
    question: "How long is data retained?",
    answer:
      "Retention follows the data lifecycle practices defined per record type, service and jurisdiction. The applicable periods come from current service documentation and your contract rather than a blanket claim.",
  },
  {
    question: "Does RBAC alone guarantee separation of duties?",
    answer:
      "No. Roles establish what a person can do; separation of duties additionally requires that prepare, review and approve stay distinct responsibilities, checked server-side at the moment a decision is committed.",
  },
  {
    question: "Can I see current certifications?",
    answer:
      "Certifications, assurance reports and testing evidence are contractual evidence rather than product-enforced controls. Current artifacts are shared through the Trust Center, scoped to your service.",
  },
  {
    question: "Is MFA required?",
    answer:
      "MFA is enforced by authentication policy, which is configured during implementation. Authentication gates the session — it never grants payroll permissions on its own.",
  },
  {
    question: "Who are the subprocessors?",
    answer:
      "Subprocessors are listed with their purpose, scope and review date, together with a change-notification path so you are informed before the list materially changes.",
  },
];

/** Rendered as two independent columns so opening one never shifts the other. */
const columns = [
  faqItems.filter((_, index) => index % 2 === 0),
  faqItems.filter((_, index) => index % 2 === 1),
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Questions about Security &amp; Trust
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="self-start">
                {column.map((item) => {
                  const isOpen = openQuestion === item.question;
                  return (
                    <div key={item.question} className="border-b border-slate-200">
                      <button
                        type="button"
                        onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="text-sm font-bold text-slate-900">{item.question}</span>
                        <span className="shrink-0 text-blue-600">
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
                        <div className="overflow-hidden">
                          <p className="pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
