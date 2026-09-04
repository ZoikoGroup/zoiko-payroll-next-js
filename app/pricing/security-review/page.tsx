import {
  SecurityReviewSection,
  SecurityDirectAnswerSection,
  SecurityReviewNavigatorSection,
  VerifiedAssuranceSnapshotSection,
  SecurityControlTaxonomySection,
  PayrollDataProtectionSection,
  IdentityEncryptionIsolationSection,
  SecureDevelopmentSection,
  IncidentResponseGovernanceSection,
  RequestEvidenceSection,
  SharedResponsibilitySection,
  FaqSection,
  FinalSecurityReviewSection,
} from "@/components/security-review";

export default function SecurityReviewPage() {
  return (
    <main>
      <SecurityReviewSection />
      <SecurityDirectAnswerSection />
      <SecurityReviewNavigatorSection />
      <VerifiedAssuranceSnapshotSection />
      <SecurityControlTaxonomySection />
      <PayrollDataProtectionSection />
      <IdentityEncryptionIsolationSection />
      <SecureDevelopmentSection />
      <IncidentResponseGovernanceSection />
      <RequestEvidenceSection />
      <SharedResponsibilitySection />
      <FaqSection />
      <FinalSecurityReviewSection />
    </main>
  );
}
