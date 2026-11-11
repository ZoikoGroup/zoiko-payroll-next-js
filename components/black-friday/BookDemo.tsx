import { ChevronDown } from "lucide-react";
import DemoForm from "./DemoForm";
import { Eyebrow } from "./Primitives";

const faqs = [
  {
    q: "Who is the demonstration for?",
    a: "Payroll, HR, finance and operations leaders evaluating how Zoiko Payroll could support their workforce, operating markets and payroll requirements. We tailor each session to the details you share.",
  },
  {
    q: "Does the offer apply to every cost?",
    a: "No. The proposed 25% discount applies only to eligible annual platform licensing for the first 12 months on new accounts. Statutory charges, payroll processing pass-through and bureau services are excluded, and the offer is pending Finance and Product approval.",
  },
  {
    q: "Is every jurisdiction fully available?",
    a: "No. Some jurisdictions are available in-platform, while others are limited, partner-supported or planned. Responsibilities vary by jurisdiction and contract, so confirm scope with the Zoiko Payroll team during your demonstration.",
  },
];

export default function BookDemo() {
  return (
    <section
      id="book-demo"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[radial-gradient(ellipse_at_100%_0%,rgba(37,99,235,0.35),transparent_45%),linear-gradient(180deg,#071a2e_0%,#0a2540_100%)] py-20 text-white sm:py-24"
    >
      <span aria-hidden className="absolute -left-6 -top-10 -z-10 h-16 w-60 -rotate-[8deg] bg-cyan-400" />

      <div className="mx-auto grid max-w-[1116px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_548px] lg:gap-[72px] lg:px-0">
        <div>
          <Eyebrow tone="cyan">Book a Demonstration</Eyebrow>
          <h2 className="mt-5 max-w-[440px] text-3xl font-extrabold leading-[1.25] tracking-[-0.03em] sm:text-[36px]">
            Bring every pay run under control.
          </h2>
          <p className="mt-6 max-w-[480px] text-lg leading-7 text-slate-300">
            Discover how Zoiko Payroll can support your workforce, operating markets and payroll requirements.
          </p>

          <p className="mt-14 text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">Common questions</p>
          <div className="mt-4 max-w-[496px]">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-white/10 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="-mt-1 pb-5 text-[15px] leading-6 text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="rounded-xl border-t-4 border-cyan-400 bg-white p-6 text-slate-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-[#0c3556]">Book a Tailored Demonstration</h2>
          <p className="mt-2 text-[15px] text-slate-600">
            Tell us about your payroll operation and we will tailor the session.
          </p>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
