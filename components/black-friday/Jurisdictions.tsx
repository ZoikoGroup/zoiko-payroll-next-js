import { Container, Eyebrow, Heading } from "./Primitives";

type Status = "available" | "limited" | "partner" | "planned";

type Jurisdiction = {
  name: string;
  note: string;
  status: Status;
  /** Pin position in the 676×575 map frame (Figma coordinates). */
  pin: [number, number];
  /** Label anchor, text-anchor and one entry per line (baselines 17px apart). */
  label: { x: number; y: number; anchor: "start" | "end"; lines: string[] };
};

const jurisdictions: Jurisdiction[] = [
  {
    name: "United States",
    note: "Supported local requirements configured in-platform",
    status: "available",
    pin: [163, 214],
    label: { x: 152, y: 229, anchor: "end", lines: ["United", "States"] },
  },
  {
    name: "United Kingdom",
    note: "Supported local requirements configured in-platform",
    status: "available",
    pin: [335, 185],
    label: { x: 326, y: 181, anchor: "end", lines: ["United", "Kingdom"] },
  },
  {
    name: "Germany",
    note: "Confirm scope with the Zoiko Payroll team",
    status: "limited",
    pin: [356, 191],
    label: { x: 358, y: 179, anchor: "start", lines: ["Germany"] },
  },
  {
    name: "Singapore",
    note: "Supported local requirements configured in-platform",
    status: "available",
    pin: [524, 285],
    label: { x: 531, y: 278, anchor: "start", lines: ["Singapore"] },
  },
  {
    name: "Brazil",
    note: "Delivered with an approved local partner",
    status: "partner",
    pin: [247, 310],
    label: { x: 256, y: 305, anchor: "start", lines: ["Brazil"] },
  },
  {
    name: "India",
    note: "Not yet available",
    status: "planned",
    pin: [478, 245],
    label: { x: 448, y: 267, anchor: "start", lines: ["India"] },
  },
];

const badge: Record<Status, { label: string; className: string }> = {
  available: { label: "Available", className: "bg-cyan-400/15 text-cyan-300" },
  limited: { label: "Limited availability", className: "bg-amber-400/15 text-amber-300" },
  partner: { label: "Partner-supported", className: "bg-indigo-400/20 text-indigo-200" },
  planned: { label: "Planned", className: "bg-slate-500/25 text-slate-300" },
};

function StatusDot({ status }: { status: Status }) {
  if (status === "available")
    return <span className="h-3.5 w-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />;
  if (status === "limited")
    return <span className="h-3.5 w-3.5 rounded-full bg-[linear-gradient(90deg,#fbbf24_50%,transparent_50%)] ring-2 ring-inset ring-amber-400" />;
  if (status === "partner")
    return <span className="h-3.5 w-3.5 rounded-full border-2 border-dashed border-indigo-300" />;
  return <span className="h-3.5 w-3.5 rounded-full border border-dotted border-slate-400" />;
}

/*
 * Dotted land mask traced row by row from the Figma map export (676×575).
 * Each row is [y, x-ranges]; a dot is drawn every 6px inside each range.
 */
const MAP_W = 676;
const MAP_H = 575;
const PITCH = 6;

const land: [number, [number, number][]][] = [
  [139, [[214, 300]]],
  [145, [[237, 300]]],
  [151, [[243, 295], [497, 560]]],
  [157, [[58, 96], [447, 625]]],
  [163, [[44, 200], [250, 290], [365, 655]]],
  [169, [[50, 225], [255, 280], [372, 640]]],
  [175, [[52, 60], [85, 228], [380, 630]]],
  [181, [[110, 228], [330, 610]]],
  [187, [[115, 230], [340, 600]]],
  [193, [[120, 225], [345, 590]]],
  [199, [[125, 215], [330, 350], [365, 590]]],
  [205, [[128, 210], [328, 345], [360, 580]]],
  [211, [[130, 200], [330, 560]]],
  [217, [[135, 195], [325, 550], [588, 592]]],
  [223, [[140, 193], [330, 420], [440, 540]]],
  [229, [[155, 195], [320, 420], [460, 530]]],
  [235, [[160, 195], [315, 425], [470, 520]]],
  [241, [[160, 190], [315, 420], [475, 490], [510, 520]]],
  [247, [[165, 180], [315, 425], [480, 490], [510, 520]]],
  [253, [[175, 185], [315, 420], [515, 525]]],
  [259, [[180, 190], [315, 420], [520, 530]]],
  [265, [[185, 190], [315, 415], [510, 530]]],
  [271, [[205, 240], [320, 410]]],
  [277, [[200, 245], [355, 415]]],
  [283, [[200, 250], [355, 410]]],
  [289, [[200, 255], [355, 410]]],
  [295, [[200, 260], [360, 410]]],
  [301, [[200, 262], [360, 410]]],
  [307, [[205, 262], [360, 405]]],
  [313, [[210, 262], [365, 405], [565, 595]]],
  [319, [[212, 262], [365, 405], [555, 600]]],
  [325, [[212, 265], [365, 400], [548, 605]]],
  [331, [[212, 255], [365, 400], [548, 605]]],
  [337, [[212, 250], [365, 395], [548, 605]]],
  [343, [[212, 245], [370, 395], [548, 600]]],
  [349, [[212, 240], [370, 390], [548, 560], [575, 605]]],
  [355, [[208, 235], [585, 605]]],
  [361, [[208, 230]]],
  [367, [[208, 225]]],
  [373, [[208, 222]]],
  [379, [[208, 218]]],
  [385, [[210, 218]]],
];

function landDots() {
  const dots: [number, number][] = [];
  for (const [y, ranges] of land) {
    for (let x = 44; x <= 656; x += PITCH) {
      if (ranges.some(([a, b]) => x >= a && x <= b)) dots.push([x, y]);
    }
  }
  return dots;
}

const DOTS = landDots();

function Pin({ status, x, y }: { status: Status; x: number; y: number }) {
  const ring = { stroke: "#0b1d33", strokeWidth: 1.5 };
  if (status === "limited") {
    return (
      <g>
        <circle cx={x} cy={y} r={4.5} fill="#fde68a" {...ring} />
        <path d={`M${x} ${y - 4.5} A4.5 4.5 0 0 0 ${x} ${y + 4.5} Z`} fill="#f59e0b" />
      </g>
    );
  }
  if (status === "partner") {
    return <circle cx={x} cy={y} r={4} fill="#ffffff" stroke="#94a3b8" strokeWidth={1.5} />;
  }
  const fill = status === "available" ? "#22d3ee" : "#ffffff";
  return <circle cx={x} cy={y} r={4.5} fill={fill} {...ring} />;
}

function WorldMap() {
  return (
    <svg
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      className="block h-auto w-full"
      role="img"
      aria-label="Map of Zoiko Payroll jurisdictions: United States, United Kingdom, Germany, India, Singapore and Brazil"
    >
      {DOTS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={1.4} fill="#a5b4d6" fillOpacity={0.5} />
      ))}
      {jurisdictions.map((j) => (
        <g key={j.name}>
          <Pin status={j.status} x={j.pin[0]} y={j.pin[1]} />
          <text
            x={j.label.x}
            y={j.label.y}
            textAnchor={j.label.anchor}
            fill="#ffffff"
            fontSize={15}
            fontWeight={700}
            letterSpacing={-0.2}
            style={{ paintOrder: "stroke", stroke: "#0b1d33", strokeWidth: 3, strokeLinejoin: "round" }}
          >
            {j.label.lines.map((line, i) => (
              <tspan key={line} x={j.label.x} dy={i === 0 ? 0 : 17}>
                {line}
              </tspan>
            ))}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Jurisdictions() {
  return (
    <section
      id="jurisdictions"
      className="scroll-mt-24 bg-[linear-gradient(180deg,#0a1b2e_0%,#07192b_100%)] py-20 text-white sm:py-24"
    >
      <Container className="lg:max-w-[1140px]">
        <Eyebrow tone="cyan">Multi-Jurisdiction Payroll</Eyebrow>
        <Heading tone="light" className="mt-5 max-w-[560px]">
          Designed for payroll operations across multiple jurisdictions.
        </Heading>
        <p className="mt-6 max-w-[700px] text-lg leading-7 text-slate-300">
          Manage payroll through a consistent global operating model while preserving local configurations,
          responsibilities, records and controls.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_428px]">
          <div className="self-start overflow-hidden rounded-lg border border-white/10 bg-[#0b1a30] bg-[radial-gradient(ellipse_62%_58%_at_48%_52%,rgba(99,118,241,0.26)_0%,rgba(99,118,241,0.1)_55%,transparent_100%)]">
            <WorldMap />
          </div>

          <ul className="flex flex-col gap-2.5">
            {jurisdictions.map((j) => (
              <li
                key={j.name}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <span className="flex w-5 shrink-0 justify-center">
                  <StatusDot status={j.status} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold">{j.name}</p>
                  <p className="text-[13px] leading-[18px] text-slate-400">{j.note}</p>
                </div>
                <span
                  className={`shrink-0 rounded px-2 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${badge[j.status].className}`}
                >
                  {badge[j.status].label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-[640px] text-[13px] leading-[21px] text-slate-400">
          Availability reflects the current Zoiko Payroll jurisdiction list. Planned, limited and partner-supported
          jurisdictions are not fully available. Responsibilities vary by jurisdiction and contract; this page does not
          represent universal legal or tax coverage.
        </p>
      </Container>
    </section>
  );
}
