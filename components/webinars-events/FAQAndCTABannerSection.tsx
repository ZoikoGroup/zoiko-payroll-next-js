"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are all sessions recorded?",
    answer:
      "No. A completed session doesn't automatically mean a replay exists — on-demand availability is shown only once an approved recording is confirmed.",
  },
  {
    question: "What time zone are sessions shown in?",
    answer:
      "Times are displayed in CET by default, but automatically adapt to your browser's local timezone when viewing event details.",
  },
  {
    question: "What happens if a session is full?",
    answer:
      "You can join the waitlist. You will automatically receive a notification if a space becomes available or if a repeat session is added.",
  },
  {
    question: "What information do I need to register?",
    answer:
      "Only minimal required details such as your name and work email are requested. Operational communication is kept strictly separate from marketing consent.",
  },
  {
    question: "Can I request captions or an interpreter?",
    answer:
      "Yes, accessibility needs can be specified during registration or updated prior to the event start time.",
  },
  {
    question: "What if a session is rescheduled or cancelled?",
    answer:
      "All registered participants will receive immediate notifications regarding schedule updates, along with options to review new details or update their registration.",
  },
];

export default function FAQAndCTABannerSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* FAQ Header & Accordion */}
        <div className="space-y-10">
          {/* Eyebrow & Title */}
          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              Questions about webinars and events
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="divide-y max-w-4xl mx-auto divide-slate-100 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#3D9BD6] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#3D9BD6] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-medium text-slate-500 leading-relaxed pr-8">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card with Image Background */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A2E4B] shadow-xl text-white py-16 px-6 sm:px-12 text-center flex flex-col items-center justify-center space-y-6 min-h-[300px]">
          {/* Background Image Layer */}
          <Image
            src="/images/resources/30.png"
            alt="Team collaborating background"
            fill
            className="object-cover opacity-10 object-center"
            priority
          />

          {/* Content Box */}
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                READY TO GO FURTHER?
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Keep learning, live or on your own time.
            </h3>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                className="w-full sm:w-auto text-xs sm:text-sm font-bold bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] text-white px-7 py-3 rounded-xl shadow-md hover:opacity-95 transition-opacity cursor-pointer"
              >
                Join the Waitlist
              </button>
              <button
                type="button"
                className="w-full sm:w-auto text-xs sm:text-sm font-bold border border-white/40 hover:bg-white/10 text-white px-7 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
