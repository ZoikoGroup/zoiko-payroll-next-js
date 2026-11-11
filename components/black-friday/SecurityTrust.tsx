import Link from "next/link";
import { CircleCheck, Eye, History, KeyRound, Lock, RefreshCw } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, IconTile } from "./Primitives";

const items = [
  {
    icon: KeyRound,
    title: "Identity and Access",
    body: "Role-based access aligned to payroll responsibilities, so authorised people see and do what their role requires.",
  },
  {
    icon: CircleCheck,
    title: "Approval Controls",
    body: "Required approvals sit inside the workflow, so payroll does not progress without the right authorisation.",
  },
  {
    icon: History,
    title: "Auditability",
    body: "Decisions, changes and approvals are recorded to support traceable review.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    body: "Protective measures designed around sensitive payroll and employee information.",
  },
  {
    icon: Eye,
    title: "Privacy Controls",
    body: "Controls designed to support responsible handling of employee data across jurisdictions.",
  },
  {
    icon: RefreshCw,
    title: "Operational Resilience",
    body: "Operational practices designed to support continuity for time-sensitive pay cycles.",
  },
];

export default function SecurityTrust() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[520px] text-center">
          <Eyebrow centered>Security and Trust</Eyebrow>
          <Heading className="mt-5">Payroll data deserves serious protection.</Heading>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <article className="relative h-full overflow-hidden rounded-xl bg-[linear-gradient(160deg,#0e3a5c_0%,#0a2643_100%)] p-8 text-white">
                {/* chevron line decoration */}
                <svg
                  aria-hidden
                  viewBox="0 0 170 140"
                  className="pointer-events-none absolute -right-2 top-0 h-36 w-44 stroke-cyan-400/15"
                  fill="none"
                >
                  <path d="M20 0 L120 100 L170 50" strokeWidth="1.2" />
                  <path d="M60 0 L150 90" strokeWidth="1.2" />
                </svg>
                <IconTile tone="dark">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </IconTile>
                <h3 className="relative mt-7 text-xl font-bold">{title}</h3>
                <p className="relative mt-4 text-[15px] leading-6 text-slate-300">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-[680px] text-sm leading-[22px] text-slate-600">
          Security capabilities and configurations vary by plan, deployment and jurisdiction. Visit the{" "}
          <Link href="/company/trust-center" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">
            Trust Center
          </Link>{" "}
          for current information.
        </p>
      </Container>
    </section>
  );
}
