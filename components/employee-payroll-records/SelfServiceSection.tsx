import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const recordFields = [
  { label: "Pay period / date", value: "Mar 01 – Mar 31, 2026" },
  { label: "Current status", value: "Published", pill: true },
  { label: "Entity / jurisdiction", value: "ENT-04 · United States" },
];

const alwaysVisible = [
  "Which record they're viewing, and its pay period",
  "Whether it's the current version",
  "Its publication status",
  "A direct path to prior records and any corrections",
];

export default function SelfServiceSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Employee self-service</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            One clear answer: here is your current record
          </h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-slate-600">
            Employees see their latest applicable payroll record first, with status, scope and a direct
            path to their history — nothing to search for.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-[288px_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-slate-300 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase leading-4 text-slate-600">Latest payroll record</span>
                <span className="rounded-[5px] bg-green-100 px-2 py-[3px] text-xs font-medium leading-4 text-green-700">
                  Current
                </span>
              </div>

              <p className="mt-4 text-2xl font-bold leading-7 text-sky-950">March 2026</p>

              <dl className="mt-3">
                {recordFields.map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between gap-4 border-b border-slate-200 py-2"
                  >
                    <dt className="text-xs leading-5 text-slate-600">{field.label}</dt>
                    <dd className="text-right">
                      {field.pill ? (
                        <span className="rounded-[5px] bg-green-100 px-2 py-[3px] text-xs font-medium leading-4 text-green-700">
                          {field.value}
                        </span>
                      ) : (
                        <span className="text-xs leading-5 text-sky-950">{field.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[10px] uppercase leading-4 text-slate-600">
                What employees always see
              </p>
              <ul className="mt-1.5 list-disc pl-6">
                {alwaysVisible.map((item) => (
                  <li key={item} className="text-xs leading-6 text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
