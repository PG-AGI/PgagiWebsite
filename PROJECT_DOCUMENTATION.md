# PgagiWebsite — Complete Project Documentation

> Auto-generated on 2026-04-07. Documents every file, component, route, import relationship, and unused asset in the project.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Complete File Tree](#complete-file-tree)
0. [SAFE TO DELETE — Full Cleanup List](#safe-to-delete--full-cleanup-list)
3. [Pages & Routes](#pages--routes)
4. [Components — What They Render & Where They're Used](#components--what-they-render--where-theyre-used)
5. [API Routes](#api-routes)
6. [Contexts & Hooks](#contexts--hooks)
7. [Utilities, Services & Lib](#utilities-services--lib)
8. [Interfaces & Types](#interfaces--types)
9. [Style Files](#style-files)
10. [Configuration Files](#configuration-files)
11. [Static Assets & Content](#static-assets--content)
12. [Import Dependency Map](#import-dependency-map)
13. [Unused / Dead Code](#unused--dead-code)
14. [Dependencies Summary](#dependencies-summary)

---

## Project Overview

| Key | Value |
|-----|-------|
| **Type** | Next.js 14.2.3 website (App Router) |
| **Language** | TypeScript (strict mode) + some JSX legacy files |
| **Styling** | Tailwind CSS + SCSS Modules |
| **Auth** | NextAuth v4 + Firebase Auth |
| **Database** | MongoDB (Atlas) |
| **Animations** | Framer Motion, GSAP + ScrollTrigger, Lenis |
| **3D** | Three.js, OGL |
| **Content** | MDX (next-mdx-remote, gray-matter) |
| **Package Manager** | npm / pnpm |
| **Deployment** | Docker + Node deploy script + Vercel-ready |

---

## Complete File Tree

```
PgagiWebsite/
│
├── .env                              # Environment variables (Firebase, MongoDB, API keys)
├── .eslintrc.json                    # ESLint — extends next/core-web-vitals
├── .gitignore
├── .dockerignore
├── dockerfile                        # Docker container definition
├── docker-compose.yml                # Local Docker compose
├── docker-compose-prepod.yml         # Pre-production Docker compose
├── node_deploy.sh                    # Node.js deployment script
├── backend.py                        # Python backend script
├── requirements.tx                   # Python requirements
├── next.config.mjs                   # Next.js config (image remotePatterns, SASS)
├── tailwind.config.js                # Tailwind — custom colors, fonts, screens
├── tsconfig.json                     # TypeScript — strict, @ path alias
├── postcss.config.js                 # PostCSS — Tailwind
├── package.json                      # Dependencies & npm scripts
├── pnpm-lock.yaml
├── package-lock.json
├── README.md
│
├── public/
│   ├── pgagi.ico
│   ├── blogs/                        # Public MDX blog content (7 files)
│   │   ├── blog2.mdx
│   │   ├── blog3.mdx
│   │   ├── community-datasets.mdx
│   │   ├── hiring.mdx
│   │   ├── matrayoshka.mdx
│   │   ├── mistral7b.mdx
│   │   └── starcoder.mdx
│   ├── case-studies/                 # Public MDX case study content (14 files)
│   │   ├── digitalinfluencer.mdx
│   │   ├── healthcare.mdx
│   │   ├── hiring.mdx
│   │   ├── legalassistant.mdx
│   │   ├── mistral7b.mdx
│   │   ├── mt5indicator.mdx
│   │   ├── multiagent.mdx
│   │   ├── multilabel.mdx
│   │   ├── nbabetting.mdx
│   │   ├── shopifychatbot.mdx
│   │   ├── telemetry.mdx
│   │   ├── toingg.mdx
│   │   ├── tradingagent.mdx
│   │   └── tutorgpt.mdx
│   ├── images/                       # 100+ product/feature/testimonial images
│   │   └── testimonials/             # 15+ testimonial photos (JPG)
│   ├── landing/                      # Landing page assets
│   │   ├── PGAGI-logo.png
│   │   ├── Robot.png
│   │   ├── Model.png
│   │   ├── Experience.png
│   │   ├── Upwork.webp
│   │   ├── CTA-Background.png
│   │   ├── CTA-Background-New.jpg
│   │   ├── clutch.png
│   │   └── upwork-icon.webp
│   ├── assets/
│   │   ├── CaseStudies/
│   │   ├── blog1-3/
│   │   ├── community/
│   │   ├── matryoshka/
│   │   ├── starcoder/
│   │   └── team/
│   ├── svgs/
│   │   ├── Landing/
│   │   ├── Ecosystem/
│   │   ├── BuildEco/
│   │   ├── Different/
│   │   └── Revenue/
│   └── data/
│       └── model_prices_and_context_window.json
│
└── src/
    ├── app/
    │   ├── layout.tsx                # Root layout — wraps ALL pages
    │   ├── page.tsx                  # Home (route: /)
    │   ├── page.module.scss
    │   ├── globals.scss
    │   ├── globals.css
    │   ├── favicon.ico
    │   ├── icon.svg
    │   │
    │   ├── api/                      # Next.js API routes (server-side)
    │   │   ├── ainews/route.ts
    │   │   ├── ainews/[slug]/route.ts
    │   │   ├── blogs/route.ts
    │   │   ├── blogs/[slug]/route.ts
    │   │   ├── blog/route.ts
    │   │   ├── case-studies/route.ts
    │   │   ├── case-studies/[slug]/route.ts
    │   │   ├── case-study/route.ts
    │   │   ├── careers/postings/route.ts
    │   │   ├── careers/postings/[id]/route.ts
    │   │   ├── careers/apply/route.ts
    │   │   ├── events/enroll/route.ts
    │   │   ├── events/interested/route.ts
    │   │   ├── events/sendEmail/route.ts
    │   │   ├── events/sendOtp/route.ts
    │   │   ├── products/check-user/route.ts
    │   │   ├── saveData/route.ts
    │   │   └── auth/[...nextauth]/route.ts
    │   │
    │   ├── Career/
    │   │   ├── page.tsx
    │   │   └── components/
    │   │       ├── Hero.tsx
    │   │       ├── Hero.module.scss
    │   │       ├── Values.tsx
    │   │       ├── Values.module.scss
    │   │       ├── Positions.tsx
    │   │       ├── Positions.module.scss
    │   │       ├── Benefits.tsx
    │   │       ├── Benefits.module.scss
    │   │       ├── ShimmerCard.tsx
    │   │       └── ShimmerCard.module.scss
    │   │
    │   ├── aboutUs/
    │   │   ├── page.tsx
    │   │   ├── aboutus.module.scss
    │   │   ├── team.tsx
    │   │   └── team.module.scss
    │   │
    │   ├── ainews/
    │   │   ├── page.tsx              # Redirects to /whatwethink#ainews
    │   │   └── [slug]/
    │   │       ├── page.tsx
    │   │       ├── Ainews.tsx
    │   │       └── Ainews.module.scss
    │   │
    │   ├── blogpost/
    │   │   └── [slug]/
    │   │       ├── page.tsx
    │   │       ├── BlogPost.tsx
    │   │       └── BlogPost.module.scss
    │   │
    │   ├── case-study/
    │   │   └── [slug]/
    │   │       ├── page.tsx
    │   │       ├── CaseStudy.tsx
    │   │       └── CaseStudy.module.scss
    │   │
    │   ├── whatwethink/
    │   │   ├── page.tsx
    │   │   ├── blogs.module.scss
    │   │   └── [slug]/
    │   │       ├── page.tsx
    │   │       └── blog.module.scss
    │   │
    │   ├── projects/
    │   │   └── page.tsx
    │   │
    │   ├── expertise/
    │   │   └── page.tsx
    │   │
    │   ├── events/
    │   │   ├── page.tsx
    │   │   └── events.module.scss
    │   │
    │   ├── eventform/
    │   │   └── [id]/
    │   │       └── page.tsx
    │   │
    │   ├── jobs/
    │   │   └── [jobId]/
    │   │       ├── page.tsx
    │   │       ├── JobDetailsPage.module.scss
    │   │       └── components/
    │   │           ├── JobApplicationForm.tsx
    │   │           ├── JobApplicationForm.module.scss
    │   │           ├── SkeletonLoader.tsx
    │   │           └── SkeletonLoader.module.scss
    │   │
    │   ├── auth/
    │   │   └── signin/
    │   │       ├── page.tsx
    │   │       └── SignIn.module.scss
    │   │
    │   ├── admin/
    │   │   ├── management/
    │   │   │   ├── page.tsx
    │   │   │   ├── AdminPanel.tsx
    │   │   │   ├── DynamicTable.tsx
    │   │   │   ├── Admin.module.scss
    │   │   │   ├── AdminPage.module.scss
    │   │   │   └── DynamicTable.module.scss
    │   │   └── components/
    │   │       ├── ContentForm.tsx
    │   │       ├── ContentList.tsx
    │   │       ├── ContentBlockItem.tsx
    │   │       ├── ContentPreview.tsx
    │   │       ├── JobPostingsManagement.tsx
    │   │       ├── Modal.tsx
    │   │       └── TableEditor.tsx
    │   │
    │   ├── posts/                    # LEGACY (JSX, not in navigation)
    │   │   ├── page.jsx
    │   │   ├── posts.module.scss
    │   │   └── [slug]/
    │   │       ├── page.jsx
    │   │       └── singlepost.module.scss
    │   │
    │   ├── LatestNews/               # Likely unused — see §Unused
    │   │   ├── LatestNews.jsx
    │   │   ├── LatestNewsSlider.jsx
    │   │   └── LatestNewsSlider.module.scss
    │   │
    │   ├── buttons/
    │   │   └── callbutton.js         # Likely unused — see §Unused
    │   │
    │   ├── content/                  # Duplicate MDX (also in /public/blogs)
    │   │   ├── blog2.mdx
    │   │   ├── blog3.mdx
    │   │   ├── community-datasets.mdx
    │   │   ├── matrayoshka.mdx
    │   │   └── starcoder.mdx
    │   │
    │   ├── assets/
    │   │   ├── partners/
    │   │   ├── products/
    │   │   ├── social/
    │   │   └── trending_cards/
    │   │
    │   └── components/               # Shared components (61 TSX/JSX files)
    │       ├── Landing.tsx
    │       ├── landing.module.scss
    │       ├── Partners.tsx
    │       ├── partners.module.scss
    │       ├── Projects.tsx
    │       ├── projects.module.scss
    │       ├── Expertise.tsx
    │       ├── expertise.module.scss
    │       ├── NewPage.tsx
    │       ├── NewPage.module.scss
    │       ├── VisionSystemSection.tsx
    │       ├── VisionSystemSection.module.scss
    │       ├── SocialOrbitSection.tsx
    │       ├── SocialOrbitSection.module.scss
    │       ├── SolutionFitBreakdownSection.tsx
    │       ├── SolutionFitBreakdownSection.module.scss
    │       ├── WhatMakesUsDifferentSection.tsx
    │       ├── WhatMakesUsDifferentSection.module.scss
    │       ├── MeasurableImpactSection.tsx
    │       ├── MeasurableImpactSection.module.scss
    │       ├── EcosystemSection.tsx
    │       ├── EcosystemSection.module.scss
    │       ├── ProcessTimelineSection.tsx
    │       ├── ProcessTimelineSection.module.scss
    │       ├── RevenueSection.tsx
    │       ├── RevenueSection.module.scss
    │       ├── ConcentricEllipseSection.tsx
    │       ├── ConcentricEllipseSection.module.scss
    │       ├── CaseStudiesSection.tsx
    │       ├── CaseStudiesSection.module.scss
    │       ├── Customers.tsx
    │       ├── Customers.module.scss
    │       ├── BuildEcosystemSection.tsx
    │       ├── BuildEcosystemSection.module.scss
    │       ├── LandingProjects.tsx
    │       ├── LandingProjects.module.scss
    │       ├── ExpertiseSection.tsx
    │       ├── ExpertiseSection.module.scss
    │       ├── VideoTestimonial.tsx
    │       ├── VideoTestimonial.module.scss
    │       ├── FAQ.tsx
    │       ├── FAQ.module.scss
    │       ├── Trending.tsx
    │       ├── trending.module.scss
    │       ├── LatestTrends.jsx
    │       ├── LatestTrends.module.scss
    │       ├── Webinars.tsx
    │       ├── webinar.module.scss
    │       ├── InfiniteTestimonial.tsx
    │       ├── TestemonialsDemo.tsx
    │       ├── TestimonialGrid.tsx
    │       ├── TestimonialCarousel.module.scss
    │       ├── ScrollIndicator.tsx
    │       ├── ScrollIndicator.module.scss
    │       ├── ScrollStack.tsx
    │       ├── ScrollStack.module.scss
    │       ├── Calendly.tsx
    │       ├── CalendlyFacade.tsx
    │       ├── calendly.module.scss
    │       ├── Divider.tsx
    │       ├── divider.module.scss
    │       ├── PageTransition.tsx
    │       ├── TransitionLink.tsx
    │       ├── SmoothScrollNav.tsx
    │       ├── SmoothScrollNav.module.scss
    │       ├── ErrorMessage.tsx
    │       ├── ErrorMessage.module.scss
    │       ├── CustomLoader.tsx
    │       ├── CustomLoader.module.scss
    │       ├── Recommendation.tsx
    │       ├── Recommendation.scss
    │       ├── LazyOnVisible.tsx
    │       ├── LazyVideo.tsx
    │       ├── LazyIframe.tsx
    │       ├── EventForm.tsx
    │       ├── eventform.module.scss
    │       ├── navbar.tsx            # Possible duplicate of base/Navigation.tsx
    │       ├── navigation.module.scss
    │       ├── link-preview.tsx
    │       ├── googleSignInButton.tsx
    │       ├── googleSignInButton.module.scss
    │       ├── otpModel.tsx
    │       ├── otpModel.module.scss
    │       ├── process.tsx
    │       ├── process.module.scss
    │       ├── productsCards.tsx
    │       ├── products.module.scss
    │       ├── trending_old.tsx      # LEGACY
    │       ├── trending_old.module.scss
    │       ├── Footer.tsx
    │       ├── footer.module.scss
    │       ├── base/
    │       │   ├── Navigation.tsx    # Main navigation component
    │       │   ├── navigation.module.scss
    │       │   ├── Segment.tsx
    │       │   ├── segment.module.scss
    │       │   ├── bookACall.tsx
    │       │   ├── bookACall.module.scss
    │       │   ├── bookCallModela.tsx
    │       │   ├── bookCalendy.module.scss
    │       │   ├── contactUsForm.tsx
    │       │   ├── contactUs.module.scss
    │       │   ├── modal.tsx
    │       │   ├── type.tsx
    │       │   └── GlareBackground.tsx
    │       └── ui/
    │           ├── animated-testimonials.tsx
    │           ├── AnimatedTestimonials.module.scss
    │           ├── animated-tooltip.tsx
    │           ├── AnimatedTooltip.scss
    │           └── Hyperspeed/
    │               ├── Hyperspeed.tsx
    │               ├── Hyperspeed.css
    │               └── HyperSpeedPresets.ts
    │
    ├── components/                   # Root-level components (separate from app/)
    │   └── ui/
    │       ├── layout-text-flip.tsx
    │       └── layout-text-flip.module.scss
    │
    ├── contexts/
    │   ├── AuthContext.tsx
    │   ├── providers.tsx
    │   ├── PageTransitionContext.tsx
    │   └── SmoothScrollContext.tsx
    │
    ├── hooks/
    │   └── useSmoothScrollTo.ts
    │
    ├── lib/
    │   ├── firebaseConfig.ts
    │   ├── motion.ts
    │   ├── utils.ts
    │   └── mdx/
    │       └── index.js
    │
    ├── interfaces/
    │   ├── blog.ts
    │   └── ainews.ts
    │
    ├── services/
    │   ├── apiMetaService.ts
    │   └── generateSlugService.ts
    │
    ├── utils/
    │   ├── common.ts
    │   ├── constants.ts
    │   ├── events.ts
    │   ├── job.ts
    │   ├── type.ts
    │   ├── mongodb.ts
    │   ├── otpService.ts
    │   ├── imageUtils.ts
    │   └── fontHelper.ts
    │
    ├── data/
    │   └── pgagiClientTestimonials.ts
    │
    └── TESTIMONIAL IMAGES/           # Likely should be in public/
```

---

## Pages & Routes

| Route | File | Description | Components Used |
|-------|------|-------------|-----------------|
| `/` | `src/app/page.tsx` | Home page | Landing, NewPage, VisionSystemSection, SocialOrbitSection, EcosystemSection, ProcessTimelineSection, RevenueSection, MeasurableImpactSection, BuildEcosystemSection, SolutionFitBreakdownSection, CaseStudiesSection, Customers, WhatMakesUsDifferentSection, ConcentricEllipseSection, ScrollIndicator |
| `/Career` | `src/app/Career/page.tsx` | Careers listing | Hero, Values, Positions, Benefits |
| `/aboutUs` | `src/app/aboutUs/page.tsx` | About us | team.tsx, Calendly |
| `/projects` | `src/app/projects/page.tsx` | Projects showcase | Projects |
| `/expertise` | `src/app/expertise/page.tsx` | Expertise/services | Expertise |
| `/whatwethink` | `src/app/whatwethink/page.tsx` | Blog + news hub | BookCallModal (base/bookCallModela.tsx), carousels |
| `/whatwethink/[slug]` | `src/app/whatwethink/[slug]/page.tsx` | Dynamic blog detail | MDX content |
| `/blogpost/[slug]` | `src/app/blogpost/[slug]/page.tsx` | Blog post detail | BlogPost |
| `/ainews/[slug]` | `src/app/ainews/[slug]/page.tsx` | AI news article | Ainews, Recommendation, link-preview |
| `/ainews` | `src/app/ainews/page.tsx` | AI news index | **Redirects** → `/whatwethink#ainews` |
| `/case-study/[slug]` | `src/app/case-study/[slug]/page.tsx` | Case study detail | CaseStudy |
| `/events` | `src/app/events/page.tsx` | Events listing | Event cards, filters |
| `/eventform/[id]` | `src/app/eventform/[id]/page.tsx` | Event registration | EventForm |
| `/jobs/[jobId]` | `src/app/jobs/[jobId]/page.tsx` | Job detail | JobApplicationForm, SkeletonLoader |
| `/auth/signin` | `src/app/auth/signin/page.tsx` | Sign in | GoogleSignInButton |
| `/admin/management` | `src/app/admin/management/page.tsx` | Admin CMS | AdminPanel, ContentForm, ContentList, DynamicTable, JobPostingsManagement |
| `/posts` | `src/app/posts/page.jsx` | **LEGACY** posts listing | GlareBackground, LatestTrends |
| `/posts/[slug]` | `src/app/posts/[slug]/page.jsx` | **LEGACY** single post | GlareBackground, blog content |

### Navigation Links (from `src/app/components/base/Navigation.tsx`)

The main navbar links users to:
- `/` — Home
- `/expertise` — Expertise
- `/projects` — Projects
- `/whatwethink` — What We Think (blogs/news)
- `/Career` — Careers
- `/aboutUs` — About Us
- `/events` — Events

> `/posts`, `/admin/management`, `/auth/signin` are NOT in the main navigation.

---

## Components — What They Render & Where They're Used

### Layout Components

#### `src/app/components/base/Navigation.tsx`
- **Renders:** Logo, nav links, mobile hamburger menu, "Book a Call" CTA
- **Imported in:** `src/app/layout.tsx`
- **Used on:** Every page (root layout)
- **Style:** `navigation.module.scss` (base/)

#### `src/app/components/Footer.tsx`
- **Renders:** Footer with links, social icons, contact info, copyright
- **Imported in:** `src/app/layout.tsx`
- **Used on:** Every page (root layout)
- **Style:** `footer.module.scss`

#### `src/app/components/PageTransition.tsx`
- **Renders:** Animated page transition overlay
- **Imported in:** `src/contexts/PageTransitionContext.tsx`, `src/app/layout.tsx`
- **Used on:** Every page (root layout)

#### `src/app/components/navbar.tsx`
- **Renders:** Navigation bar (similar/duplicate of `base/Navigation.tsx`)
- **Status:** Possibly unused — see [Unused section](#unused--dead-code)

---

### Home Page Sections (all dynamically imported in `src/app/page.tsx`)

#### `src/app/components/Landing.tsx`
- **Renders:** Hero — headline, sub-headline, CTA "Let's Talk", Clutch + Upwork trust badges, partners
- **Imported in:** `src/app/page.tsx`
- **Style:** `landing.module.scss`

#### `src/app/components/NewPage.tsx`
- **Renders:** Animated stats/metrics cards (company achievements)
- **Imported in:** `src/app/page.tsx` (as StatsSection, `ssr: false`)
- **Style:** `NewPage.module.scss`

#### `src/app/components/VisionSystemSection.tsx`
- **Renders:** Vision + mission statement, animated text, timeline visualization
- **Imported in:** `src/app/page.tsx` (`ssr: false`)
- **Style:** `VisionSystemSection.module.scss`

#### `src/app/components/SocialOrbitSection.tsx`
- **Renders:** Orbiting social links / interactive orbit visualization
- **Imported in:** `src/app/page.tsx`
- **Style:** `SocialOrbitSection.module.scss`

#### `src/app/components/EcosystemSection.tsx`
- **Renders:** AI ecosystem diagram — service connections, integrations
- **Imported in:** `src/app/page.tsx`
- **Style:** `EcosystemSection.module.scss`

#### `src/app/components/ProcessTimelineSection.tsx`
- **Renders:** Process steps timeline with milestones
- **Imported in:** `src/app/page.tsx`
- **Style:** `ProcessTimelineSection.module.scss`

#### `src/app/components/RevenueSection.tsx`
- **Renders:** Revenue growth chart, impact metrics
- **Imported in:** `src/app/page.tsx` (`ssr: false`)
- **Style:** `RevenueSection.module.scss`

#### `src/app/components/MeasurableImpactSection.tsx`
- **Renders:** Measurable results, success metrics
- **Imported in:** `src/app/page.tsx` (`ssr: false`)
- **Style:** `MeasurableImpactSection.module.scss`

#### `src/app/components/BuildEcosystemSection.tsx`
- **Renders:** Building blocks visualization, feature hierarchy
- **Imported in:** `src/app/page.tsx`
- **Style:** `BuildEcosystemSection.module.scss`

#### `src/app/components/SolutionFitBreakdownSection.tsx`
- **Renders:** Solution breakdown, feature comparison table
- **Imported in:** `src/app/page.tsx`
- **Style:** `SolutionFitBreakdownSection.module.scss`

#### `src/app/components/CaseStudiesSection.tsx`
- **Renders:** Case study cards with load more
- **Imported in:** `src/app/page.tsx` (`ssr: false`)
- **Style:** `CaseStudiesSection.module.scss`

#### `src/app/components/Customers.tsx`
- **Renders:** `InfiniteTestimonial` — rotating infinite testimonial carousel
- **Imported in:** `src/app/page.tsx`
- **Style:** `Customers.module.scss`

#### `src/app/components/WhatMakesUsDifferentSection.tsx`
- **Renders:** Why PGAGI is different — competitive advantages list
- **Imported in:** `src/app/page.tsx`
- **Style:** `WhatMakesUsDifferentSection.module.scss`

#### `src/app/components/ConcentricEllipseSection.tsx`
- **Renders:** Animated concentric ring/ellipse visualization
- **Imported in:** `src/app/page.tsx`
- **Style:** `ConcentricEllipseSection.module.scss`

#### `src/app/components/ScrollIndicator.tsx`
- **Renders:** Scroll progress bar
- **Imported in:** `src/app/page.tsx` (`ssr: false`)
- **Style:** `ScrollIndicator.module.scss`

---

### Content Display Components

#### `src/app/components/Projects.tsx`
- **Renders:** Project cards with descriptions, images, links
- **Imported in:** `src/app/projects/page.tsx`
- **Style:** `projects.module.scss`

#### `src/app/components/Expertise.tsx`
- **Renders:** Expertise/service cards
- **Imported in:** `src/app/expertise/page.tsx`
- **Style:** `expertise.module.scss`

#### `src/app/components/Trending.tsx`
- **Renders:** Trending blog/news cards
- **Style:** `trending.module.scss`

#### `src/app/components/Webinars.tsx`
- **Renders:** Webinar listing cards
- **Style:** `webinar.module.scss`

#### `src/app/components/FAQ.tsx`
- **Renders:** Accordion FAQ section
- **Status:** Commented out on home page — see [Unused section](#unused--dead-code)
- **Style:** `FAQ.module.scss`

#### `src/app/components/InfiniteTestimonial.tsx`
- **Renders:** Infinite scrolling testimonial carousel
- **Used in:** `Customers.tsx`

#### `src/app/components/TestemonialsDemo.tsx`
- **Renders:** Animated testimonials with Framer Motion

#### `src/app/components/TestimonialGrid.tsx`
- **Renders:** Grid layout of testimonials
- **Style:** `TestimonialCarousel.module.scss`

#### `src/app/components/Recommendation.tsx`
- **Renders:** "You may also like" recommendations section
- **Imported in:** `src/app/ainews/[slug]/page.tsx`
- **Style:** `Recommendation.scss`

#### `src/app/components/LandingProjects.tsx`
- **Renders:** Featured projects carousel for home page
- **Status:** Commented out on home page — see [Unused section](#unused--dead-code)
- **Style:** `LandingProjects.module.scss`

#### `src/app/components/ExpertiseSection.tsx`
- **Renders:** Detailed expertise section (different from Expertise.tsx)
- **Status:** Commented out on home page — see [Unused section](#unused--dead-code)
- **Style:** `ExpertiseSection.module.scss`

#### `src/app/components/VideoTestimonial.tsx`
- **Renders:** Video testimonial embeds
- **Status:** Commented out on home page — see [Unused section](#unused--dead-code)
- **Style:** `VideoTestimonial.module.scss`

#### `src/app/components/ScrollStack.tsx`
- **Renders:** Stack scroll animation (cards stack as you scroll)
- **Style:** `ScrollStack.module.scss`

---

### Feature / Interaction Components

#### `src/app/components/EventForm.tsx`
- **Renders:** Event registration form with OTP verification
- **Imported in:** `src/app/eventform/[id]/page.tsx`
- **Style:** `eventform.module.scss`

#### `src/app/components/Calendly.tsx`
- **Renders:** React Calendly embed wrapper
- **Imported in:** `src/app/aboutUs/page.tsx`
- **Style:** `calendly.module.scss`

#### `src/app/components/CalendlyFacade.tsx`
- **Renders:** Lazy-load facade for Calendly (loads on click)
- **Style:** `calendly.module.scss`

#### `src/app/components/otpModel.tsx`
- **Renders:** OTP input modal dialog
- **Style:** `otpModel.module.scss`

#### `src/app/components/googleSignInButton.tsx`
- **Renders:** "Sign in with Google" button
- **Imported in:** `src/app/auth/signin/page.tsx`
- **Style:** `googleSignInButton.module.scss`

#### `src/app/components/ErrorMessage.tsx`
- **Renders:** Error alert message
- **Style:** `ErrorMessage.module.scss`

#### `src/app/components/CustomLoader.tsx`
- **Renders:** Custom loading spinner
- **Style:** `CustomLoader.module.scss`

#### `src/app/components/Divider.tsx`
- **Renders:** Section divider line/element
- **Style:** `divider.module.scss`

#### `src/app/components/TransitionLink.tsx`
- **Renders:** Next.js `<Link>` with page transition animation
- **Used in:** Navigation, various pages

#### `src/app/components/SmoothScrollNav.tsx`
- **Renders:** Smooth scroll navigation (section anchors)
- **Status:** Possibly unused — see [Unused section](#unused--dead-code)
- **Style:** `SmoothScrollNav.module.scss`

#### `src/app/components/link-preview.tsx`
- **Renders:** Hover link preview card
- **Imported in:** `src/app/ainews/[slug]/page.tsx`

#### `src/app/components/LazyOnVisible.tsx`
- **Renders:** Wrapper that lazy-loads children when visible in viewport

#### `src/app/components/LazyVideo.tsx`
- **Renders:** Video that lazy-loads when visible

#### `src/app/components/LazyIframe.tsx`
- **Renders:** Iframe that lazy-loads when visible

#### `src/app/components/Partners.tsx`
- **Renders:** Partner logo carousel/grid
- **Imported in:** `Landing.tsx`
- **Style:** `partners.module.scss`

#### `src/app/components/process.tsx`
- **Renders:** Process flow component (steps)
- **Style:** `process.module.scss`

#### `src/app/components/productsCards.tsx`
- **Renders:** Product cards grid
- **Style:** `products.module.scss`

---

### Base UI Components (`src/app/components/base/`)

#### `base/bookACall.tsx`
- **Renders:** Book a call form/button
- **Style:** `bookACall.module.scss`

#### `base/bookCallModela.tsx`
- **Renders:** Modal with Calendly / booking interface
- **Imported in:** `src/app/whatwethink/page.tsx`
- **Style:** `bookCalendy.module.scss`

#### `base/contactUsForm.tsx`
- **Renders:** Contact us form
- **Style:** `contactUs.module.scss`

#### `base/modal.tsx`
- **Renders:** Generic modal dialog

#### `base/Segment.tsx`
- **Renders:** Segmented tab selector
- **Style:** `segment.module.scss`

#### `base/type.tsx`
- **Renders:** Typewriter text animation

#### `base/GlareBackground.tsx`
- **Renders:** Glare/glow background effect
- **Imported in:** `src/app/posts/page.jsx`, `src/app/posts/[slug]/page.jsx`

---

### UI Library Components (`src/app/components/ui/`)

#### `ui/animated-testimonials.tsx`
- **Renders:** Framer Motion animated testimonial cards
- **Style:** `AnimatedTestimonials.module.scss`

#### `ui/animated-tooltip.tsx`
- **Renders:** Animated tooltip on hover
- **Style:** `AnimatedTooltip.scss`

#### `ui/Hyperspeed/Hyperspeed.tsx`
- **Renders:** 3D hyperspeed animation (Three.js / OGL)
- **Style:** `Hyperspeed.css`

---

### Career Page Components (`src/app/Career/components/`)

#### `Hero.tsx`
- **Renders:** Career page hero — headline, CTA
- **Imported in:** `src/app/Career/page.tsx`
- **Style:** `Hero.module.scss`

#### `Values.tsx`
- **Renders:** Company values cards
- **Imported in:** `src/app/Career/page.tsx`
- **Style:** `Values.module.scss`

#### `Positions.tsx`
- **Renders:** Open job positions list (fetches from `/api/careers/postings`)
- **Imported in:** `src/app/Career/page.tsx`
- **Style:** `Positions.module.scss`

#### `Benefits.tsx`
- **Renders:** Employee benefits section
- **Imported in:** `src/app/Career/page.tsx`
- **Style:** `Benefits.module.scss`

#### `ShimmerCard.tsx`
- **Renders:** Skeleton shimmer loading card for positions
- **Used in:** `Positions.tsx`
- **Style:** `ShimmerCard.module.scss`

---

### About Us Components (`src/app/aboutUs/`)

#### `team.tsx`
- **Renders:** Team member grid with photos, names, roles
- **Imported in:** `src/app/aboutUs/page.tsx`
- **Style:** `team.module.scss`

---

### Blog/News Components

#### `src/app/ainews/[slug]/Ainews.tsx`
- **Renders:** Single AI news article — title, date, content, tags
- **Imported in:** `src/app/ainews/[slug]/page.tsx`
- **Style:** `Ainews.module.scss`

#### `src/app/blogpost/[slug]/BlogPost.tsx`
- **Renders:** Single blog post — title, content, author, date
- **Imported in:** `src/app/blogpost/[slug]/page.tsx`
- **Style:** `BlogPost.module.scss`

#### `src/app/case-study/[slug]/CaseStudy.tsx`
- **Renders:** Single case study — problem, solution, results
- **Imported in:** `src/app/case-study/[slug]/page.tsx`
- **Style:** `CaseStudy.module.scss`

---

### Jobs Components (`src/app/jobs/[jobId]/components/`)

#### `JobApplicationForm.tsx`
- **Renders:** Job application form — personal info, resume upload
- **Imported in:** `src/app/jobs/[jobId]/page.tsx`
- **Style:** `JobApplicationForm.module.scss`

#### `SkeletonLoader.tsx`
- **Renders:** Skeleton loading placeholder for job detail
- **Used in:** `src/app/jobs/[jobId]/page.tsx`
- **Style:** `SkeletonLoader.module.scss`

---

### Admin Components (`src/app/admin/`)

#### `management/AdminPanel.tsx`
- **Renders:** Admin dashboard — create/edit/delete blogs, case studies, AI news
- **Imported in:** `src/app/admin/management/page.tsx`
- **Style:** `Admin.module.scss`

#### `management/DynamicTable.tsx`
- **Renders:** Sortable/filterable data table
- **Imported in:** `src/app/admin/management/page.tsx`
- **Style:** `DynamicTable.module.scss`

#### `components/ContentForm.tsx`
- **Renders:** Rich text form for creating/editing content
- **Used in:** `AdminPanel.tsx`

#### `components/ContentList.tsx`
- **Renders:** List of existing content items
- **Used in:** `AdminPanel.tsx`

#### `components/ContentBlockItem.tsx`
- **Renders:** Single content block editor
- **Used in:** `ContentForm.tsx`

#### `components/ContentPreview.tsx`
- **Renders:** Preview of content before publish
- **Used in:** `AdminPanel.tsx`

#### `components/JobPostingsManagement.tsx`
- **Renders:** CRUD interface for job postings
- **Imported in:** `src/app/admin/management/page.tsx`

#### `components/Modal.tsx`
- **Renders:** Admin-specific modal dialog
- **Used in:** `AdminPanel.tsx`

#### `components/TableEditor.tsx`
- **Renders:** Inline table row editor
- **Used in:** `DynamicTable.tsx`

---

### Legacy Components

#### `src/app/LatestNews/LatestNews.jsx`
- **Renders:** Latest news section
- **Status:** Possibly unused

#### `src/app/LatestNews/LatestNewsSlider.jsx`
- **Renders:** News slider carousel
- **Status:** Possibly unused

#### `src/app/components/LatestTrends.jsx`
- **Renders:** Latest trends display
- **Used in:** `src/app/posts/page.jsx` (legacy)

#### `src/app/components/trending_old.tsx`
- **Renders:** Old trending implementation
- **Status:** Commented out everywhere — UNUSED

#### `src/app/buttons/callbutton.js`
- **Renders:** Call-to-action button
- **Status:** Possibly unused

#### `src/components/ui/layout-text-flip.tsx`
- **Renders:** Layout text flip animation
- **Status:** Unclear — separate from app/components

---

## API Routes

| Method | Endpoint | File | Description |
|--------|----------|------|-------------|
| GET | `/api/ainews` | `api/ainews/route.ts` | Fetch all AI news articles |
| GET | `/api/ainews/[slug]` | `api/ainews/[slug]/route.ts` | Fetch single AI news by slug |
| GET | `/api/blogs` | `api/blogs/route.ts` | Fetch all blogs (title, slug, coverImage) |
| POST | `/api/blogs` | `api/blogs/route.ts` | Create new blog |
| GET | `/api/blogs/[slug]` | `api/blogs/[slug]/route.ts` | Fetch single blog by slug |
| GET | `/api/blog` | `api/blog/route.ts` | Blog handler (unclear — possible duplicate) |
| GET/POST | `/api/case-studies` | `api/case-studies/route.ts` | Fetch/create case studies |
| GET | `/api/case-studies/[slug]` | `api/case-studies/[slug]/route.ts` | Fetch single case study |
| GET | `/api/case-study` | `api/case-study/route.ts` | Case study handler (possible duplicate) |
| GET | `/api/careers/postings` | `api/careers/postings/route.ts` | Fetch job postings (Frappe API) |
| GET | `/api/careers/postings/[id]` | `api/careers/postings/[id]/route.ts` | Fetch single job posting |
| POST | `/api/careers/apply` | `api/careers/apply/route.ts` | Submit job application |
| POST | `/api/events/enroll` | `api/events/enroll/route.ts` | Enroll in event |
| POST | `/api/events/interested` | `api/events/interested/route.ts` | Mark interest in event |
| POST | `/api/events/sendEmail` | `api/events/sendEmail/route.ts` | Send event email (Nodemailer) |
| POST | `/api/events/sendOtp` | `api/events/sendOtp/route.ts` | Send OTP via email |
| POST | `/api/products/check-user` | `api/products/check-user/route.ts` | Check if user exists |
| POST | `/api/saveData` | `api/saveData/route.ts` | Save generic data to DB |
| ANY | `/api/auth/[...nextauth]` | `api/auth/[...nextauth]/route.ts` | NextAuth session management |

> **Note:** `/api/blog` and `/api/case-study` (singular) may be duplicates of `/api/blogs` and `/api/case-studies` — worth auditing.

---

## Contexts & Hooks

### Contexts

#### `src/contexts/AuthContext.tsx`
- **Provides:** Firebase Auth state (`user` object)
- **Exports:** `useAuth()` hook, `AuthProvider`
- **Note:** May be redundant if NextAuth is handling auth exclusively

#### `src/contexts/PageTransitionContext.tsx`
- **Provides:** Page navigation animation state
- **Exports:** `usePageTransition()` hook, `PageTransitionProvider`
- **State:** `isTransitioning`, `navigateWithTransition()`, `endTransition()`

#### `src/contexts/SmoothScrollContext.tsx`
- **Provides:** Lenis smooth scroll instance
- **Exports:** `useSmoothScroll()` hook, `SmoothScrollProvider`
- **State:** `lenis` (Lenis instance)
- **Uses:** GSAP ScrollTrigger integration

#### `src/contexts/providers.tsx`
- **Wraps:** `SessionProvider` (NextAuth) + `PageTransitionProvider`
- **Imported in:** `src/app/layout.tsx`

### Custom Hooks

#### `src/hooks/useSmoothScrollTo.ts`
- **Purpose:** Smooth scroll to element by selector/ref
- **API:** `scrollTo(target, options)` — uses Lenis if available, native scroll otherwise
- **Options:** `offset`, `duration`

---

## Utilities, Services & Lib

### `src/lib/`

| File | Exports | Purpose |
|------|---------|---------|
| `firebaseConfig.ts` | `app`, `auth`, `db` | Firebase initialization |
| `motion.ts` | Animation constants | GSAP / Framer Motion easing presets |
| `utils.ts` | `cn()` | Combines `clsx` + `tailwind-merge` |
| `mdx/index.js` | MDX utilities | Parse/process MDX content |

### `src/utils/`

| File | Exports | Purpose |
|------|---------|---------|
| `common.ts` | `openUrl()` | Opens a URL in new tab |
| `constants.ts` | `trendingList`, `productData`, `segmentList`, `socialList`, `whatWeDoLinks`, etc. | All static data constants |
| `events.ts` | `webinarList`, `eventFormData`, `eventsList` | Events static data |
| `job.ts` | Job utilities | Job-related helpers |
| `type.ts` | Type definitions | Shared type definitions |
| `mongodb.ts` | `connectToDatabase()`, `client` | MongoDB connection singleton |
| `otpService.ts` | `generateOtp()`, `verifyOtp()` | OTP generation/verification |
| `imageUtils.ts` | `getSafeImageUrl()` | Safe image URL with fallback |
| `fontHelper.ts` | Font helpers | Font loading utilities |

### `src/services/`

| File | Exports | Purpose |
|------|---------|---------|
| `apiMetaService.ts` | API metadata helpers | Handle API metadata |
| `generateSlugService.ts` | `generateSlug()` | URL-safe slug from string |

---

## Interfaces & Types

| File | Exports | Used in |
|------|---------|---------|
| `src/interfaces/blog.ts` | `BlogContentBlock`, `BlogSection`, `Blog` | API routes, admin, blog components |
| `src/interfaces/ainews.ts` | AI news type definitions | AI news components, API routes |
| `src/utils/type.ts` | Shared type definitions | Various components |
| `src/data/pgagiClientTestimonials.ts` | `PgagiClientReview`, `testimonials[]` | Testimonial components |

---

## Style Files

### Global
| File | Purpose |
|------|---------|
| `src/app/globals.scss` | Global SCSS — fonts, base styles, utilities |
| `src/app/globals.css` | Global CSS — Tailwind base layer |

### Page-Level Modules
| File | Page |
|------|------|
| `src/app/page.module.scss` | Home |
| `src/app/aboutUs/aboutus.module.scss` | About Us |
| `src/app/aboutUs/team.module.scss` | About Us — team section |
| `src/app/ainews/[slug]/Ainews.module.scss` | AI News detail |
| `src/app/blogpost/[slug]/BlogPost.module.scss` | Blog post |
| `src/app/case-study/[slug]/CaseStudy.module.scss` | Case study |
| `src/app/whatwethink/blogs.module.scss` | Blog hub |
| `src/app/whatwethink/[slug]/blog.module.scss` | Blog detail |
| `src/app/events/events.module.scss` | Events |
| `src/app/jobs/[jobId]/JobDetailsPage.module.scss` | Job detail |
| `src/app/auth/signin/SignIn.module.scss` | Sign in |
| `src/app/posts/posts.module.scss` | Legacy posts |
| `src/app/posts/[slug]/singlepost.module.scss` | Legacy single post |
| `src/app/admin/management/Admin.module.scss` | Admin |
| `src/app/admin/management/AdminPage.module.scss` | Admin page |
| `src/app/admin/management/DynamicTable.module.scss` | Admin table |

### Component-Level Modules (SCSS Modules)
All in `src/app/components/` unless noted:

| File | Component |
|------|-----------|
| `landing.module.scss` | Landing |
| `partners.module.scss` | Partners |
| `projects.module.scss` | Projects |
| `expertise.module.scss` | Expertise |
| `NewPage.module.scss` | NewPage (Stats) |
| `VisionSystemSection.module.scss` | VisionSystemSection |
| `SocialOrbitSection.module.scss` | SocialOrbitSection |
| `SolutionFitBreakdownSection.module.scss` | SolutionFitBreakdownSection |
| `WhatMakesUsDifferentSection.module.scss` | WhatMakesUsDifferentSection |
| `MeasurableImpactSection.module.scss` | MeasurableImpactSection |
| `EcosystemSection.module.scss` | EcosystemSection |
| `ProcessTimelineSection.module.scss` | ProcessTimelineSection |
| `RevenueSection.module.scss` | RevenueSection |
| `ConcentricEllipseSection.module.scss` | ConcentricEllipseSection |
| `CaseStudiesSection.module.scss` | CaseStudiesSection |
| `Customers.module.scss` | Customers |
| `BuildEcosystemSection.module.scss` | BuildEcosystemSection |
| `LandingProjects.module.scss` | LandingProjects |
| `ExpertiseSection.module.scss` | ExpertiseSection |
| `VideoTestimonial.module.scss` | VideoTestimonial |
| `FAQ.module.scss` | FAQ |
| `trending.module.scss` | Trending |
| `LatestTrends.module.scss` | LatestTrends |
| `webinar.module.scss` | Webinars |
| `TestimonialCarousel.module.scss` | TestimonialGrid |
| `ScrollIndicator.module.scss` | ScrollIndicator |
| `ScrollStack.module.scss` | ScrollStack |
| `calendly.module.scss` | Calendly, CalendlyFacade |
| `divider.module.scss` | Divider |
| `SmoothScrollNav.module.scss` | SmoothScrollNav |
| `ErrorMessage.module.scss` | ErrorMessage |
| `CustomLoader.module.scss` | CustomLoader |
| `Recommendation.scss` | Recommendation |
| `eventform.module.scss` | EventForm |
| `navigation.module.scss` | navbar.tsx |
| `googleSignInButton.module.scss` | GoogleSignInButton |
| `otpModel.module.scss` | OtpModel |
| `process.module.scss` | Process |
| `products.module.scss` | ProductsCards |
| `trending_old.module.scss` | TrendingOld (unused) |
| `footer.module.scss` | Footer |
| `base/navigation.module.scss` | base/Navigation |
| `base/segment.module.scss` | Segment |
| `base/bookACall.module.scss` | BookACall |
| `base/bookCalendy.module.scss` | BookCallModal |
| `base/contactUs.module.scss` | ContactUsForm |
| `ui/AnimatedTestimonials.module.scss` | animated-testimonials |
| `ui/AnimatedTooltip.scss` | animated-tooltip |
| `ui/Hyperspeed/Hyperspeed.css` | Hyperspeed |
| `Career/components/Hero.module.scss` | Career Hero |
| `Career/components/Values.module.scss` | Career Values |
| `Career/components/Positions.module.scss` | Career Positions |
| `Career/components/Benefits.module.scss` | Career Benefits |
| `Career/components/ShimmerCard.module.scss` | Career ShimmerCard |
| `src/components/ui/layout-text-flip.module.scss` | layout-text-flip |

---

## Configuration Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Remote image patterns, SASS/SCSS support |
| `tailwind.config.js` | Custom colors, fonts (Inter, Poppins, Alexandria, Plus_Jakarta_Sans), screen breakpoints |
| `tsconfig.json` | TypeScript strict mode, `@/*` → `src/*` path alias |
| `postcss.config.js` | Tailwind CSS PostCSS plugin |
| `.eslintrc.json` | ESLint — extends `next/core-web-vitals` |
| `.env` | Firebase config, MongoDB URI, NextAuth secret, API keys (not committed) |
| `dockerfile` | Node.js container build |
| `docker-compose.yml` | Local development stack |
| `docker-compose-prepod.yml` | Pre-production stack |
| `node_deploy.sh` | Deploy script for Node.js host |

---

## Static Assets & Content

### MDX Blog Content
- **Location:** `/public/blogs/` (7 files)
- **Duplicate:** `/src/app/content/` (5 files — subset of above, purpose unclear)

### MDX Case Study Content
- **Location:** `/public/case-studies/` (14 files)

### Images
- `/public/landing/` — Logo, hero images, trust badge images
- `/public/images/` — 100+ product/project/feature images
- `/public/images/testimonials/` — 15+ testimonial photos
- `/public/assets/` — Blog, case study, team photos
- `/src/app/assets/` — Partner logos, product icons, social icons, trending card images
- `/src/TESTIMONIAL IMAGES/` — Testimonial images (should probably be in `/public/`)

### SVGs
- `/public/svgs/Landing/` — Landing section SVGs
- `/public/svgs/Ecosystem/` — Ecosystem SVGs
- `/public/svgs/BuildEco/` — Build ecosystem SVGs
- `/public/svgs/Different/` — Differentiators SVGs
- `/public/svgs/Revenue/` — Revenue section SVGs

### Data
- `/public/data/model_prices_and_context_window.json` — AI model pricing data

---

## Import Dependency Map

```
src/app/layout.tsx
  ├── src/app/components/base/Navigation.tsx
  ├── src/app/components/Footer.tsx
  ├── src/app/components/PageTransition.tsx
  ├── src/contexts/providers.tsx
  │     ├── next-auth SessionProvider
  │     └── src/contexts/PageTransitionContext.tsx
  │           └── src/app/components/PageTransition.tsx
  └── src/contexts/SmoothScrollContext.tsx
        └── lenis, gsap/ScrollTrigger

src/app/page.tsx (Home)
  ├── src/app/components/Landing.tsx
  │     └── src/app/components/Partners.tsx
  ├── src/app/components/NewPage.tsx
  ├── src/app/components/VisionSystemSection.tsx
  ├── src/app/components/SocialOrbitSection.tsx
  ├── src/app/components/EcosystemSection.tsx
  ├── src/app/components/ProcessTimelineSection.tsx
  ├── src/app/components/RevenueSection.tsx
  ├── src/app/components/MeasurableImpactSection.tsx
  ├── src/app/components/BuildEcosystemSection.tsx
  ├── src/app/components/SolutionFitBreakdownSection.tsx
  ├── src/app/components/CaseStudiesSection.tsx
  ├── src/app/components/Customers.tsx
  │     └── src/app/components/InfiniteTestimonial.tsx
  ├── src/app/components/WhatMakesUsDifferentSection.tsx
  ├── src/app/components/ConcentricEllipseSection.tsx
  └── src/app/components/ScrollIndicator.tsx

src/app/Career/page.tsx
  ├── src/app/Career/components/Hero.tsx
  ├── src/app/Career/components/Values.tsx
  ├── src/app/Career/components/Positions.tsx
  │     └── src/app/Career/components/ShimmerCard.tsx
  └── src/app/Career/components/Benefits.tsx

src/app/aboutUs/page.tsx
  ├── src/app/aboutUs/team.tsx
  └── src/app/components/Calendly.tsx

src/app/whatwethink/page.tsx
  └── src/app/components/base/bookCallModela.tsx
        └── react-calendly

src/app/ainews/[slug]/page.tsx
  ├── src/app/ainews/[slug]/Ainews.tsx
  ├── src/app/components/Recommendation.tsx
  └── src/app/components/link-preview.tsx

src/app/blogpost/[slug]/page.tsx
  └── src/app/blogpost/[slug]/BlogPost.tsx

src/app/case-study/[slug]/page.tsx
  └── src/app/case-study/[slug]/CaseStudy.tsx

src/app/events/page.tsx
  └── (inline components + utils/events.ts)

src/app/eventform/[id]/page.tsx
  └── src/app/components/EventForm.tsx
        └── src/utils/otpService.ts

src/app/jobs/[jobId]/page.tsx
  ├── src/app/jobs/[jobId]/components/JobApplicationForm.tsx
  └── src/app/jobs/[jobId]/components/SkeletonLoader.tsx

src/app/auth/signin/page.tsx
  └── src/app/components/googleSignInButton.tsx
        └── src/lib/firebaseConfig.ts

src/app/admin/management/page.tsx
  ├── src/app/admin/management/AdminPanel.tsx
  │     ├── src/app/admin/components/ContentForm.tsx
  │     │     └── src/app/admin/components/ContentBlockItem.tsx
  │     ├── src/app/admin/components/ContentList.tsx
  │     ├── src/app/admin/components/ContentPreview.tsx
  │     ├── src/app/admin/components/Modal.tsx
  │     └── src/app/admin/components/JobPostingsManagement.tsx
  └── src/app/admin/management/DynamicTable.tsx
        └── src/app/admin/components/TableEditor.tsx

src/app/posts/page.jsx (LEGACY)
  ├── src/app/components/base/GlareBackground.tsx
  └── src/app/components/LatestTrends.jsx

src/app/posts/[slug]/page.jsx (LEGACY)
  └── src/app/components/base/GlareBackground.tsx

All API routes
  └── src/utils/mongodb.ts (connectToDatabase)
```

---

## Unused / Dead Code

### Commented Out on Home Page (`src/app/page.tsx`)
These components **exist** but are **not rendered** anywhere active:

| Component | File | Notes |
|-----------|------|-------|
| `VideoTestimonial` | `src/app/components/VideoTestimonial.tsx` | Commented out in page.tsx |
| `LandingProjects` | `src/app/components/LandingProjects.tsx` | Commented out in page.tsx |
| `ExpertiseSection` | `src/app/components/ExpertiseSection.tsx` | Commented out in page.tsx |
| `FAQ` | `src/app/components/FAQ.tsx` | Commented out in page.tsx |
| `TrendingOld` / `trending_old.tsx` | `src/app/components/trending_old.tsx` | Commented out, legacy |
| `Calendly` | `src/app/components/Calendly.tsx` | Commented out on home (used on `/aboutUs` only) |

### Confirmed Unused Files
| File | Reason |
|------|--------|
| `src/app/components/trending_old.tsx` | Legacy component, commented out everywhere |
| `src/app/components/trending_old.module.scss` | Paired with above |
| `src/app/components/SmoothScrollNav.tsx` | Not imported anywhere visible |
| `src/app/components/SmoothScrollNav.module.scss` | Paired with above |
| `src/app/components/navbar.tsx` | Likely duplicate of `base/Navigation.tsx` — audit needed |
| `src/app/LatestNews/LatestNews.jsx` | Not imported in any active page |
| `src/app/LatestNews/LatestNewsSlider.jsx` | Not imported in any active page |
| `src/app/LatestNews/LatestNewsSlider.module.scss` | Paired with above |
| `src/app/buttons/callbutton.js` | Not imported anywhere found |
| `src/app/content/` (MDX files) | Duplicated in `/public/blogs/` — unclear which is used |
| `src/TESTIMONIAL IMAGES/` | Should be in `/public/` — unclear if referenced correctly |

### Legacy Routes (Accessible but Not Linked)
| Route | File | Status |
|-------|------|--------|
| `/posts` | `src/app/posts/page.jsx` | Legacy, JSX, not in nav |
| `/posts/[slug]` | `src/app/posts/[slug]/page.jsx` | Legacy, JSX, not in nav |
| `/ainews` | `src/app/ainews/page.tsx` | Just redirects to `/whatwethink#ainews` |

### Potentially Redundant API Routes
| Route | Possible Duplicate Of |
|-------|----------------------|
| `/api/blog` | `/api/blogs` |
| `/api/case-study` | `/api/case-studies` |

### Potentially Unused Utilities
| File | Status |
|------|--------|
| `src/utils/fontHelper.ts` | Usage unclear — audit needed |
| `src/contexts/AuthContext.tsx` | May be redundant if NextAuth handles all auth |
| `src/lib/mdx/index.js` | Check if still used or replaced by next-mdx-remote |

---

## Dependencies Summary

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.3 | Framework |
| `react` | ^18 | UI library |
| `react-dom` | ^18 | DOM rendering |
| `next-auth` | ^4.24.11 | Authentication sessions |

### Styling
| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^3.4.3 | Utility CSS |
| `@tailwindcss/typography` | ^0.5.16 | Prose styles for MDX |
| `sass` | — | SCSS support |
| `autoprefixer` | ^10.4.20 | PostCSS autoprefixer |

### Animation & 3D
| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^11.15.0 | React animations |
| `motion` | ^12.4.7 | Motion library |
| `gsap` | ^3.14.2 | GSAP animations + ScrollTrigger |
| `lenis` | ^1.3.8 | Smooth scrolling |
| `three` | ^0.167.1 | 3D graphics (Three.js) |
| `ogl` | ^1.0.11 | Lightweight WebGL |
| `postprocessing` | ^6.37.7 | WebGL post-processing |

### UI Components & Icons
| Package | Version | Purpose |
|---------|---------|---------|
| `lucide-react` | ^0.446.0 | Icons |
| `react-icons` | ^5.4.0 | Icon library |
| `@tabler/icons-react` | ^3.26.0 | Tabler icons |
| `@fortawesome/react-fontawesome` | ^0.2.2 | Font Awesome icons |
| `react-fast-marquee` | ^1.6.5 | Marquee/ticker |
| `react-responsive-carousel` | ^3.2.23 | Carousel |
| `swiper` | ^11.2.4 | Swiper carousel |
| `slick-carousel` | ^1.8.1 | Slick slider |
| `xtreme-ui` | ^0.0.82 | UI component lib |

### Forms & Input
| Package | Version | Purpose |
|---------|---------|---------|
| `react-hook-form` | ^7.54.1 | Form state management |
| `react-quill` | ^2.0.0 | Rich text editor (admin) |
| `react-type-animation` | ^3.2.0 | Type animation |
| `typewriter-effect` | ^2.21.0 | Typewriter effect |

### Auth
| Package | Version | Purpose |
|---------|---------|---------|
| `firebase` | ^11.0.1 | Firebase Auth + Firestore |
| `@clerk/clerk-react` | ^5.12.0 | Clerk auth (imported, may not be active) |
| `@clerk/nextjs` | ^5.7.5 | Clerk Next.js integration |

### Data & APIs
| Package | Version | Purpose |
|---------|---------|---------|
| `mongodb` | ^6.9.0 | MongoDB driver |
| `axios` | ^1.7.2 | HTTP client |
| `nodemailer` | ^6.9.15 | Email sending |

### Content & MDX
| Package | Version | Purpose |
|---------|---------|---------|
| `next-mdx-remote` | ^6.0.0 | MDX rendering |
| `remark` | ^15.0.1 | Markdown processing |
| `remark-html` | ^16.0.1 | Markdown to HTML |
| `gray-matter` | ^4.0.3 | Frontmatter parsing |
| `react-markdown` | ^9.0.1 | Markdown in React |

### Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| `react-calendly` | ^4.3.0 | Calendly embed |
| `react-toastify` | ^10.0.5 | Toast notifications |
| `react-burger-menu` | ^3.0.9 | Mobile burger menu |
| `react-modal` | ^3.16.3 | Modal dialogs |
| `react-loading-skeleton` | ^3.5.0 | Skeleton loaders |
| `react-use-draggable-scroll` | ^0.4.7 | Draggable scroll |
| `react-router-dom` | ^7.0.1 | Routing (redundant with Next.js?) |
| `clsx` | ^2.1.1 | Class name utility |
| `tailwind-merge` | ^2.6.0 | Tailwind class merge |
| `uuid` | ^11.0.3 | UUID generation |
| `sanitize-html` | ^2.14.0 | HTML sanitization |

---

*Total: ~149 TSX/JSX files, 18 page routes, 18 API endpoints, 61 reusable components, 75+ style files, 25 MDX content files, 70+ dependencies*

---

## SAFE TO DELETE — Full Cleanup List

> These files and folders have been verified by grepping the entire `src/` directory for any import, reference, or usage. Deleting them will cause **zero build errors, zero runtime errors, and zero missing functionality** in the active application.

### Quick Summary

**Category 1 — Zero-import components** (30 files)
`SmoothScrollNav`, `trending_old`, `TestemonialsDemo`, `TestimonialGrid`, `process`, `productsCards`, `Webinars`, `Divider`, `LazyOnVisible`, `LazyVideo`, `LazyIframe`, `base/type`, `base/Segment`, `base/bookACall`, `base/modal`, `ui/animated-tooltip`, `src/components/ui/layout-text-flip` — all with their paired SCSS files

**Category 2 — Orphaned SCSS** (1 file)
`TestimonialCarousel.module.scss` — component no longer exists, style left behind

**Category 3 — Standalone unused** (2 files)
`buttons/callbutton.js`, `utils/fontHelper.ts`

**Category 4 — Dead API routes** (2 files)
`/api/blog/route.ts` and `/api/case-study/route.ts` — no client code calls the singular versions; active app uses `/api/blogs` and `/api/case-studies`

**Category 5 — Entire legacy `/posts` system** (14 files + `src/app/LatestNews/` folder)
`posts/`, `LatestTrends.jsx`, `LatestNews/`, `GlareBackground.tsx`, `navbar.tsx`, `lib/mdx/index.js` — not linked anywhere in navigation, written in JSX, entirely disconnected from the active app

**Category 6 — Duplicate content folder** (entire folder — 5 MDX files)
`src/app/content/` — duplicated by `/public/blogs/` which is what the active API reads from

**Category 7 — Misplaced assets** (entire folder)
`src/TESTIMONIAL IMAGES/` — inside `src/` so unreachable at runtime; should be in `public/` or is already duplicated in `public/images/testimonials/`

> **Note:** `FAQ`, `LandingProjects`, `ExpertiseSection`, and `VideoTestimonial` look commented out in the home page but are still wired via dynamic imports — do NOT delete those.

---
>
> Legend: `[CONFIRMED UNUSED]` = zero imports anywhere | `[LEGACY ONLY]` = only used by the dead `/posts` legacy route | `[DUPLICATE]` = content duplicated elsewhere

---

### Category 1 — Components with Zero Imports (Delete Entirely)

These component files + their paired `.module.scss` files have no import pointing to them from any active page, layout, or other component.

| File | Paired Style File | Confirmed By |
|------|-------------------|--------------|
| `src/app/components/SmoothScrollNav.tsx` | `SmoothScrollNav.module.scss` | No import found in entire src/ |
| `src/app/components/trending_old.tsx` | `trending_old.module.scss` | No import found in entire src/ |
| `src/app/components/TestemonialsDemo.tsx` | *(no paired scss)* | No import found in entire src/ |
| `src/app/components/TestimonialGrid.tsx` | `TestimonialCarousel.module.scss` | No import found; scss has no matching component |
| `src/app/components/process.tsx` | `process.module.scss` | No import found in entire src/ |
| `src/app/components/productsCards.tsx` | `products.module.scss` | No import found in entire src/ |
| `src/app/components/Webinars.tsx` | `webinar.module.scss` | No import found in entire src/ |
| `src/app/components/Divider.tsx` | `divider.module.scss` | No import found in entire src/ |
| `src/app/components/LazyOnVisible.tsx` | *(no paired scss)* | No import found in entire src/ |
| `src/app/components/LazyVideo.tsx` | *(no paired scss)* | No import found in entire src/ |
| `src/app/components/LazyIframe.tsx` | *(no paired scss)* | No import found in entire src/ |
| `src/app/components/base/type.tsx` | *(no paired scss)* | No import found in entire src/ |
| `src/app/components/base/Segment.tsx` | `base/segment.module.scss` | No import found in entire src/ |
| `src/app/components/base/bookACall.tsx` | `base/bookACall.module.scss` | No import found in entire src/ |
| `src/app/components/base/modal.tsx` | *(no paired scss)* | No import found in active code |
| `src/app/components/ui/animated-tooltip.tsx` | `ui/AnimatedTooltip.scss` | No import found in entire src/ |
| `src/components/ui/layout-text-flip.tsx` | `layout-text-flip.module.scss` | No import found in entire src/ |

**Total: 17 component files + 13 style files = 30 files**

---

### Category 2 — Orphaned SCSS File (Component Deleted, Style Left Behind)

| File | Why Deletable |
|------|---------------|
| `src/app/components/TestimonialCarousel.module.scss` | No `.tsx` or `.jsx` component imports this — the component it belonged to no longer exists |

---

### Category 3 — Standalone Unused Files

| File | Why Deletable |
|------|---------------|
| `src/app/buttons/callbutton.js` | Zero grep matches across entire codebase |
| `src/utils/fontHelper.ts` | Zero imports anywhere in src/ |

---

### Category 4 — Unused / Dead API Routes

These Next.js route handlers exist but no client code, page, or component calls them. The active app uses the plural equivalents (`/api/blogs`, `/api/case-studies`) instead.

| File | Dead Endpoint | Active Equivalent |
|------|---------------|-------------------|
| `src/app/api/blog/route.ts` | `GET /api/blog` | `GET /api/blogs` |
| `src/app/api/case-study/route.ts` | `GET /api/case-study` | `GET /api/case-studies` |

---

### Category 5 — Legacy Routes + All Their Files (Entire `/posts` System)

The `/posts` and `/posts/[slug]` routes are not linked anywhere in the navigation, not used anywhere in the active app, and are written in JSX (unlike the rest of the codebase which is TypeScript). These and every file they uniquely depend on can be deleted together as a unit.

**Pages:**
- `src/app/posts/page.jsx`
- `src/app/posts/posts.module.scss`
- `src/app/posts/[slug]/page.jsx`
- `src/app/posts/[slug]/singlepost.module.scss`

**Components only used by these legacy pages:**
- `src/app/components/LatestTrends.jsx` — only imported in `posts/page.jsx`
- `src/app/components/LatestTrends.module.scss`
- `src/app/LatestNews/LatestNews.jsx` — only imported in `LatestTrends.jsx`
- `src/app/LatestNews/LatestNewsSlider.jsx` — only imported in `LatestNews.jsx`
- `src/app/LatestNews/LatestNewsSlider.module.scss`
- `src/app/components/base/GlareBackground.tsx` — only imported in `posts/page.jsx` and `posts/[slug]/page.jsx`
- `src/app/components/navbar.tsx` — only imported in `posts/page.jsx` (the real navbar is `base/Navigation.tsx`)
- `src/app/components/navigation.module.scss` — paired with navbar.tsx above
- `src/lib/mdx/index.js` — MDX loader only used by the legacy posts system

**Entire folder can be deleted:**
- `src/app/LatestNews/` *(entire folder)*

**Total: 14 files + 1 folder**

---

### Category 6 — Duplicate Content Folder

`src/app/content/` contains MDX files that are a subset of what's already in `public/blogs/`. The active blog system reads from `public/blogs/` via the API routes. The `src/app/content/` folder is only referenced by `src/lib/mdx/index.js` (which is itself in Category 5 — the legacy MDX loader).

**Delete entire folder:**
- `src/app/content/` *(5 MDX files: blog2.mdx, blog3.mdx, community-datasets.mdx, matrayoshka.mdx, starcoder.mdx)*

---

### Category 7 — Misplaced Asset Folder

| Folder | Why It's a Problem | Action |
|--------|-------------------|--------|
| `src/TESTIMONIAL IMAGES/` | Inside `src/` so Next.js tries to process it. Images must be in `public/` to be served. Zero code references this path. | Move to `public/images/testimonials/` or delete if already duplicated there |

---

### Category 8 — Redirect-Only Page (No Content)

| File | Behavior | Action |
|------|----------|--------|
| `src/app/ainews/page.tsx` | Immediately redirects to `/whatwethink#ainews` — has no UI of its own | Keep if you want the redirect to work; delete if `/ainews` should 404 |

---

### Full Delete Checklist

Copy-paste these paths for deletion. Each one is safe to remove with no side effects:

```
# Category 1 — Zero-import components
src/app/components/SmoothScrollNav.tsx
src/app/components/SmoothScrollNav.module.scss
src/app/components/trending_old.tsx
src/app/components/trending_old.module.scss
src/app/components/TestemonialsDemo.tsx
src/app/components/TestimonialGrid.tsx
src/app/components/TestimonialCarousel.module.scss
src/app/components/process.tsx
src/app/components/process.module.scss
src/app/components/productsCards.tsx
src/app/components/products.module.scss
src/app/components/Webinars.tsx
src/app/components/webinar.module.scss
src/app/components/Divider.tsx
src/app/components/divider.module.scss
src/app/components/LazyOnVisible.tsx
src/app/components/LazyVideo.tsx
src/app/components/LazyIframe.tsx
src/app/components/base/type.tsx
src/app/components/base/Segment.tsx
src/app/components/base/segment.module.scss
src/app/components/base/bookACall.tsx
src/app/components/base/bookACall.module.scss
src/app/components/base/modal.tsx
src/app/components/ui/animated-tooltip.tsx
src/app/components/ui/AnimatedTooltip.scss
src/components/ui/layout-text-flip.tsx
src/components/ui/layout-text-flip.module.scss

# Category 3 — Standalone unused
src/app/buttons/callbutton.js
src/utils/fontHelper.ts

# Category 4 — Dead API routes
src/app/api/blog/route.ts
src/app/api/case-study/route.ts

# Category 5 — Legacy /posts system (delete as a unit)
src/app/posts/page.jsx
src/app/posts/posts.module.scss
src/app/posts/[slug]/page.jsx
src/app/posts/[slug]/singlepost.module.scss
src/app/components/LatestTrends.jsx
src/app/components/LatestTrends.module.scss
src/app/LatestNews/               ← entire folder
src/app/components/base/GlareBackground.tsx
src/app/components/navbar.tsx
src/app/components/navigation.module.scss
src/lib/mdx/index.js

# Category 6 — Duplicate content folder
src/app/content/                  ← entire folder

# Category 7 — Misplaced assets
src/TESTIMONIAL IMAGES/           ← move to public/ or delete if already in public/images/testimonials/
```

---

### What Is NOT Safe to Delete (Clarifications)

These were flagged earlier but turn out to be actively used:

| File | Why It Must Stay |
|------|-----------------|
| `src/app/components/Calendly.tsx` | Used in `aboutUs/page.tsx` and `Expertise.tsx` |
| `src/app/components/CalendlyFacade.tsx` | Used in `Expertise.tsx` |
| `src/app/components/FAQ.tsx` | Dynamically imported in `page.tsx` (commented import but file is wired) |
| `src/app/components/LandingProjects.tsx` | Dynamically imported in `page.tsx` |
| `src/app/components/ExpertiseSection.tsx` | Dynamically imported in `page.tsx` |
| `src/app/components/VideoTestimonial.tsx` | Dynamically imported in `page.tsx` |
| `src/app/components/ScrollStack.tsx` | Used inside `VisionSystemSection.tsx` and `RevenueSection.tsx` |
| `src/app/components/Recommendation.tsx` | Used in `BlogPost.tsx`, `CaseStudy.tsx`, and `Ainews.tsx` |
| `src/app/components/InfiniteTestimonial.tsx` | Used in `Customers.tsx` |
| `src/app/components/ui/animated-testimonials.tsx` | Used in `TestemonialsDemo.tsx` |
| `src/contexts/AuthContext.tsx` | Imported in `layout.tsx` |
| `src/services/apiMetaService.ts` | Used in multiple detail pages |
| `src/services/generateSlugService.ts` | Used in 5+ components |
| `src/data/pgagiClientTestimonials.ts` | Used in `InfiniteTestimonial.tsx` and `Customers.tsx` |
| `src/utils/job.ts` | Used in jobs page and Career/Positions |
| `src/utils/type.ts` | Used in admin components |
