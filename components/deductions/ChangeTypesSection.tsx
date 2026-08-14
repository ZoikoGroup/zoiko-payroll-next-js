import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const changeTypes = [
  {
    badge: "− Reduces pay",
    badgeClass: "bg-red-100 text-red-700",
    title: "Recurring deduction",
    detail: ["Repeats across eligible periods", "until an end condition or change."],
  },
  {
    badge: "− Reduces pay",
    badgeClass: "bg-red-100 text-red-700",
    title: "One-time deduction",
    detail: ["Applies to a single eligible period", "or date only."],
  },
  {
    badge: "+ Increases pay",
    badgeClass: "bg-emerald-100 text-green-700",
    title: "Reimbursement",
    detail: ["An amount reimbursed through", "an eligible payroll workflow."],
  },
  {
    badge: "± Governed edit",
    badgeClass: "bg-slate-100 text-slate-600",
    title: "Correction",
    detail: ["A governed change to prior", "payroll data or a change object."],
  },
  {
    badge: "✓ Umbrella term",
    badgeClass: "bg-slate-100 text-slate-600",
    title: "Approved payroll change",
    detail: ["Any change after validation and", "required authorization."],
  },
];

export default function ChangeTypesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Change type model</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Five governed objects, never
            <br />
            inferred from a minus sign.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-6 text-slate-600">
            Every change carries a human-readable label and an explicit pay direction — positive or
            negative is always stated, never implied.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {changeTypes.map((type, index) => (
            <Reveal key={type.title} delay={index * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pt-5 pb-4">
                <span
                  className={`inline-block rounded-[5px] px-2 py-[3px] font-mono text-xs font-medium leading-4 ${type.badgeClass}`}
                >
                  {type.badge}
                </span>
                <h3 className="mt-3 text-sm font-bold leading-5 text-sky-950">{type.title}</h3>
                <p className="mt-1.5 text-xs leading-4 text-slate-600">
                  {type.detail[0]}
                  <br />
                  {type.detail[1]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
