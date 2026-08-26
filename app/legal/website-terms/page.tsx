import {
  WebsiteTermsHeroSection,
  WhatTheseTermsCoverSection,
  VersioningMetadataSection,
  TermsDetailedContentSection,
  AcceptanceAssentSection,
  RelatedLegalDocumentsSection,
  WebsiteTermsFAQSection,
} from "@/components/website-terms";

export default function WebsiteTermsOFUsePage() {
  return (
    <main>
      <WebsiteTermsHeroSection />
      <WhatTheseTermsCoverSection />
      <VersioningMetadataSection />
      <TermsDetailedContentSection />
      <AcceptanceAssentSection />
      <RelatedLegalDocumentsSection />
      <WebsiteTermsFAQSection />
    </main>
  );
}
