import { describe, it } from '@jest/globals';
import faker from 'faker';
import { ListUser } from '@/domain/user/useCases';
import { FakeUserRepository } from '@/tests/domain/user/fakeRepository/fakeUserRepository';


type sutType = {
  listUserService: ListUser;
  fakeUserRepository: FakeUserRepository;
}
const makeSut = (): sutType => {
  const fakeUserRepository = new FakeUserRepository()
  const listUserService = new ListUser(fakeUserRepository)
  return {
    fakeUserRepository,
    listUserService
  }
}



describe('List User case', () => {
  it('Should be able to list all users', async () => {
    const { listUserService, fakeUserRepository } = makeSut()

    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
    const userTwo = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }

    await fakeUserRepository.create(user)
    await fakeUserRepository.create(userTwo)
    const users = await listUserService.execute();

    expect(users.length).toBe(2)

  })

})