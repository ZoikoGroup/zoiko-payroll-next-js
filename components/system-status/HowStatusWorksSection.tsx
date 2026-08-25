import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const explainers = [
  { caption: "How component health is verified", image: "/images/system-status/how-health-verified.png" },
  { caption: "Inside an incident lifecycle", image: "/images/system-status/incident-lifecycle.png" },
  { caption: "How maintenance windows are planned", image: "/images/system-status/maintenance-windows.png" },
];

export default function HowStatusWorksSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>How status works</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Three short explainers on how we publish status
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Real teams, real process — not decorative stock imagery standing in for evidence.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {explainers.map((item, index) => (
            <Reveal key={item.caption} delay={index * 60}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-4 text-sm font-medium text-white">{item.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
