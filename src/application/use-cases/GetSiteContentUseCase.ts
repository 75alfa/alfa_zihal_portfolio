import { IContentRepository } from "../../domain/repositories/IContentRepository";
import { SiteContent } from "../../domain/entities/Content";

export class GetSiteContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(): Promise<SiteContent | null> {
    return await this.contentRepository.getSiteContent();
  }
}
