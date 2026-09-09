import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  SourceProvenanceSection,
  ControlFrameworkSection,
  ExceptionWorkbenchSection,
  SafeCorrectionsSection,
  AiGuardrailsSection,
  MultiEntitySection,
  IngestionSection,
  TrustSection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-payroll-inputs-validation";

export const metadata: Metadata = {
  title: "Payroll Inputs & Validation | Zoiko Payroll",
  description:
    "Bring payroll-impacting data together, check it in context, and resolve exceptions before calculation. Validation reduces preventable risk — it doesn't guarantee error-free payroll.",
};

export default function PayrollInputsValidationPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <SourceProvenanceSection />
      <ControlFrameworkSection />
      <ExceptionWorkbenchSection />
      <SafeCorrectionsSection />
      <AiGuardrailsSection />
      <MultiEntitySection />
      <IngestionSection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}