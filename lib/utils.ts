import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number, locale = "fr-FR"): string {
  return new Intl.NumberFormat(locale).format(n);
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://karria.fr";
export const SITE_NAME = "Karria";
export const SITE_DESCRIPTION =
  "Karria est la plateforme IA qui réinvente votre carrière. Matching intelligent, CV optimisé, lettres de motivation ciblées et accompagnement carrière personnalisé.";
