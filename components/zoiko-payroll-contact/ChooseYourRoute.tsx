"use client";

import React, { useState } from "react";
import {
  Mail,
  CircleHelp,
  Shield,
  BriefcaseBusiness,
  MessageSquare,
  X,
} from "lucide-react";

import SupportPanel from "./SupportPanel";
import PrivacyDataRequestsPanel from "./PrivacyDataRequestsPanel";
import MediaPressPanel from "./MediaPressPanel";
import GeneralInquiryPanel from "./GeneralInquiryPanel";

const routes = [
  {
    title: "Talk to sales",
    description: (
      <>
        Evaluate Zoiko Payroll, pricing,
        <br />
        implementation, global payroll
        <br />
        needs, or procurement.
      </>
    ),
    icon: Mail,
    active: true,
  },
  {
    title: "Get product or account help",
    description: (
      <>
        For customers and admins who
        <br />
        need help with access,
        <br />
        implementation, or service
        <br />
        questions.
      </>
    ),
    icon: CircleHelp,
    active: false,
    popup: "support",
  },
  {
    title: "Privacy and data requests",
    description: (
      <>
        Ask about personal-data handling
        <br />
        or submit an eligible privacy-
        <br />
        rights request.
      </>
    ),
    icon: Shield,
    active: false,
    popup: "privacy",
  },
  {
    title: "Media and press",
    description: (
      <>
        Request approved company
        <br />
        information, commentary,
        <br />
        interviews, or media resources.
      </>
    ),
    icon: BriefcaseBusiness,
    active: false,
    popup: "press",
  },
  {
    title: "General inquiries",
    description: (
      <>
        For questions that do not fit
        <br />
        sales, support, privacy, or press.
      </>
    ),
    icon: MessageSquare,
    active: false,
    popup: "general",
  },
];

export default function ChooseYourRoute() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleRouteClick = (route: (typeof routes)[number]) => {
    if (route.popup) {
      setActivePopup(route.popup);
    }
  };

  return (
    <>
      {/* =========================
          CHOOSE YOUR ROUTE
          ========================= */}
      <section className="w-full bg-[#e9f0f8] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 lg:px-24">
          {/* Heading */}
          <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
            {/* Label */}
            <div className="flex w-full items-center justify-center gap-1.5">
              <div className="flex h-5 items-center justify-center py-[3px]">
                <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
              </div>

              <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
                Choose your route
              </span>
            </div>

            {/* Title */}
            <div className="flex w-full flex-col items-center">
              <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
                Five routes, each equally legitimate.
              </h2>
            </div>
          </div>

          {/* Route Cards */}
          <div className="grid w-full grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {routes.map((route) => {
              const Icon = route.icon;

              return (
                <button
                  key={route.title}
                  type="button"
                  onClick={() => handleRouteClick(route)}
                  className={`flex min-h-[230px] flex-col items-center rounded-2xl px-4 py-5 text-center ${
                    route.active
                      ? "border-2 border-[#0099e5] bg-[#e9f0f8]"
                      : "border-2 border-[#d9e1e7] bg-white"
                  } ${
                    route.popup
                      ? "cursor-pointer transition-all duration-200 hover:border-[#0099e5]"
                      : "cursor-default"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex size-10 items-center justify-center rounded-[10px] ${
                      route.active
                        ? "bg-[#0099e5]"
                        : "bg-[#e9f0f8]"
                    }`}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className={
                        route.active
                          ? "text-white"
                          : "text-[#0099e5]"
                      }
                    />
                  </div>

                  {/* Title */}
                  <div className="w-full pt-1.5">
                    <h3 className="m-0 font-['Inter'] text-sm font-bold leading-5 text-[#103653]">
                      {route.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="w-full pt-1">
                    <p className="m-0 font-['Inter'] text-xs font-normal leading-4 text-[#7c96aa]">
                      {route.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT POPUP
          ===================================================== */}
      {activePopup === "support" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-[2px]"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[1116px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              aria-label="Close support popup"
              className="absolute right-5 top-5 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#103653] shadow-md transition-colors hover:bg-[#e9f0f8]"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <SupportPanel />
          </div>
        </div>
      )}

      {/* =====================================================
          PRIVACY POPUP
          ===================================================== */}
      {activePopup === "privacy" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-[2px]"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[1116px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              aria-label="Close privacy popup"
              className="absolute right-5 top-5 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#103653] shadow-md transition-colors hover:bg-[#e9f0f8]"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <PrivacyDataRequestsPanel />
          </div>
        </div>
      )}

      {/* =====================================================
          MEDIA & PRESS POPUP
          ===================================================== */}
      {activePopup === "press" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-[2px]"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[1116px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              aria-label="Close media and press popup"
              className="absolute right-5 top-5 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#103653] shadow-md transition-colors hover:bg-[#e9f0f8]"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <MediaPressPanel />
          </div>
        </div>
      )}

      {/* =====================================================
          GENERAL INQUIRY POPUP
          ===================================================== */}
      {activePopup === "general" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-[2px]"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[1116px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              aria-label="Close general inquiry popup"
              className="absolute right-5 top-5 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#103653] shadow-md transition-colors hover:bg-[#e9f0f8]"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <GeneralInquiryPanel />
          </div>
        </div>
      )}
    </>
  );
}