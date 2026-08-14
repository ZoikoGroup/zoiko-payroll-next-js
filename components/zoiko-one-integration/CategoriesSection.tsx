import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const categories = [
  {
    icon: "icon-identity.svg",
    title: "Identity & Access",
    detail: ["Shared identity for convenience — never automatic", "payroll permission inheritance."],
  },
  {
    icon: "icon-workforce.svg",
    title: "Workforce / HR",
    detail: ["Worker and org context with source-of-record, effective", "dates, privacy and conflicts shown."],
  },
  {
    icon: "icon-time.svg",
    title: "Time / Operational",
    detail: ["Approved inputs only — validation, review and approval", "remain in payroll."],
  },
  {
    icon: "icon-finance.svg",
    title: "Finance",
    detail: ["Approved outputs and mapping context — no", "unsupported ledger or banking claims."],
  },
  {
    icon: "icon-developer.svg",
    title: "Developer / Event Services",
    detail: ["Documented APIs and webhooks with version, scopes,", "retries and support."],
  },
  {
    icon: "icon-admin.svg",
    title: "Shared Admin / Reporting",
    detail: ["Shown only where exact functions, permissions, metrics", "and provenance are verified."],
  },
];

export default function CategoriesSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Approved connection categories</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Categories with real boundaries — not a logo wall
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Each category states exactly what&rsquo;s shared and what stays governed by payroll.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 60}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-sky-100">
                  <img
                    src={`/images/zoiko-one-integration/${category.icon}`}
                    alt=""
                    aria-hidden="true"
                    className="size-4"
                  />
                </span>
                <h3 className="mt-3.5 text-sm font-extrabold leading-6 text-sky-950">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {category.detail[0]}
                  <br />
                  {category.detail[1]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
