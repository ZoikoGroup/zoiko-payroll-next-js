import HeroSection from "@/components/enterprise-organizations/HeroSection";
import ComplexitySignalsSection from "@/components/enterprise-organizations/ComplexitySignalsSection";
import FederatedOperatingModelSection from "@/components/enterprise-organizations/FederatedOperatingModelSection";
import StandardizeScopeSection from "@/components/enterprise-organizations/StandardizeScopeSection";
import PayrollLifecycleSection from "@/components/enterprise-organizations/PayrollLifecycleSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Organizations | Zoiko Payroll",
  description: "Govern payroll across complex entities, regions, jurisdictions, and connected systems from one controlled environment.",
};

import RolesReviewSection from "@/components/enterprise-organizations/RolesReviewSection";
import ReportingFinanceSection from "@/components/enterprise-organizations/ReportingFinanceSection";
import IntegrationsSecuritySection from "@/components/enterprise-organizations/IntegrationsSecuritySection";
import ImplementationServiceSection from "@/components/enterprise-organizations/ImplementationServiceSection";
import GuidedRouteSection from "@/components/enterprise-organizations/GuidedRouteSection";
import FAQSection from "@/components/enterprise-organizations/FAQSection";
import CTASection from "@/components/enterprise-organizations/CTASection";

export default function EnterpriseOrganizationsPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ComplexitySignalsSection />
      <FederatedOperatingModelSection />
      <StandardizeScopeSection />
      <PayrollLifecycleSection />
      <RolesReviewSection />
      <ReportingFinanceSection />
      <IntegrationsSecuritySection />
      <ImplementationServiceSection />
      <GuidedRouteSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
