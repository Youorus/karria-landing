"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

import { NAV_ROUTES } from "@/lib/constants";

const NAV_LINKS = [
  {
    label: "Produit",
    href: "#features",
    children: [
      { label: "Matching IA", href: NAV_ROUTES.matching, desc: "Offres personnalisées" },
      { label: "CV IA", href: NAV_ROUTES.cv, desc: "CV optimisés automatiquement" },
      { label: "Lettres IA", href: NAV_ROUTES.letters, desc: "Candidatures ciblées" },
      { label: "Recherche Emploi", href: NAV_ROUTES.search, desc: "Trouvez votre prochain rôle" },
    ],
  },
  {
    label: "Ressources",
    href: NAV_ROUTES.ressources,
    children: [
      { label: "Blog", href: NAV_ROUTES.blog, desc: "Conseils et actualités" },
      { label: "FAQ", href: NAV_ROUTES.faq, desc: "Questions fréquentes" },
      { label: "Alternance", href: NAV_ROUTES.alternance, desc: "Guides & opportunités" },
      { label: "Jeune diplômé", href: NAV_ROUTES.jeuneDiplome, desc: "Lancez votre carrière" },
    ],
  },
  {
    label: "Entreprise",
    href: NAV_ROUTES.about,
    children: [
      { label: "À propos", href: NAV_ROUTES.about, desc: "Notre vision & Marc Takoumba" },
      { label: "Carrières", href: NAV_ROUTES.careers, desc: "Rejoignez l'aventure" },
      { label: "Presse", href: NAV_ROUTES.press, desc: "Espace media & kits" },
      { label: "Partenaires", href: NAV_ROUTES.partners, desc: "Collaborons ensemble" },
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
          <div className="relative flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="relative z-10 flex h-full items-center justify-start">
              <Logo variant="full" size="sm" />
            </div>

            {/* Desktop Nav */}
            <nav
              ref={dropdownRef}
              className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-1 lg:flex"
              aria-label="Navigation principale"
            >
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="relative">
                    {link.children ? (
                      <button
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                        className={cn(
                          "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
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
                        className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300"
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
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute top-full left-0 mt-3 w-72 rounded-3xl border border-border bg-popover/95 backdrop-blur-xl shadow-2xl shadow-primary/5 overflow-hidden p-2"
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-accent transition-all duration-200 group"
                              role="menuitem"
                            >
                              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {child.label}
                              </span>
                              <span className="text-[11px] text-muted-foreground leading-tight">{child.desc}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="relative z-10 hidden h-full items-center justify-end gap-4 md:flex">
              <AnimatedThemeToggler />
            </div>

            {/* Mobile menu toggle */}
            <div className="relative z-10 flex h-full items-center justify-end gap-3 md:hidden">
              <AnimatedThemeToggler />
              <button
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
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
            className="fixed inset-0 z-40 bg-background md:hidden pt-20"
            aria-hidden={!mobileOpen}
          >
            <div className="flex flex-col h-full overflow-y-auto px-6 py-8">
              <nav className="flex flex-col gap-2 mb-12" aria-label="Navigation mobile">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div className="space-y-1 mb-4">
                        <div className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest px-4 py-2">
                          {link.label}
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between px-4 py-4 rounded-2xl text-foreground hover:bg-accent transition-all"
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
                        className="flex items-center justify-between px-4 py-4 rounded-2xl text-xl font-semibold text-foreground hover:bg-accent transition-all"
                      >
                        {link.label}
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto space-y-4 pb-8">
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="btn-secondary w-full justify-center h-14"
                >
                  Se connecter
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center h-14 text-lg shadow-xl shadow-primary/20"
                >
                  Commencer gratuitement
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
