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
  title: "Black Friday Payroll Deals & Discounts 2026 | Zoiko Payroll",
  description:
    "Discover Zoiko Payroll Black Friday discounts in 2026. Explore payroll software offers to simplify salary processing and employee management.",
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
