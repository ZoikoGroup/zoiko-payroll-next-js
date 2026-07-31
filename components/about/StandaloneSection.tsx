import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const dimensions = [
  {
    dimension: "Subscription",
    standalone: "Independent Zoiko Payroll subscription.",
    zoikoOne: "Zoiko One suite or approved bundle.",
  },
  {
    dimension: "Experience",
    standalone: "Dedicated payroll product, onboarding, documentation, support and commercial journey.",
    zoikoOne: "Unified access to multiple Zoiko products and broader administration.",
  },
  {
    dimension: "Connectivity",
    standalone: "Approved Zoiko and third-party integrations.",
    zoikoOne: "Connected data and workflows across enabled products.",
  },
  {
    dimension: "Value",
    standalone: "Complete payroll proposition without Zoiko One.",
    zoikoOne: "Integrated suite value and potential bundled commercial advantages.",
  },
];

export default function StandaloneSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Standalone Zoiko Payroll and Zoiko One</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Use Zoiko Payroll independently or as part of Zoiko One.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Zoiko Payroll is a complete, commercially independent SaaS platform. Organizations do not
              need a Zoiko One subscription to use it. Customers seeking a broader integrated business
              environment can also access it through Zoiko One, with connected workflows and unified
              access where enabled.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex justify-center rounded-2xl border border-slate-200 bg-white p-8">
            <div className="relative h-40 w-72">
              <div className="absolute left-0 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-slate-300 bg-slate-100/70" />
              <div className="bg-brand-gradient absolute right-0 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full opacity-90" />
              <span className="absolute left-8 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                Payroll
              </span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-semibold text-white">
                Zoiko One
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-3 gap-4 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:grid">
            <span>Dimension</span>
            <span>Standalone</span>
            <span>Through Zoiko One</span>
          </div>
          {dimensions.map((row) => (
            <div
              key={row.dimension}
              className="grid grid-cols-1 gap-2 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:grid-cols-3 sm:gap-4"
            >
              <span className="text-sm font-semibold text-brand-dark">{row.dimension}</span>
              <span className="text-sm text-slate-600">{row.standalone}</span>
              <span className="text-sm text-slate-600">{row.zoikoOne}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={180} className="mt-8 rounded-2xl border border-brand/15 bg-brand/5 p-6 text-center">
          <Eyebrow center>Approved product principle</Eyebrow>
          <p className="mt-3 text-lg font-semibold text-brand-dark">
            Focused when you need payroll. Connected when you need more.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
