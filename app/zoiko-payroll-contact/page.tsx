import {
  ChooseYourRoute,
  ContactZoikoPayroll,
  ContactZoikoPayrollFaq,
  SalesInquiry,
  TrustPrivacyGuidance,
} from "@/components/zoiko-payroll-contact";

import React from "react";

export default function Page() {
  return (
    <main>
      <ContactZoikoPayroll />
      <ChooseYourRoute />
      <SalesInquiry />
      <TrustPrivacyGuidance />
      <ContactZoikoPayrollFaq />
    </main>
  );
}