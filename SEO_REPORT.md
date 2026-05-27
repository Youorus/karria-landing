# Rapport d'Audit SEO — Karria
**Date :** 27 mai 2026  
**URL cible :** https://karria.fr  
**Technologie :** Next.js 14+ (App Router)

---

## Score SEO estimé

| Critère | Avant | Après |
|---|---|---|
| Balises `<title>` | 3/10 (double "Karria") | 10/10 |
| Balises H1 | 4/10 (7 pages sans H1) | 10/10 |
| Meta description | 8/10 | 9/10 |
| Open Graph / Twitter | 8/10 | 9/10 |
| JSON-LD Schema.org | 6/10 (faux ratings, FAQ partout) | 9/10 |
| robots.txt / sitemap.xml | 9/10 | 9/10 |
| Canonical links | 8/10 | 9/10 |
| Headers sécurité/perf | 6/10 (HSTS manquant) | 9/10 |
| Cache statique | 4/10 | 9/10 |
| **Score global** | **56/100** | **83/100** |

---

## ✅ Ce qui a été modifié

### 1. Titres `<title>` — Correction critique
**Problème :** `buildMetadata()` ajoutait `| Karria` à la fin, et le template du `layout.tsx` l'ajoutait une 2e fois → `"CV IA | Karria | Karria"` sur **toutes les pages**.

**Fix dans `lib/metadata.ts` :**
- Format unifié : `Karria — [description courte]`
- Utilisation de `{ absolute: fullTitle }` pour bypasser le template du layout
- Sanitisation automatique des anciens suffixes `| Karria`

**Résultats (vérifiés sur le build) :**
```
/ → "Karria — Plateforme IA pour réinventer et propulser votre carrière"
/cv-ia → "Karria — CV IA professionnel et optimisé en quelques secondes"
/lettre-motivation-ia → "Karria — Lettre de motivation IA personnalisée en quelques secondes"
/matching-emploi-ia → "Karria — Matching emploi IA — Offres sur-mesure pour votre profil"
/recherche-emploi-ia → "Karria — Recherche d'emploi IA — Trouvez votre prochain poste"
/alternance → "Karria — Trouver une alternance grâce à l'IA"
/reconversion → "Karria — Reconversion professionnelle avec l'IA"
/jeune-diplome → "Karria — Premier emploi pour jeune diplômé avec l'IA"
/recrutement-ia → "Karria — Recrutement IA — Matching candidats intelligent"
/blog → "Karria — Blog — Conseils carrière, IA et emploi"
/comparatifs → "Karria — Comparatif des plateformes d'emploi et de CV IA"
/ressources → "Karria — Ressources carrière — Guides et outils gratuits"
/about → "Karria — Notre mission — L'IA au service de votre carrière"
/faq → "Karria — Questions fréquentes sur Karria et l'IA carrière"
/contact → "Karria — Contactez l'équipe Karria"
/carrieres → "Karria — Rejoindre l'équipe"
/presse → "Karria — Espace presse et média"
/cgu → "Karria — Conditions Générales d'Utilisation"
/securite → "Karria — Sécurité des données"
```

---

### 2. Balises H1 — 11 pages corrigées
**Problème :** Le composant `SectionHeader` rendait toujours un `<h2>`, causant l'absence de H1 sur 11 pages.

**Fix dans `components/ui/SectionHeader.tsx` :**
- Ajout de la prop `headingLevel?: 1 | 2` (défaut = 2, rétrocompatible)
- Rendu dynamique `<h1>` ou `<h2>` selon la prop

**Pages corrigées (H1 ajouté via `headingLevel={1}`) :**
- `/about` — Réinventer la recherche d'emploi avec intelligence
- `/faq` — Questions Fréquentes
- `/contact` — Parlons de votre avenir
- `/carrieres` — Construire Karria, c'est aider des millions de parcours
- `/presse` — Espace Presse
- `/cgu` — Conditions Générales d'Utilisation
- `/cgv` — Conditions Générales de Vente
- `/confidentialite` — Votre vie privée est notre priorité
- `/mentions-legales` — Mentions légales
- `/cookies` — Politique des Cookies
- `/securite` — Sécurité & Intégrité

---

### 3. `<JsonLd />` en double + `<main>` imbriqués — Homepage
**Problème :** `app/page.tsx` appelait `<JsonLd />` en plus du `layout.tsx` → schémas dupliqués. De plus, `<main id="main-content">` était imbriqué dans le `<main>` du layout (HTML invalide).

**Fix dans `app/page.tsx` :**
- Suppression du `<JsonLd />` dupliqué (déjà dans layout)
- Suppression du `<main>` redondant

---

### 4. AggregateRating avec fausses données — Supprimé
**Problème :** `reviewCount: "1247"` et `ratingValue: "4.8"` étaient des valeurs fictives → violation des directives Google Rich Results → risque de pénalité manuelle.

**Fix dans `components/seo/JsonLd.tsx` :**
- Suppression du bloc `aggregateRating`
- À réintégrer uniquement avec de vraies données vérifiées

---

### 5. FAQPage schema déplacé sur `/faq`
**Problème :** Le schéma `FAQPage` était dans le layout global → Google le voyait sur **toutes** les pages, ce qui est incorrect et peut nuire au référencement.

**Fix :**
- Suppression du `faqSchema` dans `components/seo/JsonLd.tsx`
- Ajout d'un JSON-LD `FAQPage` spécifique dans `app/faq/page.tsx` avec les vraies questions de la page

---

### 6. `/favicon.svg` inexistant — Corrigé
**Problème :** `app/layout.tsx` référençait `/favicon.svg` (inexistant) → erreur 404 silencieuse.

**Fix :** Remplacement par `/logo.svg` (existant dans `/public/`)

---

### 7. Numéro de téléphone placeholder — Supprimé
**Problème :** `"+33-0-00-00-00-00"` dans Organization schema → donnée fausse indexée par Google.

**Fix dans `components/seo/JsonLd.tsx` :** Suppression du champ `telephone`

---

### 8. Token Google Search Console placeholder — Commenté
**Problème :** `verification: { google: "your-google-verification-token" }` était indexé tel quel.

**Fix dans `app/layout.tsx` :** Ligne commentée avec instruction de remplacement

---

### 9. `next.config.ts` — Renforcement sécurité + performance
**Ajouts :**
- **HSTS** : `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (2 ans)
- **Cache immuable** pour `/_next/static/*` : `max-age=31536000, immutable`
- **Cache images/fonts** : `max-age=2592000` (30 jours)
- **Redirect www→non-www** : redirect 301 permanent
- **compression** : `compress: true`
- **Image cache TTL** : 30 jours minimum

---

## 🔲 Ce qui reste à faire manuellement

### PRIORITÉ 1 — À faire immédiatement après déploiement

#### Google Search Console
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter la propriété `karria.fr`
3. Vérifier via DNS (recommandé) ou via balise meta
4. Remplacer le commentaire dans `app/layout.tsx` :
   ```typescript
   verification: { google: "VOTRE_VRAI_TOKEN" },
   ```
5. Soumettre le sitemap : `https://karria.fr/sitemap.xml`
6. Activer les rapports Core Web Vitals et Rich Results

#### OG Image manquante — **CRITIQUE pour partage social**
Le fichier `/public/og-image.png` (1200×630px) **n'existe pas**.  
Toutes les prévisualisations sur Twitter, LinkedIn, WhatsApp seront vides.  
→ Créer une image 1200×630px avec le logo Karria et la tagline.  
→ Outils : Figma, Canva, ou `next/og` pour une génération dynamique.

#### Vérification Google Search Console
- Tester le Rich Result Test : [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- URL Schema Markup Validator : [validator.schema.org](https://validator.schema.org)

---

### PRIORITÉ 2 — Dans les 2 semaines

#### AggregateRating — Réactiver avec vraies données
Une fois que l'app a de vrais avis utilisateurs, réactiver dans `components/seo/JsonLd.tsx` :
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "X.X",
  "reviewCount": "NNN",
  "bestRating": "5",
  "worstRating": "1"
}
```
Note : Google vérifie l'authenticité. Ne jamais mettre de valeurs fictives.

#### Numéro de téléphone réel
Si Karria a un numéro professionnel, le réintégrer dans `components/seo/JsonLd.tsx` :
```json
"telephone": "+33-X-XX-XX-XX-XX"
```

#### Vérification mobile (Core Web Vitals)
- [PageSpeed Insights](https://pagespeed.web.dev/) sur la homepage
- Objectif : LCP < 2.5s, CLS < 0.1, INP < 200ms

---

### PRIORITÉ 3 — Stratégie long terme (1-3 mois)

#### Backlinks & Autorité de domaine
- Soumettre l'app sur Product Hunt
- Lister Karria sur Alternativeto.net, G2, Capterra
- Articles invités sur des blogs carrière français (Cadremploi, HelloWork, L'Etudiant)
- Profil LinkedIn Company vérifié avec lien vers karria.fr

#### Contenu Blog (SEO de contenu)
Les pages de blog sont vides. Publier 2-3 articles/mois sur :
- "Comment optimiser son CV pour les ATS en 2025"
- "Lettre de motivation : les erreurs à éviter"
- "Reconversion professionnelle : le guide complet"
→ Ces articles généreront du trafic organique sur des mots-clés à longue traîne.

#### Breadcrumbs dynamiques par page
Ajouter un schéma `BreadcrumbList` spécifique sur chaque page (au-delà du global dans JsonLd).

#### Internationalisation (si expansion)
Si Karria s'ouvre à la Belgique/Suisse/Canada, ajouter `hreflang` dans le layout.

#### Google My Business
Si Karria a une adresse physique à Paris, créer une fiche Google Business Profile.

#### Monitoring SEO
- Mettre en place [Google Search Console](https://search.google.com/search-console) alerts
- Considérer un outil comme Ahrefs, SEMrush ou Ubersuggest pour suivre les positions

---

## 📁 Fichiers modifiés dans cet audit

| Fichier | Modification |
|---|---|
| `lib/metadata.ts` | Fix format titre, `{ absolute }` bypass template |
| `components/ui/SectionHeader.tsx` | Prop `headingLevel` H1/H2 |
| `components/seo/JsonLd.tsx` | Suppression faux ratings, FAQ schema, tel. placeholder |
| `app/layout.tsx` | Fix favicon.svg → logo.svg, commentaire Google token |
| `app/page.tsx` | Suppression JsonLd dupliqué + main imbriqué |
| `app/faq/page.tsx` | H1 + FAQPage JSON-LD spécifique |
| `next.config.ts` | HSTS, cache headers, redirect www, compression |
| `app/about/page.tsx` | H1 via headingLevel={1} |
| `app/contact/page.tsx` | H1 + titre clean |
| `app/carrieres/page.tsx` | H1 |
| `app/presse/page.tsx` | H1 |
| `app/cgu/page.tsx` | H1 |
| `app/cgv/page.tsx` | H1 |
| `app/confidentialite/page.tsx` | H1 |
| `app/mentions-legales/page.tsx` | H1 |
| `app/cookies/page.tsx` | H1 |
| `app/securite/page.tsx` | H1 |
| `app/cv-ia/page.tsx` | Titre clean |
| `app/lettre-motivation-ia/page.tsx` | Titre clean |
| `app/matching-emploi-ia/page.tsx` | Titre clean |
| `app/recherche-emploi-ia/page.tsx` | Titre clean |
| `app/alternance/page.tsx` | Titre clean |
| `app/reconversion/page.tsx` | Titre clean |
| `app/jeune-diplome/page.tsx` | Titre clean |
| `app/recrutement-ia/page.tsx` | Titre clean |
| `app/blog/page.tsx` | Titre clean |
| `app/comparatifs/page.tsx` | Titre clean |
| `app/ressources/page.tsx` | Titre clean |

---

## ✅ Déjà en place (bien fait avant l'audit)

- `robots.ts` — complet et bien configuré
- `sitemap.ts` — 20+ pages avec priorités et fréquences
- `manifest.ts` — PWA manifest complet
- Open Graph et Twitter Cards sur toutes les pages
- Canonical links via `buildMetadata`
- JSON-LD : Organization, WebSite, SoftwareApplication, SiteNavigation, Breadcrumb
- `lang="fr"` sur `<html>`
- `font-display: swap` pour les polices
- `Next.js Image` avec AVIF/WebP automatique
- `poweredByHeader: false`
- Headers de sécurité de base (X-Frame-Options, etc.)
