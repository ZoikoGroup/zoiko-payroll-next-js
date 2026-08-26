import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import AnnouncementCard, { type Announcement } from "./AnnouncementCard";

const announcements: Announcement[] = [
  {
    image: "/images/company-newsroom/company-coverage-expansion.png",
    alt: "Colleagues discussing coverage expansion",
    category: "Zoiko Payroll · Global Payroll",
    date: "Aug 12, 2026",
    title: "Zoiko Payroll expands Global Payroll coverage to three additional markets.",
    summary: "Local requirement guides available at launch for each new jurisdiction.",
    href: "#latest-announcement",
  },
  {
    image: "/images/company-newsroom/company-operating-model.png",
    alt: "A team reviewing an operating model on a laptop",
    category: "Zoiko Payroll",
    date: "Jul 8, 2026",
    title: "Zoiko Payroll formalizes its multi-entity operating model.",
    summary:
      "A structured control framework for organizations running payroll across multiple entities.",
    href: "/global-payroll/multi-entity-payroll",
  },
  {
    image: "/images/company-newsroom/company-partner-milestone.png",
    alt: "A consultant working across a laptop and tablet",
    category: "Zoiko Payroll",
    date: "May 20, 2026",
    title: "Zoiko Payroll reaches a new implementation-partner milestone.",
    summary:
      "An approved operating milestone supported by current partner and implementation records.",
    href: "/company/partners",
  },
];

export default function CompanyAnnouncementsSection() {
  return (
    <section id="company-announcements" className="scroll-mt-24 bg-[#F9FAFB] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Company announcements</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Corporate updates with approved scope and evidence
          </h2>
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
