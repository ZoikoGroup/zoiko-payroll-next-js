"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "How current is the availability shown here?",
    answer:
      'Each record shows its own "last verified" date. If a record hasn\'t been re-validated on schedule, it surfaces as "Verification required" rather than staying marked "Available."',
  },
  {
    id: "faq-2",
    question: 'Does "Available" mean every configuration is supported?',
    answer:
      'No. "Available" confirms core statutory payroll calculations, standard deductions, and regular tax filings are supported for standard employer structures. Material edge cases or specialized local collective bargaining rules may require explicit scoping.',
  },
  {
    id: "faq-3",
    question: 'What does "Under review" mean?',
    answer:
      '"Under review" indicates technical analysis, regulatory validation, and partner connectivity are currently being evaluated for that jurisdiction. No production launch timing or service level is promised until validation is complete.',
  },
  {
    id: "faq-4",
    question: "My country isn't listed — what should I do?",
    answer:
      "If a jurisdiction you require is not currently published in this directory, contact our solution team. We continuously review expansion candidates and can evaluate specific multi-country rollouts against compliance readiness.",
  },
  {
    id: "faq-5",
    question: "Can I get a direct link to a specific market's record?",
    answer:
      "Yes. Each market record has a permanent identifier and deep-link reference, enabling you to share precise scope and verification status directly with legal, compliance, or finance stakeholders.",
  },
];

export default function DirectoryFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden bg-[#EFF4F8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[840px] min-w-0">
        {/* Header */}
        <Reveal>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
              / FAQ
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl lg:text-[34px]">
              Directory questions, answered plainly.
            </h2>
          </div>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="mt-8 space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} delay={idx * 50}>
                <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 hover:border-slate-300 sm:rounded-2xl">
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between gap-4 p-4.5 text-left sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs font-bold text-[#082F49] sm:text-sm">
                      {faq.question}
                    </span>
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#0A78C2]">
                      {isOpen ? (
                        <Minus className="h-4 w-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="h-4 w-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4.5 pb-4.5 pt-3 sm:px-5 sm:pb-5">
                      <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
