import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import ControlList, { type ControlRow } from "./ControlList";

const access: ControlRow[] = [
  { item: "Role-based access", tag: "configured" },
  { item: "Supported authentication options", tag: "verified" },
];

const evidence: ControlRow[] = [
  { item: "Actor, role, version, timestamp", tag: "recorded" },
  { item: "Audit history", tag: "retained" },
];

export default function SecuritySection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Security &amp; trust</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Role-based access, with approval evidence throughout
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Audit logs cover attributable administrative and material payroll actions.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/single-jurisdiction/security.png"
              alt="Payroll leader walking a team through access and approval evidence"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <ControlList title="Access & authentication" rows={access} />
          </Reveal>
          <Reveal delay={100}>
            <ControlList title="Approval evidence" rows={evidence} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
