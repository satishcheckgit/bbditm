# BBD Sibling University Website — Master AI Build Context

> Use this file as the primary product, design, architecture, and implementation context for any AI coding agent working on the sibling website redesign.
>
> The agent must read this file completely before generating, modifying, or refactoring UI.

---

# 1. Project Mission

Redesign a sibling institutional/university website within the BBD ecosystem.

The new website must feel:

- premium
- modern
- institutional
- trustworthy
- spacious
- editorial
- highly polished
- fast
- mobile-first
- accessible
- conversion-aware

The visual benchmark is the **cleanliness, confidence, whitespace, navigation clarity, polish, and motion restraint found in premium consumer websites such as Jio.com and Apple.com**.

However:

**DO NOT clone Jio, Apple, or any other website.**

Borrow principles, not layouts.

The final website must unmistakably belong to the BBD education ecosystem.

The experience should feel like:

> "BBD institutional identity redesigned with the clarity of Jio, the restraint of Apple, and the credibility of a serious modern university."

---

# 2. Existing BBDU Context

The parent/reference ecosystem already has an established visual identity.

Preserve the recognizable BBD family DNA:

- BBD purple / violet family
- supporting royal/deep blue
- white / off-white surfaces
- institutional photography
- bold but professional typography
- academic credibility
- structured programme discovery
- prominent admission CTAs
- strong school/programme hierarchy

Do not make the sibling website look like an unrelated startup.

The redesign should feel like the next-generation evolution of BBDU rather than a completely new brand.

---

# 3. Core Design Philosophy

## 3.1 Primary principle

**Clarity before decoration.**

Every section should answer one question.

Avoid pages that look like an accumulation of cards.

Use:

- meaningful whitespace
- strong typographic hierarchy
- fewer larger ideas per viewport
- deliberate composition
- simple surfaces
- visual rhythm
- strong photography
- clear navigation
- concise copy
- high-quality transitions

Do not use visual complexity merely to make the page appear "designed".

---

# 4. Visual Personality

The site should feel:

- premium, not flashy
- youthful, not childish
- innovative, not futuristic gimmicky
- prestigious, not old-fashioned
- energetic, not noisy
- editorial, not dashboard-like
- aspirational, not corporate SaaS
- modern Indian university, not generic overseas template

Imagine a prospective student opening the website and immediately feeling:

1. this university is serious,
2. the campus is active,
3. the programmes are credible,
4. the technology is modern,
5. admissions are easy to understand.

---

# 5. Design Reference Interpretation

## Jio-inspired qualities

Take inspiration from:

- clean navigation
- large confident messaging
- spacious visual sections
- strong imagery
- restrained rounded cards
- clear primary actions
- easy service/category discovery
- polished responsive behavior

Do not copy:

- exact card geometry
- exact navigation
- colors
- section layouts
- icon styles
- typography

## Apple-inspired qualities

Take inspiration from:

- deliberate whitespace
- typography-driven storytelling
- smooth section transitions
- premium image presentation
- restrained use of effects
- content appearing at the right moment
- strong visual hierarchy
- excellent mobile behavior

Do not turn the website into an Apple clone.

Avoid excessive black backgrounds unless required for a specific media section.

---

# 6. Brand Color Direction

Use BBD-family colors but modernize their implementation.

Suggested semantic palette:

```css
@theme {
  --color-brand-50: #f6f2ff;
  --color-brand-100: #eee6ff;
  --color-brand-200: #dfd0ff;
  --color-brand-300: #c9adff;
  --color-brand-400: #ab7dff;
  --color-brand-500: #8b4df0;
  --color-brand-600: #7332d3;
  --color-brand-700: #5d27aa;
  --color-brand-800: #4d2388;
  --color-brand-900: #411f70;
  --color-brand-950: #29104e;

  --color-institutional-blue: #173b7a;
  --color-ink: #111318;
  --color-muted: #626773;
  --color-surface: #ffffff;
  --color-surface-soft: #f7f7f9;
  --color-surface-purple: #faf8ff;
}
```

These are starting tokens, not an obligation to blindly use exact values.

If official sibling-brand colors are supplied later, map them into the same semantic token system.

## Color usage

Purple should be used intentionally for:

- primary CTA
- highlights
- active navigation
- section accents
- statistics
- links
- controlled gradients

Do NOT fill every section with purple.

Preferred page distribution:

- 65–75% white / neutral
- 15–20% soft tinted surfaces
- 5–10% strong brand surfaces
- small accent usage

This keeps the website premium.

---

# 7. Typography

Typography must carry much of the visual design.

Use `next/font`.

Preferred direction:

- modern geometric / neo-grotesk sans serif
- excellent Hindi/English compatibility if required
- strong readability
- variable font where practical

Potential options:

- Geist
- Inter
- Manrope
- Plus Jakarta Sans

Do not mix more than two font families.

Recommended hierarchy:

```text
Display XL:  clamp(3.25rem, 7vw, 7rem)
Display:     clamp(2.75rem, 5vw, 5rem)
H1:          clamp(2.5rem, 4.5vw, 4.5rem)
H2:          clamp(2rem, 3.4vw, 3.5rem)
H3:          clamp(1.5rem, 2vw, 2rem)
Body Large:  1.125rem–1.25rem
Body:        1rem
Small:       0.875rem
```

Display headings should generally use:

- tighter tracking
- compact line-height
- max-width constraints
- minimal unnecessary line breaks

Do not use giant type everywhere.

---

# 8. Spacing System

Whitespace is a primary design tool.

Use an 8px-oriented rhythm.

Typical desktop sections:

```text
padding-block:
96px
112px
128px
144px
```

Tablet:

```text
72px–96px
```

Mobile:

```text
56px–72px
```

Major sections should usually have enough space that they visually breathe.

Avoid:

- 20 cards packed into one viewport
- repeated `py-8`
- cramped headings
- text touching container edges
- excessive nested boxes

---

# 9. Grid & Container

Recommended:

```text
max content width: 1440px
standard readable width: 1280px
editorial text width: 680–780px
wide media sections: 1440–1600px where suitable
mobile gutters: 20px
tablet gutters: 32px
desktop gutters: 48px–64px
```

Use a consistent container component.

Example concept:

```tsx
<Container size="default">
<Container size="wide">
<Container size="reading">
```

---

# 10. Corner Radius & Surface Language

The website should not feel like every element is a card.

Use cards selectively.

Suggested radius scale:

```text
sm  = 10px
md  = 16px
lg  = 24px
xl  = 32px
pill = 999px
```

Larger editorial/media cards may use 24–32px.

Small UI controls: 10–14px.

Avoid excessive bubble-style interfaces.

---

# 11. Shadows

Use very subtle elevation.

Most surfaces should rely on:

- contrast
- border
- spacing
- background tone

instead of heavy shadow.

Examples:

```text
0 1px 2px rgb(0 0 0 / 0.03)
0 8px 30px rgb(20 20 40 / 0.06)
0 20px 60px rgb(30 20 70 / 0.08)
```

Never create strong Material-style floating card shadows across the entire site.

---

# 12. Motion Philosophy

Motion should improve comprehension.

Target feeling:

**smooth, calm, responsive, expensive.**

Use motion for:

- hero reveal
- image scale/parallax
- section enter transitions
- marquee where justified
- horizontal programme discovery
- sticky storytelling sections
- subtle hover feedback
- accordion transitions
- nav reveal
- number counters
- scroll progress on editorial pages

Preferred timing:

```text
micro interaction: 150–250ms
UI transition:      250–400ms
section reveal:     500–900ms
storytelling:       based on scroll
```

Prefer easing similar to:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Do not make critical information depend on animation.

---

# 13. Animation Technology

Preferred baseline:

- CSS transitions
- CSS transforms
- IntersectionObserver

Use GSAP only for genuinely valuable storytelling.

Good GSAP candidates:

- hero cinematic entrance
- pinned campus storytelling
- programme horizontal reveal
- milestone timeline
- layered image composition
- complex ScrollTrigger sequences

Do NOT use GSAP to animate every heading.

Keep bundle impact under control.

Lazy load large animation libraries when possible.

---

# 14. Navigation

Navigation is one of the most important redesign areas.

## Desktop

Recommended structure:

Top utility bar, if genuinely needed:

```text
Students
Parents
Alumni
Careers
Library
ERP / Login
```

Primary navbar:

```text
Logo
About
Academics
Admissions
Campus Life
Research / Innovation
Placements
News & Events
[Apply Now]
```

Rules:

- sticky
- preferably white / slightly translucent
- background blur only when aesthetically justified
- clear hover states
- max 7–8 primary categories
- no tiny overcrowded links

## Mega menu

Desktop mega menu may be used for Academics.

Example:

```text
Academics
├── Schools
├── Programmes
│   ├── Undergraduate
│   ├── Postgraduate
│   └── Doctoral
├── Academic Calendar
├── Examination
└── Learning Resources
```

Mega menu should feel editorial and spacious.

Do not create a dense enterprise navigation panel.

## Mobile

Use a full-screen or near-full-screen menu.

Priorities:

- large tap targets
- clear nested navigation
- sticky Apply button
- no hover-dependent interaction

---

# 15. Homepage Strategy

The homepage should tell a story instead of displaying every available link.

Recommended flow:

```text
01 Header
02 Hero
03 Quick programme/admission discovery
04 University positioning / proof
05 Schools / programmes
06 Campus experience
07 Outcomes / placements
08 Innovation / research
09 Student stories
10 News & events
11 Admissions CTA
12 Footer
```

Not every homepage must use this exact order.

Optimize narrative flow.

---

# 16. Hero Section

Hero should be visually powerful yet clean.

Avoid a hero containing:

- multiple floating cards
- six statistics
- long paragraphs
- multiple badges
- several CTAs
- icon clusters
- heavy overlays

Recommended hero anatomy:

```text
eyebrow
high-impact headline
short supporting copy
1 primary CTA
1 secondary CTA
strong image / video / controlled visual
optional one-line proof point
```

Example content hierarchy:

```text
Shape what comes next.

Study at [University Name], where academic depth,
industry exposure and a vibrant campus prepare
you for a changing world.

[Explore Programmes] [Admissions 2027]
```

Possible compositions:

### A. Split editorial hero
55% copy / 45% campus image.

### B. Full-bleed visual
Large campus/student imagery with minimal copy.

### C. Cinematic framed hero
Large rounded media canvas inside white page.

### D. Story hero
Bold heading followed by scroll-driven university proof.

Prioritize A or C initially.

---

# 17. Admission Discovery

Admissions are a major conversion path.

Users should rapidly answer:

- What can I study?
- Am I eligible?
- What is the fee?
- When does admission open?
- How do I apply?
- Who can I contact?

Provide a highly visible programme explorer.

Potential filters:

```text
Level
School
Discipline
Programme Type
Duration
```

Do not make students navigate four levels deep merely to discover a course.

---

# 18. Programme Cards

Programme cards should be information-efficient.

Example:

```text
B.Tech
Computer Science & Engineering

4 Years
Undergraduate

[View Programme →]
```

Optional metadata:

- specialization
- eligibility
- intake

Do not cram fee, syllabus, outcomes, careers, eligibility, duration and every detail on the listing card.

Detailed data belongs on programme detail pages.

---

# 19. Programme Detail Page

Recommended structure:

```text
Programme Hero
├── Programme name
├── School
├── degree / duration
├── admission CTA
└── compact programme facts

Overview
Why this programme
Curriculum
Teaching & Assessment
Eligibility
Fees
Career Outcomes
Programme Outcomes
Facilities
Faculty
Related Programmes
Admission CTA
```

Desktop may use sticky local navigation.

Example:

```text
Overview | Curriculum | Eligibility | Fees | Careers
```

On mobile, transform into horizontal scroll or compact dropdown.

---

# 20. School Pages

Each school should feel unique through its content while sharing the system.

Recommended:

```text
School hero
School positioning
Dean message
Programmes offered
Departments
Faculty
Facilities
Research
Student achievements
Clubs / chapters
Events
CTA
```

Use tabs sparingly.

Avoid hiding important SEO/content behind excessive client-only tab interfaces.

---

# 21. University Story / About

Avoid generic paragraphs over stock photos.

Use editorial storytelling:

- founding story
- philosophy
- leadership
- campus
- scale
- academic ecosystem
- milestones

Consider a vertical timeline or sticky media story.

---

# 22. Campus Life

This is where the visual system may become more expressive.

Use:

- authentic student imagery
- clubs
- cultural events
- sport
- hostel
- festivals
- student-led initiatives
- labs
- campus spaces

Potential layout:

- editorial asymmetric image grid
- horizontal stories
- compact category pills
- one immersive media section

Avoid generic icon cards.

---

# 23. Placements / Career Outcomes

Present proof visually.

Possible metrics:

```text
placement rate
recruiters
highest package
average package
internships
alumni outcomes
```

Do not show unsupported or unverified statistics.

Data must come from CMS / approved content.

Company logos should appear as supporting evidence, not visual clutter.

---

# 24. Research & Innovation

Make the university look active rather than merely claiming "innovation".

Show:

- projects
- patents
- labs
- publications
- funded work
- collaborations
- incubation
- faculty research

Prefer case-study cards over generic feature tiles.

---

# 25. News & Events

Separate semantic models:

```ts
News
Event
Announcement
Notice
```

Do not mix all content into one generic post type on the frontend.

Event cards:

```text
date
category
title
location
time
```

News:

```text
image
category
publishedAt
title
excerpt
```

---

# 26. Footer

Footer should be clean and navigable.

Suggested structure:

```text
University
Academics
Admissions
Student Life
Resources
Contact

Address
Phone
Email

Social links
Legal links
Accreditation / regulatory references
```

Avoid dumping every URL into the footer.

---

# 27. CMS Integration Philosophy

The frontend must be CMS-ready.

Current BBD ecosystem commonly uses WordPress + ACF + custom REST APIs.

Design the frontend so data source can later be:

- WordPress REST API
- headless WordPress
- custom Node API
- static structured content during prototyping

Never tightly couple component markup directly to API response shapes.

Introduce a data normalization layer.

Example:

```text
WordPress response
      ↓
mapper / adapter
      ↓
domain model
      ↓
React component
```

Example domain type:

```ts
export interface Programme {
  id: string;
  slug: string;
  title: string;
  school: SchoolSummary;
  degree: string;
  level: "undergraduate" | "postgraduate" | "doctoral";
  duration: string;
  eligibility?: string;
  fee?: ProgrammeFee;
  hero?: MediaAsset;
  overview?: RichTextContent;
}
```

---

# 28. API Architecture

Centralize all external communication.

Never scatter fetch calls throughout random components.

Preferred:

```text
src/data/
src/services/
src/lib/api/
```

Example:

```ts
getSiteSettings()
getMainNavigation()
getHomepage()
getSchools()
getSchoolBySlug()
getProgrammes()
getProgrammeBySlug()
getNews()
getEvents()
```

Each function should:

- return normalized types
- handle errors
- define caching policy
- isolate endpoint details

---

# 29. Caching Strategy

University content is mostly read-heavy.

Use appropriate Next.js caching / revalidation.

Typical approach:

```text
site settings       → long cache
navigation          → long cache
programme content   → ISR / revalidation
school content      → ISR / revalidation
news/events         → shorter revalidation
critical live info  → dynamic only if necessary
```

Do not make every page `force-dynamic`.

Do not disable caching globally merely because a CMS exists.

---

# 30. Technology Baseline

Use stable production releases.

Baseline verified when this context was prepared:

```text
Next.js: 16.4.x stable
Tailwind CSS: 4.3.x stable
TypeScript
App Router
React Server Components
```

When implementation begins later, check the current stable patch before installing.

Avoid canary/beta packages unless explicitly requested.

Use:

```text
Next.js App Router
TypeScript strict mode
Tailwind CSS v4
next/font
next/image
ESLint
Prettier
```

Optional dependencies only when justified:

```text
lucide-react
clsx
tailwind-merge
zod
react-hook-form
GSAP
```

Do not install a UI framework automatically.

No Material UI.

No Bootstrap.

No Ant Design.

Do not use shadcn everywhere by default.

Build the visual system using Tailwind and small primitives.

---

# 31. Tailwind CSS Rules

Use Tailwind CSS as the primary styling system.

Avoid large CSS modules except when required.

Tailwind v4 should use theme tokens.

Example:

```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-primary);

  --color-brand-500: #8b4df0;
  --color-brand-600: #7332d3;
  --color-brand-700: #5d27aa;

  --radius-card: 1.5rem;

  --breakpoint-3xl: 120rem;
}
```

Use semantic component abstractions instead of repeating massive class strings everywhere.

Example:

```tsx
<Button variant="primary" />
<Button variant="secondary" />
<SectionHeading />
<Container />
```

---

# 32. Next.js Rendering Principles

Default to Server Components.

Only use `"use client"` where interaction requires it.

Client components are appropriate for:

- mobile menu
- filters
- carousel controls
- accordions
- tabs
- animation wrappers
- interactive forms

Do not convert whole routes into Client Components.

Keep data fetching on the server whenever practical.

---

# 33. Recommended Project Folder Structure

Use a `src`-based scalable structure.

```text
project-root/
│
├── public/
│   ├── images/
│   │   ├── home/
│   │   ├── schools/
│   │   ├── programmes/
│   │   ├── campus/
│   │   ├── faculty/
│   │   └── common/
│   ├── icons/
│   └── videos/
│
├── src/
│   │
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── about/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── leadership/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── campus/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── academics/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── schools/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── programmes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── loading.tsx
│   │   │   │
│   │   │   ├── admissions/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── eligibility/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── fees/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── scholarships/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── placements/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── research/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── campus-life/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── news/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── events/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── layout.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── search/
│   │   │   │   └── route.ts
│   │   │   └── forms/
│   │   │       └── route.ts
│   │   │
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── not-found.tsx
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── container.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── media.tsx
│   │   │   └── icon-button.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── mobile-menu/
│   │   │   └── breadcrumbs/
│   │   │
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   ├── programmes/
│   │   │   ├── schools/
│   │   │   ├── statistics/
│   │   │   ├── campus/
│   │   │   ├── placements/
│   │   │   ├── research/
│   │   │   ├── testimonials/
│   │   │   ├── news/
│   │   │   ├── events/
│   │   │   └── cta/
│   │   │
│   │   └── forms/
│   │       ├── enquiry-form.tsx
│   │       └── programme-filter.tsx
│   │
│   ├── features/
│   │   ├── programme-search/
│   │   ├── admissions/
│   │   ├── site-search/
│   │   └── navigation/
│   │
│   ├── data/
│   │   ├── wordpress/
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   ├── mappers.ts
│   │   │   └── queries.ts
│   │   └── static/
│   │
│   ├── lib/
│   │   ├── api/
│   │   ├── seo/
│   │   ├── analytics/
│   │   ├── validation/
│   │   └── utils/
│   │
│   ├── hooks/
│   │   ├── use-media-query.ts
│   │   └── use-reduced-motion.ts
│   │
│   ├── types/
│   │   ├── programme.ts
│   │   ├── school.ts
│   │   ├── post.ts
│   │   ├── navigation.ts
│   │   └── cms.ts
│   │
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── seo.ts
│   │
│   └── constants/
│       └── index.ts
│
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

---

# 34. Folder Architecture Rules

## `app`

Routing only.

Page files should compose reusable sections.

Do not place large business logic inside `page.tsx`.

Bad:

```tsx
export default async function Page() {
  // 300 lines API normalization + filtering + markup
}
```

Good:

```tsx
export default async function Page() {
  const data = await getHomepage();

  return <HomePageView data={data} />;
}
```

## `components/ui`

Small universal primitives.

They should not know about WordPress.

## `components/sections`

Reusable visual sections.

Examples:

```text
ProgrammeExplorer
CampusStory
PlacementHighlights
NewsGrid
AdmissionCTA
```

## `features`

Interactive/domain workflows.

Examples:

```text
programme search
site search
admission enquiry
```

## `data`

CMS/API implementation.

## `types`

Stable domain contracts.

---

# 35. Component Design Principles

Every section component should accept data.

Bad:

```tsx
export function SchoolCard() {
  return <h3>School of Engineering</h3>;
}
```

Good:

```tsx
interface SchoolCardProps {
  school: SchoolSummary;
}

export function SchoolCard({ school }: SchoolCardProps) {
  ...
}
```

This makes components CMS-ready and reusable.

---

# 36. Do Not Over-Abstract

Do not create abstraction merely for architecture aesthetics.

Avoid:

```text
BaseSection
SectionWrapper
SectionShell
SectionContainer
SectionInner
SectionContent
```

unless each has a real purpose.

Prefer understandable composition.

---

# 37. Responsive Design

Design mobile intentionally.

Do not create desktop first and merely stack everything.

Breakpoints should adapt:

- information priority
- layout
- typography
- interaction
- image crop
- navigation
- spacing

Typical patterns:

```text
desktop 3 cards → tablet 2 → mobile 1
desktop sticky tabs → mobile horizontal scroll
desktop mega menu → mobile accordion
desktop split hero → mobile editorial stack
desktop cinematic image → mobile controlled crop
```

Avoid horizontal scrolling unless deliberately designed.

---

# 38. Image Direction

Use authentic visuals where available.

Preferred:

- real campus
- real students
- laboratories
- classrooms
- faculty
- events
- placements
- sports
- architecture

Photography treatment:

- bright
- natural
- premium
- warm-neutral
- authentic
- diverse
- minimal aggressive grading

Use image crops creatively but protect faces and subjects.

No random generic stock-photo feeling.

---

# 39. Image Performance

Always use `next/image` for local/CMS raster images when practical.

Define:

- dimensions / aspect ratio
- `sizes`
- responsive crops
- priority only above fold

Avoid loading 4K hero assets on mobile.

Use modern image formats from the CDN where supported.

---

# 40. Video

Hero video is allowed only if:

- it meaningfully improves storytelling
- file size is optimized
- static poster exists
- mobile fallback is considered
- autoplay is muted
- no layout shifts occur

Do not make the site depend on autoplay.

---

# 41. Icons

Use a consistent icon set.

Preferred:

```text
lucide-react
```

Avoid mixing:

- FontAwesome
- Heroicons
- custom SVG
- Lucide

in the same interface without need.

Icons should support labels, not replace obvious text indiscriminately.

---

# 42. Buttons

Primary:

- solid BBD purple
- high contrast
- medium rounded
- confident padding

Secondary:

- subtle border
- neutral / soft brand surface

Text action:

```text
Explore programmes →
```

Avoid creating 4–5 button variants per section.

---

# 43. Content Style

University copy should be:

- concise
- confident
- factual
- approachable
- student-oriented

Avoid empty marketing language such as:

> We are committed to providing world-class holistic excellence for transforming global leaders.

Prefer:

> Learn through industry projects, modern labs and programmes designed around the skills employers value.

Do not fabricate university statistics, rankings, accreditations, recruiters, fee values, or claims.

Use placeholders where content is unknown.

---

# 44. Accessibility

Minimum target: WCAG 2.2 AA.

Requirements:

- semantic HTML
- visible keyboard focus
- sufficient contrast
- proper heading order
- skip link
- form labels
- accessible accordions
- accessible dialogs
- alt text
- reduced motion
- no keyboard traps
- minimum practical tap target around 44px

Do not use `<div onClick>` where a button/link should exist.

---

# 45. SEO

Every major route must support metadata.

Use Next Metadata API.

Required:

```text
title
description
canonical
Open Graph
Twitter metadata
robots directives
```

Structured data where appropriate:

```text
EducationalOrganization
CollegeOrUniversity
Course
Article
Event
BreadcrumbList
FAQPage — only where content genuinely qualifies
```

Generate:

```text
sitemap.xml
robots.txt
```

Dynamic CMS routes must be included.

---

# 46. URL Strategy

URLs must be human-readable.

Preferred:

```text
/programmes/btech-computer-science
/schools/school-of-engineering
/admissions
/admissions/scholarships
/news/[slug]
/events/[slug]
```

Avoid:

```text
/page?id=123
/course-details?course_id=84
```

Preserve legacy URLs with redirects during migration.

---

# 47. Performance Targets

Target Lighthouse, realistic production environment:

```text
Performance:     90+
Accessibility:   95+
Best Practices:  95+
SEO:             95+
```

Core Web Vitals:

- LCP under 2.5s where practical
- CLS under 0.1
- INP under 200ms

Strategies:

- Server Components
- image optimization
- font optimization
- dynamic imports
- restrained third-party scripts
- lazy media
- caching
- avoid client-side rendering for static content

---

# 48. JavaScript Budget

The institutional site should not ship application-level JS unnecessarily.

Before installing a dependency ask:

> Can this interaction be implemented with native browser APIs or CSS?

Avoid:

- huge carousel package for simple slider
- animation framework for simple fade
- client fetch library for static CMS pages
- global state manager without need

---

# 49. Loading States

Use tasteful skeletons only when actual dynamic loading exists.

Do not show fake skeletons on statically rendered content.

Use `loading.tsx` where useful.

Reserve layout dimensions to prevent CLS.

---

# 50. Error Handling

Provide:

- global error UI
- route-level errors where necessary
- CMS fetch fallbacks
- meaningful empty states
- not-found handling

For CMS failures:

- do not crash the entire home page because one news API failed
- isolate optional sections when technically reasonable

---

# 51. Search

If site-wide search is implemented:

Search across:

```text
programmes
schools
news
events
important pages
```

Results should prioritize:

1. programme
2. school
3. admission information
4. pages
5. news/events

Search UX should be keyboard-friendly.

---

# 52. Forms

Forms may include:

```text
admission enquiry
contact
callback
brochure request
```

Requirements:

- server validation
- Zod schema
- honeypot / anti-spam
- loading state
- success state
- error state
- no sensitive data exposure
- analytics event

Never rely only on client validation.

---

# 53. Analytics Events

Prepare semantic events such as:

```text
apply_now_click
programme_view
programme_filter
admission_enquiry_submit
brochure_download
phone_click
whatsapp_click
campus_visit_click
event_view
```

Do not scatter analytics code directly inside every button.

Create a wrapper/helper.

---

# 54. Security

Never expose:

- CMS admin credentials
- API secret
- SMTP credentials
- private keys

Only variables beginning with `NEXT_PUBLIC_` may reach browser code.

Sanitize rich CMS HTML before rendering.

Prefer structured content over raw HTML whenever possible.

---

# 55. WordPress Rich Content

If WordPress HTML must be rendered:

- sanitize it
- apply a controlled typography style
- normalize tables
- normalize headings
- make embedded media responsive

Do not blindly dump arbitrary CMS markup into the page.

---

# 56. Tables

Academic pages often contain tables.

All tables must work on mobile.

Use one of:

- horizontal overflow container
- stacked responsive layout
- priority columns

Never let table width break viewport.

---

# 57. Existing BBD Data Patterns

The broader BBD ecosystem has used structures resembling:

```text
course
details
tabs_links
```

Programme data may contain fields such as:

```text
School Name
Programme
Course Length
Session Start Date
Course Type
Eligibility Criteria
Programme Fee
Syllabus
```

Detailed content may include:

```text
Key Facts
Teaching & Assessment
Student Support & Resources
Student Life
Preliminary Reading
Careers
Programme Outcome
Course Structure
```

Do not hard-code the frontend to these labels.

Map these source fields into stable domain objects.

Example:

```ts
interface ProgrammeDetails {
  keyFacts?: RichContent;
  teachingAndAssessment?: RichContent;
  studentSupport?: RichContent;
  studentLife?: RichContent;
  careers?: RichContent;
  outcomes?: ProgrammeOutcome[];
  curriculumUrl?: string;
}
```

This allows future CMS migration.

---

# 58. Data Adapter Example

```text
src/data/wordpress/mappers/programme.mapper.ts
```

Responsibilities:

```text
ACF / WP naming
        ↓
validation
        ↓
clean normalization
        ↓
Programme domain object
```

Components must never access:

```ts
acf.some_weird_backend_field
```

directly.

They should access:

```ts
programme.duration
```

---

# 59. TypeScript

Enable strict mode.

Avoid `any`.

Use discriminated unions where useful.

Validate unknown API responses before trusting them.

Possible Zod boundary:

```ts
const ProgrammeApiSchema = z.object({
  ...
});
```

Do not over-validate trusted compile-time local content.

---

# 60. Naming Conventions

Components:

```text
PascalCase
ProgrammeCard
SchoolHero
AdmissionCTA
```

Files:

```text
programme-card.tsx
school-hero.tsx
admission-cta.tsx
```

Functions:

```text
camelCase
getProgrammeBySlug
normalizeProgramme
```

Types:

```text
Programme
ProgrammeSummary
School
NewsArticle
```

---

# 61. Homepage Component Example

```tsx
export default async function HomePage() {
  const data = await getHomepage();

  return (
    <>
      <HomeHero data={data.hero} />
      <ProgrammeDiscovery data={data.programmes} />
      <UniversityIntro data={data.intro} />
      <SchoolShowcase data={data.schools} />
      <CampusStory data={data.campus} />
      <PlacementHighlights data={data.placements} />
      <ResearchHighlights data={data.research} />
      <StudentStories data={data.stories} />
      <NewsAndEvents data={data.newsAndEvents} />
      <AdmissionCTA data={data.admissionCta} />
    </>
  );
}
```

Each section should remain independently maintainable.

---

# 62. Homepage Detailed Visual Direction

## Section 1 — Hero

- mostly white / very light surface
- high whitespace
- confident headline
- premium campus/student visual
- no more than two CTAs
- subtle brand motif
- optional very gentle hero image motion

## Section 2 — Programme Discovery

Use a concise prompt:

```text
What do you want to study?
```

Filter / category chips:

```text
Engineering
Management
Computer Applications
Law
Pharmacy
Design
Sciences
Education
```

Then show 3–6 relevant programme cards.

Provide `View all programmes`.

## Section 3 — University Proof

Editorial split.

One bold statement.

Example:

```text
Education built around what comes next.
```

Accompany with 3–4 meaningful evidence points.

Not a grid of 8 tiny stats.

## Section 4 — Schools

Use large image-led cards.

Desktop: 2–3 columns.

Mobile: compact vertical or horizontal exploration.

Each card should have:

```text
School name
1 short line
Explore →
```

## Section 5 — Campus Story

More immersive.

Possible sticky media panel + changing copy.

Keep motion smooth and minimal.

## Section 6 — Placements

Use clear proof.

Potential dark/deep-purple section for contrast.

Only one strong dark section may be enough.

## Section 7 — Research

Case-study driven.

## Section 8 — Student Voices

Avoid generic testimonial cards.

Use portrait + short quote + programme.

## Section 9 — News / Events

Editorial layout.

One featured story + smaller supporting stories.

## Section 10 — Admission CTA

Large, simple ending:

```text
Your next chapter starts here.

[Explore Admissions] [Apply Now]
```

---

# 63. Avoid These Common AI Website Patterns

STRICTLY AVOID:

- gradient blobs everywhere
- glassmorphism everywhere
- floating bubbles
- excessive cards
- purple gradients behind every heading
- icon + title + paragraph repeating 12 times
- random dashed lines
- fake dashboard widgets
- excessive pill badges
- rotating 3D objects without relevance
- giant neon glows
- unnecessary particles
- random marquee text
- dozens of scroll animations
- huge rounded rectangle inside another rounded rectangle
- fake university statistics
- generic AI-generated marketing text

The website must look designed by a senior digital designer, not generated from a UI prompt template.

---

# 64. Design Quality Test

Before accepting any section ask:

### Hierarchy
Can I identify the section purpose in 2 seconds?

### Density
Is anything competing unnecessarily?

### Rhythm
Does the page alternate content density naturally?

### Brand
Does it still look like BBD?

### Authenticity
Would this feel credible for a university?

### Responsiveness
Does mobile feel intentionally designed?

### Conversion
Is the next meaningful action obvious?

### Accessibility
Can it be used with keyboard and reduced motion?

### Performance
Is this visual worth its runtime cost?

---

# 65. Homepage Density Rule

Never put more than roughly:

- one major message
- one primary visual idea
- one primary interaction

in the same viewport unless composition clearly requires it.

The site should avoid "everything everywhere" syndrome.

---

# 66. Responsive Motion Rule

Mobile animations should be simpler.

If desktop uses:

- parallax
- sticky sections
- large horizontal travel

mobile should often use:

- fade/translate
- simple swipe
- normal document flow

Never sacrifice usability to preserve an animation.

---

# 67. Progressive Enhancement

Critical content should render without client JavaScript when possible.

JavaScript should enhance:

- navigation
- filters
- accordions
- animations
- search

not provide the existence of baseline content.

---

# 68. Metadata & CMS Ownership

Define what content editors can update:

```text
hero
announcements
programme details
school content
faculty
placements
statistics
news
events
admission dates
contact details
footer
```

Do not make editors modify layout-specific implementation details unnecessarily.

CMS should manage content, not pixel positioning.

---

# 69. Site Configuration

Create:

```ts
// src/config/site.ts

export const siteConfig = {
  name: "[SIBLING UNIVERSITY NAME]",
  shortName: "[SHORT NAME]",
  description: "[DESCRIPTION]",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  contact: {
    phone: "[PHONE]",
    email: "[EMAIL]",
  },
};
```

Global details should not be duplicated across components.

---

# 70. Environment Variables

Example:

```env
NEXT_PUBLIC_SITE_URL=
WORDPRESS_API_URL=
WORDPRESS_REVALIDATE_SECRET=
NEXT_PUBLIC_GTM_ID=
```

Do not expose backend-only values publicly.

---

# 71. API Client Example Structure

```text
src/data/wordpress/client.ts
```

Possible abstraction:

```ts
export async function wpFetch<T>(
  path: string,
  options?: {
    revalidate?: number;
    tags?: string[];
  }
): Promise<T> {
  ...
}
```

Do not abstract prematurely beyond actual requirements.

---

# 72. Revalidation

Support webhook-based or tag-based revalidation if CMS publishing speed later requires it.

Potential tags:

```text
navigation
homepage
programmes
programme:{slug}
schools
school:{slug}
news
events
```

---

# 73. Preview / Draft Content

If editors require previews later, architecture should allow draft/preview mode without restructuring the entire application.

Do not implement unless requested.

Simply avoid architectural choices that prevent it.

---

# 74. Testing

Minimum:

```text
TypeScript build
ESLint
responsive testing
keyboard testing
form validation
broken-link review
CMS failure review
404 routes
metadata inspection
Core Web Vitals
```

For high-risk logic add unit tests.

Potential end-to-end flows:

```text
programme discovery
programme page
apply CTA
contact enquiry
site navigation
mobile menu
```

---

# 75. Browser Support

Support current evergreen:

- Chrome
- Edge
- Safari
- Firefox

Ensure iOS Safari behavior is tested.

Do not rely on experimental CSS without acceptable fallback.

---

# 76. Development Workflow for AI Agent

Before writing code:

1. inspect current repository
2. read this file
3. inspect existing global CSS
4. inspect current layout
5. inspect assets
6. inspect APIs/types
7. identify reusable code
8. avoid destructive rewrites

If an existing working feature exists:

**preserve it unless redesign requires a change.**

Do not delete working API integrations merely to simplify the generated code.

---

# 77. No-Hallucination Rule

If existing data, API, route or component structure is unknown:

- inspect code
- inspect supplied files
- infer conservatively
- leave clear TODO where content is genuinely unavailable

Never invent endpoint URLs.

Never invent WordPress field names.

Never invent page content presented as factual.

---

# 78. Change Strategy

When implementing redesign in an existing repository:

Prefer:

```text
incremental component replacement
```

over:

```text
delete whole site and rebuild blindly
```

Preserve:

- route behavior
- integrations
- metadata
- forms
- working CMS features
- analytics
- redirects

unless explicitly instructed otherwise.

---

# 79. First Implementation Phase

Start with the design system and shell.

Build in this order:

```text
01 fonts
02 colors / theme variables
03 spacing / container
04 button primitives
05 global typography
06 header
07 mobile navigation
08 footer
09 hero
10 homepage sections
```

Do not begin by building every route.

---

# 80. Second Implementation Phase

Build content architecture:

```text
programme listing
programme detail
school listing
school detail
admissions
news/events
```

Integrate CMS normalization.

---

# 81. Third Implementation Phase

Add enhancement:

```text
animation
search
filters
analytics
schema markup
performance refinement
accessibility audit
```

Never animate an unstable layout before the base UI works correctly.

---

# 82. Homepage Prototype Requirement

Before expanding the system, homepage must demonstrate:

- new visual language
- header
- hero
- programme discovery
- school showcase
- campus storytelling
- placements
- news/events
- final CTA
- footer

The homepage acts as the visual reference for subsequent pages.

---

# 83. Design Review Standard

A design is not accepted merely because it is technically responsive.

It should pass:

```text
Would this look convincing in a professional university website pitch?
Would a real student find what they need quickly?
Does it look calm on a 1440px screen?
Does it remain strong at 390px?
Could it still feel contemporary 3–5 years from now?
```

If no, refine.

---

# 84. Senior Designer Rules

Use fewer elements with better composition.

When unsure between:

```text
4 visual decorations
```

and

```text
1 strong photograph
```

prefer the photograph.

When unsure between:

```text
8 cards
```

and

```text
3 editorial blocks
```

prefer editorial blocks.

When unsure between:

```text
more animation
```

and

```text
better typography
```

prefer typography.

When unsure between:

```text
more information
```

and

```text
clearer prioritization
```

prefer prioritization.

---

# 85. Content Preservation Rule

When redesigning an existing page:

**Do not remove real content simply because the new design is cleaner.**

Instead:

- reorganize
- prioritize
- collapse secondary details appropriately
- improve hierarchy
- create dedicated detail views

Content completeness and visual cleanliness must coexist.

---

# 86. Example Interaction Principles

Card hover:

```text
image scale 1 → 1.025
arrow moves 2–4px
surface/border subtly changes
```

Button hover:

```text
small contrast change
optional arrow translate
```

Navbar:

```text
transparent/white depending hero
becomes stable white surface on scroll
```

Section reveal:

```text
opacity 0 → 1
translateY 20px → 0
```

Keep it restrained.

---

# 87. Accessibility Motion Example

Pseudo-pattern:

```ts
const reduceMotion = useReducedMotion();

if (reduceMotion) {
  // render or animate instantly/minimally
}
```

No critical horizontal scroll storytelling for reduced-motion users.

---

# 88. Long-Form Academic Content

For regulation pages, policies, syllabus information, notices and university documents:

Do not force all content into marketing layouts.

Use a clean editorial template:

```text
breadcrumb
page title
last updated
reading column
TOC if long
document links
related resources
```

Readability takes priority.

---

# 89. Downloads

Downloads should show useful metadata.

Example:

```text
Academic Calendar 2027
PDF · 1.4 MB

[Download]
```

Use icons consistently.

CMS should provide or derive document metadata if practical.

---

# 90. Breadcrumbs

Use breadcrumbs on deeper pages.

Example:

```text
Home / Schools / School of Engineering / B.Tech CSE
```

Include `BreadcrumbList` structured data where appropriate.

---

# 91. Sticky Elements

Use sticky positioning only when it improves navigation/storytelling.

Good:

- programme local navigation
- media storytelling
- desktop sidebar TOC

Avoid:

- multiple overlapping sticky bars
- sticky promotional banners fighting navbar
- persistent widgets obscuring content

---

# 92. Announcement Bar

If required:

- one announcement at a time or controlled rotation
- dismissible where appropriate
- concise
- not permanently oversized

Examples:

```text
Admissions 2027 are now open → Apply
```

Do not use a constantly scrolling noisy ticker by default.

---

# 93. Admissions CTA Persistence

On high-intent pages, a small mobile sticky CTA may be useful:

```text
Apply Now
```

Ensure it:

- does not cover content
- respects safe area
- does not compete with cookie/chat widgets

---

# 94. Chat / WhatsApp

If WhatsApp enquiry is used:

- implement as a subtle action
- avoid giant floating green widget
- delay non-critical scripts
- track click event

Institutional professionalism comes first.

---

# 95. Dark Sections

Do not make the whole website dark.

Use one or two deep brand sections to create pacing.

Suitable:

- placements
- innovation
- closing CTA

Use accessible contrast.

---

# 96. Gradients

Gradients may use BBD purple/blue, but sparingly.

Good:

```text
subtle background wash
hero media glow
CTA surface
```

Bad:

```text
gradient headline in every section
neon purple backgrounds everywhere
```

---

# 97. Decorative Motifs

If a brand motif is needed, derive it from:

- BBD geometry
- architecture
- campus lines
- academic grid
- logo detail

Use it subtly.

Avoid generic AI squiggles.

---

# 98. Future Scalability

Architecture should support later additions:

```text
multiple campuses
new schools
new programme levels
Hindi content
international students
research repository
faculty profiles
career portal
alumni
student portal links
```

Do not design URLs/data structures that make these additions painful.

---

# 99. Internationalization Readiness

Do not implement i18n unless requested.

However:

- do not hardcode layout based on English string length
- maintain content abstractions
- avoid text baked into images

This keeps Hindi/other languages feasible later.

---

# 100. Final Instruction to Coding Agent

Act as both:

1. a senior digital product designer specializing in higher-education websites, and
2. a senior Next.js frontend architect.

Do not merely satisfy the requested component list.

Evaluate:

- information architecture
- visual hierarchy
- interaction cost
- content density
- performance
- accessibility
- scalability

Before creating any visually complex component, ask:

> Does this make the website clearer, more credible, or more useful?

If not, remove it.

The desired final result is:

> A premium, modern BBD-family institutional website with Jio-level cleanliness, Apple-like restraint and smoothness, excellent academic discoverability, and a scalable production-grade Next.js architecture.

---

# 101. Initial Agent Prompt

When starting a new implementation, use the following instruction together with this context:

```text
Read context.md completely before touching the codebase.

We are redesigning a sibling website within the BBD education ecosystem.

The website must preserve BBD brand identity but substantially improve visual maturity. Aim for Jio.com-style cleanliness and Apple-like spacing, motion restraint and premium editorial quality without cloning either website.

First inspect the repository and existing integrations. Do not assume APIs, content models or routes. Preserve existing working behavior.

Then establish the design system and scalable frontend architecture described in context.md.

Start by producing:
1. repository audit,
2. proposed sitemap,
3. homepage section architecture,
4. design tokens,
5. component map,
6. exact folder/file plan.

After that, implement the homepage shell using Next.js App Router, TypeScript and Tailwind CSS v4.

Rules:
- default to Server Components;
- use Client Components only for real interactivity;
- use pure Tailwind/design tokens for styling;
- no Bootstrap/Material UI;
- do not make everything a card;
- no fake content or statistics;
- preserve existing content;
- avoid unnecessary packages;
- mobile must feel intentionally designed;
- animations must be subtle and performance-conscious;
- accessibility and SEO are mandatory;
- all CMS data must pass through a normalization layer before reaching UI components.

Do not generate an entire website blindly in one pass.
Build the system in coherent production-ready phases and keep existing working flows intact.
```

---

# 102. Placeholders to Replace Before Production

Replace these once sibling website details are confirmed:

```text
[SIBLING UNIVERSITY NAME]
[SHORT NAME]
[DESCRIPTION]
[PHONE]
[EMAIL]
[OFFICIAL BRAND COLORS]
[WORDPRESS API URL]
[ADMISSION URL]
[OFFICIAL SOCIAL LINKS]
[ADDRESS]
```

Do not silently invent their values.

---

# End of Context
