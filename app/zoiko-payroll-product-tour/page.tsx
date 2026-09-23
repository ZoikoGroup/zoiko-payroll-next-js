import type { Metadata } from "next";
import {
  ProductTourHero,
  SixChaptersSection,
  InteractiveTourSection,
  AuditTimelineSection,
  IntegrationsBridgeSection,
  SecurityTrustBridgeSection,
  ProductTourFaqSection,
  ProductTourReadyCta,
} from "@/components/zoiko-payroll-product-tour";

export const metadata: Metadata = {
  title: "Product Tour | Zoiko Payroll",
  description:
    "Take a guided tour of representative Zoiko Payroll workflows using synthetic data. Explore preparation, validation, approvals, deductions and adjustments, employee payroll records, and reporting.",
};

export default function ZoikoPayrollProductTourPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero: Order 1 on both mobile and desktop */}
      <div className="order-1">
        <ProductTourHero />
      </div>

      {/* 2. On Mobile: Interactive Tour is Order 2; on Desktop it is Order 3 */}
      <div className="order-2 sm:order-3">
        <InteractiveTourSection />
      </div>

      {/* 3. On Mobile: Six Chapters is Order 3; on Desktop it is Order 2 */}
      <div className="order-3 sm:order-2">
        <SixChaptersSection />
      </div>

      {/* 4. Audit Timeline: Order 4 */}
      <div className="order-4">
        <AuditTimelineSection />
      </div>

      {/* 5. Integrations Bridge: Order 5 */}
      <div className="order-5">
        <IntegrationsBridgeSection />
      </div>

      {/* 6. Security & Trust Bridge: Order 6 */}
      <div className="order-6">
        <SecurityTrustBridgeSection />
      </div>

      {/* 7. Product Tour FAQ: Order 7 */}
      <div className="order-7">
        <ProductTourFaqSection />
      </div>

      {/* 8. Ready to Go Further CTA: Order 8 */}
      <div className="order-8">
        <ProductTourReadyCta />
      </div>
    </div>
  );
}
