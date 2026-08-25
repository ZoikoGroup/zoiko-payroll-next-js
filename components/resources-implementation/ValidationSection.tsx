import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const checks = [
  {
    title: "Configuration",
    description: "Approved configuration present; scope/version identified.",
    note: "Not: legally sufficient everywhere",
  },
  {
    title: "Calculation",
    description: "Representative inputs → outputs compared to approved expectations.",
    note: "Not: proof for every payroll scenario",
  },
  {
    title: "Workflow / approval",
    description: "Roles, review, approval, reopen and separation-of-duties behavior verified.",
    note: "Not: test permissions equal production authority",
  },
  {
    title: "Integration",
    description:
      "Happy path, auth failure, retry, idempotency, partial failure and reconciliation checked.",
    note: "Not: “seamless” or universal connector support",
  },
  {
    title: "Reporting / export",
    description:
      "Metric definitions, scope, period, currency/time basis and export access checked.",
    note: "Not: statutory filing unless explicitly supported",
  },
  {
    title: "Security / privacy",
    description: "Access, least privilege, logging, retention and data handling controls.",
    note: "Not: certification status without current trust evidence",
  },
];

export default function ValidationSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Validation &amp; testing</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Evidence collection, never automatic certification
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {checks.map((check, index) => (
            <Reveal key={check.title} delay={(index % 2) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-3.5">
                <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{check.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{check.description}</p>
                <p className="mt-1 text-xs font-bold leading-4 text-yellow-700">{check.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
