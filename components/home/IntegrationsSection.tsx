import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function IntegrationsSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Integrations and interoperability</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Connect payroll to the systems your business already uses.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Reduce duplicate entry and disconnected workflows by connecting Zoiko Payroll with approved
            business systems, shared Zoiko services and the wider Zoiko One ecosystem.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Zoiko Payroll is commercially independent but technically interoperable. Use it as a
            standalone payroll platform or connect it with approved Zoiko and third-party services.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <img
            src="/images/home/integrations-hub.png"
            alt="Zoiko Payroll connected to workforce, finance, identity and developer systems"
            loading="lazy"
            className="h-auto w-full rounded-2xl"
          />
        </Reveal>

        <Reveal delay={140} className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-semibold text-brand-dark">Using more than payroll?</h3>
            <p className="mt-1 text-sm text-slate-600">
              Connect payroll with additional Zoiko business capabilities through Zoiko One.
            </p>
          </div>
          <Link
            href="/company/zoiko-group"
            className="shrink-0 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Explore Zoiko One
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
