import type { Metadata } from "next";
import {
  HeroSection,
  AzIndexSection,
  TopicsSection,
  EssentialTermsSection,
  TermAnatomySection,
  CompareTermsSection,
  AuthorityHandoffsSection,
  EvaluationSection,
  FaqSection,
  CtaSection,
} from "@/components/payroll-glossary";

export const metadata: Metadata = {
  title: "Payroll Glossary | Zoiko Payroll",
  description:
    "Direct definitions of payroll terms, abbreviations and related concepts — with scope, distinctions and the authoritative source for product behavior and market rules.",
};

export default function PayrollGlossaryPage() {
  return (
    <>
      <HeroSection />
      <AzIndexSection />
      <TopicsSection />
      <EssentialTermsSection />
      <TermAnatomySection />
      <CompareTermsSection />
      <AuthorityHandoffsSection />
      <EvaluationSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
