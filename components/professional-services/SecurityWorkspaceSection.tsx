import React from "react";
import { Lock, User, FileText, Download, Settings, BookOpen } from "lucide-react";
import { SectionHeading } from "./Primitives";

const controls = [
  {
    icon: Lock,
    title: "Secure workspace",
    description: "A dedicated, access-controlled project environment.",
  },
  {
    icon: User,
    title: "Role-based access",
    description: "Only named, authorized people can view project data.",
  },
  {
    icon: FileText,
    title: "Audit logs",
    description: "Every material action and decision is recorded.",
  },
  {
    icon: Download,
    title: "Secure file exchange",
    description: "Controlled transfer of sensitive payroll data.",
  },
  {
    icon: Settings,
    title: "Privacy controls",
    description: "Data handled per applicable retention rules.",
  },
  {
    icon: BookOpen,
    title: "Evidence repository",
    description: "A single source of truth for decisions and sign-offs.",
  },
] as const;

export default function SecurityWorkspaceSection() {
  return (
    <section className="bg-[#0d2340] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          dark
          eyebrow="Security & project workspace"
          title="Every engagement runs in a controlled workspace."
          body="Project work happens behind the same access, audit, and data protection standards as the platform itself."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-5 w-5 text-blue-200" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
