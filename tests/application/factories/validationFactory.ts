import { ValidationComposite, RequiredFieldValidation, EmailValidation, DuplicatedEmailValidation } from '@/application/validators'
import { IValidation } from '@/application/interfaces/IValidation'
import { FakeUserRepository } from '@/tests/domain/user/fakeRepository/fakeUserRepository'
import { IUserRepository } from '@/domain/user/repositories/IUserRepository'

export class ValidationFactory {
  static requiredValidation = (requiredFieldName: string): ValidationComposite => {
    const validations: IValidation[] = []
    validations.push(new RequiredFieldValidation(requiredFieldName))
    return new ValidationComposite(validations)
  }
  static emailValidation = (): ValidationComposite => {
    const validations: IValidation[] = []
    validations.push(new EmailValidation('email'))
    return new ValidationComposite(validations)
  }


  static duplicatedEmailValidation = (userRepository: IUserRepository): ValidationComposite => {
    const validations: IValidation[] = []
    validations.push(new DuplicatedEmailValidation('email', userRepository))
    return new ValidationComposite(validations)
  }

}