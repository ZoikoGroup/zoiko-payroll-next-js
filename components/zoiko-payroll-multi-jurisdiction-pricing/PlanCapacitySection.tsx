import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const plans = [
  { name: "Core", count: "1", desc: "Production jurisdiction", dark: false },
  { name: "Professional", count: "3", desc: "Up to three jurisdictions", dark: false },
  { name: "Business", count: "10", desc: "Up to ten jurisdictions", dark: false },
  { name: "Enterprise", count: "Custom", desc: "Contracted capacity", dark: true },
];

export default function PlanCapacitySection() {
  return (
    <section className="bg-[#EDF1F4] py-16 sm:py-20" id="jurisdiction-capacity">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Eyebrow>Plan jurisdiction capacity</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                How many countries can you run per plan?
              </h2>
            </div>
            <div className="flex items-start justify-end pt-[65px] lg:justify-end">
              <p className="max-w-xs text-sm leading-5 text-[#5B6B7A]">
                Exceeding the allowance routes to the next<br />eligible plan — never a silent extra.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex h-36 flex-col items-center justify-center rounded-2xl ring-1 ${
                  plan.dark
                    ? "bg-[#082F49] ring-[#082F49]"
                    : "bg-white ring-slate-200"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wide ${
                    plan.dark ? "text-white" : "text-[#5B6B7A]"
                  }`}
                >
                  {plan.name}
                </span>
                <span
                  className={`mt-1 text-4xl font-extrabold leading-[51px] ${
                    plan.dark ? "text-white" : "text-[#0A78C3]"
                  }`}
                >
                  {plan.count}
                </span>
                <span
                  className={`mt-1 text-xs ${
                    plan.dark ? "text-white" : "text-[#5B6B7A]"
                  }`}
                >
                  {plan.desc}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
