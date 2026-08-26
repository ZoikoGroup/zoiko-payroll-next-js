import {
  LeadershipHeroSection,
  DirectAnswerLeadershipSection,
  AccountabilityDomainsSection,
  LeadershipStructureSection,
  CollaborationFlowSection,
  TwoDestinationsSection,
  LeadershipContinuitySection,
  LeadershipPrinciplesSection,
  StakeholderPathwaysBanner,
  StakeholderPathwaysGrid,
  LeadershipFAQSection,
  ReadyToGoFurtherCTA,
} from "@/components/leadership";

export default function LeadershipPage() {
  return (
    <main>
      <LeadershipHeroSection />
      <DirectAnswerLeadershipSection />
      <AccountabilityDomainsSection />
      <LeadershipStructureSection />
      <CollaborationFlowSection />
      <TwoDestinationsSection />
      <LeadershipContinuitySection />
      <LeadershipPrinciplesSection />
      <StakeholderPathwaysBanner />
      <StakeholderPathwaysGrid />
      <LeadershipFAQSection />
      <ReadyToGoFurtherCTA />
    </main>
  );
}
