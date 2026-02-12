import { IBlogRepository } from "../../domain/repositories/IBlogRepository";
import { BlogPost } from "../../domain/entities/BlogPost";
import { client } from "../sanity/client";
import { postsQuery, postBySlugQuery } from "../sanity/queries/blog.queries";
import {
  mapSanityBlogPostToDomain,
  SanityBlogPost,
} from "../sanity/mappers/blog.mapper";

export class SanityBlogRepository implements IBlogRepository {
  async getAll(limit?: number): Promise<BlogPost[]> {
    const posts = await client.fetch<SanityBlogPost[]>(postsQuery);
    const mappedPosts = posts.map(mapSanityBlogPostToDomain);
    if (limit) {
      return mappedPosts.slice(0, limit);
    }
    return mappedPosts;
  }

  async getBySlug(slug: string): Promise<BlogPost | null> {
    const post = await client.fetch<SanityBlogPost | null>(postBySlugQuery, { slug });
    if (!post) return null;
    return mapSanityBlogPostToDomain(post);
  }
}
