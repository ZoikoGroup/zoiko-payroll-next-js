import React from "react";

import {
  ProductEvaluation,
  ProductFaq,
  ProductHero,
  ProductInsights,
  ProductModules,
  ProductReadyCta,
  ProductStartHere,
  ProductTourFeatured,
} from "@/components/product-module";

export default function Page() {
  return (
    <main>
      <ProductHero />
      <ProductModules />
      <ProductInsights />
      <ProductStartHere />
      <ProductTourFeatured />
      <ProductEvaluation />
      <ProductFaq />
      <ProductReadyCta />
    </main>
  );
}