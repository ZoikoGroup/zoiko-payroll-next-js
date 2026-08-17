"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: 'What does "multi-jurisdiction payroll" actually mean?',
    answer:
      "Running payroll across multiple statutory payroll markets from one governed operating layer. It does not mean every country is supported — coverage is jurisdiction-specific and evidence-gated.",
  },
  {
    question: "How does central oversight work with local requirements?",
    answer:
      "A global policy floor sets shared minimums; local additions and overrides sit on top, each with a stated reason, approver and effective date. Global visibility never silently grants local edit or approval authority.",
  },
  {
    question: "How are different currencies and calendars handled?",
    answer:
      "Local values stay in local payroll currency and on local calendars. A consolidated view appears only with a stated reporting currency, rate source, rate date and method — otherwise no combined total is shown.",
  },
  {
    question: "What happens if one market is blocked during a global close?",
    answer:
      "The aggregate close cannot report ready. The blocked market stays visible on the close board with its owner, blocker and stage, rather than being averaged away inside a green roll-up.",
  },
  {
    question: "Are all markets run the same way?",
    answer:
      "No. Direct, customer-operated and partner-supported markets stay distinguishable, each with its own owner and escalation boundary. The lifecycle shape is shared; the local rules are not.",
  },
  {
    question: "How is a new market implemented?",
    answer:
      "By wave, not by one global launch. Each wave runs discovery, readiness, configuration, migration and a parallel run, then earns its own Go / Hold / Rollback decision before launch and hypercare.",
  },
  {
    question: "Is there a single, universal compliance guarantee?",
    answer:
      "No. Coverage, service scope and assurance artifacts are jurisdiction-specific and published only where the underlying evidence is current and approved. Anything beyond that routes to scoped discovery.",
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
                  <span className="shrink-0 text-slate-500">
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
