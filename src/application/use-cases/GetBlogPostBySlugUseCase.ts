import { IBlogRepository } from "../../domain/repositories/IBlogRepository";
import { BlogPost } from "../../domain/entities/BlogPost";

export class GetBlogPostBySlugUseCase {
  constructor(private readonly blogRepository: IBlogRepository) {}

  async execute(slug: string): Promise<BlogPost | null> {
    return await this.blogRepository.getBySlug(slug);
  }
}
