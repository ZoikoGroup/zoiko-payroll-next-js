"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Does centralizing operations mean one team does every payroll task?",
    answer:
      "No. Centralization here means coordination and governance from one operating view — not forced organizational centralization. Local teams keep execution and approval authority within their scope.",
  },
  {
    question: "Can a central leader approve a local payroll?",
    answer:
      "Only if they hold approval authority for that scope. Central visibility shows approval state; it never grants approval rights. Approval stays bound to the named role for the payroll group and to a specific eligible version.",
  },
  {
    question: "What happens if one payroll group is blocked during a portfolio close?",
    answer:
      "The portfolio cannot report ready. The blocked group stays visible on the close board with its owner, blocker, stage and next permitted action, rather than being averaged away inside a green roll-up.",
  },
  {
    question: "Is there one universal source of truth?",
    answer:
      "No. Each object keeps a named system of record, and the operating view shows where each value comes from. One shared view is not the same as one shared database.",
  },
  {
    question: "How is unassigned work handled?",
    answer:
      '"Unassigned" is treated as a visible defect state, not a quiet default. The queue surfaces it with its age and a required next action — assigning an owner — so nothing sits in an unowned global inbox.',
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {faqItems.map((item) => {
            const isOpen = openQuestion === item.question;
            return (
              <div key={item.question} className="border-b border-[#DCE6EC]">
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-bold text-[#082F49]">{item.question}</span>
                  <span className="shrink-0 text-[#4E6172]">
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
                    <p className="pb-5 text-sm leading-6 text-[#4E6172]">{item.answer}</p>
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
