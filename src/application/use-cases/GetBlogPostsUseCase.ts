import { IBlogRepository } from "../../domain/repositories/IBlogRepository";
import { BlogPost } from "../../domain/entities/BlogPost";

export class GetBlogPostsUseCase {
  constructor(private readonly blogRepository: IBlogRepository) {}

  async execute(limit?: number): Promise<BlogPost[]> {
    return await this.blogRepository.getAll(limit);
  }
}
