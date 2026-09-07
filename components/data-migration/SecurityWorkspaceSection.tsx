import React from "react";
import Image from "next/image";
import { Cloud, KeyRound, Lock, ClipboardCheck, Users, ScanLine } from "lucide-react";
import { SectionHeading } from "./Primitives";

const controls = [
  {
    icon: Cloud,
    title: "Encrypted cloud",
    description: "Data encrypted in transit and at rest throughout migration.",
  },
  {
    icon: KeyRound,
    title: "Multi-factor access",
    description: "Every workspace login requires verified authentication.",
  },
  {
    icon: Lock,
    title: "Secure file transfer",
    description: "Files move through controlled, access-scoped channels only.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit logs",
    description: "Every access and action is recorded and retained.",
  },
  {
    icon: Users,
    title: "Access control",
    description: "Permissions scoped by role, not shared broadly.",
  },
  {
    icon: ScanLine,
    title: "Malware scanning",
    description: "Every uploaded file is scanned before it enters the pipeline.",
  },
] as const;

export default function SecurityWorkspaceSection() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/data-migration/security-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          dark
          eyebrow="Security"
          title="A secure migration workspace, by default"
          body="Every transfer runs through a controlled workspace — no public links, no open uploads."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.65} />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
