import type { Metadata } from "next";
import {
  HeroSection,
  EvidenceStandardSection,
  FeaturedStorySection,
  FindStorySection,
  StoryCardSystemSection,
  EmptyStateSection,
  EvidenceMethodologySection,
  StoryDetailSection,
  VerifyCurrentSection,
  ChoosePathSection,
  FaqSection,
  CtaSection,
} from "@/components/customer-stories";

export const metadata: Metadata = {
  title: "Customer Stories | Zoiko Payroll",
  description:
    "Real customer outcomes backed by evidence — every story consented, sourced and reviewed, with honest empty states and full metric methodology.",
};

export default function CustomerStoriesPage() {
  return (
    <div className="relative w-full bg-white">
      <HeroSection />
      <EvidenceStandardSection />
      <FeaturedStorySection />
      <FindStorySection />
      <StoryCardSystemSection />
      <EmptyStateSection />
      <EvidenceMethodologySection />
      <StoryDetailSection />
      <VerifyCurrentSection />
      <ChoosePathSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
