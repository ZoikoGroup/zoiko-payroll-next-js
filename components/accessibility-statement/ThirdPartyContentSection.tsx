import React from "react";
import SectionShell from "./SectionShell";

export default function ThirdPartyContentSection() {
  return (
    <SectionShell
      id="third-party"
      title="Third-party & user-provided content"
      intro="Some content and integrated services are provided by third parties (for example, connected HRIS or identity providers) and are governed by that provider's own accessibility commitments. This boundary does not remove our responsibility to help you — if a third-party integration blocks your task, contact us through the feedback form and we'll help you find a practical path forward."
    />
  );
}
