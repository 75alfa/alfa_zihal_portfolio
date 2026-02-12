import { BlogPost } from "../../../domain/entities/BlogPost";

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
  mainImage?: {
    asset: { _ref: string };
  };
  body?: unknown;
}

export function mapSanityBlogPostToDomain(sanityPost: SanityBlogPost): BlogPost {
  return new BlogPost(
    sanityPost._id,
    sanityPost.title,
    sanityPost.slug,
    sanityPost.publishedAt,
    sanityPost.excerpt,
    sanityPost.tags,
    sanityPost.mainImage,
    sanityPost.body
  );
}
