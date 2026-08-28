import type { Metadata } from "next";
import {
  AcceptableUseHero,
  PolicySummarySection,
  WhatThisPolicyIsSection,
  PolicyCategoriesSection,
  ProhibitedUseSection,
  RestrictedUseSection,
  SecurityIntegritySection,
  PayrollMisuseSection,
  DataPrivacySection,
  AutomationSection,
  ServiceIntegritySection,
  ContentLegalSection,
  ReportingMisuseSection,
  PossibleResponsesSection,
  AcceptableUseFAQSection,
  RelatedResourcesSection,
} from "@/components/acceptable-use-policy";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Zoiko Payroll",
  description:
    "The approved rules for acceptable, prohibited, restricted and conditional use of Zoiko Payroll services, how to report suspected misuse, and the responses that may follow.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <AcceptableUseHero />
      <PolicySummarySection />
      <WhatThisPolicyIsSection />
      <PolicyCategoriesSection />
      <ProhibitedUseSection />
      <RestrictedUseSection />
      <SecurityIntegritySection />
      <PayrollMisuseSection />
      <DataPrivacySection />
      <AutomationSection />
      <ServiceIntegritySection />
      <ContentLegalSection />
      <ReportingMisuseSection />
      <PossibleResponsesSection />
      <AcceptableUseFAQSection />
      <RelatedResourcesSection />
    </div>
  );
}
