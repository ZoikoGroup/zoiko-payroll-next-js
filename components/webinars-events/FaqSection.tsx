"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    question: "Are all sessions recorded?",
    answer:
      "No. A completed session doesn't automatically mean a replay exists — on-demand availability is shown only once an approved recording is confirmed.",
  },
  {
    question: "What time zone are sessions shown in?",
    answer:
      "Sessions are published in the source time zone (typically CET) and automatically converted to your detected local time, with the conversion shown clearly on every event card and detail page.",
  },
  {
    question: "What happens if a session is full?",
    answer:
      "When registration reaches capacity, the session moves to the waitlist state. Joining the waitlist notifies you if space opens or if an additional run of the session is scheduled.",
  },
  {
    question: "What information do I need to register?",
    answer:
      "Only the minimum operational data: full name, work email and company. Role and accessibility needs are optional, and marketing updates are always a separate, opt-in consent.",
  },
  {
    question: "Can I request captions or an interpreter?",
    answer:
      "Yes. Captions availability is confirmed per session, and additional accessibility needs can be requested in the optional field during registration so arrangements can be made in advance.",
  },
  {
    question: "What if a session is rescheduled or cancelled?",
    answer:
      "Reschedules and cancellations are announced on the event page and to everyone registered, with the updated date and time shown clearly — never silently changed.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-9 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Frequently asked questions
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            Questions about webinars and events
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex w-full max-w-[760px] flex-col items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`w-full py-4 ${
                  index < faqs.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="text-base font-bold leading-6 text-sky-950">
                    {faq.question}
                  </span>
                  <span className="text-xl font-normal leading-9 text-sky-600 select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-2 text-sm font-normal leading-6 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
