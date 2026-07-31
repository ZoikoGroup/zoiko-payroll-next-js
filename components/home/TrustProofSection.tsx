import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "./Eyebrow";

const trustCards = [
  {
    title: "Structured payroll approvals",
    description: "Approval-chain interface: stage, responsible role and recorded decision for each step.",
    image: "/images/home/approvals.png",
    badge: "Approved · Pending",
  },
  {
    title: "Role-based access",
    description: "Role and permission interface showing scoped access for payroll, finance and HR users.",
    image: "/images/home/access.png",
    badge: "FN · HR · PR",
  },
  {
    title: "Clear payroll records",
    description: "Payroll record and history interface with period, entity and status detail.",
    image: "/images/home/records.png",
  },
  {
    title: "Multi-jurisdiction operating model",
    description: "Jurisdiction and entity control interface across supported markets.",
    image: "/images/home/multi-jurisdiction.png",
  },
];

export default function TrustProofSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Trust and operational proof</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Payroll decisions require evidence, not promises.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Zoiko Payroll brings structured workflows, controlled approvals, clear records and unified
            operational visibility to payroll teams, finance teams and authorized HR users.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <div className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
                <div className="relative">
                  <img src={card.image} alt={card.title} loading="lazy" className="h-auto w-full" />
                  {card.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand-dark shadow-sm">
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-brand-dark">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <ArrowLink href="/security">Explore security and trust</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
