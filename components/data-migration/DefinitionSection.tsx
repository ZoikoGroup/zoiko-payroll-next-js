import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { Eyebrow } from "./Primitives";

const includes = [
  "Data discovery",
  "Cleansing",
  "Mapping",
  "Validation",
  "Reconciliation",
] as const;

const excludes = [
  "A spreadsheet upload",
  "A blind copy-paste",
  "Sharing files in the open",
] as const;

export default function DefinitionSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/data-migration/definition.png"
            alt="An implementation lead presenting payroll migration phases"
            width={513}
            height={395}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow>Definition</Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            What payroll data migration means
          </h2>
          <p className="text-base leading-7 text-slate-700">
            Migration is a controlled sequence, not a single step. Each record
            is discovered, cleansed, mapped, validated and reconciled before it
            becomes payroll of record.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50/60 p-5">
              <h3 className="text-sm font-semibold text-green-700">
                Migration includes
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-green-600"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
              <h3 className="text-sm font-semibold text-red-600">
                Migration doesn&apos;t mean
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {excludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <X
                      className="h-4 w-4 shrink-0 text-red-500"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
