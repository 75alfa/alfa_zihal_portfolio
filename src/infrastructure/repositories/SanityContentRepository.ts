import { IContentRepository } from "../../domain/repositories/IContentRepository";
import { SiteContent } from "../../domain/entities/Content";
import { client } from "../sanity/client";
import { siteContentQuery } from "../sanity/queries/content.queries";
import {
  mapSanityContentToDomain,
  SanitySiteContent,
} from "../sanity/mappers/content.mapper";

export class SanityContentRepository implements IContentRepository {
  async getSiteContent(): Promise<SiteContent | null> {
    const content = await client.fetch<SanitySiteContent | null>(siteContentQuery);
    if (!content) return null;
    return mapSanityContentToDomain(content);
  }
}
