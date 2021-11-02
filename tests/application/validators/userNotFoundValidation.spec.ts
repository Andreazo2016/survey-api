import { describe, it } from '@jest/globals';
import faker from 'faker';
import { ValidationFactory } from '@/tests/application/factories/validationFactory';
import { UserNotFoundError } from '@/application/errors';
import { FakeUserRepository } from '@/tests/domain/user/fakeRepository/fakeUserRepository'

describe('User Not Found Validation', () => {
  it('should be able to return error if there is not an user', async () => {
    const user = {
      id: faker.datatype.uuid()
    }

    const fakeUserRepository = new FakeUserRepository()

    const userNotFoundValidation = ValidationFactory.userNotFoundValidation(fakeUserRepository)

    const validationResult = await userNotFoundValidation.validate(user)

    expect(validationResult).toBeInstanceOf(UserNotFoundError)

  })

  it('should be able to return nothing if user exists', async () => {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
    const userTwo = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
    const fakeUserRepository = new FakeUserRepository()

    await fakeUserRepository.create(user)
    const userCreated = await fakeUserRepository.create(userTwo)

    const userNotFoundValidation = ValidationFactory.userNotFoundValidation(fakeUserRepository)

    const validationResult = await userNotFoundValidation.validate(userCreated)


    expect(validationResult).toBeUndefined()

  })



})