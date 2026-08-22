import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

const controls = [
  {
    title: "Temporary access",
    detail: "Owner and expiry set on every credential.",
  },
  {
    title: "Approved transfer paths only",
    detail: "No email or consumer file-sharing.",
  },
];

const roles = ["Migration Lead", "Payroll Data Owner", "Security / Privacy", "Auditor / Legal"];

export default function SecurityRolesSection() {
  return (
    <section className="bg-[#0B1A33] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/payroll-migration/security-roles.png"
              alt="Cross-functional team reviewing migration roles and access"
              className="h-72 w-full rounded-2xl object-cover"
            />
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="light">Security &amp; roles</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-9 text-white">
              Least privilege, named roles, no shortcuts
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-white/70">
              Purpose limitation, temporary access with an owner and expiry, and evidence-gated
              cross-border handling are enforced throughout — not bolted on at the end.
            </p>

            <ul className="mt-7 space-y-4">
              {controls.map((control) => (
                <li key={control.title} className="flex gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 size-5 shrink-0 text-blue-300"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold leading-5 text-white">{control.title}</p>
                    <p className="mt-0.5 text-sm leading-5 text-white/60">{control.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {roles.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold leading-5 text-white/80"
                >
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
