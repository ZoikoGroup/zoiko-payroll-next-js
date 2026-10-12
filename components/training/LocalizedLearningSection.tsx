import React from "react";
import Image from "next/image";
import { SectionHeading } from "./Primitives";

const countries = [
  {
    name: "United States",
    detail: "Local calendar & workflows",
    languages: "English",
  },
  {
    name: "United Kingdom",
    detail: "Statutory context included",
    languages: "English",
  },
  {
    name: "Germany",
    detail: "Local workflows overlay",
    languages: "English, German",
  },
  { name: "India", detail: "Local payroll calendar", languages: "English" },
  {
    name: "Singapore",
    detail: "Statutory context included",
    languages: "English",
  },
] as const;

export default function LocalizedLearningSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Country & jurisdiction learning"
          title={
            <>
              Localized learning for every
              <br className="hidden sm:block" /> market.
            </>
          }
        />

        <div className="flex w-full flex-col gap-6">
          <div className="flex justify-center rounded-2xl bg-slate-100 px-4 py-6">
            <Image
              src="/images/training/world-map.webp"
              alt="World map highlighting the markets with localized payroll learning"
              width={760}
              height={247}
              className="h-auto w-full max-w-3xl object-contain"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5"
              >
                <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  {country.name}
                </span>
                <span className="text-xs text-slate-500">{country.detail}</span>
                <span className="text-xs text-slate-500">
                  {country.languages}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
