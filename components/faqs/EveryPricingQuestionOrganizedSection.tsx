"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
} from "lucide-react";

interface QuestionAnswerItem {
  question: string;
  answer: string;
}

interface CategoryBlock {
  categoryTitle: string;
  itemCount: string;
  questions: QuestionAnswerItem[];
}

const filterPills = [
  "All",
  "Plans",
  "BWM",
  "Multi-entity",
  "Multi-jurisdiction",
  "Upgrades",
  "Implementation",
  "Multi-currency",
  "Taxes & filing",
  "Security",
  "Enterprise",
  "Service packs",
  "Free trial",
  "Professional",
  "Procurement",
];

const categoryBlocks: CategoryBlock[] = [
  {
    categoryTitle: "Plans FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "Which Zoiko Payroll plan is best for a growing business?",
        answer:
          "The Professional plan is typically recommended for growing businesses, offering up to 250 workers, up to 3 legal entities and production jurisdictions, advanced approvals, and priority support.",
      },
      {
        question: "Which plan is recommended?",
        answer:
          "Core is recommended for small teams starting out with 1 entity, while Professional is ideal for scaling multi-entity mid-market companies.",
      },
      {
        question: "Which plan includes API access?",
        answer:
          "API access is available starting on the Professional plan (with limited access) and full API access on Business and Enterprise tiers.",
      },
      {
        question: "Which plan includes SSO?",
        answer:
          "SAML SSO is included starting on the Business plan and Enterprise tiers, while SCIM provisioning is exclusive to Enterprise.",
      },
      {
        question: "What is the difference between plans?",
        answer:
          "Plans differ by worker capacity limits, legal entity allowances, jurisdiction scope, integration depth, security controls (like SSO), and support SLAs.",
      },
      {
        question:
          "Are features restricted to create an upsell / artificial barrier?",
        answer:
          "No. Core calculation architecture, statutory compliance engines, and baseline security are never intentionally weakened or restricted to create artificial upsells.",
      },
    ],
  },
  {
    categoryTitle: "Billable Worker-Month (BWM)",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What exactly is a Billable Worker-Month?",
        answer:
          "It is the recurring billing unit for an in-scope worker in a legal entity for a billing month, as defined by the approved commercial standard.",
      },
      {
        question: "Are terminated workers counted?",
        answer:
          "Terminated workers are only counted if they were active and in-scope for payroll processing during any portion of the billing month.",
      },
      {
        question: "Do reruns or corrections create extra worker charges?",
        answer:
          "No. Reruns, retries, corrections and multiple calculations for the same worker/entity/month do not duplicate the Billable Worker-Month charge.",
      },
      {
        question: "What about part-time or seasonal staff?",
        answer:
          "Part-time or seasonal staff count as a BWM for any month they are actively processed under an in-scope payroll run.",
      },
      {
        question: "What about contractors?",
        answer:
          "Contractors are billed according to their active inclusion status under your specific plan contract and worker configuration rules.",
      },
      {
        question: "How is worker volume billed?",
        answer:
          "Worker volume is calculated monthly based on actual active billable worker counts or contracted tier minimum thresholds.",
      },
    ],
  },
  {
    categoryTitle: "Multi-entity & Multi-jurisdiction FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "Can Zoiko Payroll support multiple legal entities?",
        answer:
          "Yes, multi-entity support scales by plan: Core supports 1, Professional supports up to 3, Business up to 10, and Enterprise offers custom structures.",
      },
      {
        question: "How do employees across entities work?",
        answer:
          "Employees are mapped to their respective legal entities with isolated payroll compliance rules, tax reporting, and ledger tracking.",
      },
      {
        question: "What counts as a supported jurisdiction?",
        answer:
          "A supported jurisdiction is a country or regional tax district with fully validated statutory calculation rules built into the Zoiko engine.",
      },
      {
        question: "Are local entities billed separately or bundled?",
        answer:
          "Entity allowances are bundled into your subscription tier limits; additional entities beyond tier limits require an upgrade or enterprise addon.",
      },
      {
        question: "Can I run payroll in multiple countries simultaneously?",
        answer:
          "Yes, provided your plan tier and jurisdiction activation scope cover the desired operational countries.",
      },
      {
        question: "Are there cross-border currency conversion fees?",
        answer:
          "Cross-border multi-currency invoicing or payout routing may incur standard FX processing fees as defined in your billing agreement.",
      },
    ],
  },
  {
    categoryTitle: "Plan Capacity FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What happens when plan limits are reached?",
        answer:
          "When plan limits (such as worker counts or entity caps) are reached, administrative expansion controls prompt you to upgrade your plan.",
      },
      {
        question: "Can limits be expanded temporarily?",
        answer:
          "Temporary capacity expansions can be requested through sales or account support for seasonal spikes or migration periods.",
      },
      {
        question: "How are entities tracked?",
        answer:
          "Entities are tracked automatically within your workspace settings based on registered tax IDs and corporate structure definitions.",
      },
      {
        question: "What about jurisdiction capacity?",
        answer:
          "Jurisdiction capacity limits define how many active regional tax frameworks you can operate simultaneously under your chosen plan.",
      },
      {
        question: "Is storage/history capped?",
        answer:
          "Payroll audit history and document storage comply with legal and platform retention floors, without arbitrary performance capping.",
      },
      {
        question: "Can limits be upgraded instantly?",
        answer:
          "Plan tier upgrades take effect immediately upon commercial authorization, unlocking higher capacity thresholds instantly.",
      },
    ],
  },
  {
    categoryTitle: "Included & Additional Services FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What is included in the base subscription?",
        answer:
          "The base subscription includes core payroll calculation engines, baseline security, standard audit timelines, and platform access.",
      },
      {
        question: "Are tax filings included in the base plan?",
        answer:
          "Software calculation and reporting tools are included, while fully managed tax remittance and filing services require operational service packs.",
      },
      {
        question: "Are payroll payments included?",
        answer:
          "Direct deposit and disbursement execution features are included, though banking partner transfer fees or third-party rails may apply.",
      },
      {
        question: "Are management service packs included?",
        answer:
          "No, managed payroll and dedicated operational service packs are separately contracted professional services.",
      },
      {
        question: "Is implementation included?",
        answer:
          "Implementation is separately scoped unless explicitly bundled in a special commercial offer.",
      },
      {
        question: "Are operational service packs included?",
        answer:
          "Operational service packs are modular add-ons contracted separately based on your managed payroll and filing requirements.",
      },
    ],
  },
  {
    categoryTitle: "Implementation Pricing FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "Why is implementation priced separately?",
        answer:
          "Implementation is priced separately because data migration, custom configurations, and parallel runs vary greatly across organizations.",
      },
      {
        question: "How is implementation cost calculated?",
        answer:
          "Implementation costs are calculated based on entity complexity, employee volume, data cleansing needs, and integration scope.",
      },
      {
        question: "What does implementation include?",
        answer:
          "It includes dedicated onboarding guidance, system configuration, parallel run testing, historical data import, and staff training.",
      },
      {
        question: "Can I implement without professional services?",
        answer:
          "Self-service onboarding is available on lower tiers, while guided implementation is recommended for Business and Enterprise tiers.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Implementation timelines typically range from 2 to 8 weeks depending on organizational scale and data readiness.",
      },
      {
        question:
          "What happens if implementation encounters a critical blocker?",
        answer:
          "Dedicated onboarding specialists work with your team to resolve blockers before production go-live is authorized.",
      },
    ],
  },
  {
    categoryTitle: "Enterprise Contracts & SLAs FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What does the Enterprise contract structure require?",
        answer:
          "Enterprise contracts involve customized commercial terms, bespoke SLA commitments, and dedicated account governance.",
      },
      {
        question: "How is custom pricing determined for Enterprise?",
        answer:
          "Pricing is tailored based on global workforce scale, multi-country compliance scope, custom API requirements, and support needs.",
      },
      {
        question: "What SLAs are guaranteed on Enterprise?",
        answer:
          "Enterprise SLAs include guaranteed uptime percentages, priority ticket response times, and dedicated escalation pathways.",
      },
      {
        question: "Are custom payment terms available?",
        answer:
          "Yes, customized invoicing schedules, purchase order workflows, and enterprise payment methods are supported.",
      },
      {
        question: "What is the renewal policy for Enterprise?",
        answer:
          "Enterprise renewals are governed by custom contract terms, typically managed via annual or multi-year master services agreements.",
      },
      {
        question: "Is there a dedicated support manager for Enterprise?",
        answer:
          "Yes, Enterprise customers receive a dedicated Customer Success Manager and technical support lead.",
      },
    ],
  },
  {
    categoryTitle: "Multi-currency Pricing FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "In which currencies can I be billed?",
        answer:
          "Invoicing is available in major global currencies including USD, EUR, GBP, CAD, AUD, and others depending on entity location.",
      },
      {
        question: "How are FX rates determined for multi-currency invoicing?",
        answer:
          "Foreign exchange rates are determined using mid-market rate standards partnered with authorized financial institutions at invoice generation.",
      },
      {
        question: "Does Professional plan support multiple currencies?",
        answer:
          "Professional supports localized multi-currency processing for its allowed jurisdictions, subject to regional configuration.",
      },
      {
        question:
          "How are currency fluctuations handled across billing periods?",
        answer:
          "Billing rates are locked per invoicing cycle or governed by multi-currency contractual pricing agreements.",
      },
      {
        question: "Are local payouts in local currencies supported?",
        answer:
          "Yes, multi-currency payroll disbursements are supported through integrated banking and payment partner rails.",
      },
      {
        question: "Can I express payroll totals in different currencies?",
        answer:
          "Reporting dashboards allow you to view consolidated payroll totals in your preferred reporting currency.",
      },
    ],
  },
  {
    categoryTitle: "Tax & Filing Pricing FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "Is tax filing included with the base payroll software plan?",
        answer:
          "Software calculation rules are included; managed tax agency remittance and filing require operational service add-ons.",
      },
      {
        question: "How are statutory tax remittance rates calculated?",
        answer:
          "Rates are computed automatically using live statutory jurisdiction data tables updated by compliance specialists.",
      },
      {
        question: "Are tax penalties covered by Zoiko Payroll?",
        answer:
          "Penalty indemnification terms depend on whether managed filing service packs were active and error logs originated from platform calculations.",
      },
      {
        question:
          "What happens if a tax filing authority rejects a submission?",
        answer:
          "Rejections trigger automated alerts and compliance support review to correct data discrepancies and resubmit promptly.",
      },
      {
        question: "How are tax jurisdiction updates handled?",
        answer:
          "Jurisdiction tax table updates are deployed automatically to all active tenant environments prior to statutory deadlines.",
      },
      {
        question: "Does tax filing require a separate service pack contract?",
        answer:
          "Yes, full-service managed tax filing and remittance require a distinct operational service agreement.",
      },
    ],
  },
  {
    categoryTitle: "Professional Evaluation FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "How does the trial work?",
        answer:
          "The trial provides a 30-day controlled evaluation window on the Professional plan in a secure sandbox environment.",
      },
      {
        question: "Do I need a credit card?",
        answer:
          "No payment method is required by default to start your 30-day evaluation.",
      },
      {
        question: "Will it auto-convert?",
        answer:
          "No, there is no automatic conversion to a paid plan; you choose when and if to upgrade.",
      },
      {
        question: "Is real payroll filing active in trial?",
        answer:
          "No, the trial is simulation-only with no live filings or real money disbursements permitted.",
      },
      {
        question: "Can I invite team members?",
        answer:
          "Yes, you can invite colleagues into your evaluation workspace to test collaborative workflows and approvals.",
      },
      {
        question: "What happens to trial data after 30 days?",
        answer:
          "Trial data is securely retained for a grace period, allowing you to seamlessly convert your sandbox into a live production workspace.",
      },
    ],
  },
  {
    categoryTitle: "Upgrades FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "How do upgrades work?",
        answer:
          "Upgrades unlock higher tier limits and advanced features instantly upon commercial confirmation.",
      },
      {
        question: "Will upgrading disrupt active payroll in-flight?",
        answer:
          "No, the payroll-continuity promise ensures in-flight and approved payrolls are never interrupted by plan changes.",
      },
      {
        question: "When do upgrade capabilities unlock?",
        answer:
          "Capabilities unlock immediately once the upgrade order is authorized in your billing portal.",
      },
      {
        question: "Is there a fee to upgrade plans?",
        answer:
          "You only pay the prorated price difference for your subscription tier; no separate penalty fees apply.",
      },
      {
        question: "What happens to billing cycles during mid-term upgrades?",
        answer:
          "Mid-term upgrades are prorated for the remainder of your current billing cycle.",
      },
      {
        question: "Can I downgrade back after upgrading?",
        answer:
          "Yes, subject to an impact review ensuring you meet resource limits for the lower plan.",
      },
    ],
  },
  {
    categoryTitle: "Downgrades FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "How do downgrades work?",
        answer:
          "Downgrades allow you to move to a lower tier after reviewing limit changes via an automated impact review tool.",
      },
      {
        question: "What happens to excess entities when downgrading?",
        answer:
          "Excess entities or active features exceeding the lower plan limits are flagged as blockers that must be resolved first.",
      },
      {
        question: "Will downgrading lock or delete historical payroll data?",
        answer:
          "No, historical payroll records, payslips, and audit logs remain fully protected and accessible according to retention floors.",
      },
      {
        question: "What are downgrade blockers and how are they resolved?",
        answer:
          "Blockers occur when active configurations (like extra entities or SSO) exceed the target plan limits. You must deactivate them before confirming.",
      },
      {
        question: "When does a downgrade take effect?",
        answer:
          "Downgrades typically take effect at the start of your next billing renewal period.",
      },
      {
        question: "Can I revert a downgrade after confirmation?",
        answer:
          "You can cancel a pending scheduled downgrade anytime before its effective renewal date.",
      },
    ],
  },
  {
    categoryTitle: "An-scope & Out-of-Scope Pricing FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What is included in the base payroll fee?",
        answer:
          "Core calculation engines, statutory rules, standard reporting, and baseline security are included.",
      },
      {
        question: "What is considered out-of-scope and billed separately?",
        answer:
          "Custom integrations, dedicated professional services, managed tax filing packs, and multi-country advisory are out-of-scope.",
      },
      {
        question: "Are custom reports included in the base fee?",
        answer:
          "Standard reporting templates are included, while complex bespoke data warehouse exports may require higher tiers or custom tooling.",
      },
      {
        question: "Are custom API integrations included?",
        answer:
          "Standard API access is included on eligible plans, while custom connector development is handled via professional services.",
      },
      {
        question: "How are out-of-scope support requests handled?",
        answer:
          "Out-of-scope requests are scoped separately as professional services or advisory engagements.",
      },
      {
        question: "What counts as standard vs custom implementation?",
        answer:
          "Standard implementation follows pre-built migration templates; custom implementation involves bespoke data mapping and ERP connections.",
      },
    ],
  },
  {
    categoryTitle: "Security & Compliance FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "Is baseline security included in every plan?",
        answer:
          "Yes, MFA capability, data encryption, tenant isolation, and least-privilege controls are standard on every plan.",
      },
      {
        question: "Are security features gated behind higher tiers?",
        answer:
          "Baseline security never gets gated; enterprise-grade governance like SCIM provisioning scales with enterprise tiers.",
      },
      {
        question: "What encryption standards are enforced?",
        answer:
          "Data is encrypted in transit using TLS 1.3 and at rest using robust AES-256 encryption standards.",
      },
      {
        question: "Is tenant isolation standard across all plans?",
        answer:
          "Yes, strict logical tenant isolation is built into the architecture across all subscription tiers.",
      },
      {
        question: "What compliance certifications does Zoiko Payroll maintain?",
        answer:
          "Zoiko maintains rigorous SOC 2 Type II, ISO 27001, and regional data protection compliance standards.",
      },
      {
        question: "How is audit logging structured?",
        answer:
          "Immutable audit timelines record all administrative actions, payroll adjustments, and user access events.",
      },
    ],
  },
  {
    categoryTitle: "Billing and Payment Terms FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept major credit cards, automated ACH debits, wire transfers, and localized enterprise invoicing methods.",
      },
      {
        question: "How does annual vs monthly billing work?",
        answer:
          "Monthly billing recurs every 30 days; annual billing prepays 12 months for the price of 10 where offered.",
      },
      {
        question: "Are there discounts for annual prepayment?",
        answer:
          "Yes, annual prepaid plans receive an effective discount equivalent to 2 months free.",
      },
      {
        question: "Is there a platform fee separate from worker charges?",
        answer:
          "No separate platform fee is charged; billing is straightforwardly based on plan tiers and worker counts.",
      },
      {
        question: "How are billing discrepancies resolved?",
        answer:
          "Billing support investigates discrepancies promptly and applies appropriate prorated credits when verified.",
      },
      {
        question: "What happens if a payment fails?",
        answer:
          "Automated retry notices are sent, and a grace period is provided to update payment methods before service restriction.",
      },
    ],
  },
  {
    categoryTitle: "Enterprise Procurement & Compliance FAQ",
    itemCount: "6 questions · 6 answers",
    questions: [
      {
        question: "What compliance frameworks are supported for Enterprise?",
        answer:
          "Enterprise supports custom vendor risk assessments, strict data residency requirements, and advanced regulatory frameworks.",
      },
      {
        question:
          "Can Zoiko Payroll sign custom vendor security questionnaires?",
        answer:
          "Yes, our security and legal teams review and complete custom enterprise security questionnaires and vendor agreements.",
      },
      {
        question: "Is on-premise deployment available?",
        answer:
          "Zoiko Payroll operates as a secure cloud-native multitenant SaaS platform with isolated tenant architecture.",
      },
      {
        question: "How is data residency guaranteed?",
        answer:
          "Data residency is managed through localized regional data hosting options available under Enterprise agreements.",
      },
      {
        question: "What escrow provisions are available for Enterprise?",
        answer:
          "Custom software escrow arrangements can be structured into bespoke enterprise master services agreements.",
      },
      {
        question: "How are enterprise audit rights structured?",
        answer:
          "Enterprise audit rights, annual compliance report sharing, and security review terms are explicitly defined in custom contracts.",
      },
    ],
  },
];

interface CancellationFaqItem {
  question: string;
  answer: string;
}

const cancellationFaqs: CancellationFaqItem[] = [
  {
    question: "Can I cancel Zoiko Payroll?",
    answer:
      "Cancellation rights and effective dates follow the applicable order form and terms, through a controlled cancellation workflow that preserves required payroll records.",
  },
  {
    question: "Does my subscription renew automatically?",
    answer:
      "Subscriptions renew automatically according to your agreed order form terms unless cancelled prior to the renewal notice window.",
  },
  {
    question: "Can I reduce worker scope without changing plan?",
    answer:
      "Worker scope reductions can be adjusted upon renewal or within contractual tier bounds specified in your service agreement.",
  },
  {
    question: "What happens to payroll records after cancellation?",
    answer:
      "Required payroll history, payslips, statutory evidence, and audit records remain protected and accessible in accordance with legal retention floors.",
  },
  {
    question: "What happens to pending payroll at termination?",
    answer:
      "Approved or in-flight payrolls are fully protected under our payroll-continuity promise and will not be silently blocked by cancellation processing.",
  },
  {
    question: "Are refunds available?",
    answer:
      "Refund terms are governed by your applicable order form, master subscription agreement, and statutory consumer protection rules where applicable.",
  },
];

export default function EveryPricingQuestionOrganizedSection() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [openCancellationItems, setOpenCancellationItems] = useState<{
    [key: number]: boolean;
  }>({ 0: true });

  const toggleQuestion = (blockIdx: number, qIdx: number) => {
    const key = `${blockIdx}-${qIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCancellationQuestion = (idx: number) => {
    setOpenCancellationItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#E9F0F6] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-4">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              COMPLETE DIRECTORY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight">
            Every pricing question, organized.
          </h1>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {filterPills.map((pill, idx) => (
              <button
                key={idx}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  idx === 0
                    ? "bg-[#07243B] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid of Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {categoryBlocks.map((block, blockIdx) => (
            <div
              key={blockIdx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5"
            >
              {/* Category Header */}
              <div className="space-y-1 pb-3 border-b border-slate-100">
                <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                  {block.categoryTitle}
                </h3>
                <span className="text-[11px] font-medium text-slate-400 block">
                  {block.itemCount}
                </span>
              </div>

              {/* Questions & Answers Accordion List */}
              <div className="space-y-3">
                {block.questions.map((item, qIdx) => {
                  const isOpen = !!openItems[`${blockIdx}-${qIdx}`];
                  return (
                    <div
                      key={qIdx}
                      className="border-b border-slate-100 last:border-b-0 pb-3 last:pb-0"
                    >
                      <button
                        onClick={() => toggleQuestion(blockIdx, qIdx)}
                        className="w-full text-left flex items-center justify-between gap-3 group cursor-pointer py-1 focus:outline-none"
                      >
                        <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-[#0A78C3] transition-colors leading-snug">
                          {item.question}
                        </span>
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 group-hover:bg-[#E6F3FC] group-hover:text-[#0A78C3] flex items-center justify-center shrink-0 transition-colors">
                          {isOpen ? (
                            <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pt-2 pl-1 pr-6">
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Cancellation, Renewal & Commercial Lifecycle FAQ Section Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          {/* Header */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#07243B]">
              Cancellation, Renewal & Commercial Lifecycle FAQ
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Ending or renewing your subscription
            </p>
          </div>

          {/* Boundary Notice Box */}
          <div className="bg-[#FBF0DD] border border-[#E9CE96] rounded-2xl p-5">
            <p className="text-xs text-[#5C3A05] font-medium leading-relaxed">
              <strong className="font-bold">Boundary:</strong> This section
              explains the lifecycle at a high level. Exact notice periods,
              renewal terms, refunds, credits, termination rights and committed
              minimums come from your applicable order form/terms — never
              invented here.
            </p>
          </div>

          {/* 2-Column Accordion List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 items-start">
            {cancellationFaqs.map((item, idx) => {
              const isOpen = !!openCancellationItems[idx];
              return (
                <div key={idx} className="border-b border-slate-100 pb-4">
                  <button
                    onClick={() => toggleCancellationQuestion(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group py-2"
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                      {item.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pr-6">
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout / Disclaimer Banner */}
        <img src="/images/pricing/10.png" alt="image" className="w-full h-80" />
      </div>
    </section>
  );
}
