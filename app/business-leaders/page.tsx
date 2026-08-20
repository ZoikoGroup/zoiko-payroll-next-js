import HeroSection from "@/components/business-leaders/HeroSection";
import LeadershipOperatingRealitySection from "@/components/business-leaders/LeadershipOperatingRealitySection";
import StatusCloseReadinessSection from "@/components/business-leaders/StatusCloseReadinessSection";
import MaterialExceptionsSection from "@/components/business-leaders/MaterialExceptionsSection";
import DecisionRightsEscalationSection from "@/components/business-leaders/DecisionRightsEscalationSection";
import CrossEntityFinanceReconciliationSection from "@/components/business-leaders/CrossEntityFinanceReconciliationSection";
import HrImpactApprovalGovernanceSection from "@/components/business-leaders/HrImpactApprovalGovernanceSection";
import IntegrationHealthSecurityTrustSection from "@/components/business-leaders/IntegrationHealthSecurityTrustSection";
import TrendsExecutiveBriefSection from "@/components/business-leaders/TrendsExecutiveBriefSection";
import CrossFunctionalHandoffsSection from "@/components/business-leaders/CrossFunctionalHandoffsSection";
import FindYourSolutionSection from "@/components/business-leaders/FindYourSolutionSection";
import FaqSection from "@/components/business-leaders/FaqSection";
import FinalCtaSection from "@/components/business-leaders/FinalCtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Leaders | Zoiko Payroll",
  description:
    "Know whether payroll is on track, which material issues need attention, and who owns the next action — across every entity you're responsible for.",
};

export default function BusinessLeadersPage() {
  return (
    <main>
      <HeroSection />
      <LeadershipOperatingRealitySection />
      <StatusCloseReadinessSection />
      <MaterialExceptionsSection />
      <DecisionRightsEscalationSection />
      <CrossEntityFinanceReconciliationSection />
      <HrImpactApprovalGovernanceSection />
      <IntegrationHealthSecurityTrustSection />
      <TrendsExecutiveBriefSection />
      <CrossFunctionalHandoffsSection />
      <FindYourSolutionSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
