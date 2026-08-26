import {
  PrivacyNoticeHeroWithDirectAnswer,
  TableOfContentsSidebar,
  RolesContextSection,
  CategoriesSourcesSection,
  PurposesBasisSection,
  RecipientsTransfersRetentionSection,
  RightsRequestsSection,
  CookiesMarketingSection,
  AIChildrenVersionSection,
  ContactSection,
  FAQSection,
  RelatedResourcesSection,
} from "@/components/privacy-notice";

export default function PrivacyNoticePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <PrivacyNoticeHeroWithDirectAnswer />

      {/* Main Content Area */}
      <div className="w-full  bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex max-w-6xl mx-auto flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Left Sticky Sidebar */}
          <TableOfContentsSidebar />

          {/* Right Main Sections Column */}
          <div className="min-w-0 flex-1 space-y-16">
            <RolesContextSection />
            <CategoriesSourcesSection />
            <PurposesBasisSection />
            <RecipientsTransfersRetentionSection />
            <RightsRequestsSection />
            <CookiesMarketingSection />
            <AIChildrenVersionSection />
            <ContactSection />
          </div>
        </div>
        <FAQSection />
        <RelatedResourcesSection />
      </div>
    </main>
  );
}
