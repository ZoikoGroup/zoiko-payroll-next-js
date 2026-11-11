import type { Metadata } from "next";
import {
  HeroSection,
  WhyZoiko,
  CoreCapabilities,
  PayrollWorkflow,
  Jurisdictions,
  SecurityTrust,
  Pricing,
  OfferSection,
  BookDemo,
} from "@/components/black-friday";

export const metadata: Metadata = {
  title: "Black Friday 2026 | Zoiko Payroll",
  description:
    "Black Friday to Cyber Monday, 27–30 November 2026: a proposed 25% off the first 12 months of eligible annual Zoiko Payroll platform licensing for new accounts.",
};

export default function BlackFridayPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <WhyZoiko />
      <Pricing />
      <OfferSection />
      <PayrollWorkflow />
      <CoreCapabilities />
      <Jurisdictions />
      <SecurityTrust />
      <BookDemo />
    </div>
  );
}
