import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const handoffs: {
  title: string;
  context: string;
  status: string;
  tone: ChipTone;
  image: string;
  alt: string;
}[] = [
  {
    title: "Payroll ↔ HR",
    context: "Employee changes",
    status: "Synced",
    tone: "ok",
    image: "/images/payroll-teams/handoff-hr.png",
    alt: "An HR colleague entering employee changes",
  },
  {
    title: "Payroll ↔ Finance",
    context: "Reconciliation",
    status: "Attention",
    tone: "warn",
    image: "/images/payroll-teams/handoff-finance.png",
    alt: "Finance reconciling payroll totals",
  },
  {
    title: "Payroll ↔ IT",
    context: "Integrations",
    status: "Connected",
    tone: "ok",
    image: "/images/payroll-teams/handoff-it.png",
    alt: "IT colleagues checking a connection",
  },
  {
    title: "Payroll ↔ Security",
    context: "Access review",
    status: "Current",
    tone: "ok",
    image: "/images/payroll-teams/handoff-security.png",
    alt: "A security admin running an access review",
  },
  {
    title: "Payroll ↔ Business Leader",
    context: "Readiness",
    status: "On track",
    tone: "ok",
    image: "/images/payroll-teams/handoff-business.png",
    alt: "A business leader reviewing payroll readiness",
  },
];

export default function HandoffsSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Employee change handoffs + records"
            title="Payroll never becomes the HR system of record"
            description="HR and other approved sources own authoritative workforce data — Payroll shows readiness and payroll impact."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {handoffs.map((handoff) => (
              <div
                key={handoff.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center"
              >
                <img
                  src={handoff.image}
                  alt={handoff.alt}
                  className="aspect-[185/159] w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-sm font-bold leading-5 text-slate-900">{handoff.title}</h3>
                <p className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs leading-5 text-slate-500">
                  {handoff.context} ·<StatusChip tone={handoff.tone}>{handoff.status}</StatusChip>
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
