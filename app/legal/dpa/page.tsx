import type { Metadata } from "next";
import Link from "next/link";
import {
  DpaHero,
  DocumentStatusSection,
  WhatsInsideSection,
  SplitSection,
  Callout,
  TransfersSection,
  GovernmentDeletionAiSection,
  ExecutionStatesSection,
  VersionStatesSection,
  DpaFAQSection,
  DpaFinalCta,
} from "@/components/data-processing-addendum";

export const metadata: Metadata = {
  title: "Data Processing Addendum | Zoiko Payroll",
  description:
    "Review the approved standard processing terms and annexes — roles, instructions, technical and organizational measures, subprocessors, international transfers, assistance, audits and execution.",
};

export default function DataProcessingAddendumPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DpaHero />
      <DocumentStatusSection />
      <WhatsInsideSection />

      <SplitSection
        id="roles-annex-one"
        eyebrow="Parties, roles & Annex I"
        heading="Exact roles by context — never universalized."
        body="Controller and processor roles are stated exactly as approved for each processing context — this page never applies a single role universally across every Zoiko Payroll activity. Annex I defines subject matter, duration, nature and purpose of processing, and the categories of data and data subjects involved."
        image={{
          src: "/images/data-processing-addendum/dpa-roles.png",
          alt: "",
        }}
        callout={
          <Callout>
            <span className="font-bold">Data examples stay generic.</span> Annex
            I illustrations use generic, source-backed category examples only —
            never real payroll, bank, tax or employee data.
          </Callout>
        }
      />

      <SplitSection
        id="instructions-annex-two"
        tinted
        eyebrow="Instructions, confidentiality & Annex II"
        heading="Contractual framework, not a public feature list."
        body="A public product action is not automatically a contractual instruction — instructions are defined by the exact contract framework. Confidentiality obligations bind personnel handling customer data. Annex II describes approved contractual categories of technical and organizational measures (TOMs)."
        image={{
          src: "/images/data-processing-addendum/dpa-measures.png",
          alt: "",
        }}
        callout={
          <Callout>
            <span className="font-bold">Evidence boundary.</span> Public DPA
            content describes approved TOM categories only — it must never
            expose restricted architecture, secrets, penetration-test results or
            internal control evidence. Current assurance evidence remains with{" "}
            <Link
              href="/resources/security-trust"
              className="font-bold text-sky-600 hover:text-sky-800"
            >
              Trust and Security
            </Link>
            .
          </Callout>
        }
      />

      <TransfersSection />

      <SplitSection
        id="assistance-audits"
        tinted
        eyebrow="Assistance, incidents & audits"
        heading="Exact contractual scope — no invented commitments."
        body="Data-subject assistance, DPIA/consultation support and security-incident notification follow the exact contractual scope and routing approved for each context — this page never invents notification hours or blanket assistance promises. Audit rights are described with their exact scope, conditions, frequency, notice, cost, evidence alternatives and confidentiality terms."
        image={{
          src: "/images/data-processing-addendum/dpa-audits.png",
          alt: "",
        }}
      />

      <GovernmentDeletionAiSection />
      <ExecutionStatesSection />
      <VersionStatesSection />
      <DpaFAQSection />
      <DpaFinalCta />
    </div>
  );
}
