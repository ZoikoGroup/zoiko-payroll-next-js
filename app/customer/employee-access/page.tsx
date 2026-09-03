import {
  EmployeeAccessHelpHero,
  HelpNavigatorSection,
  FindSignInPathSection,
  FirstTimeAccessSection,
  PasswordRecoverySection,
  EmployerSSOSection,
  MultipleEmployersSection,
  DocumentAccessHubSection,
  MfaVerificationHelpSection,
  SecuritySystemStatusSection,
  EmployeeAccessFaqSection,
} from "@/components/employee-access";

export default function EmployeeAccessPage() {
  return (
    <main>
      <EmployeeAccessHelpHero />
      <HelpNavigatorSection />
      <FindSignInPathSection />
      <FirstTimeAccessSection />
      <PasswordRecoverySection />
      <EmployerSSOSection />
      <MultipleEmployersSection />
      <DocumentAccessHubSection />
      <MfaVerificationHelpSection />
      <SecuritySystemStatusSection />
      <EmployeeAccessFaqSection />
    </main>
  );
}
