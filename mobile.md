# Mobile AppShell Architecture — Reusable Guide

> Extracted from `frontend/components/shared/app-shell.tsx` + mobile headers.
> Purely **mobile-only** (`md:hidden`). Desktop (`DesktopNav`) intentionally excluded.
> Stack: Next.js App Router + Tailwind v4 (`@theme`) + `motion` + `zustand` + `lucide-react`.

---

## 1. Philosophy — Native App Shell on Web

- `min-h-dvh flex flex-col` = native viewport height (not `vh`).
- `viewportFit: "cover"` + `env(safe-area-inset-bottom)` — iOS home indicator ke saath flush gap nahi.
- 3-tier sticky glass headers, 1 sticky tab bar, 1 fixed floating pill.
- `md:hidden` everywhere — mobile pe app, desktop pe alag shell.

```
Mobile View ( <768px )
┌─────────────────────────────┐
│ Mobile Header (sticky top-0)│  ← card | bar | detail  (one at a time)
├─────────────────────────────┤
│ Hero (optional full-bleed)  │  ← hero prop
├─────────────────────────────┤
│ <main> constrained content  │  ← max-w-2xl centered, px-4
├─────────────────────────────┤
│ <TrackPill> fixed bottom-4.5rem │ ← above nav, AnimatePresence
├─────────────────────────────┤
│ <BottomNav> sticky bottom-0 │  ← 4 tabs, backdrop-blur, hidden on detail
└─────────────────────────────┘
```

---

## 2. Core `AppShell` — API & Layout

### Props
```ts
type AppShellProps = {
  children: ReactNode;
  hero?: ReactNode;              // full-bleed above main
  mobileHeader?: "bar" | "card" | "detail" | "none"; // default "bar"
  title?: string;                // for detail header
  backHref?: string;             // fallback for deep-link
  wide?: boolean;                // max-w-6xl vs 2xl
  xwide?: boolean;               // max-w-7xl (implies wide)
}
```

### Skeleton (copy-paste)
```tsx
import { TopBar } from "./top-bar";
import { MobileSearchCard } from "./mobile-search-card";
import { MobileDetailBar } from "./mobile-detail-bar";
import { BottomNav } from "./bottom-nav";
import { TrackPill } from "./track-pill";
import { SiteFooter } from "./site-footer"; // optional
import { cn } from "@/lib/utils/cn";

export function AppShell({ children, hero, mobileHeader="bar", title, backHref, wide, xwide }: AppShellProps) {
  const isDetail = mobileHeader === "detail";
  return (
    <div className="flex min-h-dvh flex-col">
      {mobileHeader === "card" && <MobileSearchCard />}
      {mobileHeader === "bar" && <TopBar />}
      {isDetail && <MobileDetailBar title={title ?? ""} backHref={backHref} />}
      {hero}
      <main className={cn("mx-auto w-full flex-1 px-4 pb-8 pt-4 md:px-6 md:pt-8", xwide ? "max-w-7xl" : wide ? "max-w-6xl" : "max-w-2xl")}>
        {children}
      </main>
      <SiteFooter />
      <TrackPill />
      {/* IMPORTANT: BottomNav must be DIRECT child of flex column — else sticky fails */}
      {!isDetail && <BottomNav />}
      {/* Global sheets mounted here */}
      {/* <LocationPicker /> */}
    </div>
  );
}
```

### Key Rules
1. `BottomNav` ko kabhi wrapper me mat dalo — `position: sticky` break ho jata hai.
2. `main` hamesha `flex-1` — footer/nav bottom pe chipka rahe.
3. Detail/funnel pages pe `mobileHeader="detail"` do — tabs auto hide.

### Viewport (layout.tsx)
```ts
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
```

---

## 3. Mobile Headers — 3 Variants

#### 3.1 `TopBar` — Browse / Listing (`top-bar.tsx`)
Compact glass header for `/services`, `/search`.

```tsx
<header className="sticky top-0 z-30 border-b border-border/70 bg-bg/70 backdrop-blur-xl md:hidden">
  <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-3">
    <button onClick={() => openSheet("location-picker")} className="flex min-w-0 items-center gap-2">
      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary"><MapPin/></span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] font-medium text-fg-subtle">Deliver to</span>
        <span className="flex items-center gap-0.5 truncate text-sm font-semibold text-fg">{location?.label ?? "Set your address"} <ChevronDown/></span>
      </span>
    </button>
    <Link href="/search" className="ml-auto flex size-10 items-center justify-center rounded-full border border-border bg-surface text-fg-muted"><Search/></Link>
  </div>
</header>
```
- `z-30`, `sticky top-0`, `bg-bg/70 backdrop-blur-xl`
- Left: location picker sheet trigger (`useUIStore`), Right: search link.

#### 3.2 `MobileSearchCard` — Home Only (`mobile-search-card.tsx`)
Blinkit-style immersive header. **Only on `/`**.

Structure:
```
[Full-bleed Banner h-92 md:hidden]
  - motion.div flex drag="x" auto-advance 6500ms, swipe threshold 40, spring 260/32
  - MediaBackground (img/video from promo API, fallback static)
  - overlay: linear-gradient(180deg, rgba(15,10,30,0.55) 0%, rgba(15,10,30,0.15) 40%, rgba(15,10,30,0.60) 100%)
  - Top: Deliver to button (white/20 backdrop-blur on dark banner)
  - Bottom: eyebrow + title (font-display extrabold, text-white) + dots (currently commented)
[Sticky Floating Search]
  - sticky top-2 z-40 -mt-[19.25rem] px-4
  - Link -> /search : h-10 rounded-full bg-elevated border-border shadow shadow shadowpx-4 hover- [<always> ...]
  - Icon text-primary, placeholder "Search for ..."
[Spacer h-[16.25rem] md:hidden] // restores flow for negative margin
```

Copy critical classes:
```tsx
<div className="relative h-92 overflow-hidden md:hidden"> {/* banner */}
<div className="sticky top-2 z-40 -mt-[19.25rem] px-4 md:hidden"> {/* search */}
<div aria-hidden className="h-[16.25rem] md:hidden" /> {/* spacer */}
```

Logic:
- Slides: `useBanners()` API → fallback `getPromoSlides()`
- Theme-color meta update per slide: `meta[name="theme-color"]` set to `active.themeColor ?? "#ede9fe"`
- Drag: `motion/react` `PanInfo`, `dragElastic 0.12`

#### 3.3 `MobileDetailBar` — Funnel / Detail (`mobile-detail-bar.tsx`)
Urban Company pattern for service detail, cart, checkout.

```tsx
<header className="sticky top-0 z-30 border-b border-border/70 bg-bg/80 backdrop-blur-xl md:hidden">
  <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-2.5">
    <button onClick={goBack} className="flex size-9 items-center justify-center rounded-full border border-border bg-surface text-fg active:-translate-x-0.5"><ArrowLeft/></button>
    <p className="min-w-0 flex-1 truncate text-sm font-bold text-fg">{title}</p>
    <Link href="/search" className="flex size-9 items-center justify-center rounded-full border bg-surface text-fg-muted"><Search/></Link>
  </div>
</header>
```
- `useSmartBack(backHref)` — in-app history hai to `router.back()`, deep-link pe `backHref` fallback.
- Location picker yaha nahi — sirf home ka concept.
- Desktop pe hidden, `DesktopNav` dikhta hai.

---

## 4. `BottomNav` — Native Tab Bar (`bottom-nav.tsx`)

```tsx
const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/cart", label: "Cart", icon: ShoppingCart, badge: true },
  { href: "/account", label: "Account", icon: User },
];

<nav className="sticky bottom-0 z-30 border-t border-border bg-bg/90 backdrop-blur md:hidden">
  <ul className="mx-auto flex w-full max-w-2xl items-stretch justify-around">
    {items.map(({href,label,icon:Icon}) => {
      const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
      return (
        <li key={href} className="flex-1">
          <Link href={href} aria-current={active ? "page" : undefined}
            className={cn("flex flex-col items-center gap-1 py-2.5 text-xs font-medium", active ? "text-primary" : "text-fg-subtle")}>
            <span className="relative"><Icon className="size-5"/>
              {badge && cartCount>0 && <span className="absolute -right-2 -top-1.5 flex min-w-4 justify-center rounded-full bg-accent px-1 text-[10px] font-extrabold text-accent-foreground">{cartCount>9?"9+":cartCount}</span>}
            </span>{label}
          </Link>
        </li>
      )
    })}
  </ul>
</nav>
```
- Active: `text-primary`, inactive `text-fg-subtle hover:text-fg-muted`
- Cart badge `bg-accent`, `absolute -right-2 -top-1.5`
- `sticky bottom-0` needs direct flex parent (see §2).

---

## 5. Floating Layer — `TrackPill` (`track-pill.tsx`)

Pronto/Uber style live Nudge — BottomNav ke upar.

```tsx
const show = active && !pathname.includes("/track");
<AnimatePresence>
  {show && (
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.3, ease:[0.16,1,0.3,1]}}
      className="fixed inset-x-0 bottom-[4.5rem] z-40 flex justify-center px-4 sm:bottom-6">
      <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-primary/20 bg-primary px-4 py-2.5 text-primary-foreground shadow-[var(--shadow-primary)]">
        <span className="flex size-8 items-center justify-center rounded-full bg-white/20"><Navigation/></span>
        <Link href={`/bookings/${active.id}/track`} className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">{active.service}</span>
          <span className="block text-xs text-white/80">{active.statusLabel} · Tap to track</span>
        </Link>
        <button onClick={clearActive}><X/></button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
```
- `useActiveBookingStore` se drive.
- `fixed bottom-[4.5rem]` = tab bar ke just upar (tab bar ~4rem).

---

## 6. Tokens — Dusre Project Me Kaise Swap Kare

Ye guide token-agnostic hai. Bas `globals.css` me apne project ke tokens daal do:

```css
@import "tailwindcss";
@theme {
  --color-primary: #YOUR_PRIMARY;
  --color-accent: #YOUR_ACCENT;
  --color-bg: #YOUR_BG;
  --color-surface: #YOUR_SURFACE;
  --color-elevated: #YOUR_CARD;
  --color-fg: #YOUR_TEXT;
  --color-fg-muted: #YOUR_MUTED;
  --color-fg-subtle: #YOUR_SUBTLE;
  --color-border: #YOUR_BORDER;
  --radius-card: 1.25rem;
  --shadow-sm: ...;
  --shadow-primary: ...;
  --font-sans: var(--font-your-sans);
  --font-display: var(--font-your-display);
}
```

> Original violet/coral (`#7c3aed` / `#ff5c39`) ko apne brand se replace karo. Glass headers `bg-bg/70 backdrop-blur-xl` automatically adapt ho jayenge. Dark mode ke liye `.dark` block duplicate karo.

---

## 7. Dependencies Checklist

```
next 16 + react 19
tailwindcss 4 + @tailwindcss/postcss
lucide-react
motion (framer-motion successor)
zustand (ui/cart/location/active-booking stores)
clsx + tailwind-merge -> lib/utils/cn.ts
```

`cn` util:
```ts
export function cn(...c: ClassValue[]) { return twMerge(clsx(c)); }
```

---

## 8. Integration Steps (Dusre Project Me)

1. `components/shared/` me 4 files copy: `app-shell.tsx`, `top-bar.tsx`, `mobile-search-card.tsx`, `mobile-detail-bar.tsx`, `bottom-nav.tsx`, `track-pill.tsx`.
2. `stores/ui-store.ts` (`openSheet`), `stores/cart-store.ts` (`useCartCount`), `stores/location-store.ts` + `stores/active-booking-store.ts` banaye ya stub karo.
3. `lib/navigation/nav-history.tsx` -> `useSmartBack` hook copy karo.
4. `app/layout.tsx` me `viewportFit: "cover"` lagao.
5. Har route pe:
   ```tsx
   // Home
   <AppShell mobileHeader="card" hero={<YourHero/>}><HomeContent/></AppShell>
   // Listing
   <AppShell mobileHeader="bar"><Services/></AppShell>
   // Detail/Funnel
   <AppShell mobileHeader="detail" title="Service name" backHref="/services"><Detail/></AppShell>
   ```
6. Promo slides API nahi hai to `MobileSearchCard` me static array do — carousel still works.

---

## 9. Gotchas

- `MobileSearchCard` ka `-mt-[19.25rem]` + spacer bina layout collapse karta hai.
- `BottomNav` ko `flex-col` ke direct child rakho.
- `backdrop-blur-xl` ke liye `bg-bg/70` opacity zaruri — solid color pe blur dikhega nahi.
- `h-92` (23rem) Tailwind v4 me custom — agar missing lage to `h-[23rem]` use karo.
- `leaflet` / map ho to `.leaflet-container { z-index:0; isolation:isolate }` taaki header ke upar na aaye.

---

*End — Mobile AppShell only. Desktop logic intentionally omitted for ditto reuse.*