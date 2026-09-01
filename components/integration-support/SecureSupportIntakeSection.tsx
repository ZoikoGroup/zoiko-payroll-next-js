"use client";

import React, { useState } from "react";
import { Lock, UploadCloud } from "lucide-react";

export default function SecureSupportIntakeSection() {
  const [formData, setFormData] = useState({
    existingCustomer: "Yes",
    workEmail: "",
    companyAccount: "Acme GmbH",
    environment: "Production",
    area: "Finance / ERP",
    issueType: "Delivery — partial failure",
    businessImpact: "",
    affectedScope: "",
    safeIds: "corr-88213-04",
    shortDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>SECURE SUPPORT INTAKE</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Controlled fields. Minimal free text. No secrets.
          </h2>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden p-6 sm:p-10 space-y-8">
          {/* Top Red Security Alert Banner */}
          <div className="bg-[#FBE8E8] border border-[#F3C9C9] rounded-xl p-4 flex items-center gap-3 text-[12.5px] text-[#B23B3B]">
            <Lock className="w-3 h-3 text-[#B23B3B] shrink-0" />
            <span>
              This form blocks and diverts likely secrets or high-risk
              financial/security data automatically.
            </span>
          </div>

          {/* Form Grid */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Existing Customer? */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Existing customer?
                </label>
                <select
                  name="existingCustomer"
                  value={formData.existingCustomer}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Work email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Work email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="you@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                />
              </div>

              {/* Company / account */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Company / account
                </label>
                <input
                  type="text"
                  name="companyAccount"
                  value={formData.companyAccount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                />
              </div>

              {/* Environment */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Environment
                </label>
                <select
                  name="environment"
                  value={formData.environment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                >
                  <option value="Production">Production</option>
                  <option value="Sandbox">Sandbox</option>
                  <option value="Staging">Staging</option>
                </select>
              </div>

              {/* Area */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Area</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                />
              </div>

              {/* Issue type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Issue type
                </label>
                <input
                  type="text"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                />
              </div>

              {/* Business impact */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Business impact
                </label>
                <input
                  type="text"
                  name="businessImpact"
                  placeholder="e.g., payroll-cycle risk"
                  value={formData.businessImpact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                />
              </div>

              {/* Affected scope */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Affected scope
                </label>
                <input
                  type="text"
                  name="affectedScope"
                  placeholder="e.g., 4 records, DE-01"
                  value={formData.affectedScope}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
                />
              </div>
            </div>

            {/* Safe IDs (full width) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Safe IDs (correlation, batch, mapping version)
              </label>
              <input
                type="text"
                name="safeIds"
                value={formData.safeIds}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
              />
            </div>

            {/* Short description & what changed */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Short description & what changed
              </label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Describe without including secrets or full payloads"
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8FD0]"
              />
            </div>

            {/* Secure attachment dropzone */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Secure attachment
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-slate-300 transition-colors cursor-pointer flex flex-col items-center justify-center gap-2">
                <UploadCloud className="w-6 h-6 text-slate-400" />
                <p className="text-xs text-slate-400">
                  Drop a redacted screenshot or log excerpt — never private
                  keys, full bank files or raw payroll exports.
                </p>
              </div>
            </div>

            {/* Status Pills Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#E6F4EA] text-[#137333]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                Valid
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#FDE8E8] text-red-600">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                Guardrail-blocked: possible secret detected
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#FEF7E0] text-[#B06000]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B06000]" />
                Submitting
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
                Success — case created
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0F6FAE] to-[#4FA3D1] hover:bg-[#087BB5] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Create support case
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
