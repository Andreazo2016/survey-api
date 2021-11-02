import { describe, it } from '@jest/globals';
import faker from 'faker';
import { ValidationFactory } from '@/tests/application/factories/validationFactory';
import { InvalidParamError } from '@/application/errors';
import { FakeUserRepository } from '@/tests/domain/user/fakeRepository/fakeUserRepository'

describe('DuplicatedEmailValidation', () => {
  it('should be able to return error is there is a duplicated e-mail', async () => {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
    const fakeUserRepository = new FakeUserRepository()

    fakeUserRepository.create(user)

    const duplicatedEmailValidation = ValidationFactory.duplicatedEmailValidation(fakeUserRepository)

    const validationResult = await duplicatedEmailValidation.validate(user)

    expect(validationResult).toBeInstanceOf(InvalidParamError)

  })

  it('should be able to return nothing if email is not duplicated', async () => {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
    const fakeUserRepository = new FakeUserRepository()

    const duplicatedEmailValidation = ValidationFactory.duplicatedEmailValidation(fakeUserRepository)

    const validationResult = await duplicatedEmailValidation.validate(user)

    expect(validationResult).toBeUndefined()

  })



})