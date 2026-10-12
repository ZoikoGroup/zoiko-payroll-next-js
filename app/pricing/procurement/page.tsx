import {
  ProcurementResourcesSection,
  DirectAnswerSection,
  ProcurementQuickLinksSection,
  AccessClassificationSection,
  BuildProcurementPackSection,
  ResourceCategoriesSection,
  ProcurementProcessSection,
  DocumentFreshnessSection,
  ProcurementFaqSection,
  FinalStepResourcesSection,
} from "@/components/procurement";

export default function PayrollProcurementPage() {
  return (
    <main className="bg-gredient-to-r from-[#FFFFFF] to-[#F5F8FA]">
      <ProcurementResourcesSection />
      <DirectAnswerSection />
      <ProcurementQuickLinksSection />
      <AccessClassificationSection />
      <BuildProcurementPackSection />
      <ResourceCategoriesSection />
      <ProcurementProcessSection />
      <DocumentFreshnessSection />
      <ProcurementFaqSection />
      <FinalStepResourcesSection />
    </main>
  );
}
