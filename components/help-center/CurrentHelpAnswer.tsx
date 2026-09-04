"use client";

import Reveal from "../ui/Reveal";
import Link from "next/link";

const steps = [
  "Open the run and select the Validation tab.",
  "Review each open item's owner and required action.",
  "Resolve or escalate each blocker to its named owner.",
  "Re-run validation once all items are resolved.",
];

export default function CurrentHelpAnswer() {
  return (
    <section className="bg-gray-50 border-t border-slate-200 px-8 py-20">
      <div className="mx-auto max-w-[1180px] px-8 flex flex-col gap-8">
        <Reveal>
          <div className="w-full flex flex-col gap-3.5">
            <div className="relative flex items-center h-5 pl-6">
              <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
              <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Current help answer
              </span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
              Source-grounded only. No verified answer, no invented answer
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-gray-50 border-b border-slate-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 pt-[3px] pb-1 bg-[#E8F0FF] rounded-2xl text-[#2F6FED] text-xs font-bold leading-4">
                  Help article
                </span>
                <span className="px-2.5 pt-[3px] pb-1 bg-[#E7F6EE] rounded-2xl text-[#1C8A58] text-xs font-bold leading-4">
                  Current
                </span>
              </div>
              <h3 className="pt-1 text-slate-900 text-lg font-extrabold leading-7">
                Why is my payroll run stuck in &quot;Validate&quot;?
              </h3>
              <div className="px-4 py-3 bg-slate-50 rounded-tr-lg rounded-br-lg border-l-[3px] border-blue-600">
                <p className="text-gray-700 text-sm leading-5">
                  A run stays in Validate until every blocking issue is resolved and owned. Check the exception queue on the run for the specific blocker.
                </p>
              </div>
            </div>

            {/* Metadata */}
            <div className="px-6 py-3.5 border-b border-slate-200 flex items-center gap-5 flex-wrap">
              <span className="text-slate-500 text-xs leading-4">
                Applies to: Payroll Processing
              </span>
              <span className="text-slate-500 text-xs leading-4">
                Source: Zoiko Help Team
              </span>
              <span className="text-slate-500 text-xs leading-4">
                Last reviewed: Jul 2026
              </span>
            </div>

            {/* Steps */}
            <div className="px-6 py-5">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`py-2.5 flex items-start gap-3.5 ${
                    i < steps.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <span className="w-5 text-blue-600 text-xs font-bold leading-5 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 text-sm leading-5">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Expected result */}
            <div className="px-6 py-4 bg-slate-50 flex justify-between items-center flex-wrap gap-3">
              <p className="text-gray-700 text-xs leading-5">
                <span className="font-bold">Expected result:</span> run moves to Review.{" "}
                <span className="font-bold">Escalate if:</span> a blocker has no clear owner after 24 hours.
              </p>
              <Link
                href="#"
                className="px-3.5 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-900 text-xs font-semibold leading-5"
              >
                Open verified support →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}