import { createFileRoute } from "@tanstack/react-router";

import { SiteHome } from "../components/SiteHome";
import { localeHead } from "../i18n/content";

export const Route = createFileRoute("/zh-Hant")({
  head: () => localeHead("zh-Hant"),
  component: () => <SiteHome locale="zh-Hant" />,
});
