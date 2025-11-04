# Kathryn J. LeMaster Website - Codebase Structure

## Technology Stack

### Frontend
- **Framework**: Next.js 15.x (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Image Optimization**: Next.js Image component

### Backend/CMS
- **CMS**: Sanity.io
- **Content Delivery**: GROQ queries
- **Image Hosting**: Sanity CDN
- **Live Preview**: Sanity Live Preview (optional)

### Additional Integrations
- **Email Marketing**: EmailJS or Resend API
- **Contact Forms**: API routes with validation
- **Instagram Feed**: Instagram Basic Display API
- **Analytics**: Google Analytics 4 or Vercel Analytics
- **Social Sharing**: react-share or custom implementation

### Deployment
- **Hosting**: Vercel
- **Domain**: kathrynjlemaster.com
- **CDN**: Vercel Edge Network
- **Environment**: Production + Preview environments

---

## Directory Structure

```
kat-website-v1/
├── web/                          # Main Next.js application
│   ├── public/
│   │   ├── fonts/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── og-image.jpg
│   │   │   └── favicon/
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── app/                  # App Router pages
│   │   │   ├── layout.tsx        # Root layout with nav/footer
│   │   │   ├── page.tsx          # Home page (server component)
│   │   │   ├── globals.css       # Global styles
│   │   │   │
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── interior-design/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── production-design/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── creative-confidence-courses/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── interior-design-portfolio/
│   │   │   │   ├── page.tsx      # Portfolio grid
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx  # Individual project
│   │   │   │
│   │   │   ├── production-portfolio/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── press/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── reviews/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx      # Blog list
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── page.tsx  # Individual post
│   │   │   │   └── category/
│   │   │   │       └── [slug]/
│   │   │   │           └── page.tsx
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── api/              # API Routes
│   │   │   │   ├── contact/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── newsletter/
│   │   │   │   │   └── route.ts
│   │   │   │   └── instagram/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   └── studio/           # Sanity Studio
│   │   │       └── [[...tool]]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── ui/               # shadcn components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── nav.tsx
│   │   │   │   ├── footer.tsx
│   │   │   │   ├── mobile-nav.tsx
│   │   │   │   └── breadcrumbs.tsx
│   │   │   │
│   │   │   ├── sections/
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── email-signup.tsx
│   │   │   │   ├── instagram-feed.tsx
│   │   │   │   ├── testimonials.tsx
│   │   │   │   └── services-grid.tsx
│   │   │   │
│   │   │   ├── cards/
│   │   │   │   ├── project-card.tsx
│   │   │   │   ├── blog-post-card.tsx
│   │   │   │   ├── testimonial-card.tsx
│   │   │   │   ├── press-card.tsx
│   │   │   │   └── service-card.tsx
│   │   │   │
│   │   │   ├── forms/
│   │   │   │   ├── contact-form.tsx
│   │   │   │   └── newsletter-form.tsx
│   │   │   │
│   │   │   └── shared/
│   │   │       ├── pinterest-pin.tsx
│   │   │       ├── social-share.tsx
│   │   │       ├── image-gallery.tsx
│   │   │       └── tag-list.tsx
│   │   │
│   │   ├── lib/
│   │   │   ├── sanity/
│   │   │   │   ├── client.ts     # Sanity client config
│   │   │   │   └── queries.ts    # GROQ queries
│   │   │   │
│   │   │   ├── utils.ts          # Utility functions
│   │   │   ├── constants.ts      # Site constants
│   │   │   └── validation.ts     # Zod schemas
│   │   │
│   │   ├── types/
│   │   │   ├── project.ts
│   │   │   ├── blog.ts
│   │   │   ├── testimonial.ts
│   │   │   ├── press.ts
│   │   │   ├── service.ts
│   │   │   ├── settings.ts
│   │   │   └── index.ts
│   │   │
│   │   └── styles/
│   │       └── theme.ts          # Theme config
│   │
│   ├── sanity/                   # Sanity configuration
│   │   ├── schemas/
│   │   │   ├── index.ts
│   │   │   ├── project.ts
│   │   │   ├── blog.ts
│   │   │   ├── testimonial.ts
│   │   │   ├── press.ts
│   │   │   ├── service.ts
│   │   │   ├── course.ts
│   │   │   ├── settings.ts
│   │   │   └── about.ts
│   │   │
│   │   └── lib/
│   │       └── image.ts          # Image URL helper
│   │
│   ├── scripts/                  # Import/migration scripts
│   │   ├── import-projects.ts
│   │   ├── import-blog-posts.ts
│   │   ├── create-settings.ts
│   │   └── create-testimonials.ts
│   │
│   ├── .env.local.example
│   ├── .env.local
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── package.json
│
└── docs/                         # Documentation
    ├── 01-site-structure.md
    ├── 02-codebase-structure.md
    ├── 03-sanity-schemas.md
    ├── 04-migration-plan.md
    └── 05-deployment-guide.md
```

---

## Page Components Breakdown

### 1. Home Page (`src/app/page.tsx`)

**Server Component**: Fetches all data

```typescript
import { getSettings, getFeaturedProjects, getTestimonials } from "@/lib/sanity/queries";
import HomeClient from "./home-client";

export default async function HomePage() {
  const [settings, projects, testimonials] = await Promise.all([
    getSettings(),
    getFeaturedProjects(),
    getTestimonials({ limit: 6 }),
  ]);

  return <HomeClient settings={settings} projects={projects} testimonials={testimonials} />;
}
```

**Client Component** (`src/app/home-client.tsx`):
- Hero section with tagline
- Introduction section
- Email signup form
- Instagram feed
- Testimonials carousel/grid
- CTAs

**Sections**:
1. Hero with animated tagline
2. "hello!" introduction
3. E-party email signup
4. Instagram feed (3 posts)
5. Testimonials (6 reviews)
6. Footer

---

### 2. About Page (`src/app/about/page.tsx`)

**Server Component**:
```typescript
export default async function AboutPage() {
  const about = await getAbout();
  return <AboutClient about={about} />;
}
```

**Sections**:
1. "MEET KATHRYN J. LEMASTER" hero
2. Biography sections (structured content)
3. "THINGS THAT MAKE ME SMILE" list
4. Team members (Rufus & Nellie)
5. Testimonials
6. Email signup

**Data Requirements**:
- Biography rich text
- Professional background
- Personal interests array
- Team members (optional)
- Images (headshot, pet photos)

---

### 3. Service Pages

#### Interior Design (`src/app/interior-design/page.tsx`)

**Sections**:
1. Hero: "space to live"
2. Service tier cards (3 tiers):
   - Design Consultation
   - DIY & E-Design
   - Full Service
3. Process breakdown per tier
4. Portfolio CTA
5. Contact CTA
6. Testimonials

**Component**: `ServiceTierCard`
- Icon/image
- Tier name
- Description
- Process steps
- CTA button

#### Production Design (`src/app/production-design/page.tsx`)

**Sections**:
1. Hero: "space to create"
2. Service cards (3 services):
   - Creative Consulting
   - Set Design & Styling
   - Prop Rentals
3. Target audience description
4. Portfolio CTA
5. Contact CTA
6. Production-specific testimonials

---

### 4. Portfolio Pages

#### Interior Design Portfolio (`src/app/interior-design-portfolio/page.tsx`)

```typescript
export default async function InteriorPortfolioPage() {
  const projects = await getProjects({ category: "interior-design" });
  return <PortfolioGrid projects={projects} />;
}
```

**Layout**: Masonry or grid
**Components**:
- `ProjectCard`: Image, title, link
- `ProjectFilter`: Category/tag filtering (future)

#### Individual Project (`src/app/interior-design-portfolio/[slug]/page.tsx`)

```typescript
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  return <ProjectDetail project={project} />;
}
```

**Sections**:
1. Project hero image
2. Project title & description
3. Image gallery
4. Project details (location, date, services)
5. Before/after images
6. Related projects
7. Contact CTA

---

### 5. Online Course Page (`src/app/creative-confidence-courses/page.tsx`)

**Sections**:
1. Course hero
2. Course description
3. "7 Steps" framework overview
4. Learning outcomes
5. Target audience
6. External enrollment link/CTA
7. Testimonials (if available)

**Data Structure**:
- Course title
- Description
- Curriculum sections
- Pricing (optional)
- External URL
- Images

---

### 6. Press Page (`src/app/press/page.tsx`)

```typescript
export default async function PressPage() {
  const pressItems = await getAllPress();
  return <PressGrid items={pressItems} />;
}
```

**Layout**: Grid of press cards

**Component**: `PressCard`
- Publication thumbnail
- Publication name
- Date
- Link to PDF or article

**Organization**: Chronological, print then digital

---

### 7. Reviews Page (`src/app/reviews/page.tsx`)

```typescript
export default async function ReviewsPage() {
  const reviews = await getAllTestimonials();
  return <ReviewsGrid reviews={reviews} />;
}
```

**Layout**: Grid or continuous list

**Component**: `TestimonialCard`
- Circular headshot
- Client name
- Review text
- Service type (optional tag)

---

### 8. Blog Pages

#### Blog List (`src/app/blog/page.tsx`)

```typescript
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const { posts, totalPages } = await getBlogPosts({
    page,
    category: searchParams.category,
  });

  return <BlogClient posts={posts} totalPages={totalPages} currentPage={page} />;
}
```

**Layout**: List with excerpts

**Sidebar**:
- Categories list
- Archives (monthly)
- Recent posts

**Components**:
- `BlogPostPreview`: Title, image, excerpt, date, share buttons
- `BlogSidebar`: Categories, archives
- `Pagination`: Page navigation

#### Individual Post (`src/app/blog/[slug]/page.tsx`)

```typescript
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  const relatedPosts = await getRelatedPosts(post.slug, { limit: 3 });

  return <BlogPost post={post} relatedPosts={relatedPosts} />;
}
```

**Sections**:
1. Featured image
2. Title & date
3. Post content (portable text)
4. Share buttons
5. "More to Love" related posts
6. Email signup

---

### 9. Contact Page (`src/app/contact/page.tsx`)

**Client Component** (for form handling):

```typescript
"use client";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return <ContactForm onSubmit={onSubmit} status={status} />;
}
```

**Form Fields**:
- "WHICH ARE YOU?" dropdown
- Name
- Email
- Message
- Spam protection field

**Features**:
- Form validation (Zod)
- Email sending (API route)
- Success/error states
- Email signup section

---

## Component Architecture

### Layout Components

#### Navigation (`src/components/layout/nav.tsx`)
```typescript
export default function Nav() {
  return (
    <nav>
      <Logo />
      <NavLinks />
      <MobileNav />
    </nav>
  );
}
```

**Features**:
- Dropdown menus (Services, Portfolio)
- Mobile responsive
- Active link highlighting
- Smooth scroll to anchors

#### Footer (`src/components/layout/footer.tsx`)
```typescript
export default function Footer() {
  return (
    <footer>
      <SocialLinks />
      <Copyright />
      <DoodleDogCredit />
    </footer>
  );
}
```

---

### Reusable Sections

#### Email Signup (`src/components/sections/email-signup.tsx`)
```typescript
"use client";

export default function EmailSignup() {
  return (
    <section>
      <h2>YOU'RE INVITED TO KATHRYN'S E-PARTY!</h2>
      <p>Free e-book: "7 Steps to Design + Decorate like a Pro"</p>
      <NewsletterForm />
    </section>
  );
}
```

**Reused on**: Home, About, Service pages, Contact

#### Instagram Feed (`src/components/sections/instagram-feed.tsx`)
```typescript
"use client";

export default function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  return (
    <section>
      <h2>Follow @kjlartanddesign</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <InstagramCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
```

**Data Source**: Instagram Basic Display API

#### Testimonials (`src/components/sections/testimonials.tsx`)
```typescript
export default function Testimonials({ testimonials, limit }: Props) {
  const displayed = testimonials.slice(0, limit);

  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
```

---

### Card Components

#### Project Card (`src/components/cards/project-card.tsx`)
```typescript
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <Link href={`/${project.category}-portfolio/${project.slug}`}>
        <Image src={project.thumbnail} alt={project.title} />
        <CardTitle>{project.title}</CardTitle>
      </Link>
    </Card>
  );
}
```

#### Testimonial Card (`src/components/cards/testimonial-card.tsx`)
```typescript
export default function TestimonialCard({ testimonial }: Props) {
  return (
    <Card>
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        className="rounded-full w-20 h-20"
      />
      <h3>{testimonial.name}</h3>
      <p>{testimonial.text}</p>
      {testimonial.serviceType && <Badge>{testimonial.serviceType}</Badge>}
    </Card>
  );
}
```

---

## API Routes

### Contact Form (`src/app/api/contact/route.ts`)
```typescript
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  inquiryType: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send email via EmailJS, Resend, or similar
    await sendEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
```

### Newsletter Signup (`src/app/api/newsletter/route.ts`)
```typescript
export async function POST(request: Request) {
  const { email } = await request.json();

  // Add to email list (Mailchimp, ConvertKit, etc.)
  await addToMailingList(email);

  return NextResponse.json({ success: true });
}
```

### Instagram Feed (`src/app/api/instagram/route.ts`)
```typescript
export async function GET() {
  const posts = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
  ).then((res) => res.json());

  return NextResponse.json(posts.data.slice(0, 3));
}
```

---

## Data Fetching Patterns

### Server Components (Preferred)
```typescript
// Fetch data at build time or on request
export default async function Page() {
  const data = await getSomething();
  return <Component data={data} />;
}
```

### Client Components (When Needed)
```typescript
"use client";

export default function ClientComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/something").then(res => res.json()).then(setData);
  }, []);

  return <Component data={data} />;
}
```

### Parallel Data Fetching
```typescript
const [settings, projects, testimonials] = await Promise.all([
  getSettings(),
  getProjects(),
  getTestimonials(),
]);
```

---

## Styling Architecture

### Tailwind Configuration (`tailwind.config.ts`)
```typescript
export default {
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: "#f0fdfa",
          // ... shades
          500: "#14b8a6", // Primary turquoise
          // ... shades
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
};
```

### CSS Variables (`src/app/globals.css`)
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --primary: 174 72% 56%; /* Turquoise */
    --accent: 174 44% 80%; /* Light turquoise */
  }
}
```

---

## Type Definitions

### Project Type (`src/types/project.ts`)
```typescript
export interface Project {
  _id: string;
  slug: string;
  title: string;
  category: "interior-design" | "production-design";
  thumbnail: string;
  images: string[];
  description: string;
  location?: string;
  completionDate?: string;
  services: string[];
  featured: boolean;
  order: number;
}
```

### Blog Post Type (`src/types/blog.ts`)
```typescript
export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: any; // Portable text
  featuredImage: string;
  publishedAt: string;
  categories: string[];
  author: {
    name: string;
    image: string;
  };
}
```

---

## Environment Variables

**`.env.local`**:
```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_write_token

# Instagram
INSTAGRAM_ACCESS_TOKEN=your_token

# Email
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=kathryn@example.com

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## Build & Deployment

### Scripts (`package.json`)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "sanity:deploy": "sanity deploy"
  }
}
```

### Vercel Deployment
- Connect GitHub repository
- Set environment variables
- Auto-deploy on push to main
- Preview deployments for PRs

---

## Performance Optimizations

1. **Image Optimization**:
   - Use Next.js Image component
   - Serve from Sanity CDN
   - Lazy loading by default

2. **Code Splitting**:
   - Dynamic imports for heavy components
   - Route-based splitting (automatic)

3. **Caching**:
   - ISR (Incremental Static Regeneration) for blog posts
   - SWR for client-side data fetching
   - Sanity CDN caching

4. **Font Optimization**:
   - next/font for self-hosted fonts
   - Font subsetting

---

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus management
- Alt text for all images
- Color contrast compliance (WCAG AA)

---

## SEO

- Metadata in every page
- Open Graph tags
- Twitter cards
- Sitemap generation
- robots.txt
- Schema markup (JSON-LD)
- Clean URLs

---

## Testing Recommendations

- **Unit Tests**: Vitest
- **E2E Tests**: Playwright
- **Visual Regression**: Chromatic (optional)
- **Accessibility**: axe-core

---

This codebase structure provides a solid foundation for a modern, performant, and maintainable interior design website with Sanity CMS integration.
