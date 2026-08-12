import Reveal from "../ui/Reveal";

const pillars = [
  { initials: "SC", label: "Scoped payroll run" },
  { initials: "CS", label: "Calculation state" },
  { initials: "OE", label: "Owned exceptions" },
  { initials: "SR", label: "Separated review" },
  { initials: "RA", label: "Recorded authorization" },
  { initials: "FV", label: "Final version preserved" },
];

export default function PillarsSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
            {pillars.map((pillar) => (
              <li
                key={pillar.initials}
                className="flex flex-col items-center gap-2.5 bg-white px-4 py-5 text-center"
              >
                <span
                  className="flex size-8 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold leading-5 text-blue-600"
                  aria-hidden="true"
                >
                  {pillar.initials}
                </span>
                <span className="text-xs font-semibold leading-5 text-slate-900">{pillar.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
