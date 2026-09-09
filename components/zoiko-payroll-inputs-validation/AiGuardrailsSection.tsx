import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function AiGuardrailsSection() {
  const guardrails = [
    {
      title: "Advisory only",
      description: "Explains, summarizes, prioritizes review.",
    },
    {
      title: "Visibly labeled",
      description: "Tied to available rule context.",
    },
    {
      title: "Never silent",
      description: "Can't create, approve or pay a value.",
    },
    {
      title: "Same audit path",
      description: "AI-assisted changes follow human workflow.",
    },
    {
      title: "Data minimization",
      description: "No sensitive data in prompts or training.",
    },
    {
      title: "Approved & available",
      description: "Only where explicitly enabled.",
    },
  ];

  return (
    <section className="w-full py-20 relative bg-cyan-950 flex flex-col justify-start items-center overflow-hidden">
      {/* Background pattern + overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/Background (42).png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/95 to-cyan-950/90" />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-start items-center gap-9 relative z-10">
        {/* Header */}
        <Reveal className="w-full max-w-[660px] flex flex-col justify-start items-center gap-2 text-center">
          <div className="inline-flex justify-center items-center gap-2">
            <div className="w-4 h-px bg-blue-300" />
            <span className="text-blue-300 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              AI &amp; AUTOMATION GUARDRAILS
            </span>
          </div>
          <h2 className="pt-px text-center text-white text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-9">
            AI advises. It never decides payroll.
          </h2>
          <p className="pb-[0.59px] text-center text-white text-base font-normal font-['Inter'] leading-6">
            Deterministic rules remain the source of every readiness decision.
          </p>
        </Reveal>

        {/* Guardrails Cards Grid (3 columns on lg) */}
        <Reveal className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {guardrails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-1 rounded-[10px] bg-white/5 p-3.5 outline outline-1 outline-offset-[-1px] outline-white/10 shadow-xs"
            >
              <div className="inline-flex items-center gap-1.5">
                <div className="relative w-3 h-3 flex items-center justify-center shrink-0">
                  <Image
                    src="/blue.png"
                    alt="checkmark"
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white text-sm font-semibold font-['Inter'] leading-5">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/60 text-xs font-normal font-['Inter'] leading-5 pl-4.5">
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}