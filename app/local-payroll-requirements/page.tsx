import type { Metadata } from "next";
import {
  HeroSection,
  WhyRequirementsVarySection,
  GlobalControlSection,
  WorkspaceSection,
  RequirementControlRecordSection,
  EffectiveDatedChangeControlSection,
  DecisionRightsSection,
  AvailabilitySection,
  TrustIntegrationsSection,
  FaqSection,
  CtaSection,
} from "@/components/local-payroll-requirements";

export const metadata: Metadata = {
  title: "Local Payroll Requirements | Zoiko Payroll",
  description:
    "Preserve local payroll requirements without losing global control — model calendars, calculation context, deductions, documents, approvals, currencies and operating practices by jurisdiction.",
};

export default function LocalPayrollRequirementsPage() {
  return (
    <>
      <HeroSection />
<WhyRequirementsVarySection />
<GlobalControlSection />
<WorkspaceSection />
<RequirementControlRecordSection />
<EffectiveDatedChangeControlSection />
<DecisionRightsSection />
<AvailabilitySection />
<TrustIntegrationsSection />
<FaqSection />
<CtaSection />
    </>
  );
}