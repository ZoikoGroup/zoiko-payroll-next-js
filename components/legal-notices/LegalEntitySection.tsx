import React from "react";
import SectionShell from "./SectionShell";

interface OfficeRow {
  office: string;
  address: string;
  role: string;
}

const offices: OfficeRow[] = [
  {
    office: "Global Headquarters",
    address: "1401 21st Street, Suite R, Sacramento, CA 95811, United States",
    role: "Publishing entity office",
  },
  {
    office: "European Headquarters",
    address:
      "167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom",
    role: "Regional office",
  },
];

export default function LegalEntitySection() {
  return (
    <SectionShell
      id="legal-entity"
      title="Legal entity & service identification"
      intro="Zoiko Payroll is published and operated by Zoiko Tech Inc."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-100">
              <th
                scope="col"
                className="w-[21%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Office
              </th>
              <th
                scope="col"
                className="border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Address
              </th>
              <th
                scope="col"
                className="w-[20%] border-b border-slate-200 px-3.5 py-3 text-xs font-bold uppercase leading-4 text-slate-500"
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {offices.map((row) => (
              <tr key={row.office}>
                <th
                  scope="row"
                  className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm font-normal leading-5 text-gray-600"
                >
                  {row.office}
                </th>
                <td className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm leading-5 text-gray-600">
                  {row.address}
                </td>
                <td className="border-b border-slate-200 px-3.5 py-3.5 align-top text-sm leading-5 text-gray-600">
                  {row.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4 text-sm leading-5 text-sky-950">
        The specific contracting entity, registered details and jurisdiction
        applicable to your agreement are stated in your order form or the Zoiko
        Payroll Service Terms — not on this page. This page identifies the
        publisher of these web surfaces, not a complete corporate registration
        record.
      </p>
    </SectionShell>
  );
}
