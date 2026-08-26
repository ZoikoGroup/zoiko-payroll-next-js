import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import AnnouncementCard, { type Announcement } from "./AnnouncementCard";

const announcements: Announcement[] = [
  {
    image: "/images/company-newsroom/product-approval-delegation.png",
    alt: "Two colleagues reviewing approval records",
    category: "Approvals",
    date: "Aug 12, 2026",
    title: "Zoiko Payroll introduces expanded approval delegation.",
    summary: "See Release Notes for verified rollout state and required action.",
    href: "/product/payroll-approvals",
  },
  {
    image: "/images/company-newsroom/product-reconciliation-fields.png",
    alt: "Hands pointing at payroll reporting charts on a laptop",
    category: "Reporting",
    date: "Aug 5, 2026",
    title: "New reconciliation fields announced for payroll reporting.",
    summary: "Current export behavior is confirmed in Product Documentation.",
    href: "/product/reporting",
  },
  {
    image: "/images/company-newsroom/product-mfa-enforcement.png",
    alt: "A security engineer monitoring multiple screens",
    category: "Security",
    date: "Jul 30, 2026",
    title: "Zoiko Payroll strengthens MFA enforcement options.",
    summary: "Applicability and configuration are confirmed in current Product Documentation.",
    href: "/company/trust-center",
  },
];

export default function ProductAnnouncementsSection() {
  return (
    <section id="product-announcements" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Product announcements</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Significant product context — not a shipment guarantee
          </h2>
          <p className="mx-auto mt-4 max-w-[724px] text-base leading-7 text-slate-600">
            Publication does not equal release. Use Release Notes and Product Documentation for
            verified applicability.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={announcement.title}
              announcement={announcement}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
