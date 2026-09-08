import React from "react";
import Link from "next/link";
import { Eyebrow } from "./Primitives";

const reasons = [
  {
    number: "01",
    title: "Run payroll faster",
    description:
      "Prebuilt pay calendars, approval flows, and calculation logic so each cycle takes less manual review.",
  },
  {
    number: "02",
    title: "Stay compliant by design",
    description:
      "Tax, statutory deduction, and filing logic that updates with local regulation, not after it.",
  },
  {
    number: "03",
    title: "See every number clearly",
    description:
      "A full audit trail from hours worked to funds paid, so finance and HR always agree on the numbers.",
  },
] as const;

const countries = [
  "United States",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Singapore",
  "India",
  "Other",
] as const;

const roles = [
  "Payroll",
  "HR",
  "Finance",
  "IT / Security",
  "Operations",
  "Executive",
  "Other",
] as const;

const interests = [
  "Core payroll processing",
  "Multi-country payroll",
  "Compliance & filing",
  "Implementation & migration",
  "Integrations",
  "Something else",
] as const;

const labelClass = "flex items-center gap-1.5 text-sm font-bold text-slate-900";
const fieldClass =
  "w-full rounded-[10px] border border-neutral-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-gray-400 focus:border-sky-600 focus:outline-none";

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[999px] border border-neutral-200 bg-zinc-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-gray-400">
      {children}
    </span>
  );
}

export default function DemoFormSection() {
  return (
    <section
      id="request-a-demo"
      className="px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[20px] shadow-[0px_30px_60px_-20px_rgba(11,41,66,0.35)]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr]">
          {/* Left: why teams choose Zoiko */}
          <div className="bg-[#0b2942] px-8 py-12 sm:px-11 sm:py-14">
            <Eyebrow tone="blue">Why teams choose zoiko payroll</Eyebrow>
            <h1 className="pt-3.5 text-2xl font-extrabold leading-9 text-white sm:text-3xl">
              Payroll that stays accurate as you grow
            </h1>
            <p className="pb-7 pt-4 text-base leading-6 text-white/70">
              A single payroll system for calculating, approving, and paying
              your people &mdash; built to stay correct as headcount, entities,
              and jurisdictions change.
            </p>

            <ul>
              {reasons.map((reason) => (
                <li
                  key={reason.number}
                  className="flex items-start gap-4 border-t border-white/10 py-5"
                >
                  <span className="pt-0.5 text-xs font-extrabold tracking-wide text-blue-400">
                    {reason.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-bold text-white">
                      {reason.title}
                    </h2>
                    <p className="text-sm leading-6 text-white/70">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: request form */}
          <div className="bg-white px-6 py-10 sm:px-12 sm:py-12">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Request a demo
            </h2>
            <p className="max-w-md pt-2 text-sm leading-6 text-gray-500">
              Tell us a little about your team and current payroll setup, and
              we&apos;ll route you to the right specialist.
            </p>

            {/*
              Static form: the markup, labels and native validation are real,
              but nothing is submitted. Add an `action` (or a client-side
              handler) here when a demo-request endpoint exists.
            */}
            <form className="pt-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first-name" className={labelClass}>
                    First name <span className="text-orange-700">*</span>
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    required
                    placeholder="Amara"
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="last-name" className={labelClass}>
                    Last name <span className="text-orange-700">*</span>
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    required
                    placeholder="Boateng"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <label htmlFor="work-email" className={labelClass}>
                  Work email <span className="text-orange-700">*</span>
                </label>
                <input
                  id="work-email"
                  name="workEmail"
                  type="email"
                  required
                  placeholder="amara@company.com"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <label htmlFor="company" className={labelClass}>
                  Company <span className="text-orange-700">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  placeholder="Your company name"
                  className={fieldClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                    <label htmlFor="country" className={labelClass}>
                      Country / region
                    </label>
                    <Hint>Recommended</Hint>
                  </div>
                  <select id="country" name="country" className={fieldClass}>
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                    <label htmlFor="role" className={labelClass}>
                      Your role
                    </label>
                    <Hint>Recommended</Hint>
                  </div>
                  <select id="role" name="role" className={fieldClass}>
                    <option value="">Select your role</option>
                    {roles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                  <label htmlFor="interest" className={labelClass}>
                    What are you interested in?
                  </label>
                  <Hint>Recommended</Hint>
                </div>
                <select id="interest" name="interest" className={fieldClass}>
                  <option value="">Select an area</option>
                  {interests.map((interest) => (
                    <option key={interest}>{interest}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                  <label htmlFor="context" className={labelClass}>
                    Additional context
                  </label>
                  <Hint>Optional</Hint>
                </div>
                <textarea
                  id="context"
                  name="context"
                  rows={4}
                  placeholder="Tell us about your current payroll setup, headcount, or timeline."
                  className={`${fieldClass} min-h-24 resize-y`}
                />
              </div>

              <div className="flex items-start gap-2.5 pb-6 pt-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded-xs border border-neutral-500 accent-sky-700"
                />
                <label
                  htmlFor="consent"
                  className="text-xs font-medium leading-5 text-gray-500"
                >
                  I agree that Zoiko Payroll may contact me about my request.
                  See the{" "}
                  <Link
                    href="/legal/privacy-notice"
                    className="font-bold text-sky-700 hover:text-sky-800"
                  >
                    Privacy Notice
                  </Link>
                  .
                </label>
              </div>

              {/* type="button" while static, so clicking cannot navigate or
                  reload the page. Switch to type="submit" once wired. */}
              <button
                type="button"
                className="w-full cursor-pointer rounded-[999px] bg-sky-700 px-6 py-4 text-base font-bold text-white shadow-[0px_4px_24px_0px_rgba(22,104,168,0.28)] transition-colors hover:bg-sky-800"
              >
                Book a Demo
              </button>

              <p className="pt-4 text-center text-xs leading-5 text-gray-400">
                Your information is used only to route and respond to this
                request. Read our{" "}
                <Link
                  href="/legal/privacy-notice"
                  className="font-semibold text-sky-700 hover:text-sky-800"
                >
                  Privacy Notice
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
