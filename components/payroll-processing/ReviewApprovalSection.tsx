import Reveal from "../ui/Reveal";
import ChecklistCard from "./ChecklistCard";
import MediaSplit from "./MediaSplit";

const reviewWorkbench = [
  { status: "ok" as const, label: "Validation readiness confirmed", meta: "v14" },
  { status: "warn" as const, label: "Material change: +2.1% gross vs. prior period", meta: "flagged" },
  { status: "warn" as const, label: "3 open exceptions at review time", meta: "payroll-ops" },
  { status: "ok" as const, label: "Reviewer assigned", meta: "j.alvarez" },
];

const approvalGate = [
  { status: "ok" as const, label: "Approval required: Payroll Approver role", meta: "policy" },
  { status: "error" as const, label: "Blocking: 1 high-severity exception open", meta: "payroll-ops" },
  { status: "ok" as const, label: "Current version: run-v3", meta: "system" },
  { status: "warn" as const, label: "Full approval flow in Payroll Approvals", meta: "→" },
];

export default function ReviewApprovalSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          eyebrow={"Review workbench · Approval gate"}
          title="A deliberate handoff from processing to human authorization."
          description="Review and approval are separated responsibilities — a run cannot progress without both, in order."
          media={{
            src: "/images/payroll-processing/review-approval.png",
            alt: "Group reviewing payroll figures together before sign-off",
            label: "Current version",
            value: "run-v3",
          }}
        />

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <ChecklistCard
              title="Review workbench"
              badge="In review"
              badgeClass="bg-indigo-50 text-blue-600"
              rows={reviewWorkbench}
            />
          </Reveal>
          <Reveal delay={80}>
            <ChecklistCard
              title="Approval gate"
              badge="Pending approver"
              badgeClass="bg-orange-100 text-yellow-700"
              rows={approvalGate}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
