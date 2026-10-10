import { useEffect } from "react";

const SITE_NAME = "NRM Mendoza Medical Clinic, Pharmacy and Laboratory";

function upsertMeta(selector: string, create: () => HTMLElement, apply: (el: HTMLElement) => void): void {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

export interface PageSeo {
  /** Full document title — the site name is appended automatically. */
  title: string;
  description: string;
  /** Adds og:type=article (unused in v1, kept for future content pages). */
  type?: string;
}

/**
 * Sets the document title and meta description for the current route.
 * Keeping this in a hook avoids an SEO dependency while still giving every
 * page unique, crawlable metadata.
 */
export function usePageSeo({ title, description }: PageSeo): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title.includes("NRM Mendoza") ? title : `${title} | ${SITE_NAME}`;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      return meta;
    }, (el) => el.setAttribute("content", description));

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    }, (el) => el.setAttribute("content", document.title));

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    }, (el) => el.setAttribute("content", description));

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
