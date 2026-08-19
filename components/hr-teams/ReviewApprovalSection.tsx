import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const steps = ["Submitted", "Validated", "Review", "Approved", "Applied"];
/** Review is where the run currently sits — the only filled step. */
const activeStep = 2;

const records: {
  period: string;
  type: string;
  version: string;
  status: string;
  tone: ChipTone;
}[] = [
  { period: "Aug 2026", type: "Payslip", version: "v3", status: "Published — current", tone: "ok" },
  { period: "Jul 2026", type: "Payslip", version: "v2", status: "Superseded", tone: "fail" },
  { period: "Jul 2026", type: "Payslip", version: "v1", status: "Corrected", tone: "warn" },
  {
    period: "Jun 2026",
    type: "Payroll history",
    version: "v1",
    status: "Published — current",
    tone: "ok",
  },
];

export default function ReviewApprovalSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Review & approval"
            title="Authority stays with payroll roles."
            description="HR may supply context. Approval rights exist only where configured."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ol className="flex flex-wrap items-start justify-center gap-x-10 gap-y-5 sm:gap-x-16">
            {steps.map((step, index) => (
              <li key={step} className="flex flex-col items-center gap-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold leading-5 ${
                    index === activeStep
                      ? "bg-sky-700 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-xs font-bold leading-5 text-sky-950">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <div className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-4">
            <p className="text-xs leading-5 text-yellow-900">
              <span className="font-bold">Material change after review:</span> prior approved
              state is potentially stale. Revalidation required before reapproval.
            </p>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Any action altering a completed payroll outcome discloses impact before confirmation.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/hr-teams/review-approval.png"
              alt="A payroll reviewer confirming an approval decision by phone"
              className="aspect-[608/342] w-full rounded-xl object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm font-bold leading-5 text-sky-950">
              Employee payroll records — E-10432
            </p>

            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-lg border-collapse text-left">
                <thead>
                  <tr>
                    {["Period", "Type", "Version", "Status"].map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-[0.625rem] font-bold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, index) => {
                    const cellBorder =
                      index < records.length - 1 ? "border-b border-slate-100" : "";
                    return (
                      <tr key={`${record.period}-${record.version}`}>
                        <td className={`px-4 py-3 text-xs leading-5 text-sky-950 ${cellBorder}`}>
                          {record.period}
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-gray-700 ${cellBorder}`}>
                          {record.type}
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-gray-700 ${cellBorder}`}>
                          {record.version}
                        </td>
                        <td className={`px-4 py-2.5 ${cellBorder}`}>
                          <StatusChip tone={record.tone}>{record.status}</StatusChip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Correction history preserves the relationship between prior and current versions
              and the reason for the state.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
