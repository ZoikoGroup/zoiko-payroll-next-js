import React from "react";
import Image from "next/image";
import { Eyebrow } from "./Primitives";

const isTraining = [
  "Task-based capability building",
  "Practice with safe payroll data",
  "Knowledge + assessment + reinforcement",
  "Connected to implementation readiness",
] as const;

const isNotTraining = [
  "A generic product demo",
  "Learning on production payroll",
  "Video completion as competency",
  "A replacement for Change Management",
] as const;

export default function WhatTrainingMeansSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/training/training-session.webp"
            alt="A trainer leading a payroll capability session"
            width={482}
            height={418}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow>What training means</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Structured capability, not
            <br className="hidden sm:block" /> a video library.
          </h2>
          <p className="text-base leading-7 text-slate-500">
            Training combines role learning, guided practice, and assessment —
            connected directly to implementation readiness.
          </p>

          <div className="grid grid-cols-1 gap-5 pt-1 sm:grid-cols-2">
            <div className="flex flex-col gap-2.5 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-green-700">Training is</h3>
              <ul className="flex list-disc flex-col gap-2 pl-4">
                {isTraining.map((item) => (
                  <li key={item} className="text-xs text-slate-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2.5 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-slate-500">
                Training is not
              </h3>
              <ul className="flex list-disc flex-col gap-2 pl-4">
                {isNotTraining.map((item) => (
                  <li key={item} className="text-xs text-slate-500">
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
