import { client } from "./client";
import { postsQuery, postBySlugQuery } from "./queries";

export interface SanityPost {
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

export async function getPosts(limit?: number): Promise<SanityPost[]> {
  const posts = await client.fetch<SanityPost[]>(postsQuery);
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const post = await client.fetch<SanityPost | null>(postBySlugQuery, { slug });
  return post;
}
