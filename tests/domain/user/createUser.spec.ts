import { describe, it } from '@jest/globals';
import faker from 'faker';
import { CreateUser } from '@/domain/user/useCases';
import { FakeUserRepository } from '@/tests/domain/user/fakeRepository/fakeUserRepository';


type sutType = {
  createUserService: CreateUser;
  fakeUserRepository: FakeUserRepository;
}
const makeSut = (): sutType => {
  const fakeUserRepository = new FakeUserRepository()
  const createUserService = new CreateUser(fakeUserRepository)
  return {
    fakeUserRepository,
    createUserService
  }
}



describe('create User case', () => {
  it('Should be able to call repository method', async () => {
    const { createUserService, fakeUserRepository } = makeSut()

    const fakeCreateMethodSpy = jest.spyOn(fakeUserRepository, 'create')

    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }

    await createUserService.execute(user);

    expect(fakeCreateMethodSpy).toBeCalled()

  })

  it('Should be able to create a new user', async () => {
    const { createUserService } = makeSut()

    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }

    const userCreated = await createUserService.execute(user);

    expect(userCreated).toHaveProperty('id')
    expect(userCreated.name).toBe(user.name)
    expect(userCreated.email).toBe(user.email)

  })

})