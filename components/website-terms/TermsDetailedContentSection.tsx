"use client";

import React, { useState, useEffect } from "react";

interface SectionItem {
  id: string;
  number: number;
  title: string;
  clauseCode: string;
  conditionalTag?: string;
  content: string;
  isConditionalBg?: boolean;
}

const termsSections: SectionItem[] = [
  {
    id: "acceptance-of-these-terms",
    number: 1,
    title: "Acceptance of these terms",
    clauseCode: "clause-001",
    content:
      "By accessing or using the Zoiko Payroll public website, you engage with it subject to these Website Terms of Use, within the approved scope described above. Continued use of the website does not itself create a signed agreement, see Section 8 for how assent is actually governed on this site.",
  },
  {
    id: "scope-of-these-terms",
    number: 2,
    title: "Scope of these terms",
    clauseCode: "clause-002",
    content:
      "These terms apply to the public Zoiko Payroll website and to public-site features, content and context expressly included in the approved scope. They do not apply to purchased Zoiko Payroll services, which are governed separately once Zoiko Payroll Service Terms are approved and published.",
  },
  {
    id: "use-of-the-website",
    number: 3,
    title: "Use of the website",
    clauseCode: "clause-003",
    content:
      "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the website by any third party. Conduct restrictions specific to purchased services are addressed in the applicable Acceptable Use Policy, not here.",
  },
  {
    id: "accounts",
    number: 4,
    title: "Accounts",
    clauseCode: "clause-004",
    conditionalTag: "Conditional clause — account",
    isConditionalBg: true,
    content:
      "Where the public website offers an account-based feature, you are responsible for maintaining the confidentiality of your credentials and for activity that occurs under your account, within the scope of that specific public feature.",
  },
  {
    id: "content-and-intellectual-property",
    number: 5,
    title: "Content & intellectual property",
    clauseCode: "clause-005",
    content:
      "The website and its original content, features and functionality are owned by Zoiko Tech Inc. and are protected by applicable intellectual property laws. Defined terms used on this page carry the exact meaning approved in the current Clause Registry.",
  },
  {
    id: "submissions-and-feedback",
    number: 6,
    title: "Submissions & feedback",
    clauseCode: "clause-006",
    conditionalTag: "Conditional clause — submissions",
    isConditionalBg: true,
    content:
      "Where the website invites feedback, ideas or submissions through an approved public form, submitting that content does not create a confidentiality obligation on Zoiko Payroll unless separately agreed.",
  },
  {
    id: "third-party-links",
    number: 7,
    title: "Third-party links",
    clauseCode: "clause-007",
    content:
      "The website may reference or link to third-party sites for convenience. Their presence does not imply endorsement, partnership or approval, and Zoiko Payroll is not responsible for third-party content, availability or practices.",
  },
  {
    id: "disclaimers",
    number: 8,
    title: "Disclaimers",
    clauseCode: "clause-008",
    content:
      'The website and its public content are provided on an "as is" and "as available" basis, within the approved scope of this document, without warranties of any kind beyond those expressly stated in the approved source.',
  },
  {
    id: "limitation-of-liability",
    number: 9,
    title: "Limitation of liability",
    clauseCode: "clause-009",
    content:
      "To the extent permitted by applicable law and within the approved scope of these terms, Zoiko Payroll's liability arising from use of the public website is limited as set out in the approved Legal source for this document.",
  },
  {
    id: "indemnity",
    number: 10,
    title: "Indemnity",
    clauseCode: "clause-010",
    conditionalTag: "Conditional clause — Indemnity",
    isConditionalBg: true,
    content:
      "Where an approved indemnity clause applies to the public website, its exact terms are published from the approved Clause Registry rather than summarized or paraphrased here.",
  },
  {
    id: "suspension-and-termination",
    number: 11,
    title: "Suspension & termination",
    clauseCode: "clause-011",
    conditionalTag: "Conditional clause — suspension / termination",
    isConditionalBg: true,
    content:
      "Where applicable to a specific public-site feature, access to that feature may be suspended or terminated under the conditions set out in the approved source for that feature.",
  },
  {
    id: "governing-law-and-disputes",
    number: 12,
    title: "Governing law & disputes",
    clauseCode: "clause-012",
    conditionalTag: "Conditional clause — disputes",
    isConditionalBg: true,
    content:
      "Governing law is not automatically determined by your locale. Where an approved governing-law or dispute-resolution clause exists for these Website Terms, it is published exactly as approved rather than inferred.",
  },
  {
    id: "changes-to-these-terms",
    number: 13,
    title: "Changes to these terms",
    clauseCode: "clause-013",
    content:
      "These terms may be updated from time to time. Material corrections identify the affected version and clause with an approved public notice; the current version is always identified by its legal state, not by edit history.",
  },
];

const sidebarNavigation = termsSections.map((s) => ({
  id: s.id,
  label: `${s.number}. ${s.title}`,
}));

export default function TermsDetailedContentSection() {
  const [activeId, setActiveId] = useState<string>("acceptance-of-these-terms");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sidebarNavigation) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-12 lg:py-16 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          {/* Left Sidebar Sticky Navigation */}
          <aside className="lg:col-span-3 lg:sticky lg:top-8 self-start">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
              <span className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase block">
                ON THIS PAGE
              </span>
              <nav className="space-y-1 text-xs">
                {sidebarNavigation.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`block py-1.5 px-2 rounded-lg transition-all leading-snug font-medium ${
                        isActive
                          ? "font-bold text-[#0284C7] bg-[#E0F2FE]/60"
                          : "text-[#475569] hover:text-[#0F172A] hover:bg-gray-100/70"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Main Legal Clauses Content */}
          <main className="lg:col-span-9 space-y-6">
            {termsSections.map((section) => {
              const isCard = section.isConditionalBg;

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-24 space-y-2 transition-all ${
                    isCard
                      ? "bg-[#F4F8FB] p-4 rounded-2xl border border-[#E2E8F0]"
                      : "p-2 border-b border-gray-100/80 pb-6 last:border-0"
                  }`}
                >
                  {/* Conditional Clause Pill */}
                  {section.conditionalTag && (
                    <div>
                      <span className="inline-block text-[11px] font-semibold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full">
                        {section.conditionalTag}
                      </span>
                    </div>
                  )}

                  {/* Clause Title & Clause Code */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-bold text-[#0F172A] tracking-tight">
                      {section.number}. {section.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#94A3B8] shrink-0">
                      {section.clauseCode}
                    </span>
                  </div>

                  {/* Clause Body Text */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {section.content}
                  </p>
                </article>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
