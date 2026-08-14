import type { Metadata } from "next";
import {
  HeroSection,
  PrinciplesSection,
  StandaloneSection,
  ArchitectureSection,
  LifecycleSection,
  ConnectionCenterSection,
  CategoriesSection,
  IdentityBoundariesSection,
  DataContextSection,
  MappingSection,
  ConnectionHealthSection,
  SecurityAuditSection,
  ImplementationSection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-one-integration";

export const metadata: Metadata = {
  title: "Zoiko One Integration | Zoiko Payroll",
  description:
    "Connect Zoiko Payroll to Zoiko One without losing payroll control — scoped service identities, versioned data contracts, visible connection health and payroll-governed approvals.",
};

export default function ZoikoOneIntegrationPage() {
  return (
    <>
      <HeroSection />
      <PrinciplesSection />
      <StandaloneSection />
      <ArchitectureSection />
      <LifecycleSection />
      <ConnectionCenterSection />
      <CategoriesSection />
      <IdentityBoundariesSection />
      <DataContextSection />
      <MappingSection />
      <ConnectionHealthSection />
      <SecurityAuditSection />
      <ImplementationSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
