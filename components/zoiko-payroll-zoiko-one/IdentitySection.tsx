import React from "react";

interface Connection {
  source: string;
  destination: string;
  relationshipType: string;
  direction: "Inbound" | "Outbound";
  status: "Active" | "Not currently verified";
  color: "green" | "gray";
}

const connections: Connection[] = [
  {
    source: "Identity provider",
    destination: "Zoiko Payroll",
    relationshipType: "Identity context",
    direction: "Inbound",
    status: "Active",
    color: "green",
  },
  {
    source: "Workforce system",
    destination: "Zoiko Payroll",
    relationshipType: "Workforce context",
    direction: "Inbound",
    status: "Not currently verified",
    color: "gray",
  },
  {
    source: "Zoiko Payroll",
    destination: "Finance system",
    relationshipType: "Finance context",
    direction: "Outbound",
    status: "Not currently verified",
    color: "gray",
  },
  {
    source: "Zoiko Payroll",
    destination: "Approved recipient",
    relationshipType: "Reporting context",
    direction: "Outbound",
    status: "Not currently verified",
    color: "gray",
  },
];

function StatusBadge({
  status,
  color,
}: {
  status: string;
  color: "green" | "gray";
}) {
  const colorMap = {
    gray: "bg-slate-100 text-gray-600",
    green: "bg-green-100 text-green-700",
  };
  const dotMap = {
    gray: "bg-gray-600",
    green: "bg-green-700",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[20px] px-2.5 py-[5px] text-xs font-bold leading-4 ${colorMap[color] || colorMap.gray}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-[3px] ${dotMap[color] || dotMap.gray}`}
      />
      {status}
    </span>
  );
}

export default function IdentityPathwaysSection() {
  return (
    <section className="border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col items-start">
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-bold uppercase leading-4 tracking-wider text-sky-600">
              / Identity, data &amp; workflow pathways
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-extrabold leading-9 text-sky-950">
            Authentication is not authorization.
          </h2>

          {/* Comparison Cards */}
          <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {/* Warning Card (Rose) */}
            <div className="flex flex-col gap-2 rounded-2xl bg-rose-100 p-5 outline outline-1 outline-offset-[-1px] outline-rose-200 shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16),0px_1px_2px_0px_rgba(10,48,80,0.05)]">
              <p className="text-xs font-extrabold uppercase leading-5 tracking-wide text-rose-700">
                ✕ Shared identity does not mean
              </p>
              <p className="text-xs font-normal leading-5 text-rose-700">
                Shared or single sign-on access does not imply shared payroll
                authorization, shared data access, or bypassed payroll controls.
              </p>
            </div>

            {/* Success Card (Green / White) */}
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16),0px_1px_2px_0px_rgba(10,48,80,0.05)]">
              <p className="text-xs font-extrabold uppercase leading-5 tracking-wide text-green-700">
                ✓ What a verified connection shows
              </p>
              <p className="text-xs font-normal leading-5 text-green-700">
                Source, destination, relationship type, direction and current
                active state — for every connection, individually.
              </p>
            </div>
          </div>

          {/* Connections Table */}
          <div className="mt-6 w-full overflow-x-auto rounded-xl">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    Source
                  </th>
                  <th className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    Destination
                  </th>
                  <th className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    Relationship type
                  </th>
                  <th className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    Direction
                  </th>
                  <th className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    State
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {connections.map((conn, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-3 py-3.5 text-xs text-gray-700">
                      {conn.source}
                    </td>
                    <td className="px-3 py-3.5 text-xs text-gray-700">
                      {conn.destination}
                    </td>
                    <td className="px-3 py-3.5 text-xs text-gray-700">
                      {conn.relationshipType}
                    </td>
                    <td className="px-3 py-3.5 text-xs text-gray-700">
                      {conn.direction}
                    </td>
                    <td className="px-3 py-3.5">
                      <StatusBadge status={conn.status} color={conn.color} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <p className="mt-3 text-xs font-normal leading-4 text-gray-400">
            Only active, scoped relationship records render here.
            Product-specific mechanics are documented in Product &gt; Zoiko One
            Integration.
          </p>
        </div>
      </div>
    </section>
  );
}