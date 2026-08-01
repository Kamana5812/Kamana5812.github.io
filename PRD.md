# PRD.md
## Personal Portfolio Website — Kashish Agrawal
### Computer Science Student & Frontend Developer

**Document status:** Implementation-ready
**Version:** 1.0
**Prepared for:** Standalone build in a future session ("Build this website exactly according to this PRD")

---

## Table of Contents

1. Executive Summary
2. Product Vision
3. Portfolio Positioning
4. Goals
5. Non-Goals
6. Target Audience
7. Recruiter Journey
8. User Experience Principles
9. Brand Personality
10. Visual Direction
11. Anti-AI-Generated Design Rules
12. Colour System
13. Typography System
14. Layout System
15. Spacing System
16. Responsive Strategy
17. Information Architecture
18. Navigation
19. Detailed Section Specifications (index)
20. Hero Specification
21. About Specification
22. Education Specification
23. Skills Specification
24. Featured Project Specification
25. Project Case Study Structure
26. Project Archive
27. Experience
28. Certifications
29. Currently Learning
30. Resume
31. Contact
32. Footer
33. Interaction Design
34. Motion System
35. Accessibility
36. Performance
37. SEO
38. Technical Architecture
39. Component Architecture
40. Data Architecture
41. Folder Structure
42. Content Guidelines
43. UX States
44. Asset Requirements
45. Testing Requirements
46. Acceptance Criteria
47. Implementation Roadmap
48. Future Enhancements
49. Final Pre-Launch Checklist

---

## 1. Executive Summary

This document specifies a premium, editorial-quality personal portfolio website for **Kashish Agrawal**, a Computer Science student and frontend developer. The site's job is narrow and specific: let a recruiter, engineer, or founder understand — in under a minute — who Kashish is, what he's capable of, and how to reach him, entirely through real project evidence rather than claims.

The design direction rejects generic "AI-generated" landing-page conventions (centered hero stacks, gradient headlines, identical Bento cards, purple/cyan palettes) in favor of an asymmetrical, typography-led, editorial system with one confident accent colour and a restrained motion language. Every visual decision is justified against the brief: a student developer with real, demonstrable work, not a manufactured senior profile.

The technical foundation is React + Vite with hand-written CSS (no Tailwind, no component library), a data-driven project model, and a performance/accessibility bar of Lighthouse 90+ across the board.

---

## 2. Product Vision

> A calm, confident, editorial website that reads like it was designed by someone who already thinks like a product person — even though he's still a student. It proves capability through craft and real projects, not through inflated language.

The site is a **portfolio-as-proof**, not a portfolio-as-brochure. Every section should answer a question a technical reader actually has, in the order they'd naturally ask it.

---

## 3. Portfolio Positioning

**Name:** Kashish Agrawal
**Primary title:** Computer Science Student & Frontend Developer
**Supporting line:** "I build thoughtful digital experiences while exploring the intersection of design, technology and real-world problem solving."

**Positioning statement (internal, not published copy):**
"This student is still early in their career, but they already know how to turn ideas into real digital products."

Kashish is positioned as:
- A current student (not a professional with years of experience)
- A frontend developer with genuine design sensitivity
- Someone with a track record of *finished, real* projects (matrimonial platform, career-guidance platform, e-commerce experience, IoT/AI system)
- Someone actively learning in public (DSA, advanced React, system design, AI/ML)
- Technically broader than "just frontend" — has touched IoT, embedded systems, and applied AI

The site must never imply agency-level scale, a multi-year professional career, or unverified metrics/clients.

---

## 4. Goals

1. Communicate identity, specialization, and student status within 30–60 seconds.
2. Make **Featured Projects** the clear centerpiece — visually and structurally.
3. Present a coherent, distinctive visual identity that could not be mistaken for a template.
4. Provide frictionless access to resume and contact from anywhere on the site.
5. Demonstrate design maturity (hierarchy, restraint, typography, motion judgment) as evidence of frontend/UX skill in itself.
6. Achieve strong technical fundamentals: performance, accessibility, SEO.
7. Remain fully honest — no fabricated companies, metrics, clients, or outcomes.
8. Be maintainable: new projects, certifications, and experience entries should be addable via data, not markup changes.

---

## 5. Non-Goals

- This is **not** a SaaS marketing site, an agency site, or a senior-engineer portfolio.
- Not building a blog, CMS, or multi-language system in v1.
- Not adding pages beyond the defined IA merely to appear larger.
- Not using percentage-based skill bars, fake testimonials, or invented client logos.
- Not chasing every visual trend (glassmorphism, neon glow, floating blobs, oversized gradients).
- Not implementing dark mode by default — see Section 35 for the explicit evaluation.
- Not building this PRD's companion React code in this pass — this document is the deliverable.

---

## 6. Target Audience

Ranked by design priority:

1. **Internship recruiters** — skimming, 30–60 seconds, mobile or desktop.
2. **Software engineers reviewing candidates** — will inspect code quality signals (GitHub links, project depth).
3. **Technical hiring managers** — want to see judgment and process, not just output.
4. **Startup founders** — evaluating scrappy, product-minded builders.
5. **Freelance clients** — want proof of reliability and finished work.
6. **Hackathon/competition judges** — scanning for technical breadth and execution speed.
7. **College faculty/mentors** — context-aware, care about learning trajectory.
8. **Other developers** — evaluate craft, code, and design taste.

Every layout and copy decision should be pressure-tested against reader #1 (time-constrained recruiter) first, then #2 (technically skeptical engineer).

---

## 7. Recruiter Journey

**Scenario:** A recruiter opens the site and gives it ~45 seconds before deciding whether to keep reading.

Required discovery order:

| Order | Discovery | Where |
|---|---|---|
| 1 | Identity (name, that this is a person, not a company) | Hero |
| 2 | Current student status | Hero subhead / immediate About proximity |
| 3 | Specialization (CS + Frontend) | Hero headline |
| 4 | Best project | First scroll below hero (Featured Projects, Project 01) |
| 5 | Technical skills | Skills section, reachable within 2–3 scrolls |
| 6 | Practical experience | Experience section or an Experience signal surfaced earlier (e.g. a compact "internship/freelance" chip near hero or About) |
| 7 | Resume | Always-visible nav item + hero secondary CTA |
| 8 | Contact information | Sticky/nav-accessible + dedicated section |

Design implication: the **hero + first fold below it** must contain identity, status, specialization, and a direct path into the strongest project. Nothing else competes for attention in that zone.

---

## 8. User Experience Principles

1. **Evidence over adjectives.** Show the project; don't narrate enthusiasm.
2. **One dominant idea per screen.** Never let two elements compete for the same level of attention.
3. **Progressive disclosure.** Summary first (card/showcase), depth on demand (case study).
4. **Predictable navigation, unpredictable layout.** IA is simple and conventional; composition is not.
5. **Motion earns its place.** If removing an animation changes nothing about comprehension, cut it.
6. **Truth by default.** Placeholders are visible and honest, never silently invented.
7. **Design for the skim, reward the read.** A skimmer gets the headline story; a reader gets full case studies.

---

## 9. Brand Personality

| Trait | Expressed as |
|---|---|
| Curious | "Currently Exploring" section, visible learning log |
| Grounded | No inflated titles, no unverified metrics |
| Precise | Tight type scale, consistent spacing, exact technical labels |
| Quietly confident | Large typography, generous whitespace, no exclamation-heavy copy |
| Craft-oriented | Editorial composition, considered motion, real project depth |
| Technical | Monospace metadata, system-like structure in case studies |

Brand adjectives to design against: **precise, editorial, warm-technical, unhurried, honest.**
Brand adjectives to actively avoid: flashy, corporate, hype-driven, generic-startup, overproduced.

---

## 10. Visual Direction

Reference-level quality (Pentagram, Instrument, IDEO, Ramotion, Clay, Locomotive, top independent Awwwards portfolios) — used only as a bar for hierarchy, typographic confidence, and restraint, never copied directly.

**Design plan (token system):**

- **Colour:** Deep pine-teal accent against warm paper neutrals — technical but not cold, distinct from the purple/cyan AI cliché and from the terracotta/cream AI cliché.
- **Type:** An editorial serif display face (used sparingly, at large sizes) + a clean grotesk body face + a monospace utility face for metadata, labels, and technical facts (year, stack, status). Three roles, three faces — none of them the site's only font.
- **Layout:** Left-aligned, asymmetrical hero; a project system where each featured project uses a genuinely different composition (large editorial, split-screen, image-led, technical/system-oriented) inside one shared grid language; a compact editorial *index* (not a grid) for secondary experiments.
- **Signature element:** A **left-column running index** — a slim, sticky, vertical set of section markers (e.g., `01 Home / 02 About / 03 Skills / 04 Projects / 05 Experience / 06 Contact`) in monospace, visible on desktop, that both orients the reader and doubles as a scoped in-page navigation aid. It's the one place numbering is justified, because it mirrors a real, ordered table of contents rather than decorating unrelated content. On mobile it collapses into the hamburger menu's active-state list.

**Self-critique pass (per Section 41 requirements) is folded directly into Section 41 below** — this direction was chosen specifically because it avoids all three current AI-cliché clusters (cream+serif+terracotta; near-black+neon accent; broadsheet hairline-rule newspaper layout) while still being editorial and typographic.

---

## 11. Anti-AI-Generated Design Rules

Non-negotiable constraints carried through the entire system:

1. **No gradient typography**, ever, on headings. Gradients, if used at all, are restricted to a single small accent (e.g., a 4px underline sliver on hover) and never as a full-section background.
2. **No generic centered hero-stack.** The hero is left-aligned and asymmetrical (see Section 20).
3. **Deliberate hierarchy.** No two adjacent sections, cards, or projects are allowed to be visually equal in size/weight without a specific reason.
4. **Icons only from Lucide** (see Section 33), used only where they aid comprehension — never emoji, never decorative icon-per-label.
5. **Typography carries identity** — see the three-role type system in Section 13.
6. **Motion is restrained and purposeful** — see Section 34; no floating objects, particles, parallax excess, glow, or animated gradients.
7. **Handcrafted layout** — projects are not four identical cards; the archive is a compact index, not a grid; not every block lives in a rounded card.
8. **Whitespace first** — hierarchy is established with type/space/scale/composition before any decoration.
9. **Brand-specific decision test** — every major visual choice is checked against: *"Does this strengthen Kashish's identity as a student developer and thoughtful digital builder?"*
10. **Timeless over trendy** — priority order is typography → composition → usability → content → storytelling → interaction → restraint.

---

## 12. Colour System

Rationale: avoids both dominant AI-cliché palettes (purple/cyan neon; cream+serif+terracotta). A deep pine-teal reads technical, calm, and slightly unexpected for a developer portfolio — it suits "growth/learning" without leaning decorative, and pairs cleanly with warm (not stark white, not cold gray) neutrals for an editorial, paper-like canvas.

### Light mode (default)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F7F5F0` | Page background — warm paper, not stark white |
| `--color-surface` | `#FFFFFF` | Cards, panels, elevated content |
| `--color-surface-alt` | `#EFEDE6` | Secondary surface (archive rows, tags) |
| `--color-text` | `#171B1A` | Primary text — near-black, warm-neutral undertone |
| `--color-text-muted` | `#5B615F` | Secondary/meta text, captions |
| `--color-border` | `#DEDBD2` | Hairline borders, dividers |
| `--color-primary` | `#123A34` | Deep pine-teal — headings accent, primary buttons |
| `--color-accent` | `#1F7A63` | Brighter teal — links, hover states, active indicators |
| `--color-accent-soft` | `#DDEBE6` | Tag backgrounds, subtle highlight fill |
| `--color-focus` | `#1F7A63` | Focus ring colour (see Accessibility) |
| `--color-danger` | `#8C3B2E` | Form errors only |

### Dark mode (optional — see Section 35 for go/no-go)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-dark` | `#12140F` → refined to `#14171A` | Page background |
| `--color-surface-dark` | `#1C201F` | Cards/panels |
| `--color-text-dark` | `#F2F0EA` | Primary text |
| `--color-text-muted-dark` | `#9AA09C` | Secondary text |
| `--color-border-dark` | `#2A2E2C` | Dividers |
| `--color-accent-dark` | `#35A08A` | Brightened teal for dark backgrounds |

**Rule:** the accent (`--color-accent`) is the *only* saturated colour in the system. Everything else is warm neutral. No secondary "brand blue," no purple, no gradients standing in for a second colour.

---

## 13. Typography System

### Font pairing options considered

**Option A (recommended): Fraunces + Inter + JetBrains Mono**
- *Fraunces* (display/heading): a soft, characterful serif with real personality at large sizes, optically warm rather than corporate; highly readable at display sizes; free via Google Fonts.
- *Inter* (body/interface): neutral, dense-legible grotesk built for UI text; free, variable, excellent at small sizes.
- *JetBrains Mono* (utility/metadata): technical monospace for labels, years, stack tags, status chips, and the signature left-column index — reinforces "developer" identity without resorting to fake terminal windows.
- **Why it fits:** the serif gives the editorial warmth and personality the brief demands; the grotesk keeps the interface legible and current; the monospace is an honest, non-decorative way to signal "developer" through typography instead of clichéd code-block backgrounds.

**Option B: Fraunces + IBM Plex Sans + IBM Plex Mono**
- Same display face; IBM Plex Sans/Mono as a matched family pair (share DNA, slightly more technical/engineered feel than Inter).
- Why it fits: tighter family cohesion between body and mono since they're drawn from one type system; slightly more "engineering documentation" tone, which suits a CS student well but reads marginally less editorial/warm than Option A.

**Option C: Newsreader + Inter + Space Mono**
- *Newsreader* is a lower-contrast, more classical serif (closer to broadsheet/editorial journalism) than Fraunces's soft display personality.
- Why it fits: more restrained, quieter personality; good if Kashish prefers understatement over the slightly playful warmth of Fraunces. Space Mono adds a touch more character than JetBrains Mono but is marginally less legible at very small sizes.

### Recommended pairing: **Option A — Fraunces / Inter / JetBrains Mono**

It best satisfies Section 9's requirement (Rule 5) for genuine personality plus readability, and it visually differentiates the site from both generic sans-only portfolios and the "high-contrast serif + terracotta" AI cliché — because it is paired here with a cool pine-teal, not a warm clay accent, and used only for display sizes, never as body copy.

### Type scale (desktop / mobile)

| Role | Face | Desktop size / line-height / weight | Mobile size / line-height |
|---|---|---|---|
| Display (hero name) | Fraunces | 96px / 1.0 / 500 | 48px / 1.05 |
| H1 (section titles) | Fraunces | 56px / 1.05 / 500 | 32px / 1.1 |
| H2 (subsection) | Fraunces | 34px / 1.15 / 500 | 24px / 1.2 |
| H3 (card/project titles) | Inter | 22px / 1.3 / 600 | 19px / 1.3 |
| Body large (intro paragraphs) | Inter | 19px / 1.6 / 400 | 17px / 1.55 |
| Body (standard) | Inter | 16px / 1.6 / 400 | 15px / 1.55 |
| Small / caption | Inter | 14px / 1.5 / 400 | 13px / 1.5 |
| Metadata / label / nav | JetBrains Mono | 13px / 1.4 / 500, uppercase, +0.04em tracking | 12px / 1.4 |
| Index numerals (signature element) | JetBrains Mono | 13px / 1.2 / 500 | n/a (collapses into menu) |

**Rules:**
- Fraunces is never used below H2 size and never for body copy.
- JetBrains Mono is reserved strictly for metadata (dates, stack, status, nav labels, index numerals) — never for headings or paragraphs.
- Line length for body copy capped at ~68 characters (`max-width: 34ch–38em` depending on container).

---

## 14. Layout System

- **Base grid:** 12-column desktop grid, 8-column tablet, 4-column mobile. Gutter 24px desktop / 20px tablet / 16px mobile.
- **Container max-widths:** content container 1240px; wide/full-bleed media allowed to exceed container within Featured Projects only.
- **Asymmetry rule:** the hero, About, and each Featured Project must each use a *different* column split (e.g., 7/5, 8/4, full-bleed image with overlaid text block) — no two consecutive sections share identical column proportions.
- **Signature index column:** a 48px sticky micro-column on desktop (≥1024px) hosting the monospace section index described in Section 10; hidden below 1024px.
- **Card usage is selective:** only Skills tags, Certification entries, and the Contact form live in a bordered surface; Hero, About, Featured Projects, and Footer are not "cards" — they are full compositional sections.

---

## 15. Spacing System

8px base unit.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Icon-to-label gaps |
| `--space-2` | 8px | Tight inline gaps |
| `--space-3` | 16px | Component-internal padding |
| `--space-4` | 24px | Card padding, grid gutter |
| `--space-5` | 40px | Intra-section spacing |
| `--space-6` | 64px | Section-to-subsection spacing |
| `--space-7` | 96px | Section-to-section spacing (desktop) |
| `--space-8` | 144px | Major section breaks (Hero→About, Skills→Projects) |

Mobile compresses `--space-7`/`--space-8` to 56px/80px respectively — sections stay clearly separated without desktop's expansive breathing room, which doesn't translate 1:1 to small viewports.

---

## 16. Responsive Strategy

### Desktop (1440px+)
Full asymmetrical layouts, sticky signature index visible, Featured Projects use full compositional variety (large editorial, split-screen, image-led, system-oriented), generous whitespace at `--space-8`.

### Laptop (1024–1439px)
Same compositions, tighter column widths; signature index remains but narrows; hero name scales down proportionally (72–84px).

### Tablet (768–1023px)
Signature index hidden. Two-column layouts collapse to a single dominant column with supporting content stacked below (not beside). Featured Project compositions simplify but retain distinct identity per project (e.g., split-screen becomes stacked image-over-text, not identical to the others).

### Mobile (320–767px)
Explicitly rethought, not desktop-stacked:
- **Hero:** name and headline scale to 40–48px, CTAs become full-width stacked buttons, social links move to a horizontal icon row below the fold-line, not crammed into the first screen.
- **Typography:** display scale drops one full step; body stays 15–17px for readability; line length re-wraps to ~38–42 characters.
- **Project imagery:** full-bleed edge-to-edge (no side margins) for hero visuals per project; captions/metadata sit below in a compact monospace strip.
- **Navigation:** collapses to a full-screen overlay menu (see Section 22).
- **Whitespace:** compressed but never eliminated — sections keep at least 56px separation.
- **Interaction:** all tap targets ≥44×44px; hover-only affordances (underline-on-hover) get a persistent mobile equivalent (static underline or icon) so information isn't hover-locked.
- **Project layouts:** the split-screen and system-oriented desktop compositions both resolve to a single stacked pattern on mobile — image, then metadata strip, then narrative — but each project's *image treatment* and *metadata emphasis* stay distinct to preserve hierarchy.

---

## 17. Information Architecture

Primary navigation (in order): **Home · About · Skills · Projects · Experience · Contact**, plus a visually distinct **Resume ↗** item.

No additional top-level pages. Certifications, Currently Learning, and Project Archive are sub-sections reachable by scroll/anchor from Projects/About, not separate nav items — this keeps the header simple per Section 22's constraint while still giving each topic its own anchor for deep-linking (e.g., `/#experiments`, `/#currently-learning`).

Single-page scroll architecture (`/`) with optional project case-study routes (`/projects/:slug`) — see Section 38.

---

## 18. Navigation

Sitemap:
```
/ (single-page scroll)
 ├── #home        (Hero)
 ├── #about        (About + Education)
 ├── #skills
 ├── #projects      (Featured Projects + Archive)
 ├── #experience    (Experience + Certifications + Currently Learning)
 └── #contact       (Contact + Footer)
/projects/:slug (optional deep-link case study route, React Router)
/resume (redirects to hosted resume PDF; also linked directly)
```

---

## 19. Detailed Section Specifications (index)

Sections 20–32 below each follow this template, per Section 39's requirement: **Purpose · User goal · Content · Desktop composition · Mobile composition · Typography · Spacing · Visual hierarchy · Interaction · Motion · Accessibility · Required assets · Implementation notes.**

---

## 20. Hero Specification

**Purpose:** Establish identity, specialization, and student status within the first 3 seconds; route the visitor toward Projects or Resume.

**User goal:** "Who is this, what do they do, are they worth 60 more seconds?"

**Content:**
- Eyebrow label (monospace): `COMPUTER SCIENCE STUDENT`
- Display name: **Kashish Agrawal**
- Headline (H1, Fraunces): **Computer Science Student & Frontend Developer**
- Supporting copy (Body large, max 2 lines): *"I build thoughtful digital experiences while exploring the intersection of design, technology and real-world problem solving."*
- Primary CTA: **View Projects** (scrolls to `#projects`)
- Secondary CTA: **Download Resume** (opens resume PDF in new tab)
- Social row: GitHub, LinkedIn, Email (icon + label on desktop, icon-only with `aria-label` on mobile)
- Optional professional photograph — see Required assets.

**Desktop composition:** Asymmetrical 7/5 split. Left column (7): eyebrow, name, headline, copy, CTAs, social row, all left-aligned, starting at the same left margin as the signature index gutter ends. Right column (5): either (a) the optional photograph, cropped tight and desaturated slightly to sit quietly against the accent palette, or (b) — if no photo is supplied — a single restrained editorial element such as a large monospace "index" of the three defining facts (Student · Frontend Developer · Builder), not a stock illustration. Never centered.

**Mobile composition:** Single column, left-aligned (not centered). Eyebrow → name (scaled) → headline → copy → primary CTA (full width) → secondary CTA (full width, outline style) → social icon row. Photograph (if used) moves below the copy, cropped to a horizontal band, not a floating circular avatar.

**Typography:** Eyebrow in JetBrains Mono, uppercase, tracked. Name in Fraunces display size. Headline in Fraunces H1 size, weight 500 (not full-black — confidence without shouting). Copy in Inter body-large.

**Spacing:** `--space-8` below hero before About begins on desktop; `--space-6` on mobile.

**Visual hierarchy:** Name > Headline > Copy > CTAs > Social row. The eyebrow is the smallest element by size but establishes context first in reading order.

**Interaction:** Primary CTA is solid-fill accent button; secondary CTA is outline/ghost button with 1px border. Social icons show underline-on-hover (desktop) with a 150ms ease.

**Motion:** On load, a single staggered entrance — eyebrow, name, headline, copy, CTAs fade+translateY(12px)→0 over 400–600ms with ~60ms stagger between elements. No looping or ambient motion. Respects `prefers-reduced-motion` (entrance becomes an instant fade with no translate).

**Accessibility:** `<h1>` wraps the headline (name can be a `<p>` styled large, or combined semantically — see Implementation notes). CTA buttons are real `<a>`/`<button>` elements with visible focus rings. Photograph (if used) has descriptive alt text; if purely decorative, `alt=""`.

**Required assets:** Optional professional photograph; GitHub URL; LinkedIn URL; professional email address; resume PDF (linked, not embedded).

**Implementation notes:** Use `<h1>` for the headline (not the name) for correct document outline if the name is treated as a branded logotype element; alternatively wrap both in one semantic heading with the name as a `<span>`. Confirm final choice during build based on how the page's single `<h1>` should read to screen readers.

---

## 21. About Specification

**Purpose:** Ground the "student developer" identity with a real, specific self-introduction — not clichés.

**User goal:** "What does he actually study, and what does he care about?"

**Content (grounded facts only, no invented passion clichés):**
- Pursuing B.Tech in Computer Science & Engineering
- Currently a student
- Interested in frontend development, with attention to UI/UX
- Enjoys turning ideas into functional digital products
- Has experimented with AI, IoT, and modern web technologies
- Continuously learning

**Desktop composition:** Asymmetrical 5/7 split (mirrors hero's 7/5 to create rhythm without repetition) — a short pull-quote-style lead sentence in Fraunces H2 sits in the left (5) column; the fuller paragraph plus the Education sub-block sits right (7). A thin vertical rule separates them (1px, `--color-border`).

**Mobile composition:** Single column; lead sentence first (Fraunces H2, reduced size), full paragraph below, Education sub-block follows directly beneath with a visible divider.

**Typography:** Lead line in Fraunces H2. Body paragraph in Inter body (standard, not large — this is a reading section, not a hero).

**Spacing:** `--space-6` between lead line and paragraph column on desktop; `--space-4` before Education sub-block.

**Visual hierarchy:** Lead sentence > paragraph > Education sub-block (Education is visually quieter — smaller type, monospace metadata style — per Section 10's Medium content-priority tier).

**Interaction:** No interactive elements beyond standard link styling if any inline links exist (e.g., a linked coursework term).

**Motion:** Scroll-triggered single fade+translateY reveal (one trigger for the whole block, not staggered per line) — restraint over spectacle.

**Accessibility:** Section wrapped in `<section aria-labelledby="about-heading">`; heading hierarchy continues correctly from Hero's `<h1>`.

**Required assets:** None beyond copy; content already provided in Section 9 of the brief.

**Implementation notes:** Keep this section short — About must not visually compete with Featured Projects (Medium priority tier, see Section 37).

---

## 22. Education Specification

**Purpose:** Provide verifiable academic context compactly, without inflating its visual weight.

**User goal:** "What's he studying, where, and when does he graduate?"

**Content fields:**
- Degree: B.Tech — Computer Science & Engineering
- College: `[ADD COLLEGE NAME]`
- University: BPUT
- Duration: `[ADD DURATION]`
- Expected Graduation: `[ADD GRADUATION YEAR]`
- CGPA: `[ADD CGPA]` *(optional — omit entirely from render if not supplied, don't show empty field)*
- Relevant coursework (chip list, monospace small caps or Inter small): Data Structures & Algorithms, Database Management Systems, Design & Analysis of Algorithms, Computer Organization, Discrete Mathematics, Theory of Computation, Programming, Web Development

**Desktop composition:** Compact two-column definition-list style block nested inside the About section's right column (7). Degree/College/University/Duration/Graduation as a tight label-value grid (labels in JetBrains Mono small-caps, values in Inter). Coursework as a wrapped row of small tag chips below.

**Mobile composition:** Stacked label-value pairs, full width; coursework chips wrap naturally, 2 per row minimum.

**Typography:** Labels: JetBrains Mono, 12px, uppercase, muted colour. Values: Inter, 15px, primary text colour.

**Spacing:** `--space-2` between label-value rows; `--space-3` before coursework chip row.

**Visual hierarchy:** Deliberately the quietest sub-block in About — smaller type sizes throughout, muted label colour, no card/border treatment (sits directly on the page background) to avoid competing with the lead sentence above it.

**Interaction:** None required; coursework chips are static (not clickable) unless a future case study links to one.

**Motion:** Inherits About's single scroll reveal — no separate animation.

**Accessibility:** Use a real `<dl>`/`<dt>`/`<dd>` structure for label-value pairs for correct semantics.

**Required assets:** College name, duration, graduation year, CGPA (optional) — all currently placeholders per Section 40.

**Implementation notes:** If CGPA is never supplied, remove the field from the data object entirely rather than rendering "CGPA: [ADD CGPA]" — a missing field should not appear as a visible placeholder in a polished academic block; contrast this with Projects/Experience, where placeholders SHOULD show, because those are asset-gaps the user is meant to notice and fill. Confirm this exception with Kashish before build.

---

## 23. Skills Specification

**Purpose:** Communicate real technical range without resorting to meaningless percentage claims.

**User goal:** "What can he actually build with, and is he honest about his depth?"

**Content — organized by category, each with two tiers where appropriate: "Comfortable With" and "Currently Exploring":**

- **Programming:** C, Java, Python, JavaScript
- **Frontend:** HTML, CSS, JavaScript, React, Vite
- **Backend / Database Exposure:** Node.js, Express, MongoDB, MySQL, SQLite, Firebase
- **Development Tools:** Git, GitHub, VS Code
- **Hardware / IoT:** ESP32, Arduino, Sensors
- **Design:** UI Design, UX Thinking, Responsive Design, Wireframing, Design Systems

**No percentage bars, no skill-level sliders, no fabricated proficiency scores.**

**Desktop composition:** A six-column category grid is explicitly avoided (too "Bento"). Instead: a single-column stacked list of category rows, each row using a 3/9 split — category label (monospace, left, 3 cols) and its skill chips (right, 9 cols, wrapped). Row heights vary naturally by chip count, which itself creates hierarchy without manual styling.

**Mobile composition:** Stacked — category label above its chip row, full width, chips wrap to multiple lines.

**Typography:** Category labels: JetBrains Mono, uppercase, 13px. Skill chip text: Inter, 14px, medium weight.

**Spacing:** `--space-4` between category rows; `--space-1` internal chip padding gaps.

**Visual hierarchy:** All chips within a category are equal weight (accurate — no false precision); categories are ordered by relevance to the "Frontend Developer" positioning (Programming/Frontend first, Hardware/IoT last) since order itself communicates priority.

**Interaction:** Chips are static, non-clickable, subtle border + `--color-surface-alt` fill; no hover state needed since they're not links (avoid implying interactivity that doesn't exist).

**Motion:** Category rows fade in with a slight stagger (~40ms per row) on scroll into view — one-time reveal only.

**Accessibility:** Rendered as a real list (`<ul>` of categories, each containing a nested `<ul>` of chips) for screen-reader list semantics, not `<div>` soup.

**Required assets:** None — content is fully specified above.

**Implementation notes:** If/when a "Currently Exploring" tier is introduced (e.g., a specific in-progress technology), render it as a visually distinct chip style (dashed border instead of solid fill) rather than a separate section, to keep the skills block compact.

---

## 24. Featured Project Specification

**Purpose:** Serve as the visual and narrative centerpiece — the single strongest evidence of capability.

**User goal:** "What has he actually built, and is it good?"

**Content (four featured projects):**

1. **Soul to Soul** — modern matrimonial web experience (React, Vite, JavaScript, CSS). Focus: responsive UI, profile discovery, UX, component architecture.
2. **Skopos** — career roadmap and guidance platform. Focus: career discovery, structured learning paths, IA, student-focused UX, roadmap visualization.
3. **Shopline Mart** — e-commerce web experience. Focus: product discovery, categories, product presentation, shopping UX, responsive design, conversion-conscious UI.
4. **OptiVolt AI** — AI-powered solar panel efficiency monitoring/optimization system (ESP32, IoT, Python, Streamlit, SQLite, sensors, environmental monitoring, efficiency analysis). Demonstrates technical breadth beyond frontend.

**Desktop composition — four distinct treatments inside one shared system:**
- **Project 01 (Soul to Soul):** Large editorial showcase — full-bleed hero image/screenshot at top, oversized title overlapping the image's lower edge (Fraunces, large), metadata row (year · role · stack, monospace) beneath.
- **Project 02 (Skopos):** Split-screen — image/mockup on one side (fixed 45%), narrative + metadata on the other (55%), vertically centered.
- **Project 03 (Shopline Mart):** Image-led — a wide horizontal product-shot strip with a compact text block anchored bottom-left over a subtle scrim, title and one-line description only, inviting a click-through to the full case study for depth.
- **Project 04 (OptiVolt AI):** Technical/system-oriented — a diagram-first layout (system architecture sketch or sensor-flow illustration in place of a UI screenshot), monospace-heavy metadata (sensor types, stack), reinforcing that this project is systems/IoT rather than UI work.

**Mobile composition:** All four collapse to a shared stacked pattern — image (full-bleed, no side margin) → title → one-line description → metadata strip (monospace, horizontally scrollable if needed) → "View Case Study" link. Each retains its distinguishing *image treatment* (e.g., Project 04 keeps its diagram rather than becoming a generic screenshot) so hierarchy differences survive the collapse.

**Typography:** Titles in Fraunces H2/H3 depending on treatment; descriptions in Inter body; metadata exclusively in JetBrains Mono.

**Spacing:** Each featured project gets a full `--space-8` section break from its neighbor on desktop — they must not feel like a continuous grid.

**Visual hierarchy:** Project 01 visually dominates (largest type, largest image) per Section 3's "important projects should visually dominate" rule; Projects 02–04 step down in scale but never become interchangeable with each other.

**Interaction:** Entire project block is a single click target routing to `/projects/:slug` (or an in-page expand, see Section 25); image has a subtle scale (1.0→1.03) on hover, 300ms ease, not a lift/shadow effect.

**Motion:** Scroll-triggered reveal per project (fade + slight scale on the image, translateY on text), each triggering independently as it enters viewport — not all four animating simultaneously on load.

**Accessibility:** Each project block is a `<article>` with a proper heading level (`<h3>`), image `alt` text describing the actual interface/diagram, and the whole clickable area exposed as a single accessible link (not nested interactive elements).

**Required assets:** Hero screenshot/mockup or diagram per project; GitHub links; live demo URLs (or `[ADD LIVE URL]` placeholder); confirmed technology lists (already provided above).

**Implementation notes:** Build all four from one `ProjectShowcase` component parameterized by a `layout` field (`editorial | split | image-led | technical`) in the data model (Section 30) — visual distinctness comes from CSS per layout variant, not four bespoke components.

---

## 25. Project Case Study Structure

**Purpose:** Give a reader who clicks through the full depth needed to evaluate the work seriously.

**Fields per project (drawn from Section 30's data model):** title, one-sentence description, category, year, role, technology, hero visual, problem, solution, key features, what I contributed, what I learned, GitHub link, live demo, project status (Completed / In Development / Prototype / Concept).

**Desktop composition:** Single-column reading layout, max-width ~760px for text blocks, full-bleed for imagery breaks between sections. Order: Hero visual → title/metadata → Problem → Solution → Key Features (short list) → What I Contributed → What I Learned → links (GitHub/Live Demo) → status badge.

**Mobile composition:** Same order, full-width text within standard mobile margins, images full-bleed.

**Typography:** Section labels ("Problem," "Solution," etc.) in JetBrains Mono small caps as eyebrow labels above each Fraunces H2 sub-heading; body copy in Inter.

**Spacing:** `--space-6` between each narrative sub-section.

**Visual hierarchy:** Hero visual and title dominate; "What I Learned" is set slightly apart (e.g., in a bordered `--color-surface` block) since it's the most personal/reflective content and benefits from a visual pause.

**Interaction:** GitHub/Live Demo rendered as clearly labeled buttons, not bare icons; status badge is a small pill using `--color-accent-soft` background.

**Motion:** Standard scroll-reveal per sub-section, consistent with the rest of the site — no case-study-specific animation flourishes.

**Accessibility:** Correct heading order (`<h1>` project title, `<h2>` per sub-section); status communicated with text, not colour alone.

**Required assets:** Full asset set per project — see Section 44.

**Implementation notes:** If a live demo or GitHub link is unavailable, render a disabled-style button with a tooltip/label such as "Not public yet" rather than hiding the field — this keeps the honesty requirement visible rather than silently omitted (see Section 34 UX States → "Missing project link").

---

## 26. Project Archive

**Purpose:** Surface secondary/experimental work without competing with Featured Projects.

**User goal:** "Has he built more than these four things?"

**Content (examples):** TeraSentinel, NyayaSetu AI, CivicsVoice AI, SkillMap India, HR Dashboard, BPUT PYQ Platform, BPUT CGPA Calculator, IoT experiments, UI experiments.

**Desktop composition:** A compact **editorial index/list**, not a card grid — each row: project name (Inter, medium weight) + one-line description + tech tags (small monospace) + external link icon, separated by hairline dividers. Rows are dense (no large imagery) to visually signal "secondary."

**Mobile composition:** Same list pattern, full width, slightly increased row padding for tap-target comfort.

**Typography:** Row title Inter 16px medium; description Inter 14px muted colour; tags JetBrains Mono 12px.

**Spacing:** `--space-2` internal row padding; `--space-1` hairline divider margin.

**Visual hierarchy:** Intentionally the least visually elaborate content block on the page — reinforces that Featured Projects are the priority (Section 37, Highest tier vs. this being under the Supporting tier).

**Interaction:** Entire row is a link (to GitHub or live URL); external-link icon (Lucide `arrow-up-right`) indicates it opens elsewhere.

**Motion:** No per-row animation; the whole list fades in once as a block on scroll.

**Accessibility:** Rendered as an ordered/unordered list of links; icon has no separate `aria-label` beyond the row's own accessible link name.

**Required assets:** Project names, one-line descriptions, and links for each archive entry — currently placeholders pending Kashish's input (`[ADD PROJECT LINK]` etc. where missing).

**Implementation notes:** Cap visible rows at ~6–8 with a "Show more" text toggle if the list grows, to keep this section compact per Section 14 of the brief.

---

## 27. Experience

**Purpose:** Establish practical, real-world exposure honestly — internships, freelance work, competitions.

**User goal:** "Has he worked with anyone outside of coursework?"

**Content categories:**
- **Internship:** Company, Position, Duration, Responsibilities, Technologies, Key learning.
- **Freelance / Client Work:** Client, Project, Role, Deliverables, Technologies, Result — shown without exaggerating seniority.
- **Competitions / Hackathons:** Only meaningful participation; individual contribution to team projects clearly stated.

**Desktop composition:** A single vertical timeline, left-aligned to the signature index rhythm — a thin vertical rule with small monospace date markers, each entry as a horizontal row (date left in a fixed-width column, content right). Internship/Freelance/Hackathon entries are visually differentiated only by a small category label (monospace eyebrow), not by different colours or card styles, to keep the timeline visually unified.

**Mobile composition:** Timeline rule moves to the far left edge; date markers sit above each entry's content instead of beside it (stacked), since a side-by-side date column doesn't fit comfortably at narrow widths.

**Typography:** Dates/category labels in JetBrains Mono; entry titles in Inter H3-equivalent (18–20px, 600 weight); descriptions in Inter body.

**Spacing:** `--space-5` between timeline entries.

**Visual hierarchy:** Entries are chronological, most recent first; no entry is made visually larger than another — hierarchy here comes from ordering, not scale (a deliberate exception to "vary size for hierarchy," justified because a timeline's meaning depends on uniform, comparable entries).

**Interaction:** If an entry links out (e.g., a hackathon results page), the title becomes a link with standard underline-on-hover.

**Motion:** Entries reveal individually as the timeline scrolls into view, subtle stagger (~50ms) tied to vertical position.

**Accessibility:** Timeline marked up as an ordered list (`<ol>`) since chronological order is meaningful; visually-hidden text clarifies category ("Internship," "Freelance," "Hackathon") for screen readers even if conveyed visually via the monospace label.

**Required assets:** All entries currently placeholders (`[ADD COMPANY]`, `[ADD DATE]`, etc.) pending real data from Kashish.

**Implementation notes:** If no entries exist yet at launch, do not fabricate any — render a single honest "Currently seeking internship and freelance opportunities" state instead of an empty or fake timeline (see Section 34, UX States).

---

## 28. Certifications

**Purpose:** Show meaningful external validation compactly, without padding the page with trivial certificates.

**Content:** IoT & Embedded Systems — Coursera, plus placeholders for additional certifications/hackathons/workshops/academic achievements. Each entry: Name, Organization, Year, Verification link.

**Desktop composition:** A compact 2–3 column tag-like list (not full cards) — each certification as a small bordered chip/row containing name + organization + year, with a small "Verify ↗" link. Sits directly below Experience, sharing its section but visually subordinate (smaller type, tighter spacing).

**Mobile composition:** Single column stacked rows, full width.

**Typography:** Name in Inter 15px medium; organization/year in JetBrains Mono 12px muted.

**Spacing:** `--space-3` between certification rows.

**Visual hierarchy:** Deliberately the quietest element in the Experience section — Supporting tier per Section 37.

**Interaction:** "Verify ↗" opens the verification URL in a new tab; if unavailable, the link is omitted (not rendered as dead/disabled) since a missing verification isn't something to flag the way a missing project link is — omit silently for this one field only.

**Motion:** None beyond the shared section reveal.

**Accessibility:** List semantics; verification links have descriptive accessible names ("Verify IoT & Embedded Systems certification on Coursera"), not bare "Verify ↗" text alone for the screen-reader tree (visually show "Verify ↗", use `aria-label` for full context).

**Required assets:** Certification names/orgs/years/verification links — most are placeholders pending confirmation.

**Implementation notes:** Do not display trivial/filler certificates merely to lengthen the section, per the brief's explicit instruction.

---

## 29. Currently Learning

**Purpose:** Communicate active curiosity and growth trajectory — critical for a student profile.

**User goal:** "Is he still growing, or is this a finished snapshot?"

**Content (heading: "Currently Exploring"):** Data Structures & Algorithms, Advanced React, Backend Development, AI/ML, System Design, IoT, Product Design.

**Desktop composition:** A horizontal row of compact "in-progress" tags, visually similar to Skills chips but using a dashed border (not solid fill) to signal "in motion" rather than "established," positioned directly after Experience/Certifications and before Contact.

**Mobile composition:** Wrapped tag row, same dashed treatment, full width.

**Typography:** Section heading in Fraunces H2 ("Currently Exploring"); tags in Inter 14px.

**Spacing:** `--space-5` above/below this compact section — treated as a palate-cleanser before Contact.

**Visual hierarchy:** Medium tier — more visible than Certifications but quieter than Featured Projects.

**Interaction:** Tags are static (non-clickable) — this is a signal, not a set of links.

**Motion:** Single fade-in on scroll, no stagger (it's a small enough block that per-tag animation would feel excessive).

**Accessibility:** Rendered as a labeled list (`<ul aria-label="Currently exploring">`).

**Required assets:** None — content fully specified.

**Implementation notes:** Keep this section visually light — a single row, not a multi-line block — to avoid it competing with Skills for attention.

---

## 30. Resume

**Purpose:** Provide immediate, frictionless access to the full resume without duplicating it as page content.

**Content:** A single "Download Resume ↓" action, available from: primary navigation (styled distinctly, e.g., outline pill rather than plain text link), Hero secondary CTA, and Contact section.

**Desktop composition:** Nav item styled as a bordered pill/button, visually distinct from the plain-text nav links (Home/About/Skills/Projects/Experience/Contact).

**Mobile composition:** Included prominently near the top of the mobile menu overlay, styled the same distinct way.

**Typography:** JetBrains Mono or Inter medium, uppercase small caps optional for the nav pill only.

**Spacing:** Standard nav item spacing; no special treatment needed beyond the visual distinction already described.

**Visual hierarchy:** Always visible, never buried — but not competing with Projects for dominance (it's a utility action, not a content section).

**Interaction:** Opens the resume PDF in a new browser tab (`target="_blank" rel="noopener noreferrer"`); does not trigger a download-forced attribute unless Kashish prefers a forced download over an in-browser view.

**Motion:** None — this is a utility control, not content.

**Accessibility:** Accessible name clarifies it opens a new tab and a PDF (e.g., `aria-label="Download resume (PDF, opens in new tab)"`).

**Required assets:** Final resume PDF file, hosted at a stable URL.

**Implementation notes:** Do not reproduce the full resume as on-page content — the site complements, not duplicates, the resume.

---

## 31. Contact

**Purpose:** Make it effortless for a recruiter, founder, or collaborator to reach out.

**Content:**
- Primary message: **"Have an opportunity, project, or interesting idea? Let's talk."**
- Direct channels: Email, LinkedIn, GitHub.
- Optional contact form: Name, Email, Subject, Message, and an opportunity-category selector (Internship / Freelance / Collaboration / Project / Other).
- Explicit statement: **"Open to internships, freelance opportunities and meaningful collaborations."**

**Desktop composition:** Asymmetrical split — left column (5): the message + explicit openness statement + direct channel links (large, Fraunces-styled email as the visual anchor of the section — a common, justified "make the email itself the hero" editorial move). Right column (7): the optional form, presented as a clean bordered `--color-surface` panel (one of the few intentional card usages in the system, justified because a form benefits from a visually contained "task" area).

**Mobile composition:** Message + openness statement + channel links first (full width), form below, all fields full-width and stacked.

**Typography:** Message in Fraunces H2; email link itself set large (H2/H3 scale) as the section's visual anchor; form labels in JetBrains Mono small caps; form inputs in Inter.

**Spacing:** `--space-6` between the message block and the form panel on desktop.

**Visual hierarchy:** The direct email/LinkedIn/GitHub channels are the primary path (largest, left, first in reading order); the form is a secondary, optional path for those who prefer it.

**Interaction:** Form fields have clear focus states (accent-coloured 2px outline); submit button shows a loading state while sending, then a success confirmation message inline (not a modal); category selector is a simple native `<select>` or accessible custom dropdown — no unnecessary complexity.

**Motion:** Standard section reveal; form success state fades in the confirmation message, no celebratory animation (restraint per brand personality).

**Accessibility:** All form fields have associated `<label>` elements (not placeholder-as-label); error states announce via `aria-live="polite"`; success state also announced via `aria-live="polite"`.

**Required assets:** Confirmed professional email address; LinkedIn URL; GitHub URL; a form backend/service decision (e.g., Formspree, EmailJS, or a serverless function) — to be selected during implementation.

**Implementation notes:** If no form backend is wired up at launch, ship the direct-channel links only and mark the form as a fast-follow rather than shipping a non-functional form.

---

## 32. Footer

**Purpose:** Close the page cleanly with minimal repetition of already-stated information.

**Content:**
- **Kashish Agrawal**
- Computer Science Student & Frontend Developer
- Links: GitHub, LinkedIn, Email
- Optional personal line: *"Designed with curiosity. Built with code."*

**Desktop composition:** Single slim row, left-aligned name/title, right-aligned social links, optional personal line centered beneath as a smaller, muted final line. No multi-column sitemap-style footer (explicitly avoided per brief — "not an enormous SaaS-style footer").

**Mobile composition:** Stacked, centered-left, same content, reduced spacing.

**Typography:** Name in Inter medium 16px; title in Inter muted 14px; personal line in JetBrains Mono, small, muted, italicized-equivalent via letter-spacing rather than actual italics (italics in a monospace face can hurt legibility).

**Spacing:** `--space-6` top padding separating it from Contact; `--space-4` internal padding.

**Visual hierarchy:** Deliberately the quietest block on the entire page.

**Interaction:** Standard link hover states, consistent with the rest of the site.

**Motion:** None.

**Accessibility:** Wrapped in `<footer role="contentinfo">`; social links have descriptive accessible names.

**Required assets:** None beyond already-confirmed links.

**Implementation notes:** Keep the footer to a single visual row plus one optional line — resist the urge to add a sitemap, newsletter signup, or additional columns.

---

## 33. Interaction Design

| Element | Default | Hover/Active | Notes |
|---|---|---|---|
| Nav links | Plain text, muted | Accent-colour underline slides in from left, 150ms | No background pill |
| Resume nav pill | Bordered pill | Fills solid accent on hover | Visually distinct from other nav items |
| Primary button | Solid accent fill | Slight darken (8%) + 1px inset | No scale/lift |
| Secondary/outline button | 1px border, transparent fill | Border becomes accent colour | — |
| Project block | Static image | Image scale 1.0→1.03, 300ms ease | Whole block is one link |
| Social icons | Lucide icon, muted | Accent colour + underline (desktop) | Icon-only + `aria-label` on mobile |
| Skill/Currently-Exploring chips | Static, bordered | No hover state (non-interactive) | Avoid implying clickability |
| Archive row | Text + icon | Icon shifts 2px right, 150ms | Whole row is the link |
| Form input | 1px border | 2px accent focus ring | Never colour-only feedback |

General rule: all feedback communicated via **position, underline, opacity, border, or image crop** — never glow, never drop-shadow lift, never bounce/elastic easing.

---

## 34. Motion System

**Entrance:** Elements fade in (opacity 0→1) with a small `translateY(12px)→0` over 400–600ms, `ease-out`. Used once per element on first appearance only.

**Section reveal:** IntersectionObserver-triggered, one reveal per section as it enters ~20% into viewport; staggered only where a genuine list exists (Skills categories, Timeline entries, Featured Project sequence) at 40–60ms increments — never stagger single-block content like About's paragraph.

**Project imagery:** Controlled hover scale (1.0→1.03, 300ms `ease`) — no crop-reveal animation on load beyond the standard entrance fade.

**Hover feedback:** 100–250ms across all interactive elements (buttons, links, icons) — see Section 33 table for specifics.

**Page/section transitions:** Smooth native scroll (`scroll-behavior: smooth` with a JS fallback for anchor nav offset, accounting for any sticky header height); no full-page transition overlays.

**Easing recommendation:** `cubic-bezier(0.16, 1, 0.3, 1)` ("ease-out-expo"-like) for entrances; standard `ease` for hover states.

**Explicitly avoided:** floating/looping ambient objects, particle effects, parallax beyond a very subtle (≤10px) depth shift on hero imagery if used at all, neon glow, animated gradients, cursor trails, animation added "because it looks impressive."

**`prefers-reduced-motion: reduce`:** all translateY/scale entrance and hover effects collapse to opacity-only or instant state changes; scroll-behavior falls back to `auto`.

---

## 35. Accessibility

Target: **WCAG 2.1 AA** where practical.

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>` per content block, `<article>` per project, `<footer>`.
- **Keyboard navigation:** all interactive elements reachable via Tab in logical order; mobile menu traps focus while open and returns focus to the trigger on close.
- **Visible focus states:** 2px solid `--color-focus` outline, offset 2px, on every focusable element — never `outline: none` without a replacement.
- **Colour contrast:** all text/background pairs verified at ≥4.5:1 (body) / ≥3:1 (large text ≥24px) using the tokens in Section 12; accent-on-white and text-on-bg combinations to be checked against a contrast tool during build.
- **Alt text:** every meaningful image has descriptive alt text; purely decorative images use `alt=""`.
- **Accessible forms:** real `<label>` elements, `aria-live="polite"` for success/error messages, clear error text (not colour-only).
- **ARIA:** used only where semantic HTML is insufficient (e.g., `aria-current="true"` for active nav section, `aria-expanded` on the mobile menu toggle).
- **Reduced motion:** honored globally per Section 34.
- **Minimum touch targets:** 44×44px on all mobile interactive elements.
- **Heading hierarchy:** single `<h1>` (Hero), sequential `<h2>`/`<h3>` thereafter, verified with no skipped levels.
- **Screen-reader-friendly navigation:** a "Skip to main content" link as the first focusable element on the page.

---

## 36. Performance

Target Lighthouse scores: **Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.**

Strategies:
- Serve all raster images as **WebP/AVIF** with a JPEG fallback where needed; provide responsive `srcset`/`sizes` for hero and project imagery.
- Compress all images before commit; no image over ~200KB for above-the-fold assets.
- **Lazy-load** all below-the-fold imagery (`loading="lazy"`), eager-load only the hero's first visual.
- **Font optimization:** self-host or use `font-display: swap` for Fraunces/Inter/JetBrains Mono via Google Fonts or self-hosted `woff2`; subset if only Latin glyphs are needed.
- **Code splitting:** route-level splitting for `/projects/:slug` case-study pages via React Router + `React.lazy`.
- **Minimal dependencies:** no animation library (use native CSS transitions + a lightweight IntersectionObserver hook); no icon-font (use tree-shaken Lucide React imports); no CSS framework.
- **Asset caching:** long-lived cache headers for hashed Vite build assets; resume PDF served with reasonable cache headers.
- Avoid layout shift: explicit `width`/`height` (or `aspect-ratio`) on all images.

---

## 37. SEO

- **Page title:** `Kashish Agrawal — Computer Science Student & Frontend Developer`
- **Meta description:** A concise, honest one-liner reflecting the hero copy (no keyword stuffing).
- **Open Graph metadata:** `og:title`, `og:description`, `og:image` (a dedicated social preview image, not a raw screenshot), `og:type=website`, `og:url`.
- **Social preview image:** custom-designed card (1200×630) using the brand type/colour system — not an auto-generated screenshot.
- **Favicon:** a simple personal mark (monogram "KA" or similar), provided in multiple sizes (`favicon.ico`, `apple-touch-icon.png`, SVG favicon).
- **Canonical URL:** set on the root domain.
- **Semantic headings:** already enforced per Section 35.
- **Structured data:** optional `Person` schema (JSON-LD) with name, jobTitle, url, sameAs (GitHub/LinkedIn) — low priority, nice-to-have.
- **Sitemap.xml / robots.txt:** basic sitemap listing `/` and any `/projects/:slug` routes; robots.txt allowing full crawl.

---

## 38. Technical Architecture

- **Framework:** React + Vite.
- **Styling:** Plain CSS / CSS Modules with CSS Custom Properties for the full design-token system (colour, type, spacing) defined in Sections 12–15. **No Tailwind CSS.** No large UI component framework (no MUI/Chakra/Ant).
- **Layout tools:** CSS Grid for section/page-level layout, Flexbox for component-internal alignment.
- **Icons:** `lucide-react`, tree-shaken, imported per-icon.
- **Routing:** React Router, used *only* if project case studies need dedicated routes (`/projects/:slug`); the main single-page scroll experience does not require routing beyond this.
- **State management:** local component state / React context only where needed (e.g., mobile menu open/close, active nav section) — no external state library required at this scale.
- **Animation:** native CSS transitions/keyframes + a small custom `useInView` hook (IntersectionObserver) for scroll-reveal — no third-party animation library needed given the restrained motion system in Section 34.
- **Forms (Contact):** a lightweight approach (Formspree, EmailJS, or a serverless function) to be finalized at implementation time; no backend framework required for v1.
- **Build/deploy:** static Vite build, deployable to Vercel/Netlify/GitHub Pages (decision left to Kashish; no architectural blocker either way).

---

## 39. Component Architecture

```
Navbar
MobileNavigation
SignatureIndex        (desktop-only sticky section index — the signature element)
Hero
SectionHeader          (shared eyebrow + heading pattern used across sections)
About
Education
Skills
FeaturedProjects
  ProjectShowcase      (parameterized by `layout` variant — editorial | split | image-led | technical)
ProjectArchive
Experience
  TimelineEntry
CertificationList
CurrentlyLearning
Contact
  ContactForm
Footer
SocialLinks
Button                 (primary / secondary / pill variants)
ProjectMetadata        (shared monospace metadata row: year · role · stack · status)
```

Avoid unnecessary fragmentation: `SectionHeader`, `Button`, and `ProjectMetadata` are the only components reused across multiple sections; everything else maps 1:1 to a content section for clarity.

---

## 40. Data Architecture

### Project object

```js
{
  id: "soul-to-soul",
  slug: "soul-to-soul",
  title: "Soul to Soul",
  tagline: "A modern matrimonial web experience.",
  description: "...",
  year: 2025,
  category: "Web App",
  role: "Frontend Developer",
  status: "Completed", // "Completed" | "In Development" | "Prototype" | "Concept"
  layout: "editorial",  // editorial | split | image-led | technical
  technologies: ["React", "Vite", "JavaScript", "CSS"],
  thumbnail: "/assets/projects/soul-to-soul/thumb.webp",
  heroImage: "/assets/projects/soul-to-soul/hero.webp",
  problem: "...",
  solution: "...",
  features: ["...", "..."],
  learnings: "...",
  github: "https://github.com/...",       // or null
  liveDemo: "https://...",                 // or null
}
```

### Experience object

```js
{
  type: "Internship", // "Internship" | "Freelance" | "Hackathon"
  title: "...",
  org: "[ADD COMPANY]",
  duration: "[ADD DATE]",
  responsibilities: ["..."],
  technologies: ["..."],
  keyLearning: "...",
}
```

### Certification object

```js
{
  name: "IoT & Embedded Systems",
  organization: "Coursera",
  year: 2025,
  verificationUrl: null, // omit rendering the link if null
}
```

This data-driven approach allows new projects/experience/certifications to be added by extending an array — no page-structure rewrites required.

---

## 41. Folder Structure

```
/src
  /components
    /layout        (Navbar, MobileNavigation, SignatureIndex, Footer)
    /sections       (Hero, About, Education, Skills, FeaturedProjects, ProjectArchive,
                     Experience, CertificationList, CurrentlyLearning, Contact)
    /shared         (SectionHeader, Button, ProjectMetadata, SocialLinks)
  /data
    projects.js
    experience.js
    certifications.js
  /hooks
    useInView.js
    useActiveSection.js
  /styles
    tokens.css       (colour/type/spacing custom properties)
    global.css
    reset.css
  /assets
    /projects/<slug>/...
    /icons (if any custom SVGs beyond lucide-react)
    resume.pdf
  /pages (if React Router is used)
    ProjectCaseStudy.jsx
  App.jsx
  main.jsx
```

---

## 42. Content Guidelines

Tone: human, concise, intelligent, grounded, confident, curious.

**Explicitly avoid** (unless concretely justified by evidence): "Passionate developer," "Coding enthusiast," "Transforming ideas into reality," "Crafting innovative digital experiences," "Leveraging cutting-edge technology."

**Prefer:** specific, checkable statements about what was actually built and learned (e.g., "Built the profile-discovery flow in React, focusing on filter performance and responsive card layouts" rather than "Passionate about creating amazing user experiences").

**Honesty requirement (non-negotiable):** never fabricate companies, internships, client names, metrics, testimonials, awards, certifications, GitHub statistics, project users, revenue, experience, or outcomes. Anything not yet provided must render as a clearly marked placeholder (`[ADD COMPANY]`, `[ADD DATE]`, `[ADD METRIC]`, `[ADD PROJECT SCREENSHOT]`, `[ADD LIVE URL]`, etc.) rather than being invented.

---

## 43. UX States

| State | Behavior |
|---|---|
| Hover | Per Section 33 table — underline, scale, border, or opacity shift only |
| Focus | 2px `--color-focus` outline, 2px offset, on every focusable element |
| Active | Slight darken (buttons) or accent underline persists (nav) |
| Disabled | Reduced opacity (~50%), `cursor: not-allowed`, no hover feedback |
| Loading | Contact form submit button shows an inline spinner + "Sending…" label |
| Error | Form fields show a red (`--color-danger`) border + inline text error, announced via `aria-live="polite"` |
| Form success | Inline confirmation message replaces the form or appears above it, `aria-live="polite"` |
| Broken image | `alt` text displays as fallback; consider a subtle placeholder background (`--color-surface-alt`) sized via `aspect-ratio` to avoid layout shift |
| Missing project link | Render a visibly disabled button labeled "Not public yet" rather than hiding the field |
| External links | Open in new tab (`target="_blank" rel="noopener noreferrer"`), marked visually with a small `arrow-up-right` Lucide icon |

---

## 44. Asset Requirements

Checklist to be completed by Kashish before/during development — nothing on this list should be invented if left blank:

- [ ] Professional photograph (optional, for hero right column)
- [ ] Resume PDF
- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] Professional email address
- [ ] College name
- [ ] Duration (start–expected end)
- [ ] Expected graduation year
- [ ] CGPA (optional)
- [ ] Internship details (company, role, duration, responsibilities, technologies, key learning) — if applicable
- [ ] Freelance/client project details — if applicable
- [ ] Hackathon/competition details and individual contribution — if applicable
- [ ] Project screenshots/mockups for: Soul to Soul, Skopos, Shopline Mart, OptiVolt AI
- [ ] System/architecture diagram for OptiVolt AI
- [ ] Project descriptions (problem/solution/features/learnings) for each featured project
- [ ] GitHub repository links for each project
- [ ] Live demo URLs for each project (where available)
- [ ] Certification details (name, organization, year, verification link)
- [ ] Project Archive entries (name, one-line description, tech tags, link) for TeraSentinel, NyayaSetu AI, CivicsVoice AI, SkillMap India, HR Dashboard, BPUT PYQ Platform, BPUT CGPA Calculator, and any others
- [ ] Favicon / personal mark (monogram or similar)
- [ ] Social preview image content (or confirmation to generate one from the design system)

---

## 45. Testing Requirements

- **Cross-browser:** latest Chrome, Firefox, Safari, Edge.
- **Cross-device:** manual check at 1440px, 1024px, 768px, 390px (representative mobile width), plus the defined breakpoints in Section 16.
- **Accessibility audit:** automated (axe or Lighthouse) + manual keyboard-only pass + screen reader spot-check (VoiceOver or NVDA) on Hero, Navigation, Projects, and Contact form.
- **Performance audit:** Lighthouse run against the production build, not dev server.
- **Reduced-motion check:** verify `prefers-reduced-motion: reduce` correctly disables translate/scale animation site-wide.
- **Form validation:** test empty submission, invalid email, and success/error state rendering.
- **Content QA:** verify no placeholder text (`[ADD ...]`) ships to production silently — either the field is filled or intentionally displayed as an honest placeholder per the Honesty Requirement.
- **Link check:** verify all external links (GitHub, LinkedIn, live demos) resolve correctly and open in new tabs.

---

## 46. Acceptance Criteria

The build is considered complete when:

1. A recruiter can identify identity, student status, specialization, and best project within 45 seconds (validated via a quick informal test).
2. No two adjacent sections share identical visual weight/composition without justification.
3. All four Featured Projects use genuinely distinct layouts within one coherent system.
4. No gradient headline text, no fake percentage skill bars, no emoji-as-icon anywhere in the UI.
5. Lighthouse scores meet or exceed: Performance 90, Accessibility 95, Best Practices 95, SEO 95.
6. Site is fully keyboard-navigable with visible focus states throughout.
7. `prefers-reduced-motion: reduce` is respected globally.
8. All unfilled content areas display an honest, visible placeholder rather than fabricated content.
9. Mobile experience uses genuinely rethought compositions (not desktop-stacked) for Hero and Featured Projects.
10. Resume and Contact are reachable from any scroll position within two interactions (nav pill / anchor scroll).

---

## 47. Implementation Roadmap

1. **Foundation:** design tokens (`tokens.css`), reset/global styles, folder structure, base typography/spacing system.
2. **Layout shell:** Navbar, MobileNavigation, SignatureIndex, Footer.
3. **Hero + About + Education:** establish the asymmetrical composition language early since it recurs throughout.
4. **Skills:** category-row system.
5. **Featured Projects:** build the parameterized `ProjectShowcase` component and its four layout variants; wire to `projects.js` data.
6. **Project case study route** (if pursued at launch) + **Project Archive** list.
7. **Experience + Certifications + Currently Learning.**
8. **Contact** (direct channels first; form wiring as a fast-follow if a backend isn't finalized yet).
9. **Motion pass:** add `useInView` reveals and hover states site-wide per Section 34.
10. **Accessibility pass:** focus states, semantics, `aria-live` regions, skip link.
11. **Performance pass:** image optimization, lazy loading, font loading strategy, code splitting.
12. **SEO pass:** meta tags, OG image, favicon, sitemap/robots.
13. **QA:** run Section 45's full testing checklist.
14. **Content fill:** replace all placeholders with Kashish's final assets (Section 44 checklist).
15. **Launch.**

---

## 48. Future Enhancements

(Explicitly out of scope for v1 — noted for later consideration only)

- Optional dark mode, if genuinely requested after launch (see Section 35's reasoning for why it's excluded now — actually see Section 49 below for the full evaluation).
- A lightweight blog/notes section for longer-form learning-log writing, if Kashish wants to extend "Currently Exploring" into full posts.
- CMS-driven project data (e.g., a simple headless CMS) once the number of projects grows beyond comfortable manual maintenance.
- Localization, if relevant audiences require it.
- Case-study PDF export per project, for offline recruiter review.

---

## 49. Final Pre-Launch Checklist

**Design self-critique (performed against the Section 11 rules before build sign-off):**

- Does this look like a generic AI-generated portfolio? — **No:** rejected all three current AI-cliché clusters (cream+serif+terracotta; near-black+neon; broadsheet hairline) in favor of a warm-paper + pine-teal editorial system.
- Is the hero predictable? — **No:** left-aligned, asymmetrical 7/5 split, no centered stack.
- Are too many things centered? — **No:** centering is avoided throughout except where genuinely appropriate (e.g., the footer's single optional personal line).
- Are all cards identical? — **No:** Featured Projects use four distinct layouts; most content isn't card-wrapped at all.
- Is everything unnecessarily rounded? — **No:** radius is used selectively (buttons, chips) and never as a blanket treatment.
- Is there excessive glassmorphism? — **No:** none used.
- Are gradients being used as a shortcut? — **No:** gradients excluded from typography and backgrounds entirely.
- Is typography doing enough visual work? — **Yes:** three-role type system (Fraunces/Inter/JetBrains Mono) carries most of the identity.
- Does each section have a clear hierarchy? — **Yes:** documented per-section in 20–32.
- Do featured projects actually dominate? — **Yes:** largest type/imagery on the page, `--space-8` isolation between them.
- Does the portfolio feel personal to Kashish? — **Yes:** grounded, specific copy; real project set; honest placeholders rather than invented achievements.
- Is the student status clear? — **Yes:** stated in the hero eyebrow and reinforced in About/Education.
- Does it exaggerate experience? — **No:** Honesty Requirement (Section 42) enforced throughout; no fabricated metrics/clients.
- Could a recruiter understand the portfolio in under one minute? — **Yes:** validated against the Recruiter Journey (Section 7).
- Does the mobile experience feel intentionally designed? — **Yes:** Section 16 defines genuine mobile-specific rethinking, not desktop-stacking.
- Is every animation justified? — **Yes:** Section 34 restricts motion to entrance, scroll-reveal, and hover feedback only.
- Could the design still look professional several years from now? — **Yes:** the system prioritizes typography/composition/usability over trend-driven decoration (Section 11, Rule 10).

**Final launch checklist:**

- [ ] All Section 44 assets collected or intentionally left as visible placeholders
- [ ] Lighthouse scores verified on production build
- [ ] Accessibility audit passed (automated + manual)
- [ ] All external links verified
- [ ] Resume PDF uploaded and linked from all three required locations
- [ ] Contact form tested end-to-end (or direct-channel-only version confirmed intentional)
- [ ] `prefers-reduced-motion` verified
- [ ] Favicon and social preview image in place
- [ ] Sitemap/robots.txt deployed
- [ ] Final content pass confirms no accidental fabrication anywhere on the site

---

*End of PRD.md — ready to hand to a future implementation session with: "Build this website exactly according to this PRD."*