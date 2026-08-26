import type { Metadata } from "next";
import {
  HeroSection,
  StagesSection,
  InsideProgramSection,
  ExitGatesSection,
  ProgramRolesSection,
  TimelineSection,
  FaqSection,
  CtaSection,
} from "@/components/implementation";

export const metadata: Metadata = {
  title: "Payroll Implementation & Migration | Zoiko Payroll",
  description:
    "How a Zoiko Payroll migration runs: seven gated stages from Discover to Optimize, with named owners, exit criteria, parallel testing and a controlled cutover.",
};

export default function ImplementationPage() {
  return (
    <>
      <HeroSection />
      <StagesSection />
      <InsideProgramSection />
      <ExitGatesSection />
      <ProgramRolesSection />
      <TimelineSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
