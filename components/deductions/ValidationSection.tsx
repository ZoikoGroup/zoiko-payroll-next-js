import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const issues = [
  "Effective date falls before the record's earliest eligible period.",
  "A recurring deduction with the same scope and type already exists (CHG-10391).",
  "Source reference does not map to a recognized import batch.",
];

export default function ValidationSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Validation &amp; duplicate prevention</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Nothing becomes eligible with an
            <br />
            unresolved error.
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-slate-600">
            Errors are field-level, exact, and reference the conflicting or duplicate record directly.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <div className="rounded-xl border border-red-300 bg-red-50 px-5 py-5">
            <p className="flex items-center gap-2 text-sm font-bold leading-5 text-red-700">
              <img
                src="/images/deductions/icon-warning.svg"
                alt=""
                aria-hidden="true"
                className="size-4 shrink-0"
              />
              3 issues found before this change can be validated
            </p>
            <ul className="mt-3 space-y-1.5">
              {issues.map((issue) => (
                <li key={issue} className="flex gap-2 text-sm leading-6 text-sky-950">
                  <span aria-hidden="true" className="text-slate-500">
                    •
                  </span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
