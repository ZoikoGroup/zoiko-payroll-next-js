import {
  ZoikoEcosystemHero,
  DirectAnswerZoikoGroupSection,
  GroupRoleVerifiedOwnershipSection,
  VerifiedOwnershipAccountability,
  GroupMembershipBoundarySection,
  CorporateTruthGovernanceTimeline,
  ApprovedTechnologyEcosystemSection,
  HowProductRelationshipsWorkSection,
  StakeholderPathwaysSection,
  FAQSection,
  FinalConversionSection,
} from "@/components/about-zoiko-group";

export default function AboutZoikoGroup() {
  return (
    <main>
      <ZoikoEcosystemHero />
      <DirectAnswerZoikoGroupSection />
      <GroupRoleVerifiedOwnershipSection />
      <VerifiedOwnershipAccountability />
      <GroupMembershipBoundarySection />
      <CorporateTruthGovernanceTimeline />
      <ApprovedTechnologyEcosystemSection />
      <HowProductRelationshipsWorkSection />
      <StakeholderPathwaysSection />
      <FAQSection />
      <FinalConversionSection />
    </main>
  );
}
