import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const paths = [
  {
    title: "Explore the product",
    description:
      "See how Zoiko Payroll prepares, calculates, validates, reviews, approves and completes payroll.",
    label: "Explore Zoiko Payroll",
    href: "/product/how-it-works",
    primary: false,
  },
  {
    title: "Review pricing",
    description: "See current published plans and pricing information.",
    label: "View Pricing",
    href: "/pricing",
    primary: false,
  },
  {
    title: "Discuss your requirements",
    description:
      "For multi-jurisdiction, enterprise, implementation or procurement requirements, speak with the team.",
    label: "Book a demo",
    href: "/book-a-demo",
    primary: true,
  },
];

export default function ConversionSection() {
  return (
    <section className="border-t border-slate-200 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow center>Ready to go further?</Eyebrow>
          <h2 className="mt-3 text-center text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Convert after useful content — never before it.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {paths.map((path) => (
              <li
                key={path.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 text-center"
              >
                <p className="text-base font-bold leading-6 text-sky-950">{path.title}</p>
                <p className="mt-2 text-sm leading-5 text-gray-600">{path.description}</p>
                <span className="mt-auto block pt-6">
                  <Link
                    href={path.href}
                    className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold leading-5 transition-all duration-200 hover:-translate-y-0.5 ${
                      path.primary
                        ? "bg-sky-600 text-white hover:bg-sky-700"
                        : "border border-slate-200 bg-white text-sky-950"
                    }`}
                  >
                    {path.label}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
