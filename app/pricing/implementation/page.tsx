import {
  ImplementationPricingHero,
  EntityJurisdictionActivationSection,
  HowImplementationPricingWorksSection,
  ImplementationFoundationSection,
  DataMigrationSection,
  CutoverGoLiveHypercareSection,
  DeliveryModelsSection,
  CommonScenariosSection,
  BillingTimelineSection,
  QuoteAnatomySection,
} from "@/components/implementation-pricing";

export default function ImplementationPricingPage() {
  return (
    <main>
      <ImplementationPricingHero />
      <EntityJurisdictionActivationSection />
      <HowImplementationPricingWorksSection />
      <ImplementationFoundationSection />
      <DataMigrationSection />
      <CutoverGoLiveHypercareSection />
      <DeliveryModelsSection />
      <CommonScenariosSection />
      <BillingTimelineSection />
      <QuoteAnatomySection />
    </main>
  );
}
