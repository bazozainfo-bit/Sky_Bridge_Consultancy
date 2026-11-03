import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { studyPages } from "@/data/study";
import { visaPages } from "@/data/visa";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: [string, number][] = [
    ["/", 1], ["/study-abroad/", 0.9], ["/tourist-visa/", 0.9], ["/air-ticketing/", 0.8],
    ["/about/", 0.7], ["/contact/", 0.8], ["/faq/", 0.7],
    ...studyPages.map((p) => [`/study-in-${p.slug}/`, 0.9] as [string, number]),
    ...visaPages.map((p) => [`/visit-visa/${p.slug}/`, 0.8] as [string, number]),
    ["/terms-and-conditions/", 0.3], ["/privacy-policy/", 0.3],
  ];
  return paths.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly", priority }));
}
