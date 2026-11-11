"use client";

import { useEffect, useState } from "react";

/** Campaign closes at the end of Cyber Monday, 30 November 2026 (UTC). */
export const CAMPAIGN_END = new Date("2026-11-30T23:59:59Z").getTime();

type Parts = { days: number; hrs: number; min: number; sec: number };

function remaining(now: number): Parts {
  const diff = Math.max(0, CAMPAIGN_END - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hrs: Math.floor(diff / 3_600_000) % 24,
    min: Math.floor(diff / 60_000) % 60,
    sec: Math.floor(diff / 1000) % 60,
  };
}

export default function Countdown() {
  // null until mounted, so the server render and first client render match.
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(remaining(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const ended = parts !== null && parts.days + parts.hrs + parts.min + parts.sec === 0;
  const cells: { label: string; value: number | undefined }[] = [
    { label: "Days", value: parts?.days },
    { label: "Hrs", value: parts?.hrs },
    { label: "Min", value: parts?.min },
    { label: "Sec", value: parts?.sec },
  ];

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
        {ended ? "Campaign window has closed" : "Campaign window closes in"}
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2" role="timer" aria-live="off">
        {cells.map((c) => (
          <div
            key={c.label}
            className="flex flex-col items-center rounded-md border border-white/10 bg-white/[0.04] py-2.5"
          >
            <span className="text-2xl font-bold tabular-nums text-white sm:text-[28px]">
              {c.value === undefined ? "--" : String(c.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
