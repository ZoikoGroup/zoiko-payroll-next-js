import type { Metadata } from "next";
import {
  OfficesHero,
  FindAnOfficeSection,
  TrustStrip,
  OfficeResultsSection,
  SecondaryMapSection,
  OfficeDetailSection,
  LifecycleStatesSection,
  ContactActionsSection,
  EmptyStatesSection,
  FinalRoutingSection,
  OfficesCta,
} from "@/components/offices";

export const metadata: Metadata = {
  title: "Offices | Zoiko Payroll",
  description:
    "Find a verified Zoiko Payroll office. Only approved, publicly listed office locations appear here, with verified addresses, hours and contact routes.",
};

export default function OfficesPage() {
  return (
    <main className="bg-white">
      <OfficesHero />
      <FindAnOfficeSection />
      <TrustStrip />
      <OfficeResultsSection />
      <SecondaryMapSection />
      <OfficeDetailSection />
      <LifecycleStatesSection />
      <ContactActionsSection />
      <EmptyStatesSection />
      <FinalRoutingSection />
      <OfficesCta />
    </main>
  );
}
