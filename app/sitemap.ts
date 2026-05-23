import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/cv-ia`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/lettre-motivation-ia`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/matching-emploi-ia`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/recherche-emploi-ia`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/alternance`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/reconversion`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/jeune-diplome`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/recrutement-ia`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/comparatifs`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ressources`,
      lastModified: now,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.7,
    },
  ];

  return staticPages;
}
