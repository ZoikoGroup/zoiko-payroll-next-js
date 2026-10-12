import type { Metadata } from "next";
import {
  ServicesHero,
  OverviewSection,
  ScopeSection,
  WhenToUseSection,
  ServicePortfolioSection,
  DeliveryJourneySection,
  ScopingSection,
  StatementOfWorkSection,
  DeliveryGovernanceSection,
  GlobalDeliverySection,
  SecurityWorkspaceSection,
  KnowledgeTransferSection,
  ServicesFaqSection,
  ServicesCta,
} from "@/components/professional-services";

export const metadata: Metadata = {
  title: "Professional Services | Zoiko Payroll",
  description:
    "Bring in payroll, migration, integration, testing, and transformation specialists for complex projects that need structured delivery and extra expertise.",
};

export default function ProfessionalServicesPage() {
  return (
    <main className="bg-slate-50">
      <ServicesHero />
      <OverviewSection />
      <ScopeSection />
      <WhenToUseSection />
      
      <DeliveryJourneySection />
      <ServicePortfolioSection />
      <ScopingSection />
      <StatementOfWorkSection />
      <DeliveryGovernanceSection />
      <GlobalDeliverySection />
      <SecurityWorkspaceSection />
      <KnowledgeTransferSection />
      <ServicesFaqSection />
      <ServicesCta />
    </main>
  );
}
