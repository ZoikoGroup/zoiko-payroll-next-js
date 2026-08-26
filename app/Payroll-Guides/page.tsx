import PayrollHero from "@/components/Payroll-Guides/PayrollHero";
import PayrollTasksSection from "@/components/Payroll-Guides/PayrollTasksSection";
import FeaturedGuidesSection from "@/components/Payroll-Guides/FeaturedGuidesSection";
import PayrollLifecycleSection from "@/components/Payroll-Guides/PayrollLifecycleSection";
import BrowseByRoleSection from "@/components/Payroll-Guides/BrowseByRoleSection";
import GuideCollectionsSection from "@/components/Payroll-Guides/GuideCollectionsSection";
import PractitionerSection from "@/components/Payroll-Guides/PractitionerSection";
import FastPathsSection from "@/components/Payroll-Guides/FastPathsSection";
import FAQSection from "@/components/Payroll-Guides/FAQSection";
import CTASection from "@/components/Payroll-Guides/CTASection";

export default function PayrollGuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PayrollHero />
      <PayrollTasksSection />
      <FeaturedGuidesSection />
      <PayrollLifecycleSection />
      <BrowseByRoleSection />
      <GuideCollectionsSection />
      <PractitionerSection />
      <FastPathsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
