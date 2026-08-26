import { Fragment } from "react";
import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const shifts = [
  { from: "Disconnected spreadsheets", to: "Central operating view" },
  { from: "Email and informal approvals", to: "Defined review and approval stages" },
  { from: "Separate local processes", to: "Consistent model, local scope" },
  { from: "Limited status visibility", to: "Visible ownership and exceptions" },
  { from: "Difficult reconciliation", to: "Structured records and audit history" },
  { from: "Repeated employee inquiries", to: "Controlled employee self-service" },
];

export default function WhyExistsSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Why Zoiko Payroll exists</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Payroll sits at the intersection of people, finance, regulation, and trust.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              When payroll works, it is often taken for granted. When it fails, the impact is
              immediate: employees lose confidence, payroll teams face urgent corrections, finance
              loses visibility, and business leaders inherit operational and reputational risk.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Zoiko Payroll exists to make that complexity governable. It brings payroll information,
              responsibilities, controls, records, reporting, and employee access into one structured
              environment while preserving the verified local requirements of each supported
              jurisdiction.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We do not make payroll appear simple by hiding its complexity. We make complex payroll
              operations clearer, more accountable, and easier to control.
            </p>
            <ArrowLink href="/product/how-it-works" className="mt-5">
              See how Zoiko Payroll works
            </ArrowLink>
          </Reveal>

          <Reveal
            delay={100}
            className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="grid grid-cols-[auto_auto_auto] items-center gap-x-3 gap-y-3">
              {shifts.map((shift) => (
                <Fragment key={shift.from}>
                  <span className="whitespace-nowrap rounded-lg bg-[#EAF1F6] px-3 py-2 text-sm text-slate-600">
                    {shift.from}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand" />
                  <span className="whitespace-nowrap rounded-lg border border-brand/15 bg-white px-3 py-2 text-sm font-semibold text-brand-dark">
                    {shift.to}
                  </span>
                </Fragment>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-brand-dark">Why was Zoiko Payroll created?</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Zoiko Payroll was created to help organizations replace fragmented payroll administration
            with one controlled environment for managing payroll workflows, decisions, approvals,
            records, reporting, and employee access across supported jurisdictions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
