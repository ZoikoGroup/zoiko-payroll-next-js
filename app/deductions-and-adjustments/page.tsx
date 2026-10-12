import React from "react";

import {
  ChangeTypes,
  CorrectionLineage,
  DeductionsHero,
  EditDrawer,
  FrequentlyAskedQuestions,
  History,
  PermissionsVisibility,
  ProductUI,
  ReadyToGoFurther,
  RelatedProductPaths,
  ValidationExceptions,
} from "@/components/deductions-and-adjustments";

export default function Page() {
  return (
    <main className="w-full">
      <DeductionsHero />

      <ChangeTypes />

      <ProductUI />

      <EditDrawer />

      <ValidationExceptions />

      <CorrectionLineage />

      <History />

      <PermissionsVisibility />

      <RelatedProductPaths />

      <FrequentlyAskedQuestions />

      <ReadyToGoFurther />
    </main>
  );
}