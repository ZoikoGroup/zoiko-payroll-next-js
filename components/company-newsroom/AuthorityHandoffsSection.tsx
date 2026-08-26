import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const handoffs = [
  {
    question: "What changed in a shipped release?",
    authority: "Release Notes",
    href: "/resources/release-notes",
    behavior: "Provides context; links the release record",
  },
  {
    question: "How does the product work now?",
    authority: "Product Documentation",
    href: "/resources/documentation",
    behavior: "Never leaves users relying on an old announcement",
  },
  {
    question: "Is the service healthy right now?",
    authority: "System Status",
    href: "/resources/system-status",
    behavior: "Never infers live health from news",
  },
  {
    question: "I need help",
    authority: "Help Center",
    href: "/resources/help-center",
    behavior: "Passes announcement context where useful",
  },
  {
    question: "What security evidence is current?",
    authority: "Trust and Security",
    href: "/company/trust-center",
    behavior: "Statement cannot replace evergreen evidence",
  },
  {
    question: "Is a jurisdiction supported?",
    authority: "Global Payroll Coverage",
    href: "/global-payroll/jurisdiction-coverage",
    behavior: "Announcement cannot establish current availability",
  },
  {
    question: "What is the current partner relationship?",
    authority: "Partners",
    href: "/company/partners",
    behavior: "Announcement is historical context only",
  },
  {
    question: "Who is the current leader?",
    authority: "Leadership",
    href: "/company/about-us",
    behavior: "Article keeps role-at-publication; profile is current",
  },
  {
    question: "What jobs are open?",
    authority: "Careers",
    href: "/company/careers",
    behavior: "Hiring story doesn't prove a vacancy is open",
  },
];

export default function AuthorityHandoffsSection() {
  return (
    <section className="bg-[#F4F6F7] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Operational authority handoffs</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every operational question has one correct destination
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block"
        >
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#EEF2FF]">
              <tr>
                <th className="w-[360px] px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Question
                </th>
                <th className="w-[280px] px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Authority
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Newsroom behavior
                </th>
              </tr>
            </thead>
            <tbody>
              {handoffs.map((handoff) => (
                <tr key={handoff.question} className="border-t border-slate-200">
                  <td className="px-4 py-3.5 align-top text-sm leading-5 text-brand-dark">
                    {handoff.question}
                  </td>
                  <td className="px-4 py-3.5 align-top">
                    <Link
                      href={handoff.href}
                      className="text-sm font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
                    >
                      {handoff.authority}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5 align-top text-sm leading-5 text-slate-600">
                    {handoff.behavior}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 lg:hidden">
          {handoffs.map((handoff, index) => (
            <Reveal
              key={handoff.question}
              delay={index * 30}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{handoff.question}</p>
              <Link
                href={handoff.href}
                className="mt-1.5 inline-block text-sm font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
              >
                {handoff.authority}
              </Link>
              <p className="mt-1.5 text-sm leading-5 text-slate-600">{handoff.behavior}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
