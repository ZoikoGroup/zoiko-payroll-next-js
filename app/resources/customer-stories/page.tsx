import {
  CustomerStoriesHeroSection,
  EvidenceStandardSection,
  FeaturedStorySection,
  FindAStorySection,
  StoryCardSystemSection,
  HonestByDesignSection,
  EvidenceMethodologySection,
  StoryDetailExperienceSection,
  VerifyWhatsCurrentSection,
  ChooseYourPathSection,
  FAQSection,
  ReadyToGoFurtherSection,
} from "@/components/customer-stories";

export default function CustomerStoriesPage() {
  return (
    <main>
      <CustomerStoriesHeroSection />
      <EvidenceStandardSection />
      <FeaturedStorySection />
      <FindAStorySection />
      <StoryCardSystemSection />
      <HonestByDesignSection />
      <EvidenceMethodologySection />
      <StoryDetailExperienceSection />
      <VerifyWhatsCurrentSection />
      <ChooseYourPathSection />
      <FAQSection />
      <ReadyToGoFurtherSection />
    </main>
  );
}
