# Sanity GROQ Queries Reference

Complete reference for all GROQ queries used in the Kathryn J. LeMaster website.

## Query File Location

`web/src/lib/sanity/queries.ts`

---

## Settings Queries

### Get Site Settings

```typescript
export async function getSettings() {
  const query = `*[_type == "settings"][0] {
    siteTitle,
    tagline,
    description,
    location,
    contactEmail,
    phone,
    businessHours,
    socialLinks,
    homeIntroTitle,
    homeIntroText,
    homeQuote,
    ePartyTitle,
    ePartyDescription,
    eBookTitle,
    ePartyButtonText,
    "logo": logo.asset->url,
    "favicon": favicon.asset->url,
    "ogImage": ogImage.asset->url,
    footerCredit,
    googleAnalyticsId
  }`;

  return client.fetch(query);
}
```

---

## About Queries

### Get About Page Content

```typescript
export async function getAbout() {
  const query = `*[_type == "about"][0] {
    pageTitle,
    biography,
    education,
    experience,
    businessAnniversary,
    thingsThatMakeMeSmile,
    teamMembers[] {
      name,
      title,
      description,
      "image": image.asset->url
    },
    "headshotImage": headshotImage.asset->url,
    closingMessage,
    signature
  }`;

  return client.fetch(query);
}
```

---

## Service Queries

### Get All Services

```typescript
export async function getAllServices() {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    tagline,
    description,
    tiers[] {
      name,
      tagline,
      description,
      process,
      icon,
      order
    },
    offerings[] {
      name,
      activities,
      description,
      icon,
      order
    },
    targetAudience,
    "featuredImage": featuredImage.asset->url,
    order
  }`;

  return client.fetch(query);
}
```

### Get Service by Slug

```typescript
export async function getServiceBySlug(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    tagline,
    description,
    tiers[] | order(order asc) {
      name,
      tagline,
      description,
      process,
      icon,
      order
    },
    offerings[] | order(order asc) {
      name,
      activities,
      description,
      icon,
      order
    },
    targetAudience,
    "featuredImage": featuredImage.asset->url
  }`;

  return client.fetch(query, { slug });
}
```

### Get Services by Category

```typescript
export async function getServicesByCategory(category: string) {
  const query = `*[_type == "service" && category == $category] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    tagline,
    description,
    "featuredImage": featuredImage.asset->url
  }`;

  return client.fetch(query, { category });
}
```

---

## Course Queries

### Get Course Information

```typescript
export async function getCourse() {
  const query = `*[_type == "course"][0] {
    title,
    subtitle,
    description,
    tagline,
    curriculum[] | order(stepNumber asc) {
      stepNumber,
      title,
      description
    },
    learningOutcomes,
    targetAudience,
    price,
    enrollmentUrl,
    ctaText,
    "featuredImage": featuredImage.asset->url,
    "gallery": gallery[].asset->url,
    isActive
  }`;

  return client.fetch(query);
}
```

---

## Project Queries

### Get All Projects

```typescript
export async function getAllProjects() {
  const query = `*[_type == "project"] | order(order asc, completionDate desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    "thumbnail": thumbnail.asset->url,
    featured,
    order
  }`;

  return client.fetch(query);
}
```

### Get Projects by Category

```typescript
export async function getProjectsByCategory(category: string) {
  const query = `*[_type == "project" && category == $category] | order(order asc, completionDate desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    "thumbnail": thumbnail.asset->url,
    location,
    completionDate,
    featured,
    order
  }`;

  return client.fetch(query, { category });
}
```

### Get Featured Projects

```typescript
export async function getFeaturedProjects({ limit = 6 }: { limit?: number } = {}) {
  const query = `*[_type == "project" && featured == true] | order(order asc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    "thumbnail": thumbnail.asset->url
  }`;

  return client.fetch(query);
}
```

### Get Project by Slug

```typescript
export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    summary,
    client,
    location,
    completionDate,
    services,
    "thumbnail": thumbnail.asset->url,
    "gallery": gallery[] {
      "url": asset->url,
      caption,
      alt
    },
    "beforeAfter": beforeAfter[] {
      "before": before.asset->url,
      "after": after.asset->url,
      caption
    },
    metaDescription
  }`;

  return client.fetch(query, { slug });
}
```

### Get Related Projects

```typescript
export async function getRelatedProjects(
  currentSlug: string,
  category: string,
  { limit = 3 }: { limit?: number } = {}
) {
  const query = `*[_type == "project" && slug.current != $currentSlug && category == $category] | order(order asc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    "thumbnail": thumbnail.asset->url
  }`;

  return client.fetch(query, { currentSlug, category });
}
```

---

## Blog Queries

### Get All Blog Posts (with Pagination)

```typescript
export async function getBlogPosts({
  page = 1,
  pageSize = 10,
  category,
}: {
  page?: number;
  pageSize?: number;
  category?: string;
} = {}) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const filter = category
    ? `*[_type == "blogPost" && $category in categories[]->slug.current]`
    : `*[_type == "blogPost"]`;

  const query = `{
    "posts": ${filter} | order(publishedAt desc) [${start}...${end}] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "featuredImage": featuredImage {
        "url": asset->url,
        alt
      },
      "categories": categories[]-> {
        title,
        "slug": slug.current
      },
      tags,
      publishedAt,
      featured
    },
    "total": count(${filter})
  }`;

  const params = category ? { category } : {};
  const result = await client.fetch(query, params);

  return {
    posts: result.posts,
    total: result.total,
    totalPages: Math.ceil(result.total / pageSize),
  };
}
```

### Get Blog Post by Slug

```typescript
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    "categories": categories[]-> {
      title,
      "slug": slug.current
    },
    tags,
    author,
    publishedAt,
    metaDescription
  }`;

  return client.fetch(query, { slug });
}
```

### Get Featured Blog Posts

```typescript
export async function getFeaturedBlogPosts({ limit = 3 }: { limit?: number } = {}) {
  const query = `*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    publishedAt
  }`;

  return client.fetch(query);
}
```

### Get Related Blog Posts

```typescript
export async function getRelatedBlogPosts(
  currentSlug: string,
  categories: string[],
  { limit = 3 }: { limit?: number } = {}
) {
  const query = `*[_type == "blogPost"
    && slug.current != $currentSlug
    && count((categories[]->slug.current)[@ in $categories]) > 0
  ] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    publishedAt
  }`;

  return client.fetch(query, { currentSlug, categories });
}
```

### Get Blog Archive (Months)

```typescript
export async function getBlogArchive() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    "year": string::split(publishedAt, "-")[0],
    "month": string::split(publishedAt, "-")[1]
  }`;

  const posts = await client.fetch(query);

  // Group by year and month
  const archive = posts.reduce((acc: any, post: any) => {
    const { year, month } = post;
    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = 0;
    acc[year][month]++;
    return acc;
  }, {});

  return archive;
}
```

---

## Blog Category Queries

### Get All Blog Categories

```typescript
export async function getAllBlogCategories() {
  const query = `*[_type == "blogCategory"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "parent": parent->{
      title,
      "slug": slug.current
    },
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }`;

  return client.fetch(query);
}
```

### Get Category by Slug

```typescript
export async function getBlogCategoryBySlug(slug: string) {
  const query = `*[_type == "blogCategory" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "parent": parent->{
      title,
      "slug": slug.current
    }
  }`;

  return client.fetch(query, { slug });
}
```

### Get Top-Level Categories

```typescript
export async function getTopLevelCategories() {
  const query = `*[_type == "blogCategory" && !defined(parent)] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }`;

  return client.fetch(query);
}
```

---

## Testimonial Queries

### Get All Testimonials

```typescript
export async function getAllTestimonials() {
  const query = `*[_type == "testimonial"] | order(order asc, date desc) {
    _id,
    name,
    title,
    testimonialText,
    "image": image.asset->url,
    serviceType,
    projectType,
    featured,
    order,
    date
  }`;

  return client.fetch(query);
}
```

### Get Featured Testimonials

```typescript
export async function getFeaturedTestimonials({ limit = 6 }: { limit?: number } = {}) {
  const query = `*[_type == "testimonial" && featured == true] | order(order asc) [0...${limit}] {
    _id,
    name,
    title,
    testimonialText,
    "image": image.asset->url,
    serviceType,
    projectType
  }`;

  return client.fetch(query);
}
```

### Get Testimonials by Service Type

```typescript
export async function getTestimonialsByServiceType(serviceType: string) {
  const query = `*[_type == "testimonial" && (serviceType == $serviceType || serviceType == "both")] | order(order asc) {
    _id,
    name,
    title,
    testimonialText,
    "image": image.asset->url,
    serviceType,
    projectType
  }`;

  return client.fetch(query, { serviceType });
}
```

---

## Press Item Queries

### Get All Press Items

```typescript
export async function getAllPress() {
  const query = `*[_type == "pressItem"] | order(order asc, publicationDate desc) {
    _id,
    title,
    publication,
    publicationType,
    publicationDate,
    "thumbnail": thumbnail.asset->url,
    link,
    description,
    featured,
    order
  }`;

  return client.fetch(query);
}
```

### Get Featured Press

```typescript
export async function getFeaturedPress({ limit = 6 }: { limit?: number } = {}) {
  const query = `*[_type == "pressItem" && featured == true] | order(order asc) [0...${limit}] {
    _id,
    title,
    publication,
    publicationType,
    publicationDate,
    "thumbnail": thumbnail.asset->url,
    link,
    description
  }`;

  return client.fetch(query);
}
```

### Get Press by Type

```typescript
export async function getPressByType(publicationType: string) {
  const query = `*[_type == "pressItem" && publicationType == $publicationType] | order(publicationDate desc) {
    _id,
    title,
    publication,
    publicationDate,
    "thumbnail": thumbnail.asset->url,
    link,
    description
  }`;

  return client.fetch(query, { publicationType });
}
```

---

## Utility Queries

### Get Sitemap Data

```typescript
export async function getSitemapData() {
  const query = `{
    "projects": *[_type == "project"] {
      "slug": slug.current,
      category,
      completionDate
    },
    "posts": *[_type == "blogPost"] {
      "slug": slug.current,
      publishedAt
    },
    "services": *[_type == "service"] {
      "slug": slug.current
    }
  }`;

  return client.fetch(query);
}
```

### Search Content

```typescript
export async function searchContent(searchTerm: string) {
  const query = `{
    "projects": *[_type == "project" && (
      title match $searchTerm + "*" ||
      summary match $searchTerm + "*"
    )] [0...5] {
      _id,
      title,
      "slug": slug.current,
      category,
      "thumbnail": thumbnail.asset->url
    },
    "posts": *[_type == "blogPost" && (
      title match $searchTerm + "*" ||
      excerpt match $searchTerm + "*"
    )] [0...5] {
      _id,
      title,
      "slug": slug.current,
      publishedAt
    }
  }`;

  return client.fetch(query, { searchTerm });
}
```

---

## Example Usage in Components

### Server Component (Page)

```typescript
// app/page.tsx
import { getSettings, getFeaturedProjects, getFeaturedTestimonials } from "@/lib/sanity/queries";

export default async function HomePage() {
  const [settings, projects, testimonials] = await Promise.all([
    getSettings(),
    getFeaturedProjects({ limit: 6 }),
    getFeaturedTestimonials({ limit: 6 }),
  ]);

  return (
    <div>
      <Hero tagline={settings.tagline} />
      <FeaturedProjects projects={projects} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
```

### Dynamic Route

```typescript
// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/sanity/queries";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  const categories = post.categories.map((cat) => cat.slug);
  const relatedPosts = await getRelatedBlogPosts(post.slug, categories, { limit: 3 });

  return (
    <article>
      <h1>{post.title}</h1>
      {/* ... post content ... */}
      <RelatedPosts posts={relatedPosts} />
    </article>
  );
}
```

### With Pagination

```typescript
// app/blog/page.tsx
import { getBlogPosts } from "@/lib/sanity/queries";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const category = searchParams.category;

  const { posts, totalPages } = await getBlogPosts({
    page,
    pageSize: 10,
    category,
  });

  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}
```

---

## Performance Tips

### 1. Use Projection
Only fetch fields you need:
```typescript
// Good
*[_type == "project"] { title, slug, thumbnail }

// Avoid
*[_type == "project"]
```

### 2. Use References Wisely
Dereference only when needed:
```typescript
// Good
"categories": categories[]->{ title, "slug": slug.current }

// Avoid (if you don't need full category data)
"categories": categories[]->
```

### 3. Limit Results
Always use limits for lists:
```typescript
*[_type == "project"] [0...10]
```

### 4. Order Efficiently
```typescript
// Use indexed fields for ordering
| order(_createdAt desc)
| order(order asc, _createdAt desc)
```

---

## Testing Queries

### Using Sanity Vision

Access Vision at: `http://localhost:3000/studio/vision`

Test queries directly:
```groq
*[_type == "project" && category == "interior-design"] {
  title,
  "slug": slug.current,
  "thumbnail": thumbnail.asset->url
}
```

### Using CLI

```bash
# Test query from command line
npx sanity documents query '*[_type == "project"] | order(_createdAt desc) [0...5]'
```

---

## Common Patterns

### Conditional Fields
```groq
{
  title,
  "hasGallery": defined(gallery) && count(gallery) > 0,
  "imageCount": count(gallery)
}
```

### Date Formatting
```groq
{
  "year": string::split(publishedAt, "-")[0],
  "formattedDate": publishedAt
}
```

### Count References
```groq
{
  "postCount": count(*[_type == "blogPost" && references(^._id)])
}
```

### Nested Filtering
```groq
*[_type == "blogPost" && count(categories[@->title == "Design"]) > 0]
```

---

This query reference provides all the GROQ queries needed for the Kathryn J. LeMaster website, with examples and best practices for implementation.
