"use client";

import React from "react";
import Image from "next/image";
import { Lock, HelpCircle, Mail, Clock, ArrowRight } from "lucide-react";

interface SignInOption {
  icon: React.ReactNode;
  title: string;
  description: string;
  supportLink: string;
}

const signInOptions: SignInOption[] = [
  {
    icon: <Lock className="w-5 h-5 text-[#8FD0F2]" />,
    title: "Zoiko Payroll credentials",
    description:
      "Sign in with the email and password you set up directly with Zoiko Payroll.",
    supportLink: "#",
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-[#8FD0F2]" />,
    title: "Employer SSO",
    description:
      "Sign in through your employer's identity provider — no separate Zoiko password.",
    supportLink: "#",
  },
  {
    icon: <Mail className="w-5 h-5 text-[#8FD0F2]" />,
    title: "Invitation / activation",
    description:
      "You received an email invitation and haven't activated your account yet.",
    supportLink: "#",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#8FD0F2]" />,
    title: "Not sure",
    description:
      "We'll help you safely find your path without exposing account details.",
    supportLink: "#",
  },
];

export default function FindSignInPathSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/employee-access/bg1.png"
          alt="Find your sign-in path background"
          fill
          className="object-cover object-center opacity-25 mix-blend-overlay"
          priority
        />
        {/* Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0B2540]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
            <span>/</span>
            <span>FIND YOUR SIGN-IN PATH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            Not sure how you normally sign in? Start here
          </h2>
        </div>

        {/* Options List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {signInOptions.map((option, index) => (
            <div
              key={index}
              className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors rounded-lg px-2"
            >
              <div className="flex items-start gap-4">
                {/* Square Icon Container */}
                <div className="w-10 h-10 text-[#8FD0F2] rounded-xl bg-[#E1EEF91A] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  {option.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {option.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <a
                href={option.supportLink}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8FD0F2] hover:text-white transition-colors shrink-0 self-end sm:self-center pt-2 sm:pt-0"
              >
                <span>Contact support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Subtext Footer */}
        <div className="text-center">
          <p className="text-xs text-slate-400 font-medium">
            Approved mobile sign-in is available where your employer has enabled
            it.
          </p>
        </div>
      </div>
    </section>
  );
}
