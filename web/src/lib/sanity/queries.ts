import { client } from "./client";

// ========================================
// SETTINGS QUERIES
// ========================================

/**
 * Fetch site settings
 */
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
    heroHeading,
    heroSubheading,
    heroBio,
    heroBadges,
    statCards,
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

// ========================================
// ABOUT QUERIES
// ========================================

/**
 * Fetch about page content
 */
export async function getAbout() {
  const query = `*[_type == "about"][0] {
    pageTitle,
    title,
    bioText,
    badges,
    infoCards,
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

// ========================================
// SERVICE QUERIES
// ========================================

/**
 * Fetch all services
 */
export async function getAllServices() {
  const query = `*[_type == "service"] | order(order asc) {
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
    "featuredImage": featuredImage.asset->url,
    order
  }`;

  return client.fetch(query);
}

/**
 * Fetch service by slug
 */
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

/**
 * Fetch services by category
 */
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

// ========================================
// PROJECT QUERIES
// ========================================

/**
 * Fetch all portfolio projects
 */
export async function getAllProjects() {
  const query = `*[_type == "project"] | order(order asc, completionDate desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    "thumbnail": thumbnail.asset->url,
    featured,
    order,
    completionDate
  }`;

  return client.fetch(query);
}

/**
 * Fetch project by slug
 */
export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    description,
    client,
    location,
    completionDate,
    services,
    "thumbnail": thumbnail.asset->url,
    "gallery": gallery[] {
      "url": image.asset->url,
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

/**
 * Fetch featured projects
 */
export async function getFeaturedProjects(limit = 6) {
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

/**
 * Fetch projects by category
 */
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
    featured
  }`;

  return client.fetch(query, { category });
}

/**
 * Fetch related projects (same category, excluding current)
 */
export async function getRelatedProjects(
  currentSlug: string,
  category: string,
  limit = 3
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

// ========================================
// TESTIMONIAL QUERIES
// ========================================

/**
 * Fetch all testimonials
 */
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

/**
 * Fetch featured testimonials
 */
export async function getFeaturedTestimonials(limit = 6) {
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

/**
 * Fetch testimonials by service type
 */
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

// ========================================
// PRESS QUERIES
// ========================================

/**
 * Fetch all press items
 */
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

/**
 * Fetch featured press items
 */
export async function getFeaturedPress(limit = 6) {
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

/**
 * Fetch press by type
 */
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

// ========================================
// BLOG QUERIES (JOURNAL)
// ========================================

/**
 * Fetch all blog posts (Journal)
 */
export async function getAllBlogPosts(page = 1, pageSize = 9) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc) [${start}...${end}] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "coverImage": {
        "url": coverImage.asset->url,
        alt
      },
      "categories": categories[]-> {
        title,
        "slug": slug.current
      },
      publishedAt,
      "author": author-> {
        name,
        "image": image.asset->url
      }
    },
    "total": count(*[_type == "post"])
  }`;

  const result = await client.fetch(query);

  return {
    posts: result.posts,
    total: result.total,
    totalPages: Math.ceil(result.total / pageSize),
  };
}

/**
 * Fetch blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "coverImage": {
      "url": coverImage.asset->url,
      alt
    },
    "categories": categories[]-> {
      title,
      "slug": slug.current
    },
    publishedAt,
    "author": author-> {
      name,
      bio,
      "image": image.asset->url
    },
    metaDescription
  }`;

  return client.fetch(query, { slug });
}

/**
 * Fetch featured blog posts
 */
export async function getFeaturedBlogPosts(limit = 3) {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": {
      "url": coverImage.asset->url,
      alt
    },
    publishedAt
  }`;

  return client.fetch(query);
}

/**
 * Fetch all blog categories
 */
export async function getAllBlogCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }`;

  return client.fetch(query);
}

// ========================================
// UTILITY QUERIES
// ========================================

/**
 * Fetch sitemap data
 */
export async function getSitemapData() {
  const query = `{
    "projects": *[_type == "project"] {
      "slug": slug.current,
      category,
      completionDate
    },
    "posts": *[_type == "post"] {
      "slug": slug.current,
      publishedAt
    },
    "services": *[_type == "service"] {
      "slug": slug.current
    }
  }`;

  return client.fetch(query);
}

/**
 * Search content (projects, posts, services)
 */
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
    "posts": *[_type == "post" && (
      title match $searchTerm + "*" ||
      excerpt match $searchTerm + "*"
    )] [0...5] {
      _id,
      title,
      "slug": slug.current,
      publishedAt
    },
    "services": *[_type == "service" && (
      title match $searchTerm + "*" ||
      description match $searchTerm + "*"
    )] [0...5] {
      _id,
      title,
      "slug": slug.current,
      category
    }
  }`;

  return client.fetch(query, { searchTerm });
}
