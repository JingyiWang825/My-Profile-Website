import site from "@/content/site.json";

export type SiteContent = typeof site;

export const content = site as SiteContent;
