import { createFileRoute } from "@tanstack/react-router";

import { SiteHome } from "../components/SiteHome";
import { localeHead } from "../i18n/content";

export const Route = createFileRoute("/ja")({
  head: () => localeHead("ja"),
  component: () => <SiteHome locale="ja" />,
});
