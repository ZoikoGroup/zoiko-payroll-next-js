import type { ComponentType, SVGProps } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type IconProps = SVGProps<SVGSVGElement>;

function TextIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.67 2.67h10.66M8 2.67v10.66M6 13.33h4" />
    </svg>
  );
}

function BadgeCheckIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="m5.5 8 1.8 1.8L10.8 6.4" />
    </svg>
  );
}

function MagnifierIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="7" cy="7" r="5" />
      <path d="m11 11 3 3" />
    </svg>
  );
}

function FilterIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.67 4h10.66M4.67 8h6.66M6.67 12h2.66" />
    </svg>
  );
}

function AmbiguityIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M8 5.33V8M8 10.67h.01" />
    </svg>
  );
}

function NodesIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="4" cy="4" r="1.33" />
      <circle cx="12" cy="4" r="1.33" />
      <circle cx="8" cy="12" r="1.33" />
      <path d="M4.9 5.2 7.2 10.6M11.1 5.2 8.8 10.6" />
    </svg>
  );
}

function CompassIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="m10.4 5.6-1.2 3.6-3.6 1.2 1.2-3.6 3.6-1.2Z" />
    </svg>
  );
}

function HelpIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M6.6 6.4a1.5 1.5 0 1 1 1.9 1.7v.9M8 11.3h.01" />
    </svg>
  );
}

type Step = {
  title: string;
  caption: string;
  icon: ComponentType<IconProps>;
  /** The final step is the fallback promise, highlighted in brand blue. */
  accent?: boolean;
};

const steps: Step[] = [
  { title: "Normalize", caption: "Trim, lowercase, normalize punctuation.", icon: TextIcon },
  { title: "Exact match", caption: "Canonical title or term matches exactly.", icon: BadgeCheckIcon },
  { title: "Variant match", caption: "Approved alias or wording variant.", icon: MagnifierIcon },
  { title: "Phrase match", caption: "Deterministic keyword and tag ranking.", icon: FilterIcon },
  {
    title: "Ambiguity check",
    caption: "Jurisdiction, plan or product scope flagged.",
    icon: AmbiguityIcon,
  },
  { title: "Related results", caption: "Up to 5 curated related records shown.", icon: NodesIcon },
  {
    title: "Authority fallback",
    caption: "No suitable answer → authoritative destination shown.",
    icon: CompassIcon,
  },
  {
    title: "No match",
    caption: "No dead end: Resource Center search, Help Center or Sales.",
    icon: HelpIcon,
    accent: true,
  },
];

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className="mx-auto w-full max-w-[140px] rounded-xl border border-slate-200 bg-white px-3 py-3.5 text-center shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]">
      <span
        className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${
          step.accent ? "bg-sky-600" : "bg-sky-950"
        }`}
      >
        <Icon className="h-4 w-4 text-white" aria-hidden="true" />
      </span>
      <span className="mt-2.5 block text-xs font-extrabold leading-4 text-sky-950">
        {step.title}
      </span>
    </div>
  );
}

function StepDot({ accent }: { accent?: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 bg-white ${
        accent ? "border-sky-600" : "border-sky-950"
      }`}
      aria-hidden="true"
    >
      <span
        className={`h-2 w-2 rounded-full ${accent ? "bg-sky-600" : "bg-sky-950"}`}
      />
    </span>
  );
}

export default function SearchResolutionSection() {
  return (
    <section className="border-t border-slate-200 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>How search resolves your query</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Deterministic and explainable — never a generated answer.
          </h2>
        </Reveal>

        {/* Zigzag rail — cards and captions alternate above and below the timeline. */}
        <Reveal delay={80} className="mt-16 hidden xl:block">
          <div className="relative">
            <div
              className="absolute inset-x-0 top-[150.5px] border-t-[3px] border-dashed border-slate-300"
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-8 gap-x-4">
              {steps.map((step, index) => {
                const cardAbove = index % 2 === 0;
                return (
                  <li key={step.title} className="flex flex-col items-center">
                    <div className="flex h-36 w-full flex-col justify-end pb-4">
                      {cardAbove ? (
                        <StepCard step={step} />
                      ) : (
                        <p className="text-center text-xs leading-4 text-gray-400">
                          {step.caption}
                        </p>
                      )}
                    </div>

                    <StepDot accent={step.accent} />

                    <div className="flex h-36 w-full flex-col justify-start pt-4">
                      {cardAbove ? (
                        <p className="text-center text-xs leading-4 text-gray-400">
                          {step.caption}
                        </p>
                      ) : (
                        <StepCard step={step} />
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* Same eight steps as a vertical rail on smaller screens. */}
        <Reveal delay={80} className="mt-10 xl:hidden">
          <ol className="relative space-y-6 border-l-[3px] border-dashed border-slate-300 pl-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[34px] top-4">
                    <StepDot accent={step.accent} />
                  </span>
                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        step.accent ? "bg-sky-600" : "bg-sky-950"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-extrabold leading-4 text-sky-950">
                        {step.title}
                      </span>
                      <span className="mt-1.5 block text-xs leading-4 text-gray-400">
                        {step.caption}
                      </span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
