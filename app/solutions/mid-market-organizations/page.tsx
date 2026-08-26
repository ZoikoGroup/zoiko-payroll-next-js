import type { Metadata } from "next";
import {
  HeroSection,
  ComplexitySection,
  ControlCenterSection,
  FederatedModelSection,
  StandardizationSection,
  LifecycleSection,
  ReportingSection,
  GuidedRouteSection,
  CadenceSection,
  ScopeRoutingSection,
  ImplementationSection,
  FaqSection,
  CtaSection,
} from "@/components/mid-market-organizations";

export const metadata: Metadata = {
  title: "Mid-Market Payroll | Zoiko Payroll",
  description:
    "Coordinate payroll across growing teams, legal entities, payroll groups, approvals and connected systems from one controlled environment — without losing accountable local ownership.",
};

export default function MidMarketOrganizationsPage() {
  return (
    <>
      {/* 1 */} <HeroSection />
      {/* 2 */} <ComplexitySection />
      {/* 3 */} <ControlCenterSection />
      {/* 4 */} <FederatedModelSection />
      {/* 5 */} <StandardizationSection />
      {/* 6 */} <LifecycleSection />
      {/* 7 */} <ReportingSection />
      {/* 8 */} <GuidedRouteSection />
      {/* 9 */} <CadenceSection />
      {/* 10 */} <ScopeRoutingSection />
      {/* 11 */} <ImplementationSection />
      {/* 12 */} <FaqSection />
      {/* 13 */} <CtaSection />
    </>
  );
}
