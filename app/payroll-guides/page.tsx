import type { Metadata } from "next";
import {
  HeroSection,
  TaskRoutingSection,
  FeaturedGuidesSection,
  LifecycleSection,
  BrowseByRoleSection,
  GuideCollectionsSection,
  PractitionersBanner,
  FastPathsSection,
  FaqSection,
  CtaBanner,
} from "@/components/payroll-guides";

export const metadata: Metadata = {
  title: "Payroll Guides | Zoiko Payroll",
  description:
    "Practical payroll guides, checklists and playbooks for payroll processes, controls, reviews, records, reporting and implementation.",
};

export default function PayrollGuidesPage() {
  return (
    <>
      <HeroSection />
      <TaskRoutingSection />
      <FeaturedGuidesSection />
      <LifecycleSection />
      <BrowseByRoleSection />
      <GuideCollectionsSection />
      <PractitionersBanner />
      <FastPathsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
