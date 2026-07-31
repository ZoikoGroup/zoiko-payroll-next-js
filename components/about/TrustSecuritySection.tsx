import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { UserIcon, RefreshIcon, AuditIcon, DatabaseIcon, LockIcon, ShieldIcon } from "../ui/icons";

const pillars = [
  { icon: UserIcon, label: "Identity & access" },
  { icon: RefreshIcon, label: "Separation of duties" },
  { icon: AuditIcon, label: "Auditability" },
  { icon: DatabaseIcon, label: "Data protection" },
  { icon: LockIcon, label: "Privacy" },
  { icon: ShieldIcon, label: "Resilience" },
];

export default function TrustSecuritySection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Trust, security, privacy and governance</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Trust must be built into the way payroll is operated.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Payroll information is sensitive. Zoiko Payroll places controlled authentication,
            permissions, approval responsibilities, traceable activity, documented operating practices,
            and privacy controls at the center of the product experience.
          </p>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div
            className="pointer-events-none absolute inset-x-12 top-6 hidden border-t-[2.7px] border-[#B9CAD5] lg:block"
            aria-hidden="true"
          />
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 60} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[2.7px] border-[#0A78C2] bg-[#EAF1F6] text-[#0A78C2]">
                <pillar.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-medium text-slate-600">{pillar.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-brand-dark">How does Zoiko Payroll protect payroll information?</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Zoiko Payroll protects payroll operations through controlled authentication, role-based
            access, defined permissions, approval workflows, and audit records, supported by documented
            security, privacy, and service-management practices. Current certifications, hosting
            arrangements, and contractual commitments are published through the Trust Center and
            service documentation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
