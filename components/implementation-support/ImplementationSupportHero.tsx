"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function ImplementationSupportHero() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>IMPLEMENTATION SUPPORT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#07243B] leading-tight">
            Keep your payroll implementation moving without weakening the
            controls that make it safe
          </h1>

          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Get stage-aware help with configuration, migration, integrations,
            testing, parallel validation, cutover and go-live.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#388FCB] to-[#134870] hover:from-[#2B7BB5] hover:to-[#0F395A] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all active:scale-[0.99]">
              View implementation guidance
            </button>
            <button className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[#07243B] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
              <span>Check System Status</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Implementation Command Snapshot Dashboard Mockup */}
        <div className="bg-[#0A2E4B] rounded-2xl p-5 sm:p-6 shadow-2xl text-white border border-slate-700/50 space-y-5">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-xs bg-[#38BDF8]" />
              <span>Implementation Command Snapshot</span>
            </div>
            <span className="bg-[#FFFFFF0F] text-slate-300 text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10">
              Project: EU Holdings Rollout
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#FFFFFF0F] p-3.5 sm:p-4 rounded-xl border border-white/10 space-y-1">
              <div className="text-lg sm:text-xl font-bold text-white">
                Testing
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                PHASE
              </div>
            </div>

            <div className="bg-[#FFFFFF0F] p-3.5 sm:p-4 rounded-xl border border-white/10 space-y-1">
              <div className="text-lg sm:text-xl font-bold text-white">
                Wave 2
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                WAVE
              </div>
            </div>

            <div className="bg-[#FFFFFF0F] p-3.5 sm:p-4 rounded-xl border border-white/10 space-y-1">
              <div className="text-lg sm:text-xl font-bold text-white">
                Sep 5
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                NEXT GATE
              </div>
            </div>

            <div className="bg-[#FFFFFF0F] p-3.5 sm:p-4 rounded-xl border border-white/10 space-y-1">
              <div className="text-lg sm:text-xl font-bold text-white">2</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                OPEN BLOCKERS
              </div>
            </div>
          </div>

          {/* Item List */}
          <div className="space-y-2.5 pt-1">
            {/* Task Row 1 - In Progress */}
            <div className="bg-[#FFFFFF0F] hover:bg-[#FFFFFF1A] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-4 transition-colors">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-white">
                  Integration test evidence — Payroll ↔ Finance
                </div>
                <div className="text-[11px] text-slate-300 font-medium">
                  Owner: R. Tanaka, Zoiko Implementation
                </div>
              </div>
              <span className="bg-[#E6B4642E] text-[#F0CF94] border border-[#F0CF94]/30 text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0">
                In progress
              </span>
            </div>

            {/* Task Row 2 - Blocked */}
            <div className="bg-[#FFFFFF0F] hover:bg-[#FFFFFF1A] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-4 transition-colors">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-white">
                  Opening balance reconciliation — DE GmbH
                </div>
                <div className="text-[11px] text-slate-300 font-medium">
                  Owner: C. Alvarez, Customer Finance
                </div>
              </div>
              <span className="bg-[#E6786E2E] text-[#F0A49D] border border-[#F0A49D]/30 text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0">
                Blocked
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
