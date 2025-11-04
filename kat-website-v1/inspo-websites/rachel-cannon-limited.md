# Rachel Cannon Limited - Design Inspiration Analysis

**Website**: https://www.rachelcannonlimited.com/
**Platform**: Wix Thunderbolt

## ⚠️ Analysis Limitation

This website is built on Wix, which renders most content client-side via JavaScript. The raw HTML primarily contains framework code, making detailed visual analysis difficult without browser rendering. The following analysis is based on the technical infrastructure and code patterns observed.

---

## Technical Infrastructure Observed

### Platform & Framework
- **CMS**: Wix Thunderbolt (v1.16458.0)
- **Architecture**: Component-based with modular design system
- **Rendering**: Client-side with view transitions
- **Mobile Strategy**: Mobile-optimized with responsive breakpoints

### Design System Structure

#### Layout System
- **Grid-based layout**: CSS Grid with flexbox components
- **Responsive**: Single-column mobile, multi-column desktop
- **Container-based**: Centered content areas with max-width constraints
- **Template Areas**: Header, pages container, footer sections

#### Color System
Evidence of CSS variable-based color palette:
```css
--color_11 through --color_48 (custom color variables)
--wst-color-custom-1 through --wst-color-custom-20
```

States:
- Normal colors
- Hover colors (`--hover-background-color`, `--corvid-hover-border-color`)
- Disabled colors
- Focus colors

#### Typography System
Multiple font variables indicating hierarchy:
```css
--font_2 through --font_10
```

Features observed:
- Letter-spacing control
- Line-height normalization
- Text-transform options
- Text-shadow and outline effects
- Heading levels H1-H6 with defined styles

#### Spacing System
- Responsive padding: `padding-x`, `padding-y` variables
- Margin system: `margin-block`, `margin-inline`
- Calculated margins based on site width
- Controlled whitespace through CSS variables

---

## Component Patterns

### Buttons
**StylableButton** component with:
- Multiple states (normal, hover, disabled)
- Smooth transitions: `all .2s ease, visibility 0s`
- Background and border color changes
- Text color shifts for labels and icons
- Custom cursor support (base64 embedded)

### Image Handling
Advanced image system with:
- **Object-position** control
- **Mask-image** support for creative shapes
- **Blur animation** on load: `filter: blur(9px)` → `filter: none`
- **Responsive sizing**: `max-width: 100%`
- **SVG filter effects**
- **Lazy loading** implementation

### Cards
Card components feature:
- Fixed dimensions with `min-width` and `min-height`
- Padding control through CSS variables
- Box-shadow for depth
- Rounded corners via border-radius variables
- Hover effects with transitions

### Dividers
- Layered divider effects
- Customizable styling
- Responsive behavior

---

## Animation & Transitions

### Hover Effects
- Background color transitions
- Border color changes
- Text color shifts
- Transition timing: `.2s` to `.6s` ease
- Cursor changes on interactive elements

### Page Transitions
View transition animations:
- SlideHorizontal
- SlideVertical
- OutIn effects
- Smooth transitions between pages

### Image Animations
- Blur-to-sharp on load
- Fade-in effects: `.8s ease-in`
- Object-position animations

---

## Responsive Design Approach

### Mobile Optimization
Classes observed:
- `device-mobile-optimized`
- Mobile-specific padding/margin
- Vertical stacking of content
- Touch-optimized interactions

### Breakpoint Strategy
- Mobile-first approach evident
- Grid adapts from single to multi-column
- Sidebar content reflows vertically on mobile
- Image aspect ratios adjust per viewport

---

## Navigation System

### Structure
- Router-based system with `navigationManager`
- Dynamic page loading
- URL-based routing
- Navigation phases system
- View transitions between pages

### Features
- Smooth scrolling
- Active state management
- Dynamic menu generation
- Category filtering (infrastructure present)

---

## Inferred Design Characteristics

### Overall Aesthetic
Based on code patterns:
- **Modern & Clean**: Grid-based, spacious layouts
- **Component-driven**: Modular, reusable elements
- **Transition-rich**: Smooth animations throughout
- **Image-focused**: Advanced image treatment and masking
- **Professional**: Structured hierarchy and organization

### Color Treatment
Multiple color variables suggest:
- Primary/secondary/accent color system
- Hover state variations
- Disabled state colors
- Custom colors for specific elements

### Typography
Font variable system indicates:
- Clear hierarchy (10 font levels)
- Heading differentiation
- Body text optimization
- Decorative text options

### Interactive Elements
Extensive hover and transition code suggests:
- Polished user interactions
- Visual feedback on all clickable elements
- Smooth state changes
- Accessible focus management

---

## What Couldn't Be Analyzed

Due to client-side rendering limitations:

### Content & Copy
- Actual text content and messaging
- Service descriptions
- Biography content
- Blog post content
- Project descriptions

### Visual Design Details
- Actual color palette (hex codes)
- Specific font choices (family names)
- Image photography style
- Logo design
- Brand illustrations

### Layout Specifics
- Exact section arrangement
- Content block organization
- Sidebar content details
- Footer structure
- Hero section design

### Portfolio Details
- Project grid arrangement
- Filtering UI design
- Project card content
- Category organization
- Image gallery layouts

### Blog Structure
- Post preview format
- Category display
- Search interface
- Archive organization
- Related post system

---

## Recommendations for Alternative Analysis

To get complete design insights, consider:

1. **Screenshots**: Take full-page screenshots of each section
2. **Browser DevTools**: Use browser inspector to examine:
   - Computed styles
   - Color values
   - Font families
   - Spacing measurements
   - Layout dimensions

3. **Manual Documentation**: Browse the site and document:
   - Color palette (use color picker tools)
   - Typography (inspect font-family values)
   - Layout structure (sketch or describe)
   - Component patterns (note recurring designs)
   - Photography style (note characteristics)

4. **Design Tools**: Use tools like:
   - **ColorZilla**: Extract color palette
   - **WhatFont**: Identify fonts
   - **Page Ruler**: Measure dimensions
   - **Full Page Screen Capture**: Get complete screenshots

---

## Key Takeaways for Your Project

### Positive Patterns to Consider

1. **Smooth Transitions**: Every interaction has subtle animation
2. **Image Treatment**: Advanced masking and effects
3. **Hover Feedback**: Clear visual response to user actions
4. **Mobile-First**: Strong responsive design foundation
5. **Component System**: Modular, reusable design elements
6. **Color Variables**: Flexible theming system
7. **Typography Hierarchy**: Clear content organization
8. **Grid Layouts**: Clean, structured content presentation

### Technical Approaches

1. **CSS Variables**: For theming and consistency
2. **Grid + Flexbox**: Modern layout techniques
3. **View Transitions**: Smooth page changes
4. **Lazy Loading**: Optimize image performance
5. **Blur Effects**: Polished loading states
6. **Responsive Padding**: Adaptive spacing system

### Design System Elements

1. **Button States**: Normal, hover, disabled, focus
2. **Card Components**: Consistent project/post presentation
3. **Image Containers**: Flexible, responsive image handling
4. **Color System**: Primary, secondary, accent structure
5. **Font Hierarchy**: Multiple levels for content organization
6. **Spacing Scale**: Consistent padding and margins

---

## Next Steps

To complete this analysis:

1. **Visual Inspection**: Manually browse and document the site
2. **Screenshot Documentation**: Capture key pages and sections
3. **Style Extraction**: Use browser tools to get exact values
4. **Pattern Library**: Note recurring design patterns
5. **Interaction Documentation**: Record animation behaviors

Would you like me to help document the site based on screenshots or manual inspection instead?
