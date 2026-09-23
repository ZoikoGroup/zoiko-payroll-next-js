import React from "react";

import {
  IntegrationsHero,
  IntegrationCategories,
  IntegrationDirectory,
  IntegrationDetail,
  ConnectionLifecycle,
  SecurityPrivacy,
  FailureRecovery,
  ImplementationGuidance,
  RelatedPath,
  IntegrationsFaq,
  IntegrationsReadyCta,
} from "@/components/zoiko-payroll-integrations";

export default function Page() {
  return (
    <main>
      <IntegrationsHero />
      <IntegrationCategories />
      <IntegrationDirectory />
      <IntegrationDetail />
      <ConnectionLifecycle />
      <SecurityPrivacy />
      <FailureRecovery />
      <ImplementationGuidance />
      <RelatedPath />
      <IntegrationsFaq />
      <IntegrationsReadyCta />
    </main>
  );
}