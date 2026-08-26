"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "How does Zoiko Payroll protect payroll access?",
    answer:
      "Through approved identity sources, scoped roles for view, configure, approve, export and administer, and approval separation so a preparer cannot approve their own payroll action. Product Security and Trust holds the detailed control descriptions.",
  },
  {
    question: "What security certifications exist?",
    answer:
      "Certifications and assessments are listed in the evidence directory above with their scope, reviewed date, current state and access class. A certification is only claimed where a current artifact supports it for that scope.",
  },
  {
    question: "Is Zoiko Payroll compliant with every payroll and privacy law?",
    answer:
      "No vendor can claim that. Zoiko Payroll supports compliant operation within an approved scope; statutory compliance for a given jurisdiction depends on your configuration, your data and the contractual scope agreed with you.",
  },
  {
    question: "Where is data stored?",
    answer:
      "Residency is answered from approved privacy and contract authorities, addressing primary processing, replicas, backups and support access separately. Market availability, jurisdiction coverage or cloud logos never establish where data lives.",
  },
  {
    question: "How do I complete a vendor security review?",
    answer:
      "Start from the procurement route in the trust path router. It provides a structured checklist and, where staffed, a security review workflow so questions reach the team that owns each answer.",
  },
  {
    question: "Where can I see incidents or uptime?",
    answer:
      "System Status carries live and historical service health, incidents and scheduled maintenance. Live status is a separate trust layer from evidence — neither proves the other.",
  },
  {
    question: "How do I report a vulnerability?",
    answer:
      "Use Responsible Disclosure. Vulnerability reports go directly to the security team and are never routed through a general sales or contact form.",
  },
  {
    question: "Can I download assurance reports?",
    answer:
      "It depends on the access class. Public artifacts open directly, Restricted items require an authenticated evidence room, and NDA / Contract items require an executed legal condition. Not Public artifacts offer a safe summary at most.",
  },
  {
    question: "Do partner or cloud certifications automatically apply to Zoiko Payroll?",
    answer:
      "No. A provider's certification covers that provider's scope only. Zoiko Payroll claims apply solely where our own current, scoped evidence supports them.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>FAQ</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Direct answers to high-intent trust questions
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[1000px]">
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
