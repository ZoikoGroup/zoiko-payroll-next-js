import Reveal from "../ui/Reveal";

export default function QuickLinksSection() {
  const quickLinks = [
    {
      title: "Pricing & plans",
      description: "Understand subscription scope and commercial model.",
      icon: "Background (78).png",
    },
    {
      title: "Implementation pricing",
      description: "Understand one-time / project commercial scope.",
      icon: "Background (79).png",
    },
    {
      title: "Standard legal terms",
      description: "Review baseline contract framework.",
      icon: "Background (80).png",
    },
    {
      title: "Data Processing Agreement",
      description: "Review processor and privacy terms.",
      icon: "Background (81).png",
    },
    {
      title: "Security review",
      description: "Assess security controls and evidence.",
      icon: "Background (82).png",
    },
    {
      title: "Business continuity",
      description: "Assess resilience approach.",
      icon: "Background (83).png",
    },
    {
      title: "Accessibility",
      description: "Review accessibility commitment and evidence.",
      icon: "Background (84).png",
    },
    {
      title: "Supplier onboarding",
      description: "Collect vendor-master, tax and invoice information.",
      icon: "Background (85).png",
    },
    {
      title: "Multi-jurisdiction pricing",
      description: "Understand local and global commercial layers.",
      icon: "Background (86).png",
    },
  ];

  return (
    <section className="bg-grey-95 py-16 sm:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col items-start gap-3.5">
              <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-azure-40">
                / Procurement quick links
              </span>
              <h2 className="max-w-[640px] text-3xl font-extrabold leading-9 text-azure-16">
                Jump straight to what your team needs.
              </h2>
            </div>

            {/* 3x3 Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 outline outline-1 outline-offset-[-1px] outline-azure-89 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg bg-white overflow-hidden">
                    <img
                      src={item.icon}
                      alt=""
                      className="h-[34px] w-[34px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-extrabold leading-5 text-azure-16">
                      {item.title}
                    </h3>
                    <p className="text-xs font-normal leading-4 text-azure-38">
                      {item.description}
                    </p>
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