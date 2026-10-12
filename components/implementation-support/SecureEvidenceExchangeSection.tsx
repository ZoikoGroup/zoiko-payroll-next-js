"use client";

import React from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

interface UploadedFile {
  name: string;
  status: "Complete" | "Scanned" | "Uploading";
}

const fileList: UploadedFile[] = [
  { name: "reconciliation-summary-DE.pdf", status: "Complete" },
  { name: "integration-test-log-v2.csv", status: "Scanned" },
  { name: "funding-confirmation.pdf", status: "Uploading" },
];

const statusBadgeStyles: Record<UploadedFile["status"], string> = {
  Complete: "bg-[#E6F4EA] text-[#137333]",
  Scanned: "bg-[#FEF7E0] text-[#B06000]",
  Uploading: "bg-[#E8F0FE] text-[#1A73E8]",
};

export default function SecureEvidenceExchangeSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid: Left Image + Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Globe Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/imp-sup/2.png"
                alt="Digital global network secure channel visual"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>SECURE EVIDENCE EXCHANGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
              A dedicated secure channel — never ordinary email
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Every requested artifact has a minimum-required list, an accepted
              format, and a visible chain from upload through validation.
            </p>
          </div>
        </div>

        {/* Upload Interface Box */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Drag & Drop Area */}
          <div className="border-2 border-dashed border-slate-200 bg-white rounded-3xl p-8 sm:p-10 text-center space-y-3 transition-colors hover:border-slate-300">
            <div className="w-12 h-12 rounded-full bg-[#E3F2FD] text-[#0A8FD0] flex items-center justify-center mx-auto">
              <Upload className="w-6 h-6" />
            </div>

            <h3 className="text-sm font-bold text-[#07243B]">
              Upload requested evidence
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-400 font-medium max-w-md mx-auto">
              Minimum required: integration test log, reconciliation summary.
              Accepted formats per case request.
            </p>
          </div>

          {/* File Upload List */}
          <div className="space-y-2.5">
            {fileList.map((file, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between gap-4 text-xs font-bold text-[#07243B] shadow-2xs"
              >
                <span className="truncate">{file.name}</span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold shrink-0 ${
                    statusBadgeStyles[file.status]
                  }`}
                >
                  {file.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Warning Alert Box */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border-l-4 border-l-[#0A8FD0] border border-slate-200/80 shadow-md">
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            <strong className="text-[#07243B] font-bold">Never submit:</strong>{" "}
            credentials, secrets, bank account numbers, tokens or unnecessary
            payroll PII through case attachments. Raw payroll migration files
            use the approved implementation data channel, not case attachments.
          </p>
        </div>
      </div>
    </section>
  );
}
