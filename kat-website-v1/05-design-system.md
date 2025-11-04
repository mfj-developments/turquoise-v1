# Kathryn J. LeMaster Website - Design System

Visual design guide and component specifications for the interior design website.

---

## Brand Identity

### Brand Essence
- **Friendly & Approachable**: Professional without being stuffy
- **Creative & Inspiring**: Showcasing beautiful spaces
- **Personal & Authentic**: Kathryn's personality shines through
- **Confident & Experienced**: 15+ years of expertise

### Brand Voice
- Warm and welcoming
- Conversational but professional
- Encouraging and empowering
- Detail-oriented yet accessible

---

## Color Palette

### Primary Colors

**Turquoise (Primary Brand Color)**
```css
--turquoise-50:  #f0fdfa;
--turquoise-100: #ccfbf1;
--turquoise-200: #99f6e4;
--turquoise-300: #5eead4;
--turquoise-400: #2dd4bf;
--turquoise-500: #14b8a6; /* Primary */
--turquoise-600: #0d9488;
--turquoise-700: #0f766e;
--turquoise-800: #115e59;
--turquoise-900: #134e4a;
```

### Neutral Colors

**Grays**
```css
--gray-50:  #fafafa;
--gray-100: #f5f5f5;
--gray-200: #e5e5e5;
--gray-300: #d4d4d4;
--gray-400: #a3a3a3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
```

**Warm Neutrals** (for backgrounds)
```css
--cream-50:  #fefdfb;
--cream-100: #fdfcfa;
--cream-200: #faf8f5;
```

### Accent Colors

**Soft Pink** (optional accent for femininity)
```css
--pink-100: #fce7f3;
--pink-200: #fbcfe8;
--pink-300: #f9a8d4;
```

**Gold** (for premium touches)
```css
--gold-100: #fef3c7;
--gold-200: #fde68a;
--gold-300: #fcd34d;
```

### Usage Guidelines

- **Primary Actions**: Turquoise-500
- **Hover States**: Turquoise-600
- **Backgrounds**: Cream-50, Cream-100
- **Text**: Gray-900 (body), Gray-700 (secondary)
- **Borders**: Gray-200, Gray-300
- **Links**: Turquoise-600, hover Turquoise-700

---

## Typography

### Font Families

**Headings** (Serif for elegance)
```css
font-family: 'Playfair Display', Georgia, serif;
/* Alternative: 'Lora', 'Merriweather' */
```

**Body Text** (Sans-serif for readability)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
/* Alternative: 'Poppins', 'DM Sans' */
```

**Special/Script** (for quotes or accents)
```css
font-family: 'Dancing Script', cursive;
/* Use sparingly for signatures or special touches */
```

### Type Scale

```css
/* Headings */
--text-5xl: 48px / 1.1;   /* Hero headlines */
--text-4xl: 36px / 1.2;   /* Page titles */
--text-3xl: 30px / 1.3;   /* Section headings */
--text-2xl: 24px / 1.3;   /* Card titles */
--text-xl:  20px / 1.4;   /* Subheadings */

/* Body */
--text-lg:   18px / 1.6;  /* Lead paragraphs */
--text-base: 16px / 1.6;  /* Body text */
--text-sm:   14px / 1.5;  /* Captions */
--text-xs:   12px / 1.5;  /* Labels */
```

### Font Weights

```css
--font-light:   300;
--font-normal:  400;
--font-medium:  500;
--font-semibold: 600;
--font-bold:    700;
```

### Usage

- **H1**: text-5xl, font-bold, serif
- **H2**: text-4xl, font-semibold, serif
- **H3**: text-3xl, font-semibold, serif
- **H4**: text-2xl, font-medium, serif
- **Body**: text-base, font-normal, sans-serif
- **Lead**: text-lg, font-normal, sans-serif

---

## Spacing System

### Scale (Tailwind-based)

```css
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Layout Spacing

- **Section Padding (Mobile)**: space-8 (32px)
- **Section Padding (Desktop)**: space-16 (64px)
- **Section Gap**: space-16 to space-24
- **Component Gap**: space-6 to space-8
- **Card Padding**: space-6
- **Button Padding**: space-3 vertical, space-6 horizontal

---

## Components

### 1. Buttons

#### Primary Button
```tsx
<Button variant="primary" size="default">
  Contact Now
</Button>
```

**Styles**:
- Background: turquoise-500
- Text: white
- Padding: 12px 24px
- Border-radius: 8px
- Font: medium, uppercase tracking
- Hover: turquoise-600, slight scale
- Transition: 200ms ease

#### Secondary Button
```tsx
<Button variant="outline" size="default">
  View Portfolio
</Button>
```

**Styles**:
- Background: transparent
- Border: 2px turquoise-500
- Text: turquoise-700
- Hover: bg turquoise-50

#### Ghost Button
```tsx
<Button variant="ghost" size="default">
  Learn More
</Button>
```

---

### 2. Cards

#### Project Card
```tsx
<Card className="project-card">
  <Image />
  <CardTitle>{project.title}</CardTitle>
</Card>
```

**Styles**:
- Background: white
- Border: 1px gray-200
- Border-radius: 12px
- Shadow: subtle (0 2px 8px rgba(0,0,0,0.08))
- Hover: Shadow increases, slight lift
- Aspect Ratio: 4:3 or 16:9 for images

#### Testimonial Card
```tsx
<Card className="testimonial-card">
  <Avatar />
  <Quote>{testimonial.text}</Quote>
  <Name>{testimonial.name}</Name>
</Card>
```

**Styles**:
- Background: cream-50
- Border: none or subtle
- Padding: space-6
- Avatar: 80px circular

#### Service Tier Card
```tsx
<Card className="service-card">
  <Icon />
  <Title>{tier.name}</Title>
  <Tagline>{tier.tagline}</Tagline>
  <Description>{tier.description}</Description>
  <ProcessList>{tier.process}</ProcessList>
</Card>
```

---

### 3. Hero Sections

#### Homepage Hero
```tsx
<section className="hero-home">
  <div className="hero-content">
    <h1>{tagline}</h1>
    <p>{intro}</p>
    <Button>Contact Me</Button>
  </div>
  <div className="hero-decoration" />
</section>
```

**Styles**:
- Min-height: 80vh
- Background: Subtle gradient or image
- Text: Centered or left-aligned
- Overlay: Optional semi-transparent

#### Page Hero
```tsx
<section className="hero-page">
  <h1>{pageTitle}</h1>
  <p className="lead">{description}</p>
</section>
```

**Styles**:
- Padding: space-16 vertical
- Background: turquoise-50 or cream-50
- Text: Centered
- Max-width: 800px

---

### 4. Navigation

#### Desktop Nav
```tsx
<nav>
  <Logo />
  <NavLinks>
    <NavLink />
    <NavDropdown />
  </NavLinks>
  <SocialLinks />
</nav>
```

**Styles**:
- Height: 80px
- Background: white or transparent (on scroll: white + shadow)
- Sticky positioning
- Backdrop blur on scroll

#### Mobile Nav
```tsx
<MobileNav>
  <Hamburger />
  <Sheet>
    <NavLinks />
    <SocialLinks />
  </Sheet>
</MobileNav>
```

**Styles**:
- Full-height slide-in sheet
- Background: white
- Animated transition
- Large touch targets (48px min)

---

### 5. Forms

#### Contact Form
```tsx
<form>
  <FormField>
    <Label>Which are you?</Label>
    <Select />
  </FormField>
  <FormField>
    <Label>Name</Label>
    <Input />
  </FormField>
  <FormField>
    <Label>Email</Label>
    <Input type="email" />
  </FormField>
  <FormField>
    <Label>Message</Label>
    <Textarea rows={6} />
  </FormField>
  <Button type="submit">Send</Button>
</form>
```

**Styles**:
- Label: font-medium, gray-700
- Input: border gray-300, focus turquoise-500 ring
- Padding: space-3
- Border-radius: 8px
- Error states: red-500 border + text

#### Newsletter Signup
```tsx
<form className="inline-form">
  <Input placeholder="Your email" />
  <Button>YES, I'D LIKE A PARTY FAVOR!</Button>
</form>
```

**Styles**:
- Inline on desktop, stacked on mobile
- Input: Flex-1
- Button: Prominent, full-width on mobile

---

### 6. Image Galleries

#### Grid Gallery
```tsx
<div className="gallery-grid">
  {images.map(img => (
    <Image key={img.id} src={img.url} />
  ))}
</div>
```

**Styles**:
- Grid: 2 cols mobile, 3-4 cols desktop
- Gap: space-4
- Aspect ratio: Consistent
- Hover: Slight zoom, overlay

#### Before/After Slider
```tsx
<div className="before-after">
  <Image className="before" />
  <Image className="after" />
  <Slider />
</div>
```

**Styles**:
- Position: Relative
- Slider: Draggable divider
- Labels: "Before" / "After"

---

### 7. Badges & Tags

#### Service Type Badge
```tsx
<Badge variant="secondary">
  Interior Design
</Badge>
```

**Styles**:
- Padding: 4px 12px
- Border-radius: 20px (pill shape)
- Background: turquoise-100
- Text: turquoise-700, small, medium weight

#### Blog Category Tag
```tsx
<Tag>Kitchen Design</Tag>
```

**Styles**:
- Smaller than badges
- Border: 1px
- Hover: Background color

---

### 8. Social Elements

#### Instagram Feed Grid
```tsx
<div className="instagram-grid">
  {posts.map(post => (
    <InstagramCard key={post.id} post={post} />
  ))}
</div>
```

**Styles**:
- Grid: 3 columns
- Square images
- Hover: Overlay with caption

#### Social Share Buttons
```tsx
<div className="share-buttons">
  <ShareButton platform="facebook" />
  <ShareButton platform="pinterest" />
  <ShareButton platform="twitter" />
</div>
```

**Styles**:
- Icon buttons
- Brand colors on hover
- Circular or rounded

---

## Layout Patterns

### Container Widths

```css
--container-sm: 640px;   /* Single column content */
--container-md: 768px;   /* Forms, about sections */
--container-lg: 1024px;  /* General content */
--container-xl: 1280px;  /* Full-width sections */
--container-2xl: 1536px; /* Max width */
```

### Grid Systems

#### Portfolio Grid
```css
grid-template-columns: repeat(1, 1fr);  /* Mobile */
grid-template-columns: repeat(2, 1fr);  /* Tablet */
grid-template-columns: repeat(3, 1fr);  /* Desktop */
gap: 2rem;
```

#### Service Tiers
```css
grid-template-columns: repeat(1, 1fr);  /* Mobile */
grid-template-columns: repeat(3, 1fr);  /* Desktop */
gap: 1.5rem;
```

---

## Animation & Transitions

### Standard Transitions

```css
transition: all 200ms ease-in-out;
```

### Hover Effects

**Cards**:
```css
transform: translateY(-4px);
box-shadow: 0 12px 24px rgba(0,0,0,0.12);
```

**Images**:
```css
transform: scale(1.05);
```

**Buttons**:
```css
transform: scale(1.02);
box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
```

### Page Transitions

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>
```

### Scroll Animations

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  {content}
</motion.div>
```

---

## Imagery Guidelines

### Photography Style

- **High Quality**: Professional photography
- **Natural Light**: Bright, airy spaces
- **Authentic**: Real projects, not stock
- **Diverse**: Various room types and styles
- **Before/After**: Show transformations

### Image Sizes

**Thumbnails**: 600x450px (4:3 ratio)
**Hero Images**: 1920x1080px (16:9 ratio)
**Featured Images**: 1200x800px (3:2 ratio)
**Gallery Images**: 1200x900px (4:3 ratio)
**Portraits**: 800x800px (1:1 ratio)

### Image Optimization

- WebP format with JPEG fallback
- Lazy loading for below-fold images
- Responsive srcset for different sizes
- Alt text for accessibility

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Mobile Considerations

- **Touch Targets**: Minimum 44x44px
- **Readable Text**: Minimum 16px
- **Thumb Zone**: Important actions within reach
- **Simplified Navigation**: Hamburger menu
- **Stacked Layouts**: Single column on mobile

---

## Accessibility

### WCAG AA Compliance

**Color Contrast**:
- Text: 4.5:1 minimum
- Large Text (18px+): 3:1 minimum
- UI Components: 3:1 minimum

**Keyboard Navigation**:
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip to main content link

**Screen Readers**:
- Semantic HTML
- ARIA labels where needed
- Alt text for images
- Form labels properly associated

**Visual**:
- Not relying solely on color
- Clear error messages
- Readable font sizes
- Sufficient spacing

---

## Micro-interactions

### Loading States

```tsx
<Button disabled>
  <Spinner />
  Sending...
</Button>
```

### Success States

```tsx
<Alert variant="success">
  <CheckIcon />
  Message sent successfully!
</Alert>
```

### Error States

```tsx
<Alert variant="error">
  <AlertIcon />
  {errorMessage}
</Alert>
```

### Empty States

```tsx
<EmptyState>
  <Icon />
  <Heading>No projects yet</Heading>
  <Description>Check back soon for updates</Description>
</EmptyState>
```

---

## Special Elements

### "E-Party" Section

**Design**:
- Background: Turquoise gradient or pattern
- Border: Decorative (scalloped or wavy)
- Icon: Gift or party hat
- Button: Extra prominent
- Copy: Playful and inviting

**Placement**: Multiple pages (Home, About, Services, Contact)

### Testimonial Sections

**Design**:
- Circular avatars (80-100px)
- Quote marks (decorative)
- Name in bold
- Optional title/company
- Card or minimal layout

**Variations**: Carousel, grid, or list

### Press Coverage Grid

**Design**:
- Magazine covers as cards
- Logos for digital features
- Consistent sizing
- Subtle hover effects
- Publication name + date

**Organization**: Chronological or by importance

---

## Print Styles

```css
@media print {
  /* Hide navigation, footers */
  nav, footer { display: none; }

  /* Optimize for print */
  body { font-size: 12pt; }
  h1 { font-size: 24pt; }

  /* Add page breaks */
  .project { page-break-inside: avoid; }

  /* Black text for readability */
  color: #000 !important;
}
```

---

## Dark Mode (Optional Future Enhancement)

If implementing dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #1a1a1a;
    --foreground: #f5f5f5;
    --turquoise-primary: #2dd4bf;
  }
}
```

---

## Component Library Reference

### shadcn/ui Components to Install

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add separator
```

---

## Design Checklist

Before launching, verify:

- [ ] All fonts loaded correctly
- [ ] Color contrast meets WCAG AA
- [ ] Images optimized and responsive
- [ ] Forms have proper validation
- [ ] Buttons have hover/active states
- [ ] Links clearly distinguishable
- [ ] Mobile navigation works smoothly
- [ ] Loading states for async actions
- [ ] Error handling is user-friendly
- [ ] Consistent spacing throughout
- [ ] All interactive elements focusable
- [ ] Print stylesheet if needed

---

## Resources

### Design Tools
- **Figma**: Design mockups
- **Adobe XD**: Alternative to Figma
- **Coolors**: Color palette generation
- **Google Fonts**: Font selection

### Inspiration
- **Dribbble**: Interior design websites
- **Awwwards**: Award-winning web design
- **Pinterest**: Visual mood boards
- **Behance**: Design case studies

### Testing
- **BrowserStack**: Cross-browser testing
- **Lighthouse**: Performance auditing
- **WAVE**: Accessibility evaluation
- **PageSpeed Insights**: Load time optimization

---

This design system provides a comprehensive visual language for the Kathryn J. LeMaster website, ensuring consistency, professionalism, and a delightful user experience across all touchpoints.
