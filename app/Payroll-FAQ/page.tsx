import FAQHeroSection from "@/components/Payroll-FAQ/FAQHeroSection";
import EvaluationEssentialsSection from "@/components/Payroll-FAQ/EvaluationEssentialsSection";
import BrowseByCategorySection from "@/components/Payroll-FAQ/BrowseByCategorySection";
import ProductPlatformSection from "@/components/Payroll-FAQ/ProductPlatformSection";
import { PlansAndBuyingSection } from "@/components/Payroll-FAQ/PlansAndBuyingSection";
import { ImplementationMigrationSection } from "@/components/Payroll-FAQ/ImplementationMigrationSection";
import { SecurityPrivacyTrustSection } from "@/components/Payroll-FAQ/SecurityPrivacyTrustSection";
import { IntegrationsReportingSection } from "@/components/Payroll-FAQ/IntegrationsReportingSection";
import { SupportStatusChangesSection } from "@/components/Payroll-FAQ/SupportStatusChangesSection";
import { SourceAndFreshnessSection } from "@/components/Payroll-FAQ/SourceAndFreshnessSection";
import { RelatedResourcesSection } from "@/components/Payroll-FAQ/RelatedResourcesSection";
import { ReadyToGoFurtherSection } from "@/components/Payroll-FAQ/ReadyToGoFurtherSection";
import { AuthoritativeStepSection } from "@/components/Payroll-FAQ/AuthoritativeStepSection";
import { GlobalPayrollJurisdictionsSection } from "@/components/Payroll-FAQ/GlobalPayrollJurisdictionsSection";

export default function PayrollFAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <FAQHeroSection />
      <EvaluationEssentialsSection />
      <BrowseByCategorySection />
      <ProductPlatformSection />
      <PlansAndBuyingSection />
      <ImplementationMigrationSection />
      <GlobalPayrollJurisdictionsSection />
      <SecurityPrivacyTrustSection />
      <IntegrationsReportingSection />
      <SupportStatusChangesSection />
      <SourceAndFreshnessSection />
      <RelatedResourcesSection />
      <ReadyToGoFurtherSection />
      <AuthoritativeStepSection />
    </main>
  );
}
