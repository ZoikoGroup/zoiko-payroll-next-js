import Reveal from "../ui/Reveal";

const benefits = [
  {
    title: "Flexible hours",
    description: "Build your schedule around how you work best.",
    icon: "/Overlay (1).png",
  },
  {
    title: "Health coverage",
    description: "Local coverage support, wherever your role is based.",
    icon: "/Overlay (2).png",
  },
  {
    title: "Paid time off",
    description:
      "Time away that's actually respected, not just offered on paper.",
    icon: "/Overlay (3).png",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-[#F5F8FA] py-20">
      <div className="mx-auto max-w-[1096px] px-4 sm:px-6 lg:px-0">
        <Reveal>
          <div className="flex w-full flex-col overflow-hidden rounded-[20px] bg-[#082F49] lg:h-[384px] lg:flex-row">
            {/* Left Image Side */}
            <div className="h-[280px] w-full shrink-0 bg-[#EAF1F6] sm:h-[340px] lg:h-full lg:w-1/2">
              <img
                src="/900.png"
                alt="We take care of our team"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Benefits Content Side */}
            <div className="flex flex-1 flex-col justify-center px-8 py-10 lg:px-12 lg:py-12">
              <h2 className="text-3xl font-extrabold text-[#FFFFFF]">
                We take care of our team
              </h2>

              <div className="mt-7 flex flex-col gap-7">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon Container with Custom Images */}
                    <img
                        src={item.icon}
                        alt={item.title}
                        className="h-9 w-9 shrink-0 object-contain"
                      />

                    {/* Text Details */}
                    <div className="flex flex-col gap-[3px]">
                      <h3 className="text-sm font-bold text-[#FFFFFF]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-normal leading-5 text-[#AFC6D5]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}