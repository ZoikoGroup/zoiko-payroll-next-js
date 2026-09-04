import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const roles = [
  { title: "Global Payroll Governance", description: "Owns shared control model, standards, cross-market escalation and policy architecture. Cannot unilaterally reinterpret local evidence." },
  { title: "Regional Payroll Lead", description: "Coordinates market readiness, rollout and recurring review; approves within delegated scope." },
  { title: "Local Payroll Owner / SME", description: "Owns local applicability/context and operational configuration input." },
  { title: "Compliance / Legal Reviewer", description: "Reviews high-risk interpretations and public/legal boundaries where required." },
  { title: "Finance / Treasury", description: "Owns finance, reconciliation and payment-related local inputs and downstream handoffs." },
  { title: "IT / Integration Admin", description: "Owns connector/data/system-of-record configuration, testing and failures." },
  { title: "Security / Privacy", description: "Owns access, data handling, retention and processing controls." },
  { title: "Auditor / Viewer", description: "Independent read-only oversight, subject to export permissions." },
];

export default function DecisionRightsSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-start gap-6">
            {/* Left: text */}
            <div className="flex-1 max-w-2xl">
              <span className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Global &amp; local decision rights
              </span>
              <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-sky-950">
                Ownership made explicit — no<br />
                generic &quot;Admin&quot; that does<br />
                everything
              </h2>
            </div>

            {/* Right: image card moved left by 100px */}
            <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 relative -left-[100px]">
              <div className="relative h-44 bg-gradient-to-br from-slate-100 to-slate-50">
                <img
                  src="/ss.png"
                  alt="Decision rights overview"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-5 pt-4 pb-5">
                <h3 className="text-sm font-extrabold text-sky-950">
                  Separation by design
                </h3>
                <p className="mt-0.5 text-xs leading-5 text-gray-600">
                  High-impact paths require explicit role separation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-xl bg-white px-4 pt-3.5 pb-4 outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-sky-950">{role.title}</h3>
                  <p className="mt-1 text-xs leading-4 text-gray-600">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-5">
          <div className="rounded-[10px] border-l-[3px] border-r border-t border-b border-sky-600 bg-[#E5EFF9] p-5">
            <span className="text-sm font-bold text-sky-950">
              Separation rule:
            </span>
            <span className="text-sm text-sky-950">
              {" "}No generic &quot;Admin&quot; role can reinterpret requirements,
              change payroll configuration, approve the change and publish
              evidence. High-impact paths<br />
              require explicit role separation or a visible exception policy.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}