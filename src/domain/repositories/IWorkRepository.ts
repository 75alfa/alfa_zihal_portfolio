import { WorkItem } from "../entities/WorkItem";

export interface IWorkRepository {
  getAll(): Promise<WorkItem[]>;
  getById(id: string): Promise<WorkItem | null>;
}
