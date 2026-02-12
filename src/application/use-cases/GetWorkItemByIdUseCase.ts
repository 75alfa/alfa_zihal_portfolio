import { IWorkRepository } from "../../domain/repositories/IWorkRepository";
import { WorkItem } from "../../domain/entities/WorkItem";

export class GetWorkItemByIdUseCase {
  constructor(private readonly workRepository: IWorkRepository) {}

  async execute(id: string): Promise<WorkItem | null> {
    return await this.workRepository.getById(id);
  }
}
