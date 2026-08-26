import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import AnnouncementCard, { type Announcement } from "./AnnouncementCard";

const announcements: Announcement[] = [
  {
    image: "/images/company-newsroom/partnership-implementation.png",
    alt: "Two people shaking hands across a meeting table",
    category: "Partnership",
    date: "Jun 15, 2026",
    title: "Zoiko Payroll announces an approved implementation-partner relationship.",
    summary: "Current relationship status is confirmed on the Partners directory.",
    href: "/company/partners",
  },
  {
    image: "/images/company-newsroom/partnership-hris-ecosystem.png",
    alt: "A product team reviewing an ecosystem program",
    category: "Ecosystem",
    date: "Apr 3, 2026",
    title: "Zoiko Payroll joins an approved HRIS ecosystem program.",
    summary: "Live integration capability is confirmed in Product Integrations.",
    href: "/product/integrations",
  },
  {
    image: "/images/company-newsroom/partnership-regional-services.png",
    alt: "Two colleagues celebrating a new regional partnership",
    category: "Partnership",
    date: "Feb 18, 2026",
    title: "Zoiko Payroll announces a regional payroll-services partnership.",
    summary: "Jurisdiction availability is confirmed only through Global Payroll Coverage.",
    href: "/global-payroll/jurisdiction-coverage",
  },
];

export default function PartnershipAnnouncementsSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Partnership &amp; ecosystem announcements</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            A relationship record — never proof of a live integration
          </h2>
          <p className="mx-auto mt-4 max-w-[742px] text-base leading-7 text-slate-600">
            Partnership does not prove a live connector, product integration or jurisdiction
            availability. Current relationship truth remains with Partners and Global Payroll
            Coverage.
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
