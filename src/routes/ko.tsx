import { createFileRoute } from "@tanstack/react-router";

import { SiteHome } from "../components/SiteHome";
import { localeHead } from "../i18n/content";

export const Route = createFileRoute("/ko")({
  head: () => localeHead("ko"),
  component: () => <SiteHome locale="ko" />,
});
