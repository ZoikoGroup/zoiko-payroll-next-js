import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

/** `detail` is split into the two lines the design sets it on. */
const problems = [
  {
    problem: "Broad admin access",
    detail: ["One role can see and change", "everything, everywhere."],
    resolvedBy: "Scoped, purpose-bound roles",
  },
  {
    problem: "Weak or shared identity",
    detail: ["Actions can't be traced back to a", "single accountable person."],
    resolvedBy: "Named identity + MFA policy",
  },
  {
    problem: "Preparation/approval conflation",
    detail: ["The person who prepares payroll", "can also approve it."],
    resolvedBy: "Approval separation",
  },
  {
    problem: "Privileged changes without evidence",
    detail: ["A role change happens with no", "record of who or why."],
    resolvedBy: "Audit evidence workspace",
  },
  {
    problem: "Uncontrolled exports",
    detail: ["Sensitive payroll data leaves", "without confirmation."],
    resolvedBy: "Export preview & confirmation",
  },
  {
    problem: "Stale access",
    detail: ["Former roles and permissions are", "never revisited."],
    resolvedBy: "Scheduled access reviews",
  },
];

export default function ProblemsSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Why payroll security needs layers</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Consequences, mapped directly to controls.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-700">
              Not fear statistics — recognizable failure modes and the specific control that closes each
              one.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/security/why-layers.png"
              alt="Payroll lead reviewing security consequences mapped to controls"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-80"
            />
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <Reveal key={item.problem} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-xs font-bold leading-5 text-red-600">{item.problem}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {item.detail[0]}
                  <br />
                  {item.detail[1]}
                </p>
                <p className="mt-auto pt-6 font-mono text-xs leading-4 text-slate-500">
                  &darr; resolved by
                </p>
                <p className="mt-1.5 text-xs font-bold leading-5 text-green-600">
                  &#10003; {item.resolvedBy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
