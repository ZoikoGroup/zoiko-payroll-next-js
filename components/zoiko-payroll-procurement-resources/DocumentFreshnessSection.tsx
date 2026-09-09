import Reveal from "../ui/Reveal";

export default function DocumentFreshnessSection() {
  const bulletPoints = [
    "RFP, RFI and vendor questionnaires use a structured, assisted response workflow.",
    "Self-service resources are suggested first; bespoke questions route to the right owner.",
    "You can upload your own questionnaire — never payroll files, credentials or employee data.",
  ];

  const documents = [
    {
      title: "Data Processing Agreement",
      owner: "Privacy/Legal-owned · v3.2",
      date: "Effective Jun 2026",
      status: "Current",
    },
    {
      title: "Security Overview Summary",
      owner: "Security-owned · v2.0",
      date: "Reviewed Mar 2026",
      status: "Current",
    },
    {
      title: "Standard Customer Terms",
      owner: "Legal-owned · v5.1",
      date: "Effective Jan 2026",
      status: "Current",
    },
    {
      title: "Subprocessor Register",
      owner: "Privacy/Security-owned",
      date: "Updated weekly",
      status: "Live",
    },
  ];

  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Left Column - Details & Features */}
            <div className="flex flex-1 flex-col gap-4 max-w-[560px]">
              {/* Tag */}
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A78C2]">/</span>
                <span className="text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-[#0A78C2]">
                  Document freshness &amp; RFP support
                </span>
              </div>

              {/* Section Heading */}
              <h2 className="text-3xl font-extrabold font-['Inter'] leading-9 text-[#051B2B]">
                Every resource shows its version,<br className="hidden sm:inline" />
                owner and status.
              </h2>

              {/* Description */}
              <p className="text-sm font-light font-['Inter'] leading-5 text-[#4E6172]">
                Governed documents display version, owner, effective date and<br className="hidden sm:inline" />
                supersession status — so your team never relies on a stale file.
              </p>

              {/* Bullet Points List */}
              <div className="mt-2 flex flex-col gap-3">
                {bulletPoints.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-[#0A78C2]"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                    </svg>
                    <p className="text-xs font-normal font-['Inter'] leading-5 text-[#4E6172]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Document Cards Stack */}
            <div className="flex flex-1 w-full max-w-[520px] flex-col gap-3">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-[12px] border border-[#DCE6EC] bg-white p-4.5 px-5 shadow-[0px_1px_3px_0px_rgba(8,47,73,0.03)]"
                >
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-bold font-['Inter'] leading-5 text-[#051B2B]">
                      {doc.title}
                    </h3>
                    <p className="text-xs font-normal font-['Inter'] leading-4 text-[#64748B]">
                      {doc.owner}
                    </p>
                  </div>
                  <div className="text-right text-xs font-light font-['Inter'] leading-4 text-[#64748B]">
                    <div>{doc.date}</div>
                    <div>{doc.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}