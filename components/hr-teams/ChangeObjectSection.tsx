import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip from "./StatusChip";

/** The last chip is locked — bank detail is never a permitted HR-side change. */
const changeTypes: { label: string; locked?: boolean }[] = [
  { label: "New starter / rehire" },
  { label: "Termination / leaver" },
  { label: "Job / cost center" },
  { label: "Compensation input" },
  { label: "Leave / absence return" },
  { label: "Location / entity transfer" },
  { label: "Personal details" },
  { label: "Bank / payment detail", locked: true },
];

const detail = [
  { label: "Source system", value: "HRIS v14.2" },
  { label: "Payroll period impact", value: "Aug 2026, UK Salaried" },
  { label: "Before", value: "Base rate: £—— (masked)" },
  { label: "After", value: "Base rate: £—— (masked)" },
  { label: "Effective date", value: "2026-08-20 (BST)" },
  { label: "Submitted by", value: "HR Ops — R. Patel" },
];

export default function ChangeObjectSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Change object"
            title="Changes tracked as versioned objects."
            description="Source, effective date and audit link — never a free-floating edit."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {changeTypes.map((type) => (
                <p
                  key={type.label}
                  className={`rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium leading-5 ${
                    type.locked ? "bg-slate-50 text-slate-400" : "bg-white text-sky-950"
                  }`}
                >
                  {type.label}
                  {type.locked ? (
                    <span className="ml-1.5" aria-label="restricted">
                      🔒
                    </span>
                  ) : null}
                </p>
              ))}
            </div>

            <img
              src="/images/hr-teams/change-object.png"
              alt="Colleagues reviewing a change record together on a laptop"
              className="mt-5 aspect-[449/218] w-full rounded-xl object-cover"
            />

            <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
              Zoiko Payroll does not decide employment status, hiring or compensation policy.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-5 py-4">
                <p className="text-xs font-semibold leading-4 text-slate-500">
                  Change detail · CHG 88213
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-6 text-sky-950">
                  Compensation input
                </h3>
                <p className="mt-0.5 text-xs leading-5 text-gray-600">
                  E-10488 J. Okafor · UK Entity
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 px-5 py-5 sm:grid-cols-2">
                {detail.map((row) => (
                  <div key={row.label}>
                    <p className="text-xs leading-5 text-gray-600">{row.label}</p>
                    <p className="mt-0.5 text-xs font-bold leading-5 text-sky-950">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-5 py-4">
                <StatusChip tone="warn">Needs payroll review</StatusChip>
                <span className="text-xs font-bold leading-5 text-sky-700">
                  View audit history →
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
