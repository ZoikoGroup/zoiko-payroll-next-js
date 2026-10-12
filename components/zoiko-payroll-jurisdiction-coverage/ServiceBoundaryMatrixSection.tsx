import Reveal from "@/components/ui/Reveal";

interface MatrixRow {
  dimension: string;
  included: string;
  limitation: string;
}

const matrixRows: MatrixRow[] = [
  {
    dimension: "Payroll service scope",
    included: "Core processing, approvals, records",
    limitation: "Not every feature tier is implied",
  },
  {
    dimension: "Local requirements content",
    included: "Authoritative guidance where published",
    limitation: "Never a compliance guarantee",
  },
  {
    dimension: "Multi-entity capability",
    included: "Assessed as a separate dimension",
    limitation: "Not implied by single-entity availability",
  },
  {
    dimension: "Reporting scope",
    included: "Approved jurisdiction-level reporting",
    limitation: "Not every report type is tracked",
  },
  {
    dimension: "Integration scope",
    included: "Standard connectors, where applicable",
    limitation: "Registry approval only",
  },
  {
    dimension: "Implementation readiness",
    included: "Current planning status, if approved",
    limitation: "Not a guaranteed go-live date",
  },
];

export default function ServiceBoundaryMatrixSection() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / SERVICE-BOUNDARY MATRIX
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Included, limited, and not implied — shown together.
            </h2>
          </div>
        </Reveal>

        {/* Table Container */}
        <Reveal delay={100}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr>
                  <th className="bg-slate-50 px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:w-1/4">
                    Dimension
                  </th>
                  <th className="bg-[#091E2E] px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-wider text-white sm:w-3/8">
                    INCLUDED SCOPE
                  </th>
                  <th className="bg-[#0A78C2] px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-wider text-white sm:w-3/8">
                    LIMITATION / NOT IMPLIED
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {matrixRows.map((row) => (
                  <tr key={row.dimension} className="transition-colors hover:bg-slate-50/50">
                    <td className="px-5 py-3.5 font-bold text-[#082F49]">
                      {row.dimension}
                    </td>
                    <td className="px-5 py-3.5 text-slate-700">
                      {row.included}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500">
                      {row.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
