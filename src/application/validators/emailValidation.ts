
import { IValidation } from '@/application/interfaces/IValidation'
import { InvalidParamError } from '@/application/errors'
import validator from 'validator'

export class EmailValidation implements IValidation {
  constructor(
    private readonly fieldName: string
  ) { }

  async validate(input: any): Promise<Error> {
    const isValid = validator.isEmail(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
