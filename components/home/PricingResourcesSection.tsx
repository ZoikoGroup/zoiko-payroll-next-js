import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";

const pricingInputs = [
  "Employees or paid workers",
  "Legal entities",
  "Operating jurisdictions",
  "Payroll frequency",
  "Integrations",
  "Support level",
];

const pricingResources = [
  {
    title: "Global Payroll Guide",
    description: "What global payroll is, how it operates and what buyers should evaluate.",
    linkLabel: "Read the guide",
    href: "/resources/global-payroll-guide",
    image: "/images/home/global-guide.png",
  },
  {
    title: "Jurisdiction Directory",
    description: "Current availability and documented service scope by market.",
    linkLabel: "View directory",
    href: "/global-payroll/jurisdiction-directory",
    image: "/images/home/jurisdiction-directory.png",
  },
];

export default function PricingResourcesSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Pricing and decision resources</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Make a confident payroll decision.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Zoiko Payroll pricing reflects your workforce, jurisdictions, payroll structures, service
            model, integrations, reporting requirements and implementation scope.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pricing inputs</h3>
            <ul className="mt-4 divide-y divide-slate-100">
              {pricingInputs.map((input) => (
                <li key={input} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-brand-dark">{input}</span>
                  <span className="text-slate-300">–</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="bg-brand-gradient mt-auto w-full rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
            >
              How pricing works
            </button>
          </Reveal>

          <div className="flex h-full flex-col gap-6">
            {pricingResources.map((resource, index) => (
              <Reveal key={resource.title} delay={80 + index * 60} className="flex-1">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="h-32 w-full rounded-xl object-cover"
                  />
                  <div className="p-2 pt-4">
                    <h3 className="text-base font-semibold text-brand-dark">{resource.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{resource.description}</p>
                    <ArrowLink href={resource.href} className="mt-2">
                      {resource.linkLabel}
                    </ArrowLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
