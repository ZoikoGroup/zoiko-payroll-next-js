import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

/** Each box carries its line only — the state names are not headings in Figma. */
const states = [
  "The current applicable record.",
  "Replaced — never displayed as current.",
  "Generated, awaiting publication.",
  "Where supported by the implementation.",
];

export default function EmployeeRecordsSection() {
  return (
    <section className="bg-[#E8F0F9] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            wrap
            eyebrow="Employee payroll records"
            title={
              <>
                Current and superseded are never
                <br className="hidden sm:block" /> ambiguous.
              </>
            }
            description="Records move through a governed lifecycle to publication."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {states.map((detail) => (
              <p
                key={detail}
                className="rounded-xl border border-slate-200 bg-white px-5 pb-3.5 pt-7 text-xs leading-5 text-gray-600"
              >
                {detail}
              </p>
            ))}
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            Employees access their own records only. HR access is role- and purpose-scoped.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
