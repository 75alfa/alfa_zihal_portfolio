import { GetSiteContentUseCase } from "../use-cases/GetSiteContentUseCase";
import { GetProfileContentUseCase } from "../use-cases/GetProfileContentUseCase";
import { SiteContent } from "../../domain/entities/Content";
import { Profile } from "../../domain/entities/Profile";

export class ContentService {
  constructor(
    private readonly getSiteContentUseCase: GetSiteContentUseCase,
    private readonly getProfileContentUseCase: GetProfileContentUseCase
  ) {}

  async getSiteContent(): Promise<SiteContent | null> {
    return await this.getSiteContentUseCase.execute();
  }

  async getProfileContent(): Promise<Profile | null> {
    return await this.getProfileContentUseCase.execute();
  }
}
