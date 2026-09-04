"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Does a guide mean Zoiko Payroll is available there?",
    a: "No — a guide may exist for an unavailable market. Guide existence never implies\navailability; check Coverage/Directory separately.",
    open: true,
  },
  {
    q: "Are guides legal or tax advice?",
    a: "No — guides provide market context and education only. They are not legal, tax, or compliance advice. Always consult qualified advisors for specific guidance.",
    open: false,
  },
  {
    q: "How do I know a guide is current?",
    a: "Every guide displays a freshness badge (Current, Under review, or Review due) and a reviewed date in the trust rail. Sources and version history are also shown.",
    open: false,
  },
  {
    q: "Where do I find current local requirements?",
    a: "Check the Coverage/Directory or Local Payroll Requirements system. Guides explain context; the authoritative system owns current availability and requirements.",
    open: false,
  },
];

export default function GuideFaqCta() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="w-full px-32 py-20 bg-[#F6F8FC] border-t border-slate-50">
      <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-4">
        {/* FAQ */}
        <div className="w-[660px] max-w-[660px] flex flex-col items-start gap-3.5">
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[8.30px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#2F6FED] text-xs font-bold uppercase leading-5 tracking-wide">
              FAQ
            </div>
          </div>
          <div className="text-slate-900 text-2xl font-extrabold leading-8">
            Questions about Jurisdiction Guides.
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="w-full pt-[10px] flex items-start gap-10">
          {/* Left column */}
          <div className="flex-1 flex flex-col">
            {faqs.slice(0, 2).map((faq, i) => (
              <div key={faq.q} className="border-b border-slate-200 flex flex-col">
                <div className="py-4 flex items-center justify-between cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <span className="text-slate-900 text-sm font-semibold leading-5">{faq.q}</span>
                  <span className="text-blue-600 text-base font-bold font-mono leading-6">{openIndex === i ? "−" : "+"}</span>
                </div>
                {openIndex === i && faq.a && (
                  <div className="max-h-48 pr-5 pb-4 text-gray-700 text-xs leading-5 whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1 pb-14 flex flex-col">
            {faqs.slice(2).map((faq, i) => {
              const actualIndex = i + 2;
              return (
                <div key={faq.q} className="border-b border-slate-200 flex flex-col">
                  <div className="py-4 flex items-center justify-between cursor-pointer" onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}>
                    <span className="text-slate-900 text-sm font-semibold leading-5">{faq.q}</span>
                    <span className="text-blue-600 text-base font-bold font-mono leading-6">{openIndex === actualIndex ? "−" : "+"}</span>
                  </div>
                  {openIndex === actualIndex && faq.a && (
                    <div className="max-h-48 pr-5 pb-4 text-gray-700 text-xs leading-5 whitespace-pre-line">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full h-[384px] mt-4 bg-[radial-gradient(at_100%_7%,#082F49,#082F49_60%)] rounded-[20px] overflow-hidden relative">
          {/* Label */}
          <div className="absolute left-[48px] top-[74.72px] h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[8.29px]" />
            <div className="absolute left-[24px] top-[-1px] text-[#8FB4FF] text-xs font-bold uppercase leading-5 tracking-wide">
              Ready to move from context to action?
            </div>
          </div>

          {/* Title */}
          <div className="absolute left-[48px] top-[98.40px] w-[544px] text-white text-2xl font-extrabold leading-10">
            Turn Verified Payroll Context into a Clear Rollout Plan
          </div>

          {/* Description */}
          <div className="absolute left-[48px] top-[189.72px] w-[520px] text-white/70 text-sm leading-5 pt-[6px] pb-[6px]">
            Confirm current status and requirements, then talk to us about the specifics of
            <br />
            your rollout.
          </div>

          {/* Buttons */}
          <div className="absolute left-[48px] top-[254.80px] flex items-start gap-3">
            <div className="px-5 py-[17px] bg-[#2F5FE0] rounded-lg flex items-center">
              <span className="text-white text-sm font-semibold">Book a demo</span>
            </div>
            <div className="px-5 py-[17px] rounded-lg outline outline-1 outline-offset-[-1px] outline-white/30 flex items-center">
              <span className="text-white text-sm font-semibold leading-6">Check jurisdiction availability</span>
            </div>
          </div>

          {/* Right image */}
          <div className="absolute right-[20px] top-[30px] w-[461px] h-[337px] rounded-[20px] overflow-hidden">
            <Image src="/meet.png" alt="CTA" width={461} height={337} className="w-full h-full object-cover rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
