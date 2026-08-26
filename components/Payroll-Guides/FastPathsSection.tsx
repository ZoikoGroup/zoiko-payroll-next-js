import React from 'react';

export default function FastPathsSection() {
  const tableData = [
    {
      question: '"How do I configure/use this in Zoiko Payroll?"',
      destination: 'Product Documentation',
      behavior: 'No demo CTA interposed',
    },
    {
      question: '"Something is not working"',
      destination: 'Help Center',
      behavior: 'Support first',
    },
    {
      question: '"Is the service down?"',
      destination: 'System Status',
      behavior: 'Status first',
    },
    {
      question: '"What changed?"',
      destination: 'Release Notes',
      behavior: 'Release evidence first',
    },
    {
      question: '"I want to improve our process"',
      destination: 'Relevant guide + Product Documentation',
      behavior: 'Optional adoption links; no forced sales',
    },
    {
      question: '"We are expanding/migrating"',
      destination: 'Implementation / Global Payroll',
      behavior: 'Demo contextual after scope guidance',
    },
    {
      question: '"We need security/procurement evidence"',
      destination: 'Security and Trust',
      behavior: 'Sales only where real procurement help is needed',
    },
  ];

  return (
    <section className="w-full bg-[#E9F0F8] border-t border-slate-200 py-16 px-6 lg:px-12 font-sans text-[#0A2E4B]">
      <div className="max-w-[1136px] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs inline-block" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0]">
              Existing-customer fast paths
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#0A2E4B]">
            Get to the operational destination — no forced <br className="hidden sm:inline" />
            sales detour.
          </h2>
        </div>

        {/* Feature Banner Image */}
        <div className="w-full h-40 rounded-2xl overflow-hidden mb-8 shadow-sm">
          <img
            src="/images/Payroll-Guides/Support specialist.png"
            alt="Operational fast path header banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fast-Paths Table Card */}
        <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#E9F0F8] text-xs font-bold uppercase tracking-wider text-[#0A2E4B]">
                <th className="py-3.5 px-6 w-1/3">What you&apos;re asking</th>
                <th className="py-3.5 px-6 w-1/3">Preferred destination</th>
                <th className="py-3.5 px-6 w-1/3">Commercial behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-6 text-sm text-[#0A2E4B] font-normal">
                    {row.question}
                  </td>
                  <td className="py-3.5 px-6 text-sm text-[#0A2E4B] font-normal">
                    {row.destination}
                  </td>
                  <td className="py-3.5 px-6 text-sm text-[#0A8FD0] font-bold">
                    {row.behavior}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
