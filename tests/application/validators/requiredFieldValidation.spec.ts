import { describe, it } from '@jest/globals';
import faker from 'faker';
import { ValidationFactory } from '@/tests/application/factories/validationFactory';
import { MissingParamError } from '@/application/errors';

describe('RequiredFieldValidation', () => {
  it('should be able to return erro if required name field is not sent', async () => {
    const user = {
      email: faker.internet.email()
    }
    const nameRequiredValidation = ValidationFactory.requiredValidation('name')

    const validationResult = await nameRequiredValidation.validate(user)

    expect(validationResult).toBeInstanceOf(MissingParamError)

  })

  it('should be able to return nothing if name is sent', async () => {
    const user = {
      name: faker.name.findName()
    }
    const nameRequiredValidation = ValidationFactory.requiredValidation('name')

    const validationResult = await nameRequiredValidation.validate(user)

    expect(validationResult).toBeUndefined()

  })

  it('should be able to return erro if required email field is not sent', async () => {
    const user = {
      name: faker.name.findName()
    }
    const emailRequiredValidation = ValidationFactory.requiredValidation('email')

    const validationResult = await emailRequiredValidation.validate(user)

    expect(validationResult).toBeInstanceOf(MissingParamError)

  })

  it('should be able to return nothing if email is sent', async () => {
    const user = {
      email: faker.internet.email()
    }
    const emailRequiredValidation = ValidationFactory.requiredValidation('email')

    const validationResult = await emailRequiredValidation.validate(user)

    expect(validationResult).toBeUndefined()

  })



})