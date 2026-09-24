"use client";

import React from "react";

const AuthorityMap = () => {
  return (
    <section className="w-full bg-[#EAF0F5] px-5 sm:px-8 md:px-12 lg:px-14 py-14 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1320px] mx-auto px-0 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center gap-5">

        {/* Header */}
        <div className="w-full max-w-[680px] flex flex-col items-start gap-4">

          {/* Label */}
          <div className="w-full flex justify-center items-center gap-1.5">
            <div className="h-5 py-[3px] flex flex-col justify-center items-center">
              <div className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs" />
            </div>

            <div className="text-center text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
              Authority map
            </div>
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col items-center">
            <h2
              className="
                text-center
                text-[#0A2E4B]
                text-2xl
                sm:text-3xl
                font-extrabold
                font-['Inter']
                leading-9
                sm:leading-10
              "
            >
              This hub explains notices. It never replaces
              <br className="hidden sm:block" />
              the governing document.
            </h2>
          </div>
        </div>

        {/* Authority Flow */}
        <div className="w-full pt-2 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">

          {/* This Hub */}
          <div className="min-w-[160px] px-5 py-4 bg-[#0A2E4B] rounded-2xl flex flex-col items-start gap-1">
            <div className="w-full flex flex-col items-center">
              <div className="text-center text-[#9FC7DF] text-[10px] font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                This hub
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="text-center text-white text-xs font-bold font-['Inter'] leading-5">
                Legal Notices
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-14 h-9 flex justify-center items-center shrink-0 rotate-90 lg:rotate-0">
            <span className="text-[#0A8FD0] text-xl font-normal font-['Inter'] leading-9">
              →
            </span>
          </div>

          {/* Documents */}
          <div className="w-full max-w-[640px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

            {/* Terms of Use */}
            <div className="min-h-[72px] px-6 py-3 bg-white rounded-[10px] border border-[#DCE6ED] flex justify-center items-center">
              <div className="text-center text-[#40586A] text-xs font-semibold font-['Inter'] leading-5">
                Terms of Use
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="min-h-[72px] px-6 py-3 bg-white rounded-[10px] border border-[#DCE6ED] flex justify-center items-center">
              <div className="text-center text-[#40586A] text-xs font-semibold font-['Inter'] leading-5">
                Privacy Notice
              </div>
            </div>

            {/* Data Processing Addendum */}
            <div className="min-h-[72px] px-6 py-3 bg-white rounded-[10px] border border-[#DCE6ED] flex justify-center items-center">
              <div className="text-center text-[#40586A] text-xs font-semibold font-['Inter'] leading-5">
                Data Processing
                <br />
                Addendum
              </div>
            </div>

            {/* Cookie Notice */}
            <div className="min-h-[72px] px-6 py-3 bg-white rounded-[10px] border border-[#DCE6ED] flex justify-center items-center">
              <div className="text-center text-[#40586A] text-xs font-semibold font-['Inter'] leading-5">
                Cookie Notice
              </div>
            </div>

            {/* Trust and Security */}
            <div className="min-h-[72px] px-6 py-3 bg-white rounded-[10px] border border-[#DCE6ED] flex justify-center items-center">
              <div className="text-center text-[#40586A] text-xs font-semibold font-['Inter'] leading-5">
                Trust and Security
              </div>
            </div>

            {/* Compliance and Assurance */}
            <div className="min-h-[72px] px-6 py-3 bg-white rounded-[10px] border border-[#DCE6ED] flex justify-center items-center">
              <div className="text-center text-[#40586A] text-xs font-semibold font-['Inter'] leading-5">
                Compliance and
                <br />
                Assurance
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="w-full flex flex-col items-center">
          <p className="max-w-[1000px] text-center text-[#587387] text-xs font-normal font-['Inter'] leading-5">
            Each authoritative document remains the operative source for its
            own rights and obligations — this hub never duplicates operative
            clauses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorityMap;