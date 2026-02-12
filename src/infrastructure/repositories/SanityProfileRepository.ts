import { IProfileRepository } from "../../domain/repositories/IProfileRepository";
import { Profile } from "../../domain/entities/Profile";
import { client } from "../sanity/client";
import { profileQuery } from "../sanity/queries/profile.queries";
import {
  mapSanityProfileToDomain,
  SanityProfile,
} from "../sanity/mappers/profile.mapper";

export class SanityProfileRepository implements IProfileRepository {
  async getProfile(): Promise<Profile | null> {
    const profile = await client.fetch<SanityProfile | null>(profileQuery);
    if (!profile) return null;
    return mapSanityProfileToDomain(profile);
  }
}
