"use client";

import Image from "next/image";
import Reveal from "../ui/Reveal";

const issueCards = [
  {
    code: "PR",
    title: "Payroll run / processing",
    description: "A run is stuck, missing, or shows the wrong stage.",
  },
  {
    code: "CA",
    title: "Calculation / deductions",
    description: "A calculation, deduction or adjustment looks wrong.",
  },
  {
    code: "AP",
    title: "Approvals / permissions",
    description: "Can't approve, review, or a role seems wrong.",
  },
  {
    code: "ER",
    title: "Employee payroll records",
    description: "A payslip or record is missing or incorrect.",
  },
  {
    code: "IN",
    title: "Integrations / imports",
    description: "A connection, import or export isn't working.",
  },
  {
    code: "RE",
    title: "Reporting / reconciliation",
    description: "A report or reconciliation looks incomplete.",
  },
  {
    code: "AC",
    title: "Account / sign-in / security",
    description: "Can't sign in, or a security concern.",
  },
  {
    code: "GP",
    title: "Global payroll / implementation",
    description: "Questions about markets or rollout.",
  },
];

export default function StartWithYourIssue() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-4 sm:px-8 lg:px-28 bg-[#08132B]">
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sec.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08132B]/40 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-[1180px] px-2 sm:px-8 flex flex-col justify-start items-start gap-8 z-20">
        <Reveal>
          <div className="w-full flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <div className="relative h-5 flex items-center pl-6">
                <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
                <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                  Start with your issue
                </span>
              </div>
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
                Six to eight clear families — never a dense taxonomy wall
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {issueCards.map((card, index) => (
                <div
                  key={index}
                  className="p-5 bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl border border-[#E6E9F0] flex flex-col justify-between items-start gap-3 transition-all duration-200 hover:bg-[#FFFFFF26]/80 hover:border-[#2F6FED]"
                >
                  <div className="size-9 bg-[#E8F0FF] rounded-[10px] flex justify-center items-center shrink-0">
                    <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] leading-5">
                      {card.code}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="text-white text-sm font-extrabold font-['Inter'] leading-5">
                      {card.title}
                    </h3>
                    <p className="text-[#AEAEAE] text-xs font-normal font-['Inter'] leading-5">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}