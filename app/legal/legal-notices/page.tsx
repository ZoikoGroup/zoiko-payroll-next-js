import type { Metadata } from "next";
import {
  LegalNoticesHero,
  DocumentSummarySection,
  OnThisPageSection,
  LegalEntitySection,
  CopyrightSection,
  TrademarksSection,
  ThirdPartyAttributionSection,
  OpenSourceSection,
  ProductNamingSection,
  AdviceBoundarySection,
  JurisdictionNoticesSection,
  ExternalLinksSection,
  FormalNoticeDeliverySection,
  ReportIssueSection,
  UpdatesArchiveSection,
  LegalNoticesFAQSection,
  RelatedLegalLinksSection,
} from "@/components/legal-notices";

export const metadata: Metadata = {
  title: "Legal Notices | Zoiko Payroll",
  description:
    "Legal entity identification, copyright, trademarks, third-party and open-source attribution, jurisdiction notices, and how to report a legal, brand or IP issue to Zoiko Payroll.",
};

export default function LegalNoticesPage() {
  return (
    <div className="min-h-screen bg-white">
      <LegalNoticesHero />
      <DocumentSummarySection />
      <OnThisPageSection />
      <LegalEntitySection />
      <CopyrightSection />
      <TrademarksSection />
      <ThirdPartyAttributionSection />
      <OpenSourceSection />
      <ProductNamingSection />
      <AdviceBoundarySection />
      <JurisdictionNoticesSection />
      <ExternalLinksSection />
      <FormalNoticeDeliverySection />
      <ReportIssueSection />
      <UpdatesArchiveSection />
      <LegalNoticesFAQSection />
      <RelatedLegalLinksSection />
    </div>
  );
}
