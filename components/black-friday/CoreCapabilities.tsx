import { Calculator, ChartColumn, CircleCheck, FileText, SlidersHorizontal, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, IconTile } from "./Primitives";

const capabilities = [
  {
    icon: Calculator,
    title: "Payroll Calculation and Processing",
    body: "Manage payroll periods, earnings, deductions, adjustments, calculations, reviews and approvals.",
  },
  {
    icon: CircleCheck,
    title: "Reviews and Approvals",
    body: "Establish clear review responsibilities and prevent payroll from progressing without required authorisation.",
  },
  {
    icon: SlidersHorizontal,
    title: "Deductions and Adjustments",
    body: "Manage recurring and one-time deductions, reimbursements, corrections and approved payroll changes.",
  },
  {
    icon: Users,
    title: "Employee Records and Self-Service",
    body: "Give authorised teams and employees secure access to applicable payslips, payroll history and payroll documents.",
  },
  {
    icon: ChartColumn,
    title: "Reporting and Operational Visibility",
    body: "Review payroll summaries, cross-entity and jurisdiction views, exports, reconciliation support and audit records.",
  },
  {
    icon: FileText,
    title: "Compliance Workflows",
    body: "Coordinate jurisdiction-specific configurations, review processes, documentation and traceable decisions.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <Container>
        <Eyebrow>Core Platform Capabilities</Eyebrow>
        <Heading className="mt-5 max-w-[600px]">Everything your payroll operations need.</Heading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <article className="h-full rounded-xl border border-slate-200 bg-white p-8 shadow-[0_2px_6px_rgba(12,53,86,0.04)] transition-shadow hover:shadow-[0_12px_28px_-12px_rgba(12,53,86,0.18)]">
                <IconTile>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </IconTile>
                <h3 className="mt-8 text-lg font-bold leading-6 text-[#0c3556]">{title}</h3>
                <p className="mt-3 text-[15px] leading-[26px] text-slate-600">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
