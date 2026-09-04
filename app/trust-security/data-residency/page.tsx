import {
  DataResidencySection,
  FourDistinctDimensionsSection,
  RegionAvailabilityRegistrySection,
  AvailabilityStateSystemSection,
  DataLifecycleSection,
  ServiceAndDataCategoryMatrixSection,
  BackupDrSupportAccessSection,
  SubprocessorsTransfersSection,
  LocalizationProcurementEvidenceSection,
  FaqAndCtaSection,
} from "@/components/data-residency";

export default function DataResidencyPage() {
  return (
    <main>
      <DataResidencySection />
      <FourDistinctDimensionsSection />
      <RegionAvailabilityRegistrySection />
      <AvailabilityStateSystemSection />
      <DataLifecycleSection /> {/*Check*/}
      <ServiceAndDataCategoryMatrixSection />
      <BackupDrSupportAccessSection />
      <SubprocessorsTransfersSection />
      <LocalizationProcurementEvidenceSection />
      <FaqAndCtaSection />
    </main>
  );
}
