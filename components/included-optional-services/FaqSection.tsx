"use client";

import { useState } from "react";
import { PlusIcon, CloseIcon } from "../ui/icons";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    question: "Are payroll calculations an add-on?",
    answer:
      "No. Core statutory calculation for a licensed jurisdiction belongs to the platform. Activation and local service coverage still depend on approved jurisdiction scope.",
  },
  {
    question: "Is implementation included?",
    answer:
      "Implementation is separately scoped for all plans. Enterprise may include a contracted implementation program as part of the agreement.",
  },
  {
    question: "Does Zoiko automatically file and pay taxes?",
    answer:
      "Statutory filing and remittance services are jurisdiction-dependent. Availability is confirmed through the approved catalog and coverage registry.",
  },
  {
    question: "Can I use Zoiko software but keep my existing provider?",
    answer:
      "Yes. Zoiko Payroll supports connected payroll and partner-supported delivery models where provider fees are disclosed separately.",
  },
  {
    question: "Can different countries use different service models?",
    answer:
      "Yes. Each jurisdiction can use Zoiko-native, connected, or partner-supported delivery depending on availability and your contracted scope.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-16 sm:py-20" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-left">
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
              <span aria-hidden="true">/</span>
              FAQ
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
              Services and scope, answered plainly.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white shadow-[0px_1px_2px_rgba(8,47,73,0.04)] ring-1 ring-[#DCE6EC] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-extrabold leading-5 text-[#082F49]">
                      {faq.question}
                    </span>
                    <span className="ml-4 shrink-0 text-[#0A78C3]">
                      {isOpen ? <CloseIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-xs font-normal font-['Inter'] leading-5 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}