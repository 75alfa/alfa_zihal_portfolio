// Dependency Injection Container
// Creates and wires up all dependencies

import { SanityWorkRepository } from "../../infrastructure/repositories/SanityWorkRepository";
import { SanityBlogRepository } from "../../infrastructure/repositories/SanityBlogRepository";
import { SanityContentRepository } from "../../infrastructure/repositories/SanityContentRepository";
import { SanityProfileRepository } from "../../infrastructure/repositories/SanityProfileRepository";
import { GetWorkItemsUseCase } from "../use-cases/GetWorkItemsUseCase";
import { GetWorkItemByIdUseCase } from "../use-cases/GetWorkItemByIdUseCase";
import { GetBlogPostsUseCase } from "../use-cases/GetBlogPostsUseCase";
import { GetBlogPostBySlugUseCase } from "../use-cases/GetBlogPostBySlugUseCase";
import { GetSiteContentUseCase } from "../use-cases/GetSiteContentUseCase";
import { GetProfileContentUseCase } from "../use-cases/GetProfileContentUseCase";
import { ContentService } from "../services/ContentService";

// Repositories
const workRepository = new SanityWorkRepository();
const blogRepository = new SanityBlogRepository();
const contentRepository = new SanityContentRepository();
const profileRepository = new SanityProfileRepository();

// Use Cases
export const getWorkItemsUseCase = new GetWorkItemsUseCase(workRepository);
export const getWorkItemByIdUseCase = new GetWorkItemByIdUseCase(workRepository);
export const getBlogPostsUseCase = new GetBlogPostsUseCase(blogRepository);
export const getBlogPostBySlugUseCase = new GetBlogPostBySlugUseCase(blogRepository);
export const getSiteContentUseCase = new GetSiteContentUseCase(contentRepository);
export const getProfileContentUseCase = new GetProfileContentUseCase(profileRepository);

// Services
export const contentService = new ContentService(
  getSiteContentUseCase,
  getProfileContentUseCase
);
