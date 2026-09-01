"use client";

import React, { useState } from "react";

interface DeliveryRow {
  id: string;
  event: string;
  subscription: string;
  state: "DELIVERED" | "FAILED_FINAL" | "RETRY_SCHEDULED";
  attempts: number;
  attemptDetail: {
    failureCategory: string;
    responseClass: string;
    lastAttempt: string;
    replayEligible: string;
    correlationId: string;
  };
}

const deliveryData: DeliveryRow[] = [
  {
    id: "1",
    event: "payroll_run.completed",
    subscription: "sub_00214",
    state: "DELIVERED",
    attempts: 1,
    attemptDetail: {
      failureCategory: "None",
      responseClass: "200 OK",
      lastAttempt: "09:30 UTC",
      replayEligible: "Yes",
      correlationId: "corr_880",
    },
  },
  {
    id: "2",
    event: "integration_sync.failed",
    subscription: "sub_00218",
    state: "FAILED_FINAL",
    attempts: 5,
    attemptDetail: {
      failureCategory: "Timeout",
      responseClass: "—",
      lastAttempt: "09:41 UTC",
      replayEligible: "Yes",
      correlationId: "corr_881",
    },
  },
  {
    id: "3",
    event: "payroll_approval.requested",
    subscription: "sub_00214",
    state: "RETRY_SCHEDULED",
    attempts: 2,
    attemptDetail: {
      failureCategory: "Server Error",
      responseClass: "503 Service Unavailable",
      lastAttempt: "09:38 UTC",
      replayEligible: "No",
      correlationId: "corr_882",
    },
  },
];

export default function ReplayFailureRecoverySection() {
  const [selectedRowId, setSelectedRowId] = useState<string>("2");

  const selectedData =
    deliveryData.find((item) => item.id === selectedRowId) || deliveryData[1];

  const getStateBadgeStyle = (state: DeliveryRow["state"]) => {
    switch (state) {
      case "DELIVERED":
        return "bg-[#E6F4EA] text-[#137333]";
      case "FAILED_FINAL":
        return "bg-[#FDE8E8] text-red-600";
      case "RETRY_SCHEDULED":
        return "bg-[#FEF7E0] text-[#B06000]";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStateDotStyle = (state: DeliveryRow["state"]) => {
    switch (state) {
      case "DELIVERED":
        return "bg-[#137333]";
      case "FAILED_FINAL":
        return "bg-red-600";
      case "RETRY_SCHEDULED":
        return "bg-[#B06000]";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>REPLAY + FAILURE RECOVERY + DELIVERY MONITORING</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Duplicate-processing risk is made explicit before replay
          </h2>
        </div>

        {/* Dashboard split-card view */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Table (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-100 overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-3">EVENT</th>
                  <th className="pb-3 px-3">SUBSCRIPTION</th>
                  <th className="pb-3 px-3">STATE</th>
                  <th className="pb-3 px-3 text-right">ATTEMPTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {deliveryData.map((row) => {
                  const isSelected = row.id === selectedRowId;
                  return (
                    <tr
                      key={row.id}
                      onClick={() => setSelectedRowId(row.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? "bg-slate-50" : "hover:bg-slate-50/50"
                      }`}
                    >
                      <td className="py-4 px-3 font-medium text-slate-800">
                        {row.event}
                      </td>
                      <td className="py-4 px-3 text-slate-500">
                        {row.subscription}
                      </td>
                      <td className="py-4 px-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] ${getStateBadgeStyle(
                            row.state,
                          )}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${getStateDotStyle(
                              row.state,
                            )}`}
                          />
                          {row.state}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-right text-slate-600">
                        {row.attempts}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Right Panel: Attempt Detail (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              ATTEMPT DETAIL
            </h3>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-3 flex items-center justify-between">
                <span className="text-slate-500">Failure category</span>
                <span className="font-mono font-medium text-slate-800">
                  {selectedData.attemptDetail.failureCategory}
                </span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <span className="text-slate-500">Response class</span>
                <span className="font-mono text-slate-700">
                  {selectedData.attemptDetail.responseClass}
                </span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <span className="text-slate-500">Last attempt</span>
                <span className="font-mono text-slate-700">
                  {selectedData.attemptDetail.lastAttempt}
                </span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <span className="text-slate-500">Replay eligible</span>
                <span className="font-mono font-medium text-slate-800">
                  {selectedData.attemptDetail.replayEligible}
                </span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <span className="text-slate-500">Correlation ID</span>
                <span className="font-mono text-slate-700">
                  {selectedData.attemptDetail.correlationId}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
