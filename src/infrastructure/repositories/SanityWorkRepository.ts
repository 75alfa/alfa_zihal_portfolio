import { IWorkRepository } from "../../domain/repositories/IWorkRepository";
import { WorkItem } from "../../domain/entities/WorkItem";
import { client } from "../sanity/client";
import { workItemsQuery, workItemByIdQuery } from "../sanity/queries/work.queries";
import {
  mapSanityWorkItemToDomain,
  SanityWorkItem,
} from "../sanity/mappers/work.mapper";

export class SanityWorkRepository implements IWorkRepository {
  async getAll(): Promise<WorkItem[]> {
    const items = await client.fetch<SanityWorkItem[]>(workItemsQuery);
    return items.map(mapSanityWorkItemToDomain);
  }

  async getById(id: string): Promise<WorkItem | null> {
    const item = await client.fetch<SanityWorkItem | null>(workItemByIdQuery, { id });
    if (!item) return null;
    return mapSanityWorkItemToDomain(item);
  }
}
