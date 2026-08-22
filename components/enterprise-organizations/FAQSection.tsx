"use client";

import React, { useState } from "react";
import Reveal from "../ui/Reveal";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e3e7ec] py-[16px] w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left gap-[14px] min-h-[44px] cursor-pointer group"
      >
        <span className="font-semibold text-[#0b1220] text-[14.5px] pr-4 group-hover:text-[#2049c9] transition-colors">
          {question}
        </span>
        <span className="font-semibold text-[#2049c9] text-[17px] shrink-0 w-6 h-6 flex items-center justify-center">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-[4px]" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-normal text-[#4b5563] text-[13.5px] leading-[21.6px] m-0 max-w-[640px] pb-[16px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes payroll software suitable for enterprise organizations?",
      answer: "Scoped authority across entities and payroll groups, separated preparation, review and approval, governed integrations, and evidence recorded against every material action.",
      defaultOpen: true
    },
    {
      question: "How are multiple legal entities and payroll groups handled?",
      answer: "Each entity carries its own jurisdiction, owner, service model and reporting context. Payroll groups hold frequency, period, cutoff, reviewer and approver, and roll up without losing separation.",
      defaultOpen: true
    },
    {
      question: "Can we keep central visibility without taking away local decisions?",
      answer: "Yes. Visibility and decision rights are separate. Central governance holds standards, definitions and escalation; entity and payroll-group roles hold the decisions inside their scope.",
      defaultOpen: true
    },
    {
      question: "How is review and approval separation enforced?",
      answer: "Preparer, reviewer and approver are distinct role assignments where configured. Approval binds to the current material version, and a material change after review invalidates or re-opens that approval.",
      defaultOpen: true
    },
    {
      question: "How does finance reconcile payroll across entities?",
      answer: "Approved output is compared against downstream receipt per period, entity and group, with variance, owner and next action. Currencies are never summed without an explicit conversion basis.",
      defaultOpen: true
    }
  ];

  return (
    <section className="bg-white border-t border-[#e3e7ec] pt-[65px] pb-[88px] relative w-full">
      <div className="mx-auto max-w-[1060px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <Reveal className="flex flex-col items-center text-center w-full mb-[14px]">
          <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal mb-[20px]">
            FAQ
          </p>
          <h2 className="font-bold text-[#0b1220] text-[32px] md:text-[40px] tracking-[-1px] leading-[1.1] m-0">
            High-intent questions
          </h2>
        </Reveal>

        {/* Accordion List */}
        <Reveal delay={150} className="w-full border-t border-[#e3e7ec] mt-[10px]">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={faq.defaultOpen}
            />
          ))}
        </Reveal>
        
      </div>
    </section>
  );
}
