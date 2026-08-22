import Reveal from "../ui/Reveal";

export default function RolesReviewSection() {
  return (
    <section className="bg-[#f5f6f8] py-16 sm:py-[70px] relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px] items-center">
        
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row gap-[32px] xl:gap-[44px] items-center w-full">
          
          {/* Text (Left) */}
          <Reveal className="flex flex-col gap-[14px] items-start w-full lg:flex-[1_0_0]">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
                07 — ROLES, REVIEW & RECORDS
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[28px] lg:text-[32px] xl:text-[36px] tracking-[-1.5px] leading-[1.2] m-0">
                Responsibility separation you<br className="hidden md:block" />
                can read in one screen
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[0.78px]">
              <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
                Nine named roles, scoped access and export permission held separately<br className="hidden xl:block" />
                from view permission. Employee-facing access is role and purpose bound.
              </p>
            </div>
          </Reveal>

          {/* Image (Right) */}
          <Reveal delay={120} className="w-full lg:w-[400px] xl:w-[500px] shrink-0">
            <div className="bg-[#eef0f4] border border-[#e3e7ec] h-[315px] xl:h-[375px] overflow-hidden relative rounded-[16px] w-full lg:w-[400px] xl:w-[500px]">
              <div className="absolute inset-0 left-[-7.8%] top-[-0.26%] w-[115%] h-[102.13%]">
                <img
                  src="http://localhost:3845/assets/f8956a4c1d1a0a0d0f53ea3ec378be22c861ea2f.png"
                  alt="Roles and permissions dashboard"
                  loading="lazy"
                  className="absolute inset-0 max-w-none object-cover size-full"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Table */}
        <Reveal delay={200} className="w-full overflow-hidden rounded-[14px] border border-[#e3e7ec] bg-white mt-[10px]">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[900px] text-left border-collapse">
              <thead className="bg-[#fafbfc]">
                <tr>
                  <th className="px-[14px] py-[12px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap w-[20%]">Role</th>
                  <th className="px-[14px] py-[12px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap w-[15%]">Scope</th>
                  <th className="px-[14px] py-[12px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap w-[25%]">Actions</th>
                  <th className="px-[14px] py-[12px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap w-[25%]">Approval authority</th>
                  <th className="px-[14px] py-[12px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap w-[15%]">Export</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Payroll Operations Admin</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Organization</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Configure, assign, escalate</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">None (separation)</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#0e7c5a] text-[11.5px]">✓ Granted</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Entity Payroll Owner</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Entity</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Readiness, inputs, escalation</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Entity gate</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#0e7c5a] text-[11.5px]">✓ Granted</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Preparer</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Payroll group</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Prepare inputs, resolve exceptions</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">None</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#4b5563] text-[11.5px]">⚿ Denied</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Reviewer</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Payroll group</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Review result and changes</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Review sign-off</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#4b5563] text-[11.5px]">⚿ Denied</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Approver</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Payroll group</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Approve, reject, request changes</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Final, version-bound</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#4b5563] text-[11.5px]">⚿ Denied</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Finance / Controller</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Cross-entity</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Reconcile, report, close</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Finance approval</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#0e7c5a] text-[11.5px]">✓ Granted</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">HR / People</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Purpose-limited</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Authorized employee changes</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">None</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#4b5563] text-[11.5px]">⚿ Denied</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Integration Admin</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Technical scope</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Connectors, mappings, retries</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">None</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#4b5563] text-[11.5px]">⚿ Denied</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Auditor / Viewer</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">Read-only, scoped</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">View records and evidence</td>
                  <td className="px-[14px] py-[12px] text-[#4b5563] text-[11.5px]">None</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#a75d06] text-[11.5px]">▲ On request</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
