"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

import { NAV_ROUTES } from "@/lib/constants";
import { trackSignupClick } from "@/lib/analytics-events";

const NAV_LINKS = [
  {
    label: "Produit",
    href: NAV_ROUTES.features,
    children: [
      { label: "Matching IA", href: NAV_ROUTES.matching, desc: "Offres personnalisées" },
      { label: "CV IA", href: NAV_ROUTES.cv, desc: "Atelier CV et score ATS" },
      { label: "Lettres IA", href: NAV_ROUTES.letters, desc: "Une lettre pour chaque offre" },
      { label: "Recherche Emploi", href: NAV_ROUTES.search, desc: "Trouve ton prochain poste" },
    ],
  },
  {
    label: "Ressources",
    href: NAV_ROUTES.ressources,
    children: [
      { label: "Blog", href: NAV_ROUTES.blog, desc: "Conseils et actualités" },
      { label: "FAQ", href: NAV_ROUTES.faq, desc: "Questions fréquentes" },
      { label: "Alternance", href: NAV_ROUTES.alternance, desc: "Guide et offres" },
      { label: "Jeune diplômé", href: NAV_ROUTES.jeuneDiplome, desc: "Lance ta carrière" },
    ],
  },
  {
    label: "Entreprise",
    href: NAV_ROUTES.about,
    children: [
      { label: "À propos", href: NAV_ROUTES.about, desc: "Notre histoire" },
      { label: "Carrières", href: NAV_ROUTES.careers, desc: "Candidature spontanée" },
      { label: "Presse", href: NAV_ROUTES.press, desc: "Contact presse" },
      { label: "Partenaires", href: NAV_ROUTES.partners, desc: "Écoles et associations" },
    ],
  },
  { label: "Tarifs", href: NAV_ROUTES.pricing },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/40 backdrop-blur-md bg-background/70"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <div className="relative z-10 flex h-full items-center justify-start">
              <Logo
                variant="full"
                size="sm"
                linkClassName="h-11 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              />
            </div>

            {/* Desktop Nav */}
            <nav
              ref={dropdownRef}
              className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-1 lg:flex"
              aria-label="Navigation principale"
            >
                {NAV_LINKS.map((link) => (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseLeave={() => link.children && setActiveDropdown(null)}
                  >
                    {link.children ? (
                      <button
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                        className={cn(
                          "flex h-10 items-center gap-1.5 px-4 rounded-full text-sm font-medium leading-none transition-colors duration-300",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          activeDropdown === link.label
                            ? "text-foreground bg-accent"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                        aria-expanded={activeDropdown === link.label}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-300 opacity-60",
                            activeDropdown === link.label ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex h-10 items-center px-4 rounded-full text-sm font-medium leading-none text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                      </Link>
                    )}

                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.children && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 w-72 pt-3"
                        >
                          <div
                            className="rounded-3xl border border-border bg-popover/95 backdrop-blur-xl shadow-2xl shadow-primary/5 overflow-hidden p-2"
                            role="menu"
                          >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-accent focus-visible:bg-accent focus-visible:outline-none transition-colors duration-200 group"
                              role="menuitem"
                            >
                              <span className="text-sm font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
                                {child.label}
                              </span>
                              <span className="text-[11px] text-muted-foreground leading-tight">{child.desc}</span>
                            </Link>
                          ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="relative z-10 hidden h-full items-center justify-end gap-4 lg:flex">
              <AnimatedThemeToggler />
            </div>

            {/* Mobile menu toggle */}
            <div className="relative z-10 flex h-full items-center justify-end gap-2 lg:hidden">
              <AnimatedThemeToggler />
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="menu-mobile"
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            id="menu-mobile"
            className="fixed inset-0 z-40 bg-background lg:hidden pt-16"
          >
            <div className="mx-auto flex h-full max-w-xl flex-col overflow-y-auto px-4 py-6 sm:px-6">
              <nav className="flex flex-col gap-2 mb-10" aria-label="Navigation mobile">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div className="space-y-1 mb-4">
                        <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest px-4 py-2">
                          {link.label}
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex min-h-[52px] items-center justify-between px-4 rounded-2xl text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <span className="font-medium">{child.label}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex min-h-[52px] items-center justify-between px-4 rounded-2xl font-medium text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pb-6">
                <Link
                  href={NAV_ROUTES.download}
                  onClick={() => { setMobileOpen(false); trackSignupClick("header_mobile"); }}
                  className="btn-primary w-full justify-center h-14 text-base shadow-xl shadow-primary/20"
                >
                  Télécharger Karria
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
