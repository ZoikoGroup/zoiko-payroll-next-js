import { Globe, LayoutGrid, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, IconTile } from "./Primitives";

const pillars = [
  {
    icon: LayoutGrid,
    title: "Centralised Payroll Control",
    body: "Coordinate payroll activities, responsibilities and approval status in one operating environment.",
  },
  {
    icon: Globe,
    title: "Multi-Jurisdiction Operations",
    body: "Manage payroll through a consistent operating model while accommodating supported local requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Accountability",
    body: "Maintain defined responsibilities, approval controls, audit history and outstanding actions.",
  },
];

export default function WhyZoiko() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Eyebrow>Why Zoiko Payroll</Eyebrow>
        <Heading className="mt-5 max-w-[600px]">Make payroll complexity easier to manage.</Heading>
        <p className="mt-6 max-w-[680px] text-lg leading-7 text-slate-600">
          Bring payroll activities, approvals, reporting and operational visibility together in one controlled
          environment.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="relative h-full rounded-xl border border-slate-200 bg-white p-8 shadow-[0_2px_6px_rgba(12,53,86,0.04)]">
                <span className="absolute right-6 top-6 text-xs font-bold tracking-[0.14em] text-slate-400">
                  0{i + 1}
                </span>
                <IconTile>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </IconTile>
                <h3 className="mt-8 text-lg font-bold text-[#0c3556]">{title}</h3>
                <p className="mt-3 text-[15px] leading-[26px] text-slate-600">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 rounded-xl border-l-[6px] border-cyan-400 bg-[#0c3556] px-8 py-7 sm:px-9">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Our proposition</p>
          <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Global payroll control, built around local requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
