import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const areas = [
  {
    title: "Integration readiness",
    description:
      "Source/target ownership, direction, auth, mapping, retry and reconciliation questions.",
    authority: "Authority: Product Integrations / Docs",
  },
  {
    title: "Identity / access",
    description:
      "Role setup, least privilege, MFA/SSO where supported, admin ownership and access reviews.",
    authority: "Authority: Security and Trust / Docs",
  },
  {
    title: "Sensitive payroll data",
    description:
      "Data minimization, purpose, controlled access, secure transfer and retention questions.",
    authority: "No public uploads of payroll, bank, tax or employee data",
  },
  {
    title: "Evidence / audit",
    description: "Attributable changes, approvals, validation evidence and decision history.",
    authority: "Authority: Implementation / Security and Trust",
  },
];

export default function RiskRoutingSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Integrations, security, privacy &amp; data</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Risk questions route to the authority that owns them.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 2) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-3.5">
                <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{area.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{area.description}</p>
                <p className="mt-1 text-xs font-bold leading-4 text-yellow-700">{area.authority}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
