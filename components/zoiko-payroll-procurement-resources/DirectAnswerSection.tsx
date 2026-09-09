import type { ReactNode } from "react";
import Reveal from "../ui/Reveal";

export default function DirectAnswerSection() {
  const faqItems: { question: string; answer: ReactNode }[] = [
    {
      question: "Do I need to contact sales for every document?",
      answer:
        "No. Public documents are directly accessible. Gated or restricted evidence requires the appropriate verification.",
    },
    {
      question: "Where do I complete security due diligence?",
      answer:
        "Security Review is the canonical surface. This page only routes and packages approved security resources.",
    },
    {
      question: "Can Zoiko complete our vendor questionnaire?",
      answer: (
        <>
          Standard questionnaires are self-service where possible; custom RFP/RFI, SIG or CAIQ
          <br />
          reviews use an assisted workflow.
        </>
      ),
    },
    {
      question: "Can we access audit or pentest reports?",
      answer: (
        <>
          Only if the evidence is approved for disclosure and the required access controls are
          <br />
          satisfied.
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#EDF2F5] py-10 pb-[55px]">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-7">
            {/* Top header section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-azure-40">
                    / Direct answer
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold leading-9 text-azure-16">
                  Where do I find Zoiko Payroll procurement
                  <br />
                  documents?
                </h2>
              </div>
              <p className="max-w-72 pb-0.5 text-sm font-normal leading-5 text-azure-56">
                One hub, multiple authoritative sources.
              </p>
            </div>

            {/* Main callout card */}
            <div className="rounded-2xl border border-azure-40 border-l-4 bg-white px-7 py-6 shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)]">
              <p className="text-sm font-normal leading-5 text-azure-38">
                Zoiko Payroll Procurement Resources is the central place to find or
                request the commercial, legal, privacy, security, implementation and
                supplier-onboarding evidence needed for vendor evaluation. Public
                resources can be accessed immediately; restricted documents use
                verified-prospect, NDA or customer-only access based on sensitivity.
              </p>
            </div>

            {/* FAQ items 2x2 grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 rounded-xl bg-white p-4 outline outline-1 outline-offset-[-1px] outline-azure-89"
                >
                  <h3 className="text-xs font-bold leading-5 text-azure-16">
                    {item.question}
                  </h3>
                  <p className="text-xs font-normal leading-5 text-azure-38">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}