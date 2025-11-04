# Kathryn J. LeMaster Website - Design System Synthesis

**Purpose**: Unified design system combining inspiration from Rachel Cannon Limited with Kathryn's unique brand identity
**Goal**: Professional sophistication with warm approachability
**Date**: November 2024

---

## Brand Positioning

### Design Philosophy

**The Sweet Spot**: Where elegance meets accessibility

```
Rachel Cannon Limited     →     KJL Brand Identity     ←     Too Casual
(High-end luxury)              (Elevated but warm)          (Too playful)
```

**Core Values**:
- **Professional Excellence**: 15+ years experience, high-quality work
- **Approachable Warmth**: "Designing spaces into happy places!"
- **Creative Confidence**: Turquoise personality with sophistication
- **Personal Touch**: Kathryn's unique style and story

### Target Audience Perception Goals

**How we want visitors to feel**:
1. **Impressed** by the quality and professionalism
2. **Welcome** to reach out and connect
3. **Inspired** by the project work
4. **Confident** in hiring Kathryn
5. **Understood** as individuals with unique needs

---

## Color Palette

### Primary Colors

**Turquoise (Signature Brand Color)**
```css
--turquoise-50:  #f0fdfa;  /* Backgrounds, subtle touches */
--turquoise-100: #ccfbf1;  /* Light accents */
--turquoise-200: #99f6e4;  /* Hover states, borders */
--turquoise-300: #5eead4;  /* Secondary accents */
--turquoise-400: #2dd4bf;  /* Links, icons */
--turquoise-500: #14b8a6;  /* PRIMARY - Main brand color */
--turquoise-600: #0d9488;  /* Hover states for primary */
--turquoise-700: #0f766e;  /* Text on light backgrounds */
--turquoise-800: #115e59;  /* Dark accents */
--turquoise-900: #134e4a;  /* Darkest accents */
```

**Usage**:
- Primary: Turquoise-500 (main brand actions, accents)
- Hover: Turquoise-600 (interactive elements)
- Backgrounds: Turquoise-50 (subtle sections)
- Text: Turquoise-700 (on light backgrounds)

### Neutral Base (From RCL Inspiration)

**Warm Neutrals**
```css
--cream-50:  #FEFDFB;  /* Lightest background */
--cream-100: #FDFCFA;  /* Default page background */
--cream-200: #FAF8F5;  /* Section backgrounds */
--cream-300: #F5F3F0;  /* Subtle dividers */

--gray-100: #F5F5F5;  /* Alternative light background */
--gray-200: #E5E5E5;  /* Borders, dividers */
--gray-300: #D4D4D4;  /* Subtle elements */
--gray-500: #737373;  /* Secondary text */
--gray-700: #404040;  /* Body text */
--gray-900: #1A1A1A;  /* Headings, primary text */
```

### Accent Colors

**Gold/Brass (Sophistication)**
```css
--gold-100: #FEF3C7;  /* Light touches */
--gold-200: #FDE68A;  /* Subtle accents */
--gold-300: #FCD34D;  /* Decorative elements */
--gold-400: #D4A574;  /* Brass tone */
```

**Soft Pink (Femininity & Warmth)**
```css
--pink-50:  #FDF2F8;  /* Subtle backgrounds */
--pink-100: #FCE7F3;  /* Light accents */
--pink-200: #FBCFE8;  /* Decorative touches */
--pink-300: #F9A8D4;  /* Optional accent */
```

### Black & White

**High Contrast Elements**
```css
--white:    #FFFFFF;  /* Pure white */
--off-white: #FAFAF8;  /* Slightly warm white */
--black:    #000000;  /* Pure black (buttons, strong contrast) */
--charcoal: #1A1A1A;  /* Text black (slightly softer) */
```

---

## Color Usage Strategy

### Background Hierarchy

**Priority 1**: Cream-100 (#FDFCFA)
- Main page background
- Default container color
- Clean, warm, sophisticated

**Priority 2**: White (#FFFFFF)
- Cards and elevated surfaces
- Navigation bar
- Content containers

**Priority 3**: Turquoise-50 (#f0fdfa)
- E-Party section backgrounds
- Highlighted content areas
- Subtle brand moments

**Priority 4**: Cream-200 (#FAF8F5)
- Alternating sections
- Footer background
- Testimonial areas

### Text Hierarchy

**Primary Text**: Gray-900 (#1A1A1A)
- Headlines
- Body copy
- Navigation items

**Secondary Text**: Gray-500 (#737373)
- Supporting text
- Captions
- Meta information

**Accent Text**: Turquoise-700 (#0f766e)
- Links
- Highlighted keywords
- Brand moments

### Call-to-Action Strategy

**Primary CTA**: Black (#000000) with Turquoise accent
```css
background: #000000
color: #FFFFFF
border: 2px solid #14b8a6 (optional)
hover: background #14b8a6, color #FFFFFF
```

**Secondary CTA**: Turquoise-500 (#14b8a6)
```css
background: #14b8a6
color: #FFFFFF
hover: background #0d9488
```

**Tertiary CTA**: Outlined Turquoise
```css
background: transparent
border: 2px solid #14b8a6
color: #0f766e
hover: background #f0fdfa
```

### How Color Differs from RCL

**RCL Approach**:
- Strictly neutral (black, white, cream)
- Color comes only from photography
- Minimal brand color

**KJL Approach**:
- Neutral base (cream, warm whites) ✓ Similar
- Turquoise as signature accent ✓ Unique to KJL
- Strategic color use in CTAs and highlights
- Photography still prominent but brand color visible
- More personality without sacrificing sophistication

---

## Typography

### Font Families

**Serif (Elegance & Sophistication)**

**Primary Choice**: Playfair Display
```css
--font-serif: 'Playfair Display', Georgia, serif;
```
- Headlines (H1, H2, H3)
- Pull quotes
- Large display text
- Hero sections

**Alternative Options**:
- Cormorant Garamond (more delicate)
- Lora (more readable)
- Bodoni Moda (more dramatic)

**Sans-Serif (Modern & Clean)**

**Primary Choice**: Inter
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```
- Body text
- Navigation
- Buttons
- Form labels
- UI elements

**Alternative Options**:
- DM Sans (geometric, friendly)
- Work Sans (professional)
- Manrope (rounded, warm)

### Type Scale

```css
/* Display Sizes (Hero Sections) */
--text-6xl: 80px / 1.0;   /* Extra large hero */
--text-5xl: 64px / 1.1;   /* Large hero */
--text-4xl: 48px / 1.2;   /* Page titles */

/* Heading Sizes */
--text-3xl: 36px / 1.3;   /* Section headings */
--text-2xl: 28px / 1.3;   /* Subsection headings */
--text-xl:  24px / 1.4;   /* Card titles */

/* Body Sizes */
--text-lg:   20px / 1.6;  /* Lead paragraphs */
--text-base: 17px / 1.7;  /* Body text */
--text-sm:   15px / 1.5;  /* Small text, captions */
--text-xs:   13px / 1.5;  /* Labels, eyebrow text */
--text-2xs:  11px / 1.4;  /* Tiny labels */
```

### Font Weights

```css
--font-light:    300;  /* Large display text */
--font-normal:   400;  /* Body text */
--font-medium:   500;  /* Emphasis, subheadings */
--font-semibold: 600;  /* Buttons, labels */
--font-bold:     700;  /* Strong emphasis */
```

### Typography Patterns

#### Hero Headlines
```css
font-family: var(--font-serif);
font-size: var(--text-5xl);  /* 64px */
font-weight: 300;
line-height: 1.1;
letter-spacing: -0.02em;
color: var(--gray-900);
```

#### Section Headlines
```css
font-family: var(--font-serif);
font-size: var(--text-3xl);  /* 36px */
font-weight: 400;
line-height: 1.3;
letter-spacing: -0.01em;
color: var(--gray-900);
```

#### Eyebrow Text (Above Headlines)
```css
font-family: var(--font-sans);
font-size: var(--text-xs);  /* 13px */
font-weight: 600;
line-height: 1.5;
letter-spacing: 0.1em;  /* Wide spacing */
text-transform: uppercase;
color: var(--turquoise-700);
```

#### Body Text
```css
font-family: var(--font-sans);
font-size: var(--text-base);  /* 17px */
font-weight: 400;
line-height: 1.7;
color: var(--gray-700);
```

#### Pull Quotes
```css
font-family: var(--font-serif);
font-size: var(--text-xl);  /* 24px */
font-weight: 400;
font-style: italic;
line-height: 1.5;
color: var(--gray-900);
```

#### Button Text
```css
font-family: var(--font-sans);
font-size: var(--text-sm);  /* 15px */
font-weight: 600;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--white);
```

---

## Spacing System

### Base Scale (8px System)

```css
--space-0:   0;
--space-1:   8px;   /* 0.5rem */
--space-2:   16px;  /* 1rem */
--space-3:   24px;  /* 1.5rem */
--space-4:   32px;  /* 2rem */
--space-5:   40px;  /* 2.5rem */
--space-6:   48px;  /* 3rem */
--space-8:   64px;  /* 4rem */
--space-10:  80px;  /* 5rem */
--space-12:  96px;  /* 6rem */
--space-16:  128px; /* 8rem */
--space-20:  160px; /* 10rem */
--space-24:  192px; /* 12rem */
```

### Container Widths

```css
--container-xs:  480px;   /* Small forms */
--container-sm:  640px;   /* Single column content */
--container-md:  768px;   /* Blog posts, about content */
--container-lg:  1024px;  /* General content */
--container-xl:  1280px;  /* Wide sections */
--container-2xl: 1440px;  /* Max width */
```

### Section Spacing

```css
--section-padding-sm:  var(--space-8);   /* 64px - Mobile */
--section-padding-md:  var(--space-12);  /* 96px - Tablet */
--section-padding-lg:  var(--space-16);  /* 128px - Desktop */

--section-gap-sm:  var(--space-10);  /* 80px - Mobile */
--section-gap-md:  var(--space-12);  /* 96px - Tablet */
--section-gap-lg:  var(--space-16);  /* 128px - Desktop */
```

---

## Layout Patterns

### Hero Section Pattern

**"Kathryn Signature Hero"**

Structure:
```
┌─────────────────────────────────────┐
│  [Full-width background image]      │
│                                      │
│        [Eyebrow text]               │
│     [Large serif headline]          │
│                                      │
│    [Optional short description]     │
│         [CTA button]                │
│                                      │
└─────────────────────────────────────┘
```

Specifications:
- Height: 80vh (min 600px)
- Background: Full-bleed interior photo
- Overlay: Subtle gradient or vignette for text readability
- Text: Centered, white or dark depending on image
- Padding: 40px sides, vertically centered
- Max-width: 900px for text content

### Two-Column Content Pattern

**"Split Feature Section"**

```
┌──────────────┬──────────────────────┐
│              │                      │
│   [Image]    │   [Eyebrow]         │
│   50%        │   [Headline]        │
│   width      │   [Body text]       │
│              │   [CTA button]      │
│              │                      │
└──────────────┴──────────────────────┘
```

Variations:
- Image left, content right
- Content left, image right
- 40/60 or 60/40 splits
- Image can be faded (30% opacity) for text overlay

### Three-Column Grid

**"Service Tiers" or "Info Cards"**

```
┌────────┬────────┬────────┐
│ Card 1 │ Card 2 │ Card 3 │
└────────┴────────┴────────┘
```

- Equal width columns
- Gap: 24-32px
- Cards: White background, subtle shadow
- Mobile: Stacks vertically

### Portfolio Grid

**"Masonry or Uniform Grid"**

```
┌─────┬─────┬─────┐
│ Img │ Img │ Img │
├─────┼─────┼─────┤
│ Img │ Img │ Img │
└─────┴─────┴─────┘
```

Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
Gap: 24-32px
Aspect Ratio: 4:3 or flexible

---

## Component Library

### 1. Buttons

#### Primary Button (Black with Turquoise Accent)
```css
.button-primary {
  background: #000000;
  color: #FFFFFF;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 14px 32px;
  border: 2px solid transparent;
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button-primary:hover {
  background: #14b8a6;
  border-color: #14b8a6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
}
```

#### Secondary Button (Turquoise)
```css
.button-secondary {
  background: #14b8a6;
  color: #FFFFFF;
  /* Same other properties as primary */
}

.button-secondary:hover {
  background: #0d9488;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
}
```

#### Tertiary Button (Outlined)
```css
.button-tertiary {
  background: transparent;
  color: #0f766e;
  border: 2px solid #14b8a6;
  /* Same other properties */
}

.button-tertiary:hover {
  background: #f0fdfa;
  color: #115e59;
}
```

#### "E-Party" Special Button
```css
.button-eparty {
  background: linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%);
  color: #FFFFFF;
  font-size: 16px;
  padding: 16px 40px;
  border-radius: 50px;  /* Pill shape */
  box-shadow: 0 4px 20px rgba(20, 184, 166, 0.3);
  /* Playful, stands out */
}

.button-eparty:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 24px rgba(20, 184, 166, 0.4);
}
```

### 2. Cards

#### Project Card
```css
.project-card {
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.project-card-image {
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-card-image {
  transform: scale(1.05);
}

.project-card-content {
  padding: 24px;
}

.project-card-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 500;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.project-card-category {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--turquoise-700);
}
```

#### Testimonial Card
```css
.testimonial-card {
  background: var(--cream-100);
  border-left: 4px solid var(--turquoise-500);
  padding: 32px;
  border-radius: 4px;
}

.testimonial-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--turquoise-200);
  margin-bottom: 16px;
}

.testimonial-text {
  font-family: var(--font-serif);
  font-size: 18px;
  font-style: italic;
  line-height: 1.6;
  color: var(--gray-700);
  margin-bottom: 16px;
}

.testimonial-author {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-900);
}

.testimonial-title {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--gray-500);
}
```

#### Service Tier Card
```css
.service-card {
  background: #FFFFFF;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: var(--turquoise-500);
  box-shadow: 0 8px 24px rgba(20, 184, 166, 0.15);
}

.service-card-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 24px;
  color: var(--turquoise-500);
}

.service-card-name {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 500;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.service-card-tagline {
  font-family: var(--font-serif);
  font-size: 16px;
  font-style: italic;
  color: var(--gray-600);
  margin-bottom: 16px;
}

.service-card-description {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  color: var(--gray-700);
  margin-bottom: 24px;
}
```

### 3. Navigation

#### Desktop Navigation
```css
.nav-container {
  background: #FFFFFF;
  border-bottom: 1px solid var(--gray-200);
  padding: 24px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 600;
  color: var(--turquoise-700);
}

.nav-menu {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--gray-700);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--turquoise-600);
}

.nav-link.active {
  color: var(--turquoise-700);
  font-weight: 600;
}
```

### 4. Forms

#### Input Fields
```css
.form-input {
  font-family: var(--font-sans);
  font-size: 16px;
  padding: 14px 16px;
  border: 2px solid var(--gray-200);
  border-radius: 4px;
  background: #FFFFFF;
  color: var(--gray-900);
  transition: all 0.2s ease;
}

.form-input:focus {
  border-color: var(--turquoise-500);
  outline: none;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}

.form-input::placeholder {
  color: var(--gray-400);
}
```

#### Labels
```css
.form-label {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 8px;
  display: block;
}
```

### 5. "E-Party" Email Signup Section

Special signature component for Kathryn's brand:

```css
.eparty-section {
  background: linear-gradient(135deg,
    var(--turquoise-50) 0%,
    var(--cream-100) 100%
  );
  border: 3px solid var(--turquoise-200);
  border-radius: 16px;
  padding: 48px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.eparty-section::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle,
    rgba(20, 184, 166, 0.1) 0%,
    transparent 70%
  );
}

.eparty-title {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 600;
  color: var(--turquoise-800);
  margin-bottom: 16px;
}

.eparty-description {
  font-family: var(--font-sans);
  font-size: 18px;
  color: var(--gray-700);
  margin-bottom: 24px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.eparty-ebook-title {
  font-weight: 700;
  color: var(--turquoise-700);
}
```

---

## Animation & Transitions

### Standard Transitions

```css
/* Default */
transition: all 0.3s ease;

/* Quick interactions */
transition: all 0.2s ease;

/* Slower, more dramatic */
transition: all 0.4s ease-out;
```

### Hover Effects

**Cards**:
```css
transform: translateY(-4px);
box-shadow: 0 12px 24px rgba(0,0,0,0.12);
```

**Buttons**:
```css
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
```

**Images**:
```css
transform: scale(1.05);
filter: brightness(1.05);
```

### Scroll Animations

Using Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {content}
</motion.div>
```

### Hero Text Animations

```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {headline}
</motion.h1>
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Mobile Adjustments

**Typography**:
- Hero: 48px → 36px
- H1: 36px → 28px
- H2: 28px → 24px
- Body: 17px → 16px

**Spacing**:
- Section padding: 128px → 64px → 48px
- Container padding: 40px → 24px → 16px

**Layout**:
- 3 columns → 2 columns → 1 column
- Side-by-side → Stacked
- Hide/show navigation (hamburger)

---

## Photography Guidelines

### Style

**From RCL Inspiration**:
- High-quality editorial photography ✓
- Professional staging and lighting ✓
- Full-room and detail shots ✓
- Natural light emphasized ✓

**Kathryn's Additions**:
- Before/after transformations
- Turquoise accents in styling
- Warm, inviting color tones
- "Real life" lived-in feeling
- Show personality and story

### Treatment

- Full-bleed hero images
- Generous whitespace around images
- Minimal borders (or none)
- Subtle hover effects (zoom, overlay)
- Lazy loading for performance
- Responsive srcset for multiple sizes

### Image Specifications

**Hero Images**: 1920x1080px (16:9)
**Project Thumbnails**: 800x600px (4:3)
**Featured Images**: 1200x900px (4:3)
**Gallery Images**: 1200x800px (3:2)
**Portraits**: 800x800px (1:1)
**Before/After**: Matched sizes, same aspect ratio

---

## Unique Brand Elements

### 1. Turquoise Signature Accent

**Where to use**:
- Primary navigation hover states
- Active link indicators
- Icons and decorative elements
- CTA buttons (secondary)
- E-Party section prominently
- Underlines and highlights
- Badges and tags
- Border accents on cards

**Where NOT to overuse**:
- Avoid turquoise backgrounds on large sections
- Don't make all buttons turquoise
- Keep it special and intentional

### 2. "E-Party" Section

Kathryn's signature lead magnet:
- Playful, inviting design
- Turquoise gradient background
- Fun, energetic copy
- Pill-shaped button
- Appears on multiple pages
- Consistent but never boring

### 3. Tagline Treatment

"designing spaces in to happy places!"
- Lowercase intentionally casual
- Could appear in hero or footer
- Serif font, italic
- Turquoise or gray color

### 4. Rufus & Nellie

Office dogs as brand personality:
- About page feature
- Circular avatars
- Playful descriptions
- Adds warmth and humanity

---

## Component Design Patterns

### Hero Section Variations

**Type 1: Full-Bleed Image Hero**
```
┌─────────────────────────────────────┐
│ [Full-width background image]       │
│                                      │
│      "LOUISIANA, FLORIDA, AR"       │
│   "DESIGNING SPACES INTO HAPPY      │
│         PLACES"                      │
│                                      │
│      [Contact Me Button]            │
└─────────────────────────────────────┘
```

**Type 2: Content + Image Split**
```
┌──────────────────┬──────────────────┐
│                  │                  │
│  [Headline]      │    [Image]       │
│  [Description]   │                  │
│  [CTA]           │                  │
│                  │                  │
└──────────────────┴──────────────────┘
```

**Type 3: Minimal Text Hero**
```
┌─────────────────────────────────────┐
│                                      │
│                                      │
│          [Page Title]                │
│        [Short tagline]               │
│                                      │
│                                      │
└─────────────────────────────────────┘
```

### Service Tier Presentation

```
┌────────────────────────────────────────┐
│         "Interior Design Services"      │
│                                         │
│  ┌──────────┬──────────┬──────────┐   │
│  │  Tier 1  │  Tier 2  │  Tier 3  │   │
│  │  Icon    │  Icon    │  Icon    │   │
│  │  Name    │  Name    │  Name    │   │
│  │  Tagline │  Tagline │  Tagline │   │
│  │  Desc    │  Desc    │  Desc    │   │
│  │  Process │  Process │  Process │   │
│  │  [CTA]   │  [CTA]   │  [CTA]   │   │
│  └──────────┴──────────┴──────────┘   │
└────────────────────────────────────────┘
```

### Testimonial Layouts

**Carousel Style**:
- One testimonial at a time
- Dot navigation
- Auto-play option
- Fade transitions

**Grid Style**:
- 2-3 columns
- All visible at once
- Circular avatars
- Equal height cards

---

## Accessibility

### WCAG AA Compliance

**Color Contrast**:
- Body text on cream: 7:1 minimum ✓
- Headings on cream: 7:1 minimum ✓
- Turquoise-700 on white: 4.5:1 ✓
- White on turquoise-600: 4.5:1 ✓

**Interactive Elements**:
- All focusable
- Visible focus indicators (turquoise ring)
- Keyboard navigable
- Touch targets 44x44px minimum

**Content**:
- Semantic HTML
- Alt text for all images
- ARIA labels where needed
- Skip to main content link

---

## Implementation Checklist

### Tailwind Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        cream: {
          50: '#FEFDFB',
          100: '#FDFCFA',
          200: '#FAF8F5',
          300: '#F5F3F0',
        },
        gold: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#D4A574',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '6xl': '80px',
        '5xl': '64px',
        '4xl': '48px',
        '3xl': '36px',
        '2xl': '28px',
        'xl': '24px',
        'lg': '20px',
        'base': '17px',
        'sm': '15px',
        'xs': '13px',
        '2xs': '11px',
      },
    },
  },
};
```

---

## Design Principles Summary

### 1. Elegant Sophistication (from RCL)
- Large, beautiful serif typography
- Generous whitespace
- High-quality photography
- Minimal UI chrome
- Editorial layouts

### 2. Warm Approachability (Kathryn's Brand)
- Turquoise signature color
- Friendly copy and tone
- E-Party playful element
- Personal touches (dogs, tagline)
- Accessible, not intimidating

### 3. Content-First
- Photography is hero
- Clear hierarchy
- Easy-to-scan layouts
- Prominent CTAs
- User-focused design

### 4. Timeless Quality
- Classic typography
- Neutral base colors
- Professional execution
- Won't look dated
- Maintains brand longevity

---

## Next Steps

1. **Choose Fonts**: Install Playfair Display + Inter (or alternatives)
2. **Set Up Colors**: Configure Tailwind with color palette
3. **Build Components**: Start with button and card components
4. **Create Hero**: Build signature hero section pattern
5. **Test Responsive**: Ensure mobile-first approach works
6. **Gather Assets**: Collect high-quality project photography
7. **Write Copy**: Draft content with brand voice
8. **Build Pages**: Implement one page at a time
9. **Test Accessibility**: Ensure WCAG AA compliance
10. **Launch**: Deploy and gather feedback

---

This design system creates a **unique hybrid**: the sophistication and elegance of Rachel Cannon Limited combined with Kathryn's warm, approachable personality and signature turquoise brand color. It's professional enough for high-end clients while remaining accessible and inviting to all.
