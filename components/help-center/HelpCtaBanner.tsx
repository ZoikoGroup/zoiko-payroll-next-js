"use client";

import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function HelpCtaBanner() {
  return (
    <section className="px-8 py-16">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <div className="relative bg-[#0F2B3E] rounded-[20px] overflow-hidden px-12 py-16 min-h-[240px]">
            {/* Label */}
            <span className="block text-[#9DB6FF] text-xs font-bold font-['Inter'] uppercase tracking-widest">
              Evaluating Zoiko Payroll for your organization?
            </span>

            {/* Buttons - vertically centered */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-7">
              <Link
                href="#"
                className="px-5 py-3 bg-[#2F5FE0] rounded-lg text-white text-sm font-semibold font-['Inter']"
              >
                Book a demo
              </Link>
              <Link
                href="#"
                className="px-5 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/30 text-white text-sm font-semibold font-['Inter'] leading-5"
              >
                Explore Product
              </Link>
            </div>

            {/* Description */}
            <p className="block mt-4 text-[#FFFFFF] text-sm font-normal font-['Inter'] leading-6 max-w-lg">
              See how Zoiko Payroll supports controlled payroll operations,<br />
              implementation and governance. Public help and documentation remain<br />
              available without a sales conversation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
