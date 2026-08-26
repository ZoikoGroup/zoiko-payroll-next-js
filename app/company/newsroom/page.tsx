import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  LatestAnnouncementSection,
  CompanyAnnouncementsSection,
  ProductAnnouncementsSection,
  LeadershipSection,
  PartnershipAnnouncementsSection,
  CanonicalDetailSection,
  PressResourcesSection,
  MediaInquirySection,
  CorrectionsSection,
  AuthorityHandoffsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/company-newsroom";

export const metadata: Metadata = {
  title: "Newsroom | Zoiko Payroll",
  description:
    "Read approved Zoiko Payroll company and product announcements with clear publication dates, scope, source-of-truth handoffs and visible correction history.",
};

export default function NewsroomPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <LatestAnnouncementSection />
      <CompanyAnnouncementsSection />
      <ProductAnnouncementsSection />
      <LeadershipSection />
      <PartnershipAnnouncementsSection />
      <CanonicalDetailSection />
      <PressResourcesSection />
      <MediaInquirySection />
      <CorrectionsSection />
      <AuthorityHandoffsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
