import {
  LegalCenterHeroSection,
  WhatIsLegalCenterCard,
  TermsRelationshipMapSection,
  CurrentLegalDocumentsTable,
  QuickTaskRouterSection,
  PrivacyCookiesNoticeControlSection,
  CustomerProcurementSection,
  AcceptableUseAndNoticesSection,
  DocumentCurrencyAndRoutingSection,
  LegalCenterFAQSection,
} from "@/components/legal-center";

export default function LegalcenterPage() {
  return (
    <main>
      <LegalCenterHeroSection />
      <WhatIsLegalCenterCard />
      <TermsRelationshipMapSection />
      <CurrentLegalDocumentsTable />
      <QuickTaskRouterSection />
      <PrivacyCookiesNoticeControlSection />
      <CustomerProcurementSection />
      <AcceptableUseAndNoticesSection />
      <DocumentCurrencyAndRoutingSection />
      <LegalCenterFAQSection />
    </main>
  );
}
