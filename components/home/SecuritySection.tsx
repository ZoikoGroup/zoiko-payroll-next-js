import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";
import { LockIcon, ShieldIcon, AuditIcon, DatabaseIcon, UserIcon, RefreshIcon } from "../ui/icons";

const securityIcons = {
  lock: LockIcon,
  shield: ShieldIcon,
  audit: AuditIcon,
  database: DatabaseIcon,
  user: UserIcon,
  refresh: RefreshIcon,
} as const;

const securityItems = [
  { icon: "lock" as const, title: "Identity and access", description: "Approved authentication, user roles and permissions." },
  {
    icon: "shield" as const,
    title: "Approval controls",
    description: "Separation of preparation, review, approval and administration where configured.",
  },
  {
    icon: "audit" as const,
    title: "Auditability",
    description: "Recorded material payroll actions, decisions, changes and approvals.",
  },
  {
    icon: "database" as const,
    title: "Data protection",
    description: "Documented technical and organizational safeguards for payroll and employee information.",
  },
  {
    icon: "user" as const,
    title: "Privacy controls",
    description: "Applicable retention, access, correction and deletion processes by service and jurisdiction.",
  },
  {
    icon: "refresh" as const,
    title: "Operational resilience",
    description: "Documented availability, incident, backup, continuity and recovery practices.",
  },
];

export default function SecuritySection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Security, privacy and governance</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Payroll data deserves serious protection.
          </h2>
        </Reveal>

        <Reveal delay={60} className="mt-6 max-w-3xl rounded-2xl border border-brand/15 bg-brand/5 p-6">
          <p className="text-sm leading-relaxed text-brand-dark">
            Zoiko Payroll protects payroll information through controlled authentication, role-based
            access, defined permissions, approval workflows and audit records, supported by documented
            security and privacy practices. Review the current Trust Center and service documentation
            for the applicable controls, hosting arrangements, certifications and contractual
            commitments.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item, index) => {
            const Icon = securityIcons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ArrowLink href="/company/trust-center">Visit the Trust Center</ArrowLink>
          <ArrowLink href="/product/security/documentation">Review security documentation</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
