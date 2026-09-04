"use client";

import Reveal from "../ui/Reveal";

const caseCard1 = {
  title: "Submit a support case",
  badge: "Authenticated",
  badgeColor: "bg-[#E7F6EE] text-emerald-800",
  rows: [
    { label: "Purpose", value: "Product issue requiring investigation" },
    { label: "Data shared", value: "Issue description, safe error code" },
    { label: "Response target", value: "Per your entitlement — not fixed here" },
    { label: "Privacy note", value: "No payroll data attached automatically" },
  ],
};

const caseCard2 = {
  title: "Case #48213",
  badge: "In progress",
  badgeColor: "bg-[#E8F0FF] text-[#2F6FED]",
  rows: [
    { label: "Current state", value: "With Integrations specialist" },
    { label: "Owner / team", value: "it-support" },
    { label: "Last updated", value: "2h ago" },
    { label: "Action needed", value: "None — awaiting specialist" },
  ],
};

function CaseCard({
  card,
}: {
  card: typeof caseCard1;
}) {
  return (
    <div className="flex-1 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
      <div className="px-5 py-4 bg-[#F4F8FB] border-b border-slate-200 flex justify-between items-center">
        <span className="text-slate-900 text-sm font-bold font-['Inter'] leading-5">
          {card.title}
        </span>
        <span className={`px-2 py-[3px] rounded-xl text-[10px] font-bold font-['Inter'] leading-4 ${card.badgeColor}`}>
          {card.badge}
        </span>
      </div>
      <div className="px-5 py-4 flex flex-col">
        {card.rows.map((row, i) => (
          <div
            key={row.label}
            className={`py-2 flex justify-between ${
              i < card.rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="text-slate-500 text-xs font-normal font-['Inter'] leading-5">{row.label}</span>
            <span className="text-slate-900 text-xs font-normal font-['Inter'] leading-5">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VerifiedSupportAccess() {
  return (
    <section className="bg-[#F9FAFB] px-4 sm:px-8 lg:px-32 py-20 border-t border-slate-200">
      <div className="mx-auto max-w-[1180px] px-2 sm:px-8 flex flex-col gap-8">
        <Reveal>
          <div className="max-w-[660px] flex flex-col gap-3">
            <div className="relative flex items-center h-5 pl-6">
              <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
              <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Verified support access + case status
              </span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
              Rendered only from an active, current support record.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col lg:flex-row gap-4">
            <CaseCard card={caseCard1} />
            <CaseCard card={caseCard2} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}