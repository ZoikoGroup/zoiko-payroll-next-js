import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const categories = [
  {
    badge: "Time & Attendance",
    badgeClass: "bg-blue-100 text-blue-700",
    title: "Transport validation is not payroll approval.",
    description:
      "Approved time objects flow into a mapping and validation step before reaching the payroll input boundary — Zoiko Payroll validates within the payroll workflow itself.",
  },
  {
    badge: "Payment Systems",
    badgeClass: "bg-amber-100 text-amber-700",
    title: "A category, not a payment-execution promise.",
    description:
      "Permitted scope is stated per verified interface. Direct bank movement, settlement or bank-file generation is never implied without specific evidence.",
  },
  {
    badge: "Identity & Access",
    badgeClass: "bg-green-100 text-green-700",
    title: "Authorization state, never exposed secrets.",
    description:
      "Scopes, permissions, least privilege and credential lifecycle are visualized — reauthorization and rotation are operational actions where supported.",
  },
];

export default function CategoryScopeSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Category · Time, Payment &amp; Identity</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Scoped, bounded, and explicit about what each category does.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.badge} delay={index * 70}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${category.badgeClass}`}
                >
                  {category.badge}
                </span>
                <h3 className="mt-4 text-base font-extrabold leading-6 text-slate-900">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
