import {
  PaymentSystemIntegrationsHero,
  FitAndAvailabilitySection,
  AuthorizationReleaseSection,
  PaymentStateContractSection,
  BeneficiaryAccountValidationSection,
  PaymentCapabilityMatrixSection,
  BatchingIdempotencySafetySection,
  ExternalEvidenceHierarchySection,
  SettlementReconciliationSection,
  ImplementationMonitoringSection,
  PayrollOperationsAlignedSection,
} from "@/components/payment-systems";

export default function PaymentSystemsPage() {
  return (
    <main>
      <PaymentSystemIntegrationsHero />
      <FitAndAvailabilitySection />
      <AuthorizationReleaseSection />
      <PaymentStateContractSection />
      <BeneficiaryAccountValidationSection />
      <PaymentCapabilityMatrixSection />
      <BatchingIdempotencySafetySection />
      <ExternalEvidenceHierarchySection />
      <SettlementReconciliationSection />
      <ImplementationMonitoringSection />
      <PayrollOperationsAlignedSection />
    </main>
  );
}
