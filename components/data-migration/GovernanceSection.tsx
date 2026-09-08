import React from "react";
import { Lock, Users, ClipboardCheck, Layers, FileCheck, Shield } from "lucide-react";
import { SectionHeading, Card, IconTile } from "./Primitives";

const controls = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "Data protected across every stage of transfer and storage.",
  },
  {
    icon: Users,
    title: "Role-based access",
    description: "Access scoped to what each role needs, nothing more.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit trail",
    description: "A complete, recorded history of every migration action.",
  },
  {
    icon: Layers,
    title: "Batch traceability",
    description: "Every record traced to the batch it moved in.",
  },
  {
    icon: FileCheck,
    title: "Evidence & approvals",
    description: "Formal sign-off recorded at each governance gate.",
  },
  {
    icon: Shield,
    title: "Compliance controls",
    description: "Migration practices aligned to jurisdictional requirements.",
  },
] as const;

export default function GovernanceSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Governance"
          title="Enterprise security and governance throughout"
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="flex flex-col gap-4">
              <IconTile>
                <Icon className="h-5 w-5" strokeWidth={1.65} />
              </IconTile>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-6 text-slate-600">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
