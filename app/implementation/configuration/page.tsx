import {
  PayrollConfigurationSection,
  ConfigurationComparisonSection,
  ConfigurationHierarchySection,
  ConfigurationWorkstreamsSection,
  RequirementsTraceabilitySection,
  PayrollStructuresSection,
  ProductBoundaryClassificationSection,
  ConfigurationReadinessSection,
  SharedResponsibilitySection,
  ConfigurationFaqSection,
  ConfigurationCtaSection,
} from "@/components/configuration";

export default function ConfigurationPage() {
  return (
    <main>
      <PayrollConfigurationSection />
      <ConfigurationComparisonSection />
      <ConfigurationHierarchySection />
      <ConfigurationWorkstreamsSection />
      <RequirementsTraceabilitySection />
      <PayrollStructuresSection />
      <ProductBoundaryClassificationSection />
      <ConfigurationReadinessSection />
      <SharedResponsibilitySection />
      <ConfigurationFaqSection />
      <ConfigurationCtaSection />
    </main>
  );
}
