"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignInSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password });
  };

  return (
    <section className="w-full bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-6 lg:p-12 font-sans antialiased">
      {/* Outer Wrapper: holds the outer rounded corners and background image */}
      <div className="w-full max-w-5xl max-h-150 rounded-[28px] overflow-hidden shadow-2xl bg-[#1E293B] grid grid-cols-1 md:grid-cols-12 min-h-[580px] relative">
        
        {/* Left Side: Background Image */}
        <div className="relative md:col-span-6 hidden md:block">
          <img
            src="/images/auth/left.png"
            alt="Colleagues collaborating on laptop"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right Side: Floating Form Card overlapping top of the image */}
        <div className="relative z-10 md:col-span-6 bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between md:-ml-8 rounded-[24px] md:rounded-[28px] shadow-2xl border border-gray-100 my-auto md:my-0">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Sign in to Zoiko Payroll.
              </h2>
              <p className="text-sm text-[#4D5E72] leading-relaxed">
                Securely access your payroll workspace, payments, and workforce records.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-100 flex gap-8 pt-2">
              <Link
                href="/sign-in"
                className="pb-3 text-xs sm:text-sm font-medium text-[#132C44] border-b-2 border-[#132C44] transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="pb-3 text-xs sm:text-sm font-medium text-[#B5B5B5] hover:text-[#94A3B8] transition-all"
              >
                Register
              </Link>
              <Link
                href="/reset-password"
                className="pb-3 text-xs sm:text-sm font-medium text-[#B5B5B5] hover:text-[#94A3B8] transition-all"
              >
                Reset Password
              </Link>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-5 pt-2">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#94A3B8] block">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-[#0F172A] placeholder-[#4D5E72] focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#94A3B8] block">
                  Password <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-[#0F172A] placeholder-[#4D5E72] focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end pt-0.5">
                <Link
                  href="/auth/reset-password"
                  className="text-xs font-medium text-[#A0AEC0] hover:text-[#0284C7] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0A78C2D9] via-[#0A78C2EB] to-[#082F49D9] hover:from-[#247ab1] hover:to-[#185485] text-white font-medium text-xs sm:text-sm transition-all shadow-md active:scale-[0.99] mt-3"
              >
                Login
              </button>

              {/* Redirect Footer */}
              <div className="text-center pt-3">
                <p className="text-xs text-[#94A3B8]">
                  Don't have an account?{" "}
                  <Link
                    href="/auth/register"
                    className="font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}