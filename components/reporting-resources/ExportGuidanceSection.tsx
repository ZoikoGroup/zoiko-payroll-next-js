import Reveal from "../ui/Reveal";

const viewPoints = [
  "Stays inside the governed product boundary",
  "Permissions and scope filters stay active",
  "No data leaves the controlled environment",
];

const exportPoints = [
  "Data leaves the governed product boundary",
  "Handling risk changes — classification matters",
  "Only export what you're already authorized to\nview",
];

export default function ExportGuidanceSection() {
  return (
    // ✅ Section background #F4F8FB
    <section className="bg-[#F4F8FB] py-16 sm:py-20" id="export-guidance">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                Export &amp; distribution guidance
              </span>
            </div>
            <h2 className="mt-1 text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight text-[#0A2E4B] sm:text-4xl">
              &quot;View report&quot; and &quot;export data&quot; are not the
              <br />
              same action.
            </h2>
          </div>
        </Reveal>

        {/* Two cards */}
        <Reveal delay={80}>
          <div className="mx-auto mt-12 grid max-w-[880px] grid-cols-1 gap-6 md:grid-cols-2">
            {/* View report card with rgba(225, 238, 249, 1) */}
            <div className="rounded-[20px] bg-[rgba(225,238,249,1)] p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold font-['Plus_Jakarta_Sans'] leading-6 text-[#0A78C2]">
                <span className="text-xl leading-none">👁️</span>
                <span>View report</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {viewPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-normal font-['Plus_Jakarta_Sans'] leading-6 text-[#0A2E4B]"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#0A78C2]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Export data card with rgba(243, 233, 204, 1) */}
            <div className="rounded-[20px] bg-[rgba(243,233,204,1)] p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold font-['Plus_Jakarta_Sans'] leading-6 text-[#8F641E]">
                <span className="text-xl leading-none">⬇️</span>
                <span>Export data</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {exportPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-normal font-['Plus_Jakarta_Sans'] leading-6 text-[#0A2E4B]"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#8F641E]" />
                    <span className="whitespace-pre-line">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}