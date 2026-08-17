import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { BrowserIcon, LinesIcon, CheckRingIcon, AlertTriangleIcon, CodeIcon } from "./icons";
import { PlusIcon } from "../ui/icons";

const failures = [
  {
    title: "Status spread across tools",
    description:
      "Spreadsheets, chat and local tools — leadership can't tell which payrolls are actually ready.",
    Icon: BrowserIcon,
    bar: "bg-[#2563C9]",
    chip: "bg-[#E4EDFA] text-[#2563C9]",
  },
  {
    title: "Different status language",
    description: 'Every team calls "ready" something different, with no shared scope or evidence.',
    Icon: LinesIcon,
    bar: "bg-[#0E8A82]",
    chip: "bg-[#DFF1EF] text-[#0E8A82]",
  },
  {
    title: "Manual approval chasing",
    description: "Approval state and material-change impact surface too late to act on.",
    Icon: CheckRingIcon,
    bar: "bg-[#9C7A1F]",
    chip: "bg-[#F1EAD8] text-[#9C7A1F]",
  },
  {
    title: "Unowned exceptions",
    description: "An issue with no name, due date or next action just sits there.",
    Icon: AlertTriangleIcon,
    bar: "bg-[#B23A34]",
    chip: "bg-[#F4E1DF] text-[#B23A34]",
  },
  {
    title: "Invisible local config changes",
    description: "A local rule changes and no one upstream can see the version or the reason.",
    Icon: PlusIcon,
    bar: "bg-[#6B4FA0]",
    chip: "bg-[#EDE7F5] text-[#6B4FA0]",
  },
  {
    title: "Integration failures read as payroll failures",
    description: "A connector outage gets mistaken for a payroll problem, and vice versa.",
    Icon: CodeIcon,
    bar: "bg-[#4E6172]",
    chip: "bg-[#EAF1F6] text-[#4E6172]",
  },
];

export default function FragmentationSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>The fragmentation problem</Eyebrow>
          <h2 className="mt-2.5 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Recognizable operating failures, not fear-based marketing
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {failures.map((failure, index) => (
            <Reveal key={failure.title} delay={(index % 3) * 80}>
              <div className="h-full overflow-hidden rounded-xl border border-[#DCE6EC] bg-white">
                <div className={`h-1 w-full ${failure.bar}`} aria-hidden="true" />
                <div className="px-5 py-5">
                  <span
                    className={`inline-flex size-8 items-center justify-center rounded-lg ${failure.chip}`}
                  >
                    <failure.Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-5 text-[#082F49]">
                    {failure.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#4E6172]">{failure.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
