"use client";

import { useEffect } from "react";

/**
 * Strips `fdprocessedid` attributes injected by password-manager browser
 * extensions (1Password, LastPass, Dashlane, …) before React hydrates,
 * preventing hydration-mismatch warnings in development.
 *
 * Rendered as the very first child of <body> so the effect fires before
 * React attaches any event handlers.
 */
export default function HydrationFix() {
  useEffect(() => {
    document
      .querySelectorAll("[fdprocessedid]")
      .forEach((el) => el.removeAttribute("fdprocessedid"));
  }, []);

  return null;
}
