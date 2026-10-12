import type { Metadata } from "next";
import {
  DemoFormSection,
  AfterSubmitSection,
  BuiltForTeamsBand,
  SolutionsSection,
  SecuritySection,
  DemoFaqSection,
  ExistingCustomerBand,
  DemoCta,
} from "@/components/book-a-demo";

export const metadata: Metadata = {
  title: "Book a Demo | Zoiko Payroll",
  description:
    "Tell us about your team and current payroll setup, and we'll route you to the right specialist for a tailored Zoiko Payroll demo.",
};

export default function BookADemoPage() {
  return (
    <main className="bg-gray-50">
      <DemoFormSection />
      <AfterSubmitSection />
      <BuiltForTeamsBand />
      <SolutionsSection />
      <SecuritySection />
      <DemoFaqSection />
      <ExistingCustomerBand />
      <DemoCta />
    </main>
  );
}
