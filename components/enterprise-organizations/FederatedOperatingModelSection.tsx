import Reveal from "../ui/Reveal";

export default function FederatedOperatingModelSection() {
  return (
    <section className="bg-white border-t border-[#e3e7ec] py-16 sm:py-24 relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px] items-center">
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row gap-[44px] items-center justify-center w-full max-w-[1143px]">
          {/* Image */}
          <Reveal className="w-full lg:w-auto flex justify-center shrink-0">
            <img
              src="/images/enterprise-organizations/governance-overview.png"
              alt="Federated Operating Model Dashboard"
              loading="lazy"
              className="bg-[#eef0f4] border border-[#e3e7ec] h-auto lg:h-[375px] w-full max-w-[500px] rounded-[16px] object-cover shrink-0"
            />
          </Reveal>
          
          {/* Text */}
          <Reveal delay={120} className="flex flex-col gap-[14px] items-start w-full lg:flex-[1_0_0]">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
                04 — FEDERATED OPERATING MODEL
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[36px] tracking-[-1px] leading-[44px] m-0">
                Central visibility and shared<br className="hidden lg:block" />
                standards. Scoped local authority
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[1px]">
              <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
                Central governance sets the control model, definitions and evidence<br className="hidden lg:block" />
                standards. Entities and payroll groups keep decision rights inside their<br className="hidden lg:block" />
                scope. Visibility and decision rights are separate by design.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bottom Banner & Cards */}
        <Reveal delay={200} className="w-full flex justify-center">
          <div className="bg-[#fafbfc] border border-[#e3e7ec] flex flex-col items-center pb-[24px] pt-[40px] px-4 sm:px-[24px] rounded-[16px] w-full max-w-[1143px] overflow-x-auto">
            {/* Dark Header */}
            <div className="bg-[#082f49] flex flex-col gap-[14px] items-start px-5 sm:px-[20px] py-[18px] rounded-[12px] w-full min-w-[1000px]">
              <div className="flex justify-between items-center w-full">
                <p className="font-bold text-[#8fa6ff] text-[11px] tracking-[1.32px] uppercase m-0 leading-normal">
                  CENTRAL STANDARDS & CONTROL LAYER
                </p>
                <p className="font-normal text-[#8b95a3] text-[11px] m-0 leading-normal">
                  Visibility across all scopes · decision rights only where granted
                </p>
              </div>
              
              {/* Badges */}
              <div className="flex gap-[8px] h-[34px] items-start justify-center w-full">
                {[
                  "Shared control model",
                  "Report definitions",
                  "Role patterns",
                  "Integration governance",
                  "Escalation & support",
                  "Evidence standards"
                ].map((badge, idx) => (
                  <div key={idx} className="bg-[rgba(33,76,105,0.26)] border border-[#2b3648] flex flex-[1_0_0] flex-col items-center justify-center px-[11px] py-[9px] rounded-[8px] h-full text-center">
                    <span className="font-normal text-[#d6dbe3] text-[11.5px] leading-normal whitespace-nowrap">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-[6px] h-[36px] items-start justify-center pb-[4px] pt-[14px] w-full min-w-[1000px]">
              {Array(3).fill(0).map((_, i) => (
                <span key={i} className="font-normal text-[#c3c9d2] text-[15px] leading-normal h-[18px] flex items-center">
                  ↓
                </span>
              ))}
            </div>

            {/* 5 Cards */}
            <div className="flex gap-[5px] items-center justify-between w-full min-w-[1000px]">
              {[
                {
                  header: "ENTITY PAYROLL OWNER",
                  title: "Decision rights in scope",
                  text: "Entity and group readiness, local inputs, handoffs, escalations and evidence within scope."
                },
                {
                  header: "PAYROLL GROUP",
                  title: "Operational period control",
                  text: "Frequency, inputs, calculation and validation, reviewers,approvers and completion state."
                },
                {
                  header: "FINANCE / CONTROLLER",
                  title: "Reconciliation and close",
                  text: "Approved financial reporting with cross- entity views, variance and close evidence."
                },
                {
                  header: "HR / PEOPLE",
                  title: "Authorized record changes",
                  text: "Employee changes and record coordinationn with purpose-limited access."
                },
                {
                  header: "IT / INTEGRATION",
                  title: "Connectors and access",
                  text: "Identity, connectors, mappings, technical errors, health, retry and access logs."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-[#e3e7ec] flex flex-[1_0_0] flex-col gap-[5px] h-[133px] items-start p-[16px] rounded-[12px] shrink-0">
                  <p className="font-bold text-[#2049c9] text-[10.5px] tracking-[1.05px] uppercase m-0 leading-normal">
                    {card.header}
                  </p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal pt-[3px]">
                    {card.title}
                  </p>
                  <p className="font-normal text-[#4b5563] text-[11px] leading-[18.6px] m-0">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
