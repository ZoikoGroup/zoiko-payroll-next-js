'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is multi-country payroll charged per country?",
    answer: "Not as a single universal surcharge. Plan capacity and worker-month subscription are separate from jurisdiction activation, local services and third-party costs.",
  },
  {
    question: "Do I pay the subscription again for every country?",
    answer: "No, your core plan subscription covers your base infrastructure, while individual jurisdiction activations handle local additions.",
  },
  {
    question: "What happens if I need more jurisdictions than my plan allows?",
    answer: "You can scale your plan capacity or activate additional jurisdictions on-demand through your dashboard.",
  },
  {
    question: "Does adding a country create an implementation charge?",
    answer: "Implementation fees depend on the local configuration complexity and compliance setup required for the specific jurisdiction.",
  },
  {
    question: "Do states and provinces count as separate jurisdictions?",
    answer: "Certain federated regions with independent local tax or reporting rules may involve specific local service or third-party cost layers.",
  },
  {
    question: "Is Enterprise capacity unlimited?",
    answer: "Enterprise plans include high-tier volume allowances tailored to large global footprints, with custom thresholds defined in your order form.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EFF4F7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-sky-600">/</span>
          <span className="font-['Inter'] text-xs font-bold uppercase tracking-wide text-sky-600">
            FAQ
          </span>
        </div>

        <h2 className="mt-3 font-['Inter'] text-3xl font-extrabold leading-9 text-[#082F49]">
          Multi-jurisdiction pricing, answered<br />
          plainly.
        </h2>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`w-[780px] max-w-full rounded-xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-200 transition-all overflow-hidden ${
                  isOpen ? "h-auto pb-5" : "h-[62px]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full h-[62px] px-[21px] flex items-center justify-between text-left"
                >
                  <span className="font-['Inter'] text-sm font-bold text-[#082F49] leading-5">
                    {faq.question}
                  </span>
                  <span className="font-['Inter'] text-lg font-normal text-sky-600 leading-7">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-[21px] pt-1 font-['Inter'] text-sm font-normal text-slate-600 leading-5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}