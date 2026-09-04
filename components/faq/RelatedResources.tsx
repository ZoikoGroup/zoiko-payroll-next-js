"use client";

import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";

const resources = [
  {
    title: "Payroll Guides",
    description: "Practical guides, checklists and playbooks for payroll operations.",
  },
  {
    title: "Payroll Glossary",
    description: "Direct definitions of payroll terms.",
  },
  {
    title: "Product Documentation",
    description: "Configure and use Zoiko Payroll.",
  },
  {
    title: "Resource Center",
    description: "Search and browse all payroll knowledge.",
  },
];

export default function RelatedResources() {
  return (
    <section className="bg-white border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Related resources</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            Keep going — deeper structure lives just past<br className="hidden sm:inline" /> this FAQ.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0px_1px_2px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
                <h3 className="text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                  {resource.title}
                </h3>
                <p className="mt-2 text-xs font-jakarta text-[#4E6172] leading-5 flex-1">
                  {resource.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
