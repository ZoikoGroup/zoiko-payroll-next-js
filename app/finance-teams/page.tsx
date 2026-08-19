import type { Metadata } from "next";
import {
  HeroSection,
  OperatingRealitySection,
  ResponsibilitySection,
  OversightCenterSection,
  TotalsScopeSection,
  VarianceSection,
  ReconciliationSection,
  MaterialChangeSection,
  IntegrationsSection,
  AuditEvidenceSection,
  FaqSection,
  CtaSection,
} from "@/components/finance-teams";

export const metadata: Metadata = {
  title: "Payroll for Finance Teams | Zoiko Payroll",
  description:
    "Scoped totals, explainable variance and reconciliation evidence — connected to your finance and ERP systems without handing finance unnecessary employee-level detail.",
};

export default function FinanceTeamsPage() {
  return (
    <>
      {/* 1 */} <HeroSection />
      {/* 2 */} <OperatingRealitySection />
      {/* 3 */} <ResponsibilitySection />
      {/* 4 */} <OversightCenterSection />
      {/* 5 */} <TotalsScopeSection />
      {/* 6 */} <VarianceSection />
      {/* 7 */} <ReconciliationSection />
      {/* 8 */} <MaterialChangeSection />
      {/* 9 */} <IntegrationsSection />
      {/* 10 */} <AuditEvidenceSection />
      {/* 11 */} <FaqSection />
      {/* 12 */} <CtaSection />
    </>
  );
}
