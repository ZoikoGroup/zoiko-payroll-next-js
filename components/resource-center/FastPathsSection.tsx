import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const rows = [
  {
    asking: "“How do I configure/use this?”",
    primary: "Product Documentation",
    secondary: { label: "Help Center", href: "/resources/help-center" },
  },
  {
    asking: "“I need help / something’s broken”",
    primary: "Help Center",
    secondary: { label: "Product Documentation", href: "/resources/documentation" },
  },
  {
    asking: "“Is there an outage or incident?”",
    primary: "System Status",
    secondary: { label: "Help Center", href: "/resources/help-center" },
  },
  {
    asking: "“What changed / updated?”",
    primary: "Release Notes",
    secondary: { label: "Product Documentation", href: "/resources/documentation" },
  },
  {
    asking: "“How do I export or report?”",
    primary: "Reporting / Product Documentation",
    secondary: { label: "Help Center", href: "/resources/help-center" },
  },
  {
    asking: "“We’re implementing or migrating”",
    primary: "Implementation",
    secondary: { label: "Help Center / Sales if scoped", href: "/product/implementation" },
  },
  {
    asking: "“I need security evidence”",
    primary: "Security and Trust",
    secondary: { label: "Sales / procurement contact", href: "/product/security" },
  },
];

export default function FastPathsSection() {
  return (
    <section className="border-t border-slate-200 bg-[#DFEAF3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Existing-customer fast paths</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Operational destinations — never a forced sales detour.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <img
            src="/images/resource-center/fast-paths.png"
            alt="A workspace with a laptop open to a support session"
            className="h-40 w-full rounded-2xl object-cover sm:h-48"
          />
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-sky-50">
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500"
                  >
                    What you&apos;re asking
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500"
                  >
                    Primary path
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500"
                  >
                    Secondary path
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.asking}
                    className={index < rows.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-sm font-normal leading-5 text-gray-700"
                    >
                      {row.asking}
                    </th>
                    <td className="px-5 py-4 text-sm leading-5 text-sky-950">{row.primary}</td>
                    <td className="px-5 py-4 text-sm leading-5">
                      <Link
                        href={row.secondary.href}
                        className="font-semibold text-sky-600 hover:text-sky-700"
                      >
                        {row.secondary.label}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
