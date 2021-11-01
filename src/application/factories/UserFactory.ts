import { CreateUser, ListUser } from "@/domain/user/useCases";
import { ValidationComposite, RequiredFieldValidation, EmailValidation, DuplicatedEmailValidation } from '@/application/validators'
import { IValidation } from '@/application/interfaces/IValidation'
import { UserRepositoryPrisma } from '@/infra/database/prisma/repositories/UserRepositoryPrisma'
export class UserFactory {
  static createUser(): CreateUser {
    return new CreateUser(new UserRepositoryPrisma())
  }
  static listUser(): ListUser {
    return new ListUser(new UserRepositoryPrisma())
  }
  static createUserValidation = (): ValidationComposite => {
    const validations: IValidation[] = []
    validations.push(new RequiredFieldValidation('name'))
    validations.push(new RequiredFieldValidation('email'))
    validations.push(new EmailValidation('email'))
    validations.push(new DuplicatedEmailValidation('email', new UserRepositoryPrisma()))
    return new ValidationComposite(validations)
  }

}