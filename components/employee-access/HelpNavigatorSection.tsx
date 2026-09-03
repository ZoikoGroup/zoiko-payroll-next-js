"use client";

import React, { useState } from "react";

type SignInStatus =
  | "No — I can't sign in"
  | "Yes, but something's wrong"
  | "I've never signed in";

type NeedType =
  | "Payslip"
  | "Tax document"
  | "Account access"
  | "Personal details"
  | "Pay issue";

type EmployeeStatus = "Current employee" | "Former employee";

const signInOptions: SignInStatus[] = [
  "No — I can't sign in",
  "Yes, but something's wrong",
  "I've never signed in",
];

const needOptions: NeedType[] = [
  "Payslip",
  "Tax document",
  "Account access",
  "Personal details",
  "Pay issue",
];

const employeeOptions: EmployeeStatus[] = [
  "Current employee",
  "Former employee",
];

export default function HelpNavigatorSection() {
  const [selectedSignIn, setSelectedSignIn] = useState<SignInStatus>(
    "No — I can't sign in",
  );
  const [selectedNeed, setSelectedNeed] = useState<NeedType>("Account access");
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeStatus>("Current employee");

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>HELP NAVIGATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Set three answers. Get one recommended path
          </h2>
        </div>

        {/* Navigator Card */}
        <div className="bg-[#F9FAFB63] rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Column 1: Can you sign in? */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                CAN YOU SIGN IN?
              </h3>
              <div className="flex flex-col space-y-2.5">
                {signInOptions.map((option) => {
                  const isSelected = selectedSignIn === option;
                  return (
                    <button
                      key={option}
                      onClick={() => setSelectedSignIn(option)}
                      className={`w-full text-left px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                        isSelected
                          ? "bg-[#EBF6FC] text-[#0A8FD0] border-[#0A8FD0]/40 shadow-2xs"
                          : "bg-transparent text-[#07243B] border-transparent hover:bg-slate-50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: What do you need? */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                WHAT DO YOU NEED?
              </h3>
              <div className="flex flex-col space-y-2.5">
                {needOptions.map((option) => {
                  const isSelected = selectedNeed === option;
                  return (
                    <button
                      key={option}
                      onClick={() => setSelectedNeed(option)}
                      className={`w-full text-left px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                        isSelected
                          ? "bg-[#EBF6FC] text-[#0A8FD0] border-[#0A8FD0]/40 shadow-2xs"
                          : "bg-transparent text-[#07243B] border-transparent hover:bg-slate-50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Current or former employee? */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                CURRENT OR FORMER EMPLOYEE?
              </h3>
              <div className="flex flex-col space-y-2.5">
                {employeeOptions.map((option) => {
                  const isSelected = selectedEmployee === option;
                  return (
                    <button
                      key={option}
                      onClick={() => setSelectedEmployee(option)}
                      className={`w-full text-left px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                        isSelected
                          ? "bg-[#EBF6FC] text-[#0A8FD0] border-[#0A8FD0]/40 shadow-2xs"
                          : "bg-transparent text-[#07243B] border-transparent hover:bg-slate-50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
