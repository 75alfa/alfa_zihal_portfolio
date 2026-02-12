import { BlogPost } from "../entities/BlogPost";

export interface IBlogRepository {
  getAll(limit?: number): Promise<BlogPost[]>;
  getBySlug(slug: string): Promise<BlogPost | null>;
}
