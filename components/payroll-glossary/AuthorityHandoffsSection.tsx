import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const handoffs = [
  {
    initial: "D",
    title: "Product Documentation",
    description: "Current fields, settings, states and workflow behavior.",
    href: "/resources/documentation",
  },
  {
    initial: "J",
    title: "Jurisdiction Guides",
    description: "Market-specific meaning and treatment.",
    href: "/global-payroll/country-guides",
  },
  {
    initial: "H",
    title: "Help Center",
    description: "Direct operational and troubleshooting support.",
    href: "/resources/help-center",
  },
  {
    initial: "S",
    title: "System Status",
    description: "Current service health — never inferred from a glossary term.",
    href: "/resources/system-status",
  },
];

export default function AuthorityHandoffsSection() {
  return (
    <section className="bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Authority handoffs</Eyebrow>
          <h2 className="mt-6 max-w-xl text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Definitions point you to the right source of truth.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {handoffs.map((handoff) => (
              <li key={handoff.title} className="h-full">
                <Link
                  href={handoff.href}
                  className="flex h-full flex-col rounded-xl bg-white p-6 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sm font-bold text-sky-700"
                    aria-hidden="true"
                  >
                    {handoff.initial}
                  </span>
                  <span className="mt-6 block text-sm font-bold leading-5 text-sky-950">
                    {handoff.title}
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-gray-600">
                    {handoff.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
