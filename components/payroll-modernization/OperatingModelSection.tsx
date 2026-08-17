import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = [
  {
    label: "Before",
    items: [
      "3 disconnected regional systems",
      "Manual reconciliation, monthly",
      "No shared approval model",
    ],
  },
  {
    label: "Transition",
    items: [
      "Parallel-run validation, both systems live",
      "Mapped systems of record per object",
      "Governance model piloted in Wave 1",
    ],
  },
  {
    label: "Target",
    items: [
      "One governed platform, local configuration",
      "Prepare → Calculate → Validate → Review → Approve → Complete",
      "Shared evidence & reporting standard",
    ],
  },
];

export default function OperatingModelSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Target operating model</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Before → Transition → Target, in concrete operational objects.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Local requirements stay visible inside shared governance — never one universal global
              template.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/payroll-modernization/operating-model.png"
              alt="Team mapping the target payroll operating model on paper"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="grid grid-cols-1 items-stretch gap-4 overflow-hidden rounded-2xl border border-slate-200 px-6 py-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-0">
            {columns.map((column, index) => (
              <div key={column.label} className="contents">
                <div className="flex flex-col gap-2 lg:px-6">
                  <p className="pb-1 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                    {column.label}
                  </p>
                  {column.items.map((item) => (
                    <p
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-gray-700"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                {index < columns.length - 1 && (
                  <span
                    className="hidden self-center font-mono text-base leading-6 text-blue-600 lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
