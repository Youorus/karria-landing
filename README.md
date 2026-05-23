# Karria — Landing Page

> Plateforme IA qui réinvente la carrière, la recherche d'emploi et le matching candidat-offre.

Landing page **production-ready** construite avec Next.js 15, TypeScript strict, TailwindCSS, Framer Motion et Lenis.

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| Next.js | 15.x | App Router, SSG, metadata |
| TypeScript | 5.x | Strict mode |
| TailwindCSS | 3.x | Design system complet |
| Framer Motion | 11.x | Animations premium |
| Lenis | 1.x | Smooth scroll |
| Lucide React | Latest | Icônes |

---

## Installation

### Prérequis

- Node.js **18.17+** ou **20+**
- npm, yarn ou pnpm

### 1. Cloner / dézipper le projet

```bash
cd karria
```

### 2. Installer les dépendances

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Variables d'environnement

```bash
cp .env.example .env.local
```

Éditez `.env.local` si nécessaire (l'URL du site est pré-configurée pour le développement local).

### 4. Lancer en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

---

## Scripts disponibles

| Script | Description |
|---|---|
| `npm run dev` | Serveur de développement (hot reload) |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Analyse ESLint |

---

## Structure du projet

```
karria/
├── app/                          # App Router Next.js
│   ├── layout.tsx                # Root layout (fonts, metadata, providers)
│   ├── page.tsx                  # Page d'accueil
│   ├── globals.css               # Design tokens et utilitaires globaux
│   ├── sitemap.ts                # Sitemap dynamique
│   ├── robots.ts                 # robots.txt
│   ├── cv-ia/                    # SEO page CV IA
│   ├── lettre-motivation-ia/     # SEO page lettres de motivation
│   ├── matching-emploi-ia/       # SEO page matching IA
│   ├── recherche-emploi-ia/      # SEO page recherche d'emploi
│   ├── alternance/               # SEO page alternance
│   ├── reconversion/             # SEO page reconversion
│   ├── jeune-diplome/            # SEO page jeune diplômé
│   ├── recrutement-ia/           # SEO page recrutement IA
│   ├── blog/                     # Blog SEO-ready
│   ├── comparatifs/              # Pages comparatifs
│   └── ressources/               # Hub de ressources
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation sticky animée
│   │   ├── Footer.tsx            # Footer complet avec liens
│   │   └── SmoothScrollProvider.tsx  # Lenis scroll provider
│   ├── sections/
│   │   ├── Hero.tsx              # Section hero avec phone mockup
│   │   ├── Problem.tsx           # Section problème (pain points)
│   │   ├── Solution.tsx          # Section solution Karria
│   │   ├── Features.tsx          # Bento grid des fonctionnalités
│   │   ├── HowItWorks.tsx        # Comment ça marche (4 étapes)
│   │   ├── MobileApp.tsx         # Section mobile app premium
│   │   ├── Experience.tsx        # Section émotionnelle
│   │   ├── SocialProof.tsx       # Statistiques et témoignages
│   │   ├── Pricing.tsx           # Tarifs avec toggle mensuel/annuel
│   │   └── FinalCTA.tsx          # Call-to-action final
│   ├── ui/
│   │   ├── Logo.tsx              # Logo Karria (icon + full)
│   │   ├── PhoneMockup.tsx       # Mockup iPhone animé premium
│   │   ├── AnimatedCounter.tsx   # Compteur animé scroll-triggered
│   │   └── SectionHeader.tsx     # En-têtes de section réutilisables
│   └── seo/
│       └── JsonLd.tsx            # Schema.org JSON-LD (4 schemas)
│
├── lib/
│   ├── utils.ts                  # Utilitaires (cn, formatNumber, etc.)
│   ├── features.ts               # Données des fonctionnalités
│   └── metadata.ts               # Helper buildMetadata()
│
├── public/
│   ├── logo.svg                  # Logo icon Karria
│   └── logo-full.svg             # Logo complet avec wordmark
│
├── next.config.ts                # Config Next.js (headers, images)
├── tailwind.config.ts            # Design system Tailwind complet
├── tsconfig.json                 # TypeScript strict
└── package.json
```

---

## Design System

### Couleurs principales

| Token | Valeur | Usage |
|---|---|---|
| `karria-600` | `#2563EB` | CTA, boutons primaires |
| `karria-500` | `#3B82F6` | Accents, hover |
| `karria-400` | `#60A5FA` | Glow, badges |
| `background` | `#09090b` | Fond principal |
| `surface-1` | `#0e0e11` | Cards, surfaces |
| `surface-2` | `#141418` | Surfaces secondaires |

### Typographie

- **Display / Headings** : Syne (Google Fonts)
- **Body** : DM Sans (Google Fonts)
- **Mono** : DM Mono (Google Fonts)

### Animations disponibles

```css
animate-float          /* Flottement doux */
animate-glow-pulse     /* Pulsation glow */
animate-fade-in        /* Apparition en fondu */
animate-slide-up       /* Glissement vers le haut */
animate-shimmer        /* Effet shimmer */
animate-gradient-x     /* Gradient animé */
```

### Classes utilitaires

```css
.gradient-text         /* Texte dégradé bleu */
.glass                 /* Fond glassmorphism */
.card-glow             /* Card avec hover glow */
.btn-primary           /* Bouton primaire */
.btn-secondary         /* Bouton secondaire */
.btn-ghost             /* Bouton ghost */
.shadow-glow           /* Ombre bleue subtile */
.shadow-glow-lg        /* Ombre bleue plus forte */
.bg-grid-pattern       /* Pattern grille de fond */
```

---

## SEO

### Architecture SEO en place

- **Metadata Next.js** complète (title, description, keywords, OpenGraph, Twitter Cards)
- **Sitemap dynamique** via `app/sitemap.ts`
- **robots.txt** via `app/robots.ts`
- **Schema.org JSON-LD** : Organization, WebSite, SoftwareApplication, FAQPage
- **Pages optimisées** par intention de recherche (12 pages SEO)
- **Maillage interne** sur toutes les pages SEO

### Pages SEO cibles

| Page | Intention | Priorité |
|---|---|---|
| `/` | Homepage | 1.0 |
| `/cv-ia` | CV IA | 0.9 |
| `/lettre-motivation-ia` | Lettres IA | 0.9 |
| `/matching-emploi-ia` | Matching IA | 0.9 |
| `/recherche-emploi-ia` | Recherche emploi | 0.85 |
| `/alternance` | Alternance | 0.8 |
| `/reconversion` | Reconversion | 0.8 |
| `/jeune-diplome` | Jeunes diplômés | 0.8 |
| `/recrutement-ia` | Recrutement | 0.8 |
| `/blog` | Content | 0.75 |

---

## Déploiement

### Vercel (recommandé)

```bash
# 1. Push sur GitHub/GitLab
# 2. Importer le projet sur vercel.com
# 3. Configurer les variables d'environnement
# 4. Déployer
```

Variables d'environnement à configurer sur Vercel :
```
NEXT_PUBLIC_SITE_URL=https://karria.io
```

### Docker (optionnel)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## Étapes suivantes recommandées

### Court terme
- [ ] Connecter un CMS (Contentlayer, Sanity, Payload) pour le blog
- [ ] Ajouter des vraies captures d'écran de l'application mobile
- [ ] Configurer Google Analytics / PostHog
- [ ] Ajouter un formulaire de waitlist (Tally, Typeform)

### Moyen terme
- [ ] Ajouter des pages blog individuelles (`/blog/[slug]`)
- [ ] Créer les pages `/comparatifs/[slug]` programmatiques
- [ ] Intégrer une authentification (Clerk, NextAuth)
- [ ] Mettre en place des tests E2E (Playwright)

### Long terme
- [ ] Pages programmatiques pour villes et secteurs
- [ ] Calculateur de compatibilité CV/offre interactif
- [ ] Intégration API offres d'emploi (France Travail, Indeed)

---

## Performance & Accessibilité

- Images optimisées via `next/image`
- Fonts auto-optimisées via `next/font`
- Code splitting automatique (App Router)
- Animations respectant `prefers-reduced-motion`
- Sémantique HTML correcte (main, section, article, nav)
- Labels aria sur les éléments interactifs
- Contraste suffisant sur tous les textes

---

## Licence

Propriété de Karria — Usage interne uniquement.

---

*Projet généré avec soin pour Karria — startup IA carrière.*
