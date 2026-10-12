import type { NextConfig } from "next";

// next.config.ts
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy short URLs → current routes
      { source: '/about-us',              destination: '/company/about-us',              permanent: true },
      { source: '/zoiko-one',             destination: '/company/zoiko-one',             permanent: true },
      { source: '/zoiko-payroll',         destination: '/',                              permanent: true },
      { source: '/zoiko-identity',        destination: '/company/zoiko-group',           permanent: true },
      { source: '/company/contact',       destination: '/zoiko-payroll-contact',         permanent: true },
      { source: '/support',               destination: '/resources/help-center',         permanent: true },
      { source: '/help-center',           destination: '/resources/help-center',         permanent: true },
      { source: '/docs',                  destination: '/resources/documentation',       permanent: true },
      { source: '/release-notes',         destination: '/resources/release-notes',       permanent: true },
      { source: '/status',                destination: '/resources/system-status',       permanent: true },
      { source: '/tour',                  destination: '/zoiko-payroll-product-tour',    permanent: true },
      { source: '/product',               destination: '/product-module',                permanent: true },
      { source: '/solution',              destination: '/solutions',                     permanent: true },
      { source: '/solutions/finder',      destination: '/solutions',                     permanent: true },
      { source: '/ecosystem',             destination: '/company/zoiko-group',           permanent: true },
      { source: '/multi-entity',          destination: '/solutions/multi-entity',        permanent: true },

      // Auth path mismatch
      { source: '/auth/register',         destination: '/register',                      permanent: true },
      { source: '/auth/reset-password',   destination: '/reset-password',                permanent: true },

      // Legal short URLs
      { source: '/privacy',               destination: '/legal/privacy-notice',          permanent: true },
      { source: '/cookies',               destination: '/legal/cookie-notice',           permanent: true },
      { source: '/terms-of-service',      destination: '/legal/service-terms',           permanent: true },
      { source: '/aup',                   destination: '/legal/acceptable-use-policy',   permanent: true },
      { source: '/accessibility',         destination: '/legal/accessibility-statement', permanent: true },
      { source: '/legal-notices',         destination: '/legal/legal-notices',           permanent: true },
      { source: '/notices',               destination: '/legal/legal-notices',           permanent: true },
      { source: '/trust-and-security',    destination: '/company/trust-center',          permanent: true },
      { source: '/responsible-disclosure', destination: '/company/trust-center',         permanent: true },

      // Global payroll
      { source: '/global-payroll/coverage',       destination: '/global-payroll/jurisdiction-coverage', permanent: true },
      { source: '/local-payroll-requirements',     destination: '/global-payroll/payroll-requirements', permanent: true },
      { source: '/jurisdiction-guides/:slug',      destination: '/resources/jurisdiction-guides',       permanent: true },
      { source: '/payroll-glossary',               destination: '/resources/payroll-glossary',          permanent: true },
      { source: '/united-arab-emirates',           destination: '/resources/jurisdiction-guides',       permanent: true },

      // Resources sub-pages that don't exist yet
      { source: '/resources/system-status/incidents', destination: '/resources/system-status',          permanent: false },
      { source: '/resources/help-center/validate',    destination: '/resources/help-center',            permanent: false },
      { source: '/resources/help-center/verified-support', destination: '/resources/help-center',       permanent: false },
      { source: '/resources/release-notes/:slug',      destination: '/resources/release-notes',         permanent: false },
    ];
  },
};

export default nextConfig;
