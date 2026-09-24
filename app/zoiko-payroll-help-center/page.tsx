import {
  ArticleTemplate,
  BrowseByProductArea,
  BrowseHelpTopics,
  FrequentlyAskedQuestions,
  HelpCenterHero,
  KnownIssuesStatus,
  NeedMoreHelp,
  PopularRightNow,
  SearchResults,
} from "@/components/zoiko-payroll-help-center";

import React from "react";

export default function Page() {
  return (
    <main>
      <HelpCenterHero />
      <PopularRightNow />
      <BrowseHelpTopics />
      <BrowseByProductArea />
      <SearchResults />
      <ArticleTemplate />
      <NeedMoreHelp />
      <KnownIssuesStatus />
      <FrequentlyAskedQuestions />
    </main>
  );
}