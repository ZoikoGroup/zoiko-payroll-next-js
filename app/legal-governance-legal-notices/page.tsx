import React from "react";

import {
  AuthorityMap,
  CategoryNavigator,
  FrequentlyAskedQuestions,
  IntellectualPropertyNotices,
  LegalHero,
  LegalRightsCommunications,
  NoticeHistoryCorrections,
  NoticeRegistry,
  OperatorLegalEntityDisclosure,
  ProductServiceRegionalDisclosures,
  StateLegend,
} from "@/components/legal-governance-legal-notices";

export default function Page() {
  return (
    <main>
      <LegalHero />
      <AuthorityMap />
      <CategoryNavigator />
      <NoticeRegistry />
      <StateLegend />
      <OperatorLegalEntityDisclosure />
      <IntellectualPropertyNotices />
      <ProductServiceRegionalDisclosures />
      <NoticeHistoryCorrections />
      <LegalRightsCommunications />
      <FrequentlyAskedQuestions />
    </main>
  );
}