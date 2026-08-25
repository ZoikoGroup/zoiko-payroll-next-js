import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const can = [
  "Explain implementation concepts and common questions by stage.",
  "Route to Product Implementation and Global Payroll implementation depth.",
  "Surface approved guides, checklists and videos with freshness metadata.",
  "Explain what migration/testing/launch evidence usually needs to address.",
  "Link current product instructions and support.",
];

const cannot = [
  "Create a customer-specific workplan, scope, date or statement of work.",
  "Declare market availability or local statutory compliance.",
  "Treat checklist completion as readiness or risk evidence.",
  "Approve migrated data, parallel-run tolerance or launch.",
  "Publish unsupported implementation service levels, staffing or timelines.",
];

export default function GuidanceScopeSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>What implementation guidance covers</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            A guidance router, not an implementation promise
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal delay={80} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="pb-3.5 text-sm font-bold leading-5 text-emerald-600">THIS HUB CAN</p>
            <ul>
              {can.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 border-b border-slate-200 pb-2.5 pt-2 last:border-b-0"
                >
                  <span aria-hidden="true" className="text-xs font-black leading-5 text-emerald-600">
                    ✓
                  </span>
                  <span className="text-xs leading-5 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="pb-3.5 text-sm font-bold leading-5 text-red-600">THIS HUB CANNOT</p>
            <ul>
              {cannot.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 border-b border-slate-200 pb-2.5 pt-2 last:border-b-0"
                >
                  <span aria-hidden="true" className="text-xs font-black leading-5 text-red-600">
                    ✕
                  </span>
                  <span className="text-xs leading-5 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
