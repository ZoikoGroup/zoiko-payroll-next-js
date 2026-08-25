import {
  ZoikoOneSection,
  WhatIsZoikoOneSection,
  GovernanceInPracticeSection,
  WhatRemainsIndependentSection,
  ApprovedConnectionsLifecycleSection,
  AuthenticationNotAuthorizationSection,
  OperationalReliabilitySection,
  SecurityTrustBoundariesSection,
  FAQSection,
  FinalConversionSection,
} from "@/components/zoiko-one";

export default function ZoikoOnePage() {
  return (
    <main>
      <ZoikoOneSection />
      <WhatIsZoikoOneSection />
      <GovernanceInPracticeSection />
      <WhatRemainsIndependentSection />
      <ApprovedConnectionsLifecycleSection />
      <AuthenticationNotAuthorizationSection />
      <OperationalReliabilitySection />
      <SecurityTrustBoundariesSection />
      <FAQSection />
      <FinalConversionSection />
    </main>
  );
}
