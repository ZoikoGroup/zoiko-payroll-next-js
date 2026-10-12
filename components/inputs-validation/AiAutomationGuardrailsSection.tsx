"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface GuardrailCard {
  id: string;
  title: string;
  description: string;
}

const guardrailData: GuardrailCard[] = [
  {
    id: "advisory",
    title: "Advisory only",
    description: "Explains, summarizes, prioritizes review.",
  },
  {
    id: "labeled",
    title: "Visibly labeled",
    description: "Tied to available rule context.",
  },
  {
    id: "never-silent",
    title: "Never silent",
    description: "Can't create, approve or pay a value.",
  },
  {
    id: "audit",
    title: "Same audit path",
    description: "AI-assisted changes follow human workflow.",
  },
  {
    id: "data",
    title: "Data minimization",
    description: "No sensitive data in prompts or training.",
  },
  {
    id: "approved",
    title: "Approved & available",
    description: "Only where explicitly enabled.",
  },
];

export default function AiAutomationGuardrailsSection() {
  const [selectedCard, setSelectedCard] = useState<string>("advisory");

  return (
    <section className="w-full bg-[#0F2B3E] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FB0FF] uppercase font-mono">
            <span className="text-[#8FB0FF] font-bold">—</span>
            <span>AI & AUTOMATION GUARDRAILS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            AI advises. It never decides payroll.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-400">
            Deterministic rules remain the source of every readiness decision.
          </p>
        </div>

        {/* 3-Column Grid of Guardrail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guardrailData.map((card) => {
            const isSelected = selectedCard === card.id;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col items-start gap-3.5 bg-[#FFFFFF0D] border-[#FFFFFF24] hover:border-slate-600 hover:bg-[#0E283A]/60`}
              >
                <div className="flex gap-2 shrink-0 text-[#8FB0FF]">
                  <Check className="w-4 h-4 mt-1 stroke-[3]" />
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
