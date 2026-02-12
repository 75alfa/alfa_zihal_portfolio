import { IWorkRepository } from "../../domain/repositories/IWorkRepository";
import { WorkItem } from "../../domain/entities/WorkItem";

export class GetWorkItemsUseCase {
  constructor(private readonly workRepository: IWorkRepository) {}

  async execute(): Promise<WorkItem[]> {
    return await this.workRepository.getAll();
  }
}
