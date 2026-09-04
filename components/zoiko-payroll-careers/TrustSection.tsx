import Reveal from "../ui/Reveal";

const ratings = [
  {
    platform: "★ Trustpilot",
    score: "4.7 / 5",
    reviews: "Based on 600+ reviews",
  },
  {
    platform: "G2",
    score: "4.6 / 5",
    reviews: "Based on 400+ reviews",
  },
  {
    platform: "Glassdoor",
    score: "4.4 / 5",
    reviews: "Based on employee reviews",
  },
];

export default function RatingsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-[1096px] px-4 sm:px-6 lg:px-0">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-3.5">
            {/* Header Subtitle */}
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A83C8]">
              TRUST AND OPERATIONAL PROOF
            </span>

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-[#0B2A3E]">
              Reviewed the way we build — with evidence.
            </h2>

            {/* Ratings Grid */}
            <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {ratings.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-2xl border border-[#E2E9EE] bg-[#FFFFFF] p-7 gap-2 shadow-xs"
                >
                  <span className="text-xs font-bold text-[#8B9AA6]">
                    {item.platform}
                  </span>
                  <span className="pt-1.5 text-3xl font-extrabold text-[#0B2A3E]">
                    {item.score}
                  </span>
                  <span className="text-xs font-normal text-[#8B9AA6]">
                    {item.reviews}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}