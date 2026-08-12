import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const moments = [
  {
    image: "/images/implementation/discover-workshop.png",
    caption: "Discover — scoping workshop with the payroll team",
  },
  {
    image: "/images/implementation/parallel-test.png",
    caption: "Parallel test — reviewing outputs side by side",
  },
  {
    image: "/images/implementation/optimize-review.png",
    caption: "Optimize — the 30-day health check",
  },
];

export default function InsideProgramSection() {
  return (
    <section className="bg-[#F6F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Inside a program</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Who&rsquo;s actually in the room at each stage.
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Implementation is a joint program, not a handover. Your payroll, finance and IT teams stay
            engaged from scoping through the first optimize review — with a named Zoiko owner at every
            stage.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((moment, index) => (
            <Reveal key={moment.caption} delay={index * 80}>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={moment.image}
                  alt={moment.caption}
                  loading="lazy"
                  className="h-48 w-full object-cover sm:h-52"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-slate-900/85 via-slate-900/20 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white">
                  {moment.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
