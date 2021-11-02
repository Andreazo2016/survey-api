import { ValidationComposite, RequiredFieldValidation, EmailValidation, DuplicatedEmailValidation, UuidValidation, UserNotFoundValidation } from '@/application/validators';
import { IValidation } from '@/application/interfaces/IValidation';
import { UserRepositoryFactory } from './UserRepositoryFactory';

export class ValidationFactory {

  static createUserValidation = (): ValidationComposite => {
    const validations: IValidation[] = []
    validations.push(new RequiredFieldValidation('name'))
    validations.push(new RequiredFieldValidation('email'))
    validations.push(new EmailValidation('email'))
    validations.push(new DuplicatedEmailValidation('email', UserRepositoryFactory.getInstance()))
    return new ValidationComposite(validations)
  }

  static deleteUserValidation = (): ValidationComposite => {
    const validations: IValidation[] = []
    validations.push(new UuidValidation('id'))
    validations.push(new UserNotFoundValidation('id', UserRepositoryFactory.getInstance()))
    return new ValidationComposite(validations)
  }

}