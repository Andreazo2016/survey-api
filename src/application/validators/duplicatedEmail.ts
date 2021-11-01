
import { IValidation } from '@/application/interfaces/IValidation';
import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { InvalidParamError } from '@/application/errors';


export class DuplicatedEmailValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly userRepository: IUserRepository
  ) { }

  async validate(input: any): Promise<Error> {
    const email = input[this.fieldName]
    const user = await this.userRepository.findByEmail(email)
    if (user) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
