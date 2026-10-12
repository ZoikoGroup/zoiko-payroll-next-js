import type { Metadata } from "next";
import {
  SubprocessorsHero,
  RoleClassificationSection,
  RegistrySearchSection,
  CurrentRegistrySection,
  AffiliateSubprocessorsSection,
  ChangeHistorySection,
  AssessmentLifecycleSection,
  InternationalTransfersSection,
  ObjectionWorkflowSection,
  SubprocessorsCta,
} from "@/components/subprocessors";

export const metadata: Metadata = {
  title: "Subprocessors | Zoiko Payroll",
  description:
    "The canonical registry of third parties that may process customer personal data for covered Zoiko Payroll services — provider, legal entity, purpose, processing location, effective date and status.",
};

export default function SubprocessorsPage() {
  return (
    <main>
      <SubprocessorsHero />
      <RoleClassificationSection />
      <RegistrySearchSection />
      <CurrentRegistrySection />
      <AffiliateSubprocessorsSection />
      <ChangeHistorySection />
      <AssessmentLifecycleSection />
      <InternationalTransfersSection />
      <ObjectionWorkflowSection />
      <SubprocessorsCta />
    </main>
  );
}
