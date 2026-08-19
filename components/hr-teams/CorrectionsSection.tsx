import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

export default function CorrectionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Corrections & support"
            title="Corrections resolve at the source."
            description="Payroll-record correction and support only — never a UI patch."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            {/* Shadow falls left and below, as in Figma — the image opposite carries none. */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[-8px_18px_36px_-16px_rgba(15,45,70,0.28)]">
              <div className="px-5 py-4">
                <p className="text-xs font-semibold leading-4 text-slate-500">
                  Correction request · COR 2291
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-6 text-sky-950">
                  Payslip discrepancy
                </h3>
                <p className="mt-0.5 text-xs leading-5 text-gray-600">E-10517 · In review</p>
              </div>

              <p className="border-y border-slate-200 px-5 py-4 text-xs leading-5 text-gray-600">
                Requested by employee → triaged by HR Ops → routed to Payroll for correction at
                the authoritative source → recalculation pending → republication scheduled.
              </p>

              <p className="px-5 py-3.5 text-xs leading-5 text-slate-500">
                Reference COR 2291 · Opened Aug 14
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/hr-teams/corrections.png"
              alt="HR and payroll colleagues confirming a resolved correction"
              className="aspect-[608/342] w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className="mt-8 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            Recalculation or reapproval happens before republication — employees only see a
            supported, current status. Notifications carry minimum necessary content only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
