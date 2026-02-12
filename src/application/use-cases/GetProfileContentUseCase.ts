import { IProfileRepository } from "../../domain/repositories/IProfileRepository";
import { Profile } from "../../domain/entities/Profile";

export class GetProfileContentUseCase {
  constructor(private readonly profileRepository: IProfileRepository) {}

  async execute(): Promise<Profile | null> {
    return await this.profileRepository.getProfile();
  }
}
