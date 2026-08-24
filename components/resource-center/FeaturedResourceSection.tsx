import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const supporting = [
  {
    title: "Payroll Operations Checklist",
    meta: "Checklist · Reviewed Jul 2026",
    image: "/images/resource-center/thumb-operations-checklist.png",
    href: "/resources/payroll-guides",
  },
  {
    title: "Designing Approval Controls",
    meta: "Guide · Reviewed Jun 2026",
    image: "/images/resource-center/thumb-approval-controls.png",
    href: "/payroll-approvals",
  },
  {
    title: "Getting the Most from Help Center",
    meta: "Explainer · Reviewed Aug 2026",
    image: "/images/resource-center/thumb-help-center.png",
    href: "/resources/help-center",
  },
];

export default function FeaturedResourceSection() {
  return (
    <section className="border-t border-slate-200 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Featured resource</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            One current, governed asset — never an auto-rotating carousel.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="relative overflow-hidden rounded-2xl bg-sky-950">
            <img
              src="/images/resource-center/featured-guide.png"
              alt="A payroll binder on an office desk"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="relative max-w-2xl px-6 py-12 sm:px-10 sm:py-16">
              <p className="text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-300">
                Payroll Guide
              </p>
              <h3 className="mt-3 text-xl font-extrabold leading-7 text-white sm:text-2xl sm:leading-8">
                A Practical Guide to Managing Payroll Across Multiple Jurisdictions
              </h3>
              <p className="mt-3 text-sm leading-5 text-slate-200">
                What changes when payroll spans entities and markets, and where to find the
                authoritative source for each decision.
              </p>
              <p className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-xs leading-4 text-slate-300">
                <span>Reviewed Aug 2026</span>
                <span>General / Global introduction</span>
              </p>
              <Link
                href="/resources/global-payroll-guide"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold leading-5 text-sky-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-200"
              >
                Read the guide
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((item) => (
              <li key={item.title} className="h-full">
                <Link
                  href={item.href}
                  className="flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <span>
                    <span className="block text-sm font-bold leading-5 text-sky-950">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-4 text-gray-400">{item.meta}</span>
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
