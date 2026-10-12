import React from "react";
import SectionShell from "./SectionShell";

export default function CopyrightSection() {
  return (
    <SectionShell id="copyright" title="Copyright notice">
      <div className="rounded-xl border border-slate-200 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-base font-bold leading-6 text-sky-950">
            © 2026 Zoiko Tech Inc. All rights reserved.
          </h3>
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold leading-4 text-green-700">
            Current
          </span>
        </div>

        <p className="mt-4 text-sm leading-5 text-gray-600">
          The text, graphics, interfaces, software and other content on Zoiko
          Payroll web surfaces are owned by Zoiko Tech Inc. or its licensors and
          are protected by applicable copyright and other intellectual-property
          laws. No part of this content may be reproduced, distributed or used
          to create derivative works without prior written permission, except as
          permitted by law or a separate written agreement.
        </p>

        <p className="mt-5 border-t border-slate-200 pt-3.5 text-xs leading-5 text-slate-500">
          Owner: Legal · Last reviewed: Aug 4, 2026
        </p>
      </div>
    </SectionShell>
  );
}
