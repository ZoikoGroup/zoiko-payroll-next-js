import {
  PostGoLiveSuccessSection,
  CustomerSuccessLifecycleSection,
  SuccessPrinciplesSection,
  ServiceBoundariesSection,
  GovernedSuccessHandoverSection,
  OperationalPayrollHealthSection,
  GovernanceReviewsSection,
  GlobalCoverageSection,
  PayrollMaturitySection,
  SuccessMetricsSection,
  CustomerSuccessFAQSection,
  ScaleGlobalPayrollCTASection,
} from "@/components/customer-success";

export default function CustomerSuccessPage() {
  return (
    <main>
      <PostGoLiveSuccessSection />
      <CustomerSuccessLifecycleSection />
      <SuccessPrinciplesSection />
      <ServiceBoundariesSection />
      <GovernedSuccessHandoverSection />
      <OperationalPayrollHealthSection />
      <GovernanceReviewsSection />
      <GlobalCoverageSection />
      <PayrollMaturitySection />
      <SuccessMetricsSection />
      <CustomerSuccessFAQSection />
      <ScaleGlobalPayrollCTASection />
    </main>
  );
}
