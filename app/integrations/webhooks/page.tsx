import {
  ZoikoPayrollWebhooksSection,
  ChooseYourEventTaskSection,
  EventCatalogReferenceSection,
  WebhookQuickstartSection,
  EndpointVerificationSection,
  EventEnvelopePayloadSection,
  DeliveryLifecycleSection,
  DuplicatesIdempotencySection,
  ReplayFailureRecoverySection,
  SecurityAndVersioningSection,
  ExistingDeveloperSupportRoutingSection,
  FaqAndCtaSection,
} from "@/components/webhooks";

export default function WebhooksPage() {
  return (
    <main>
      <ZoikoPayrollWebhooksSection />
      <ChooseYourEventTaskSection />
      <EventCatalogReferenceSection />
      <WebhookQuickstartSection />
      <EndpointVerificationSection />
      <EventEnvelopePayloadSection />
      <DeliveryLifecycleSection />
      <DuplicatesIdempotencySection />
      <ReplayFailureRecoverySection />
      <SecurityAndVersioningSection />
      <ExistingDeveloperSupportRoutingSection />
      <FaqAndCtaSection />
    </main>
  );
}
