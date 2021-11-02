
import { IValidation } from '@/application/interfaces/IValidation';
import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { UserNotFoundError } from '@/application/errors';


export class UserNotFoundValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly userRepository: IUserRepository
  ) { }

  async validate(input: any): Promise<Error> {
    const id = input[this.fieldName]
    const user = await this.userRepository.findById(id)
    if (!user) {
      return new UserNotFoundError()
    }
  }
}
