import { SiteContent } from "../entities/Content";

export interface IContentRepository {
  getSiteContent(): Promise<SiteContent | null>;
}
