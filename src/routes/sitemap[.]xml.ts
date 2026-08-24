import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { HREFLANG, LOCALES, LOCALE_PATHS } from "../i18n/content";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = LOCALES.map((locale) => {
          const alternates = LOCALES.map(
            (l) =>
              `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${BASE_URL}${LOCALE_PATHS[l]}" />`,
          );
          return [
            `  <url>`,
            `    <loc>${BASE_URL}${LOCALE_PATHS[locale]}</loc>`,
            ...alternates,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />`,
            `    <changefreq>monthly</changefreq>`,
            `    <priority>${locale === "en" ? "1.0" : "0.8"}</priority>`,
            `  </url>`,
          ].join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
