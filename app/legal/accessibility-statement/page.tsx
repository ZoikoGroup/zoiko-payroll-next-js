import type { Metadata } from "next";
import {
  AccessibilityHero,
  ScopeCoverageSection,
  StandardStatusSection,
  WhatYouCanDoSection,
  KnownLimitationsSection,
  FeedbackSupportSection,
  CompatibilitySection,
  TechnicalSpecificationsSection,
  AssessmentEvidenceSection,
  MaintainAccessibilitySection,
  ThirdPartyContentSection,
  ComplaintsEscalationSection,
  StatementHistorySection,
  AccessibilityFAQSection,
  RelatedLinksSection,
} from "@/components/accessibility-statement";

export const metadata: Metadata = {
  title: "Accessibility Statement | Zoiko Payroll",
  description:
    "Zoiko Payroll's accessibility statement: target standard, current verified WCAG 2.2 AA status, scope, known limitations with accessible alternatives, and how to report a barrier.",
};

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-white">
      <AccessibilityHero />
      <ScopeCoverageSection />
      <StandardStatusSection />
      <WhatYouCanDoSection />
      <KnownLimitationsSection />
      <FeedbackSupportSection />
      <CompatibilitySection />
      <TechnicalSpecificationsSection />
      <AssessmentEvidenceSection />
      <MaintainAccessibilitySection />
      <ThirdPartyContentSection />
      <ComplaintsEscalationSection />
      <StatementHistorySection />
      <AccessibilityFAQSection />
      <RelatedLinksSection />
    </div>
  );
}
