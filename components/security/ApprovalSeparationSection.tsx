import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const responsibilities = [
  {
    actor: "Processor",
    action: "Prepare",
    detail: ["Assembles inputs and runs calculations —", "cannot self-approve."],
  },
  {
    actor: "Reviewer",
    action: "Review",
    detail: ["Inspects exceptions and variances before", "authorization."],
  },
  {
    actor: "Approver",
    action: "Approve",
    detail: ["Records required authorization — a", "distinct, named role."],
  },
  {
    actor: "System",
    action: "Evidence",
    detail: ["Every step leaves a timestamped,", "attributable record."],
  },
];

export default function ApprovalSeparationSection() {
  return (
    <section className="bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/security/approval-separation.png"
              alt="Approval separation and sensitive actions workspace on screen"
              className="w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)]"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Approval separation &amp; sensitive actions</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Technical access and business decision rights, visibly separated
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-700">
              High-impact actions require a scope/impact preview, explicit confirmation, and leave audit
              evidence.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {responsibilities.map((item) => (
              <div key={item.actor} className="bg-white px-4 py-5">
                <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  {item.actor}
                </p>
                <h3 className="mt-1.5 text-sm font-bold leading-5 text-slate-900">{item.action}</h3>
                <p className="mt-1.5 text-xs leading-4 text-slate-500">
                  {item.detail[0]}
                  <br />
                  {item.detail[1]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
