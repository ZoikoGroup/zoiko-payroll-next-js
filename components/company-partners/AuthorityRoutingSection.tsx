import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const routes = [
  {
    job: "I need an integration",
    route: "Product Integrations / Documentation",
    action: "Explore integrations",
    href: "/product/integrations",
  },
  {
    job: "I need payroll in a jurisdiction",
    route: "Jurisdiction Coverage / Directory",
    action: "Check availability",
    href: "/global-payroll/jurisdiction-coverage",
  },
  {
    job: "I am evaluating third-party risk",
    route: "Company Trust and Security",
    action: "Review trust",
    href: "/product/security",
  },
  {
    job: "I need implementation help",
    route: "Implementation / Global Payroll / Contact",
    action: "Plan implementation",
    href: "/resources/implementation",
  },
  {
    job: "I am an existing customer with an issue",
    route: "Help Center / System Status / Contact",
    action: "Get help",
    href: "/resources/help-center",
  },
  {
    job: "I want to partner with Zoiko Payroll",
    route: "Pathway selector + governed intake",
    action: "Explore partnership opportunities",
    href: "#partnership-inquiry",
  },
  {
    job: "I need commercial product information",
    route: "Product / Pricing / Book a demo",
    action: "Book a demo",
    href: "/book-a-demo",
  },
  {
    job: "I need to verify or correct a relationship",
    route: "Relationship verification/correction route",
    action: "Report inaccurate relationship",
    href: "/contact",
  },
];

export default function AuthorityRoutingSection() {
  return (
    <section className="bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
       <Reveal
          delay={100}
          className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block"
        >
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#EEF2FF]">
              <tr>
                <th className="w-[380px] px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Visitor job
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Authority route
                </th>
                <th className="w-[320px] px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.job} className="border-t border-slate-200">
                  <td className="px-4 py-3 align-top text-sm leading-5 text-brand-dark">
                    {route.job}
                  </td>
                  <td className="px-4 py-3 align-top text-sm font-bold leading-5 text-brand">
                    {route.route}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <Link
                      href={route.href}
                      className="text-sm leading-5 text-brand-dark transition-colors duration-200 hover:text-brand"
                    >
                      {route.action}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 lg:hidden">
          {routes.map((route, index) => (
            <Reveal
              key={route.job}
              delay={index * 30}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{route.job}</p>
              <p className="mt-1.5 text-sm font-bold leading-5 text-brand">{route.route}</p>
              <Link
                href={route.href}
                className="mt-2.5 inline-block text-sm leading-5 text-brand-dark underline underline-offset-4 transition-colors duration-200 hover:text-brand"
              >
                {route.action}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
