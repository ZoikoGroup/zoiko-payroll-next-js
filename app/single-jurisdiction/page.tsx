import type { Metadata } from "next";
import {
  HeroSection,
  FitSection,
  ControlCenterSection,
  LifecycleSection,
  ScopeSection,
  InputsSection,
  ReviewApprovalSection,
  RecordsSection,
  IntegrationsSection,
  SecuritySection,
  ImplementationSection,
  RoleOutcomesSection,
  FaqSection,
  CtaSection,
} from "@/components/single-jurisdiction";

export const metadata: Metadata = {
  title: "Single-Jurisdiction Payroll | Zoiko Payroll",
  description:
    "Operate payroll across entities, payroll groups and workforce in one primary market — structured preparation, calculation, validation, review, approval, records and reporting.",
};

export default function SingleJurisdictionPage() {
  return (
    <>
      <HeroSection />
      <FitSection />
      <ControlCenterSection />
      <LifecycleSection />
      <ScopeSection />
      <InputsSection />
      <ReviewApprovalSection />
      <RecordsSection />
      <IntegrationsSection />
      <SecuritySection />
      <ImplementationSection />
      <RoleOutcomesSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
