import {
  MultiEntityPayrollSection,
  MultiEntityDefinitionSection,
  EntityOperatingModelSection,
  MultiEntityControlCenterSection,
  SharedConfigurationSection,
  CalendarsCutoffsSection,
  RolesDelegationSection,
  ReadinessAttentionSection,
  CrossEntityActionsSection,
  SystemBoundariesSection,
  FAQSection,
  CoordinatePayrollCTASection,
} from "@/components/multi-entity-payroll";

export default function MultiEntityPayrollPage() {
  return (
    <main>
      <MultiEntityPayrollSection />
      <MultiEntityDefinitionSection />
      <EntityOperatingModelSection />
      <MultiEntityControlCenterSection />
      <SharedConfigurationSection />
      <CalendarsCutoffsSection />
      <RolesDelegationSection />
      <ReadinessAttentionSection />
      <CrossEntityActionsSection />
      <SystemBoundariesSection />
      <FAQSection />
      <CoordinatePayrollCTASection />
    </main>
  );
}
