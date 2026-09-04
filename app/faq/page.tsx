import type { Metadata } from "next";
import {
  FaqHeroSection,
  EvaluationEssentials,
  BrowseByCategory,
  FaqCategorySection,
  SourceAndFreshness,
  RelatedResources,
  ReadyToGoFurther,
  AuthoritativeStep,
} from "@/components/faq";
import type { FaqItem } from "@/components/faq/FaqCategorySection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Zoiko Payroll",
  description:
    "Direct answers about Zoiko Payroll — product, buying, implementation, global payroll, security and support. Every answer names its scope and links to the authority that owns current detail.",
};

const productPlatformFaqs: FaqItem[] = [
  {
    question: "What does Zoiko Payroll do day-to-day?",
    scope: "General",
    answer: "It coordinates payroll preparation, calculation, validation, review, approval and completion in one controlled workflow.",
    detail: "",
    linkText: "View Product Documentation",
  },
  {
    question: "Can Zoiko Payroll support approvals before payroll is completed?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Can employees access their own payslips and records?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Does Zoiko Payroll connect with other business systems?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "What is Zoiko One and how does it relate to Zoiko Payroll?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Can I customize payroll workflows to match our organization?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
];

const plansBuyingFaqs: FaqItem[] = [
  {
    question: "Where can I find pricing?",
    scope: "Plan",
    answer: "Use Zoiko Payroll Pricing for current published plan and pricing information.",
    detail: "If your requirements depend on jurisdictions, entities, integrations or enterprise controls, Sales can scope those requirements without restricting access to public resources here.",
    linkText: "View Pricing",
  },
  {
    question: "How does enterprise pricing work?",
    scope: "Plan",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Can I try Zoiko Payroll before buying?",
    scope: "Plan",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "What's the difference between self-serve and implementation services?",
    scope: "Plan",
    answer: "",
    detail: "",
    linkText: "",
  },
];

const implementationFaqs: FaqItem[] = [
  {
    question: "How do we plan a payroll migration?",
    scope: "General",
    answer: "Migration should be treated as a governed implementation workflow with scope, source-data mapping, testing, validation, cutover and ownership decisions.",
    detail: "Use the Implementation and Migration guidance for the current process and required evidence.",
    linkText: "Open Implementation / Migration",
  },
  {
    question: "What data do we need to prepare before migrating?",
    scope: "General",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "How long does implementation typically take?",
    scope: "General",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Who is responsible for testing and validation before go-live?",
    scope: "General",
    answer: "",
    detail: "",
    linkText: "",
  },
];

const globalPayrollFaqs: FaqItem[] = [
  {
    question: "Does Zoiko Payroll support multiple jurisdictions?",
    scope: "Jurisdiction",
    answer: "Zoiko Payroll has a Global Payroll operating model for organizations working across jurisdictions.",
    detail: "Current jurisdiction availability and the requirements that apply in a specific market are governed by the coverage and local-requirements resources, not by this FAQ.",
    linkText: "Check Global Payroll / Jurisdiction Coverage",
  },
  {
    question: "Are all local requirements handled the same way?",
    scope: "Jurisdiction",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Where can I check if my country is currently supported?",
    scope: "Jurisdiction",
    answer: "",
    detail: "",
    linkText: "",
  },
];

const securityFaqs: FaqItem[] = [
  {
    question: "Where can I review security and trust information?",
    scope: "General",
    answer: "Use Security and Trust for current controls, evidence and procurement resources.",
    detail: "This FAQ does not infer certifications or assurance status from individual product features.",
    linkText: "Open Security and Trust",
  },
  {
    question: "How does Zoiko Payroll protect employee data?",
    scope: "General",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Can Zoiko Payroll support our procurement/security review?",
    scope: "General",
    answer: "",
    detail: "",
    linkText: "",
  },
];

const integrationsFaqs: FaqItem[] = [
  {
    question: "What systems does Zoiko Payroll integrate with?",
    scope: "Product",
    answer: "Zoiko Payroll connects with approved workforce, finance, identity and developer systems.",
    detail: "The current supported list and setup steps live in Product Documentation.",
    linkText: "View Integrations / Product Documentation",
  },
  {
    question: "Can I export payroll reports for reconciliation?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "Does Zoiko Payroll support API access?",
    scope: "Product",
    answer: "",
    detail: "",
    linkText: "",
  },
];

const supportFaqs: FaqItem[] = [
  {
    question: "How do I get help with an existing Zoiko Payroll account?",
    scope: "General",
    answer: "Use the Help Center for product support and current customer assistance.",
    detail: "If you are checking an incident or service interruption, go directly to System Status.",
    linkText: "Open Help Center / System Status",
  },
  {
    question: "Where can I see recent product changes?",
    scope: "Date",
    answer: "",
    detail: "",
    linkText: "",
  },
  {
    question: "How do I check if there's a service incident?",
    scope: "Date",
    answer: "",
    detail: "",
    linkText: "",
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqHeroSection />
      <EvaluationEssentials />
      <BrowseByCategory />
      <FaqCategorySection
        eyebrow="Product & platform"
        title="What Zoiko Payroll does — and where the current details live."
        items={productPlatformFaqs}
        bg="white"
      />
      <FaqCategorySection
        eyebrow="Plans & buying"
        title="Clarify buying without inventing contract terms."
        items={plansBuyingFaqs}
        bg="indigo"
      />
      <FaqCategorySection
        eyebrow="Implementation & migration"
        title="Readiness questions, answered without inventing your program."
        items={implementationFaqs}
        bg="white"
      />
      <FaqCategorySection
        eyebrow="Global payroll & jurisdictions"
        title="Coverage and local requirements stay with their canonical authority."
        items={globalPayrollFaqs}
        bg="indigo"
      />
      <FaqCategorySection
        eyebrow="Security, privacy & trust"
        title="Evidence and controls — not inferred assurances."
        items={securityFaqs}
        bg="white"
      />
      <FaqCategorySection
        eyebrow="Integrations & reporting"
        title="Technical and data questions, routed to current behavior."
        items={integrationsFaqs}
        bg="indigo"
      />
      <FaqCategorySection
        eyebrow="Support, status & changes"
        title="Existing-customer operational routes — never a forced sales detour."
        items={supportFaqs}
        bg="white"
      />
      <SourceAndFreshness />
      <RelatedResources />
      <ReadyToGoFurther />
      <AuthoritativeStep />
    </>
  );
}
