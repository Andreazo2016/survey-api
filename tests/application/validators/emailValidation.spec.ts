import { describe, it } from '@jest/globals';
import faker from 'faker';
import { ValidationFactory } from '@/tests/application/factories/validationFactory';
import { InvalidParamError } from '@/application/errors';

describe('EmailValidation', () => {
  it('should be able to return erro if an email formt invalid is sent', async () => {
    const user = {
      email: 'email$invalid.com'
    }
    const emailValidation = ValidationFactory.emailValidation()

    const validationResult = await emailValidation.validate(user)

    expect(validationResult).toBeInstanceOf(InvalidParamError)

  })

  it('should be able to return nothing if email format is correct', async () => {
    const user = {
      email: faker.internet.email()
    }
    const emailValidation = ValidationFactory.emailValidation()

    const validationResult = await emailValidation.validate(user)

    expect(validationResult).toBeUndefined()

  })



})