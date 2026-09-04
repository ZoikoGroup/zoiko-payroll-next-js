import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  GovernanceSection,
  BoundariesSection,
  LifecycleSection,
  IdentitySection,
  AdminSection,
  SecuritySection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-payroll-zoiko-one";

export const metadata: Metadata = {
  title: "Zoiko One | Zoiko Payroll",
  description:
    "Standalone when you need it. Connected when it helps. Understand the Zoiko One relationship — approved connections, governance, identity, data and workflow pathways.",
};

export default function ZoikoPayrollZoikoOnePage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <GovernanceSection />
      <BoundariesSection />
      <LifecycleSection />
      <IdentitySection />
      <AdminSection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
