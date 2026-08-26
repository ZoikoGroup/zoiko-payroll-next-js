import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const related = [
  {
    title: "France Payroll Guide",
    description: "Reviewed Feb 2026 · under scheduled review",
    href: "#guide-directory",
  },
  {
    title: "Payroll Guides",
    description: "General payroll operations education.",
    href: "/resources/payroll-guides",
  },
  {
    title: "Payroll Glossary",
    description: "Direct definitions of payroll terms.",
    href: "/resources/payroll-glossary",
  },
  {
    title: "Global Payroll",
    description: "Coverage, operating models and local requirements.",
    href: "/global-payroll",
  },
];

export default function RelatedGuidesSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Related guides / resources</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Continue learning, deterministically.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
              >
                <span className="block text-sm font-bold leading-5 text-brand-dark">
                  {item.title}
                </span>
                <span className="mt-2.5 block text-xs leading-5 text-slate-600">
                  {item.description}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
