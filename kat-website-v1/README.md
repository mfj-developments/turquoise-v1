# Kathryn J. LeMaster Website Rebuild - Documentation

Complete documentation for rebuilding the interior design website with modern tech stack.

## 📁 Documentation Files

1. **[01-site-structure.md](./01-site-structure.md)** - Complete site map and content analysis
2. **[02-codebase-structure.md](./02-codebase-structure.md)** - Next.js architecture and file organization
3. **[03-sanity-schemas.md](./03-sanity-schemas.md)** - Comprehensive Sanity CMS schemas

---

## 🎯 Project Overview

**Current Site**: https://kathrynjlemaster.com/
**Purpose**: Rebuild with modern tech stack for easier maintenance and content management
**Business**: Interior & Production Design (Little Rock, AR)

### Key Features
- Interior Design & Production Design services
- Portfolio with before/after galleries
- Blog/Journal with 30+ categories
- Press coverage showcase
- Client testimonials
- Online course promotion
- Email lead capture (E-Party)
- Instagram feed integration

---

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion

### Backend/CMS
- **CMS**: Sanity.io
- **Content Delivery**: GROQ queries
- **Image Hosting**: Sanity CDN

### Integrations
- **Email**: EmailJS or Resend API
- **Instagram**: Instagram Basic Display API
- **Analytics**: Google Analytics 4 / Vercel Analytics
- **Forms**: React Hook Form + Zod validation

### Deployment
- **Hosting**: Vercel
- **Domain**: kathrynjlemaster.com

---

## 📊 Site Structure

### Navigation
```
Home (/)
About (/about/)
Services
  ├── Interior Design (/interior-design/)
  └── Production Design (/production-design/)
Online Course (/creative-confidence-courses/)
Portfolio
  ├── Interior Design Portfolio (/interior-design-portfolio/)
  └── Production Portfolio (/production-portfolio/)
Press (/press/)
Praise (/reviews/)
Journal (/blog/)
Connect (/contact/)
```

### Page Count
- **11 main pages**
- **Individual project pages** (dynamic)
- **Individual blog posts** (dynamic)
- **Blog category archives** (dynamic)

---

## 💾 Content Types (Sanity Schemas)

### Singletons
1. **Settings** - Site-wide configuration
2. **About** - About page content
3. **Course** - Online course information

### Collections
1. **Service** - Service offerings (2 types)
2. **Project** - Portfolio projects (~20-30 projects)
3. **BlogPost** - Journal entries (100+ posts)
4. **BlogCategory** - Blog categories (30+ categories)
5. **Testimonial** - Client reviews (18+ testimonials)
6. **PressItem** - Press coverage (10+ features)

---

## 🚀 Quick Start

### 1. Setup Project

```bash
# Create Next.js app
npx create-next-app@latest kat-website --typescript --tailwind --app

# Navigate to project
cd kat-website

# Install dependencies
npm install sanity @sanity/vision @sanity/image-url next-sanity
npm install @hookform/resolvers react-hook-form zod
npm install framer-motion lucide-react
npm install resend # or emailjs-com
```

### 2. Initialize Sanity

```bash
# Initialize Sanity
npx sanity init

# Follow prompts:
# - Create new project or use existing
# - Choose dataset name (production)
# - Accept default configurations
```

### 3. Set Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_write_token

INSTAGRAM_ACCESS_TOKEN=your_token
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=kathryn@example.com
```

### 4. Copy Schemas

Copy all schemas from `03-sanity-schemas.md` to `web/sanity/schemas/`

### 5. Run Development Servers

```bash
# Start Next.js dev server
npm run dev

# Access site: http://localhost:3000
# Access Sanity Studio: http://localhost:3000/studio
```

---

## 📝 Content Migration Plan

### Phase 1: Setup (Week 1)
- [ ] Initialize project structure
- [ ] Configure Sanity CMS
- [ ] Set up all schemas
- [ ] Create base components

### Phase 2: Static Pages (Week 2)
- [ ] Home page
- [ ] About page
- [ ] Service pages (Interior & Production)
- [ ] Online course page
- [ ] Contact page

### Phase 3: Dynamic Content (Week 3)
- [ ] Portfolio projects (~25 projects to migrate)
- [ ] Blog posts (100+ posts - prioritize recent)
- [ ] Blog categories structure
- [ ] Press items (~10 features)
- [ ] Testimonials (18+ reviews)

### Phase 4: Integrations (Week 4)
- [ ] Instagram feed API
- [ ] Contact form email sending
- [ ] Newsletter signup
- [ ] Pinterest pin buttons
- [ ] Google Analytics

### Phase 5: Polish & Launch (Week 5)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Deploy to Vercel
- [ ] Domain migration

---

## 🎨 Design Notes

### Brand Colors
- **Primary**: Turquoise (#14b8a6)
- **Accent**: Light Turquoise
- **Neutral**: Soft grays and whites

### Typography
- Clean, readable sans-serif fonts
- Elegant serif for headings (optional)

### Photography Style
- High-quality project imagery
- Before/after transformations
- Lifestyle shots

### Tone & Voice
- Friendly and approachable
- Professional but personal
- Warm and confident

---

## 📋 Key Differentiators

### Interior Design vs Production Design

| Aspect | Interior Design | Production Design |
|--------|----------------|------------------|
| **Duration** | Permanent | Temporary |
| **Client Type** | Residential/Commercial | Film/Photo/Events |
| **Deliverables** | Livable spaces | Sets & styling |
| **Portfolio Focus** | Before/after transformations | Project-based visuals |
| **Process** | Long-term relationship | Project-specific |
| **Tagline** | "space to live" | "space to create" |

### Service Tiers (Interior Design)
1. **Design Consultation** - 2-hour session
2. **DIY & E-Design** - Remote design service
3. **Full Service** - Complete project management

### Service Offerings (Production Design)
1. **Creative Consulting** - Assessment & guidance
2. **Set Design & Styling** - Temporary worlds for shoots
3. **Prop Rentals** - Decorative inventory

---

## 🔗 Important Links

### Current Site
- **Live Site**: https://kathrynjlemaster.com/
- **Instagram**: @kjlartanddesign
- **Facebook**: [Link from site]
- **Pinterest**: [Link from site]

### Development
- **GitHub Repository**: [To be created]
- **Vercel Dashboard**: [After deployment]
- **Sanity Dashboard**: [After setup]

---

## 📧 Lead Generation Strategy

### E-Party Email Capture
**Offer**: "7 Steps to Design + Decorate like a Pro" (Free e-book)
**Appears on**: Home, About, Service pages, Contact page

**CTA Button**: "YES, I'D LIKE A PARTY FAVOR!"

### Contact Form
**Dropdown**: "WHICH ARE YOU?"
- Potential client
- Creative professional
- Design enthusiast
- Industry vendor
- Press inquiry
- "Surprise me"

---

## ✅ Content Checklist

### Must-Have Content for Launch

#### Pages
- [x] Home page content analyzed
- [x] About page content analyzed
- [x] Interior Design service analyzed
- [x] Production Design service analyzed
- [x] Online course page analyzed
- [x] Portfolio structure analyzed
- [x] Blog structure analyzed
- [x] Contact form analyzed

#### Content Collections
- [ ] Featured projects for homepage (3-6)
- [ ] Interior design projects (estimate: 15-20)
- [ ] Production design projects (estimate: 5-10)
- [ ] Recent blog posts (prioritize last 2 years)
- [ ] Client testimonials (all 18+)
- [ ] Press features (all 10+)
- [ ] Blog categories structure

#### Images
- [ ] Logo/branding assets
- [ ] Professional headshot
- [ ] Project photos (bulk export)
- [ ] Blog post images
- [ ] Testimonial photos
- [ ] Press publication logos/covers

#### Settings
- [ ] Site title & tagline
- [ ] Contact information
- [ ] Social media links
- [ ] Business hours
- [ ] E-book offer details

---

## 🚨 Known Considerations

### Instagram Feed
- Requires Facebook Developer App
- Token expires periodically
- Consider fallback to static posts

### Blog Categories
- 30+ categories (some hierarchical)
- May need consolidation
- Consider tag system vs categories

### Image Migration
- Large volume of images
- Need consistent sizing/optimization
- Consider batch upload to Sanity

### Domain Migration
- DNS configuration
- SSL certificate
- 301 redirects from old URLs (if structure changes)

### SEO Preservation
- Maintain URL structure where possible
- Set up 301 redirects for changed URLs
- Preserve meta descriptions
- Maintain blog archive structure

---

## 🎯 Success Metrics

### Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

### SEO
- Maintain or improve search rankings
- Proper schema markup
- Mobile-friendly
- Fast page loads

### User Experience
- Easy content management for client
- Responsive on all devices
- Accessible (WCAG AA compliance)
- Fast navigation

### Business Goals
- Maintain lead generation (E-party signups)
- Showcase portfolio effectively
- Professional brand presentation
- Easy content updates without developer

---

## 📞 Next Steps

1. **Review Documentation** - Read all 3 docs thoroughly
2. **Client Meeting** - Discuss timeline and priorities
3. **Content Inventory** - Gather all images and copy
4. **Setup Development** - Initialize project
5. **Content Migration** - Begin with high-priority pages
6. **Testing** - QA on multiple devices
7. **Launch** - Deploy and migrate domain

---

## 💡 Recommendations

### Content Strategy
- Consolidate blog categories (30+ is excessive)
- Add blog post search functionality
- Create project filters (by room type, style, etc.)
- Add project timelines/budgets (if client approves)

### Technical Enhancements
- Add lazy loading for images
- Implement ISR (Incremental Static Regeneration) for blog
- Set up automated backups
- Create staging environment

### User Experience
- Add "Related Projects" on project pages
- Implement "More to Love" blog recommendations
- Add email notifications for new blog posts
- Create PDF downloadable project lookbooks

### Business Features
- Add online consultation booking (Calendly integration)
- Create client project portal (future phase)
- Add portfolio password protection (for confidential projects)
- Implement testimonial collection form

---

## 📄 License & Credits

**Design**: Kathryn J. LeMaster Art & Design
**Development**: [Your Name/Company]
**Original Site Credit**: Doodle Dog

---

## 🤝 Support

For questions or clarification on any part of this documentation:
- Review the detailed docs in this directory
- Reference the original site for visual context
- Check the Sanity documentation for CMS-specific questions
- Consult Next.js docs for framework-specific implementation

---

**Last Updated**: November 2024
**Documentation Version**: 1.0
