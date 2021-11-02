import { describe, it } from '@jest/globals';
import faker from 'faker';
import { DeleteUser } from '@/domain/user/useCases';
import { FakeUserRepository } from '@/tests/domain/user/fakeRepository/fakeUserRepository';


type sutType = {
  deleteUserService: DeleteUser;
  fakeUserRepository: FakeUserRepository;
}
const makeSut = (): sutType => {
  const fakeUserRepository = new FakeUserRepository()
  const deleteUserService = new DeleteUser(fakeUserRepository)
  return {
    fakeUserRepository,
    deleteUserService
  }
}



describe('create User case', () => {
  it('Should be able to call repository method', async () => {
    const { deleteUserService, fakeUserRepository } = makeSut()

    const fakeDeleteMethodSpy = jest.spyOn(fakeUserRepository, 'delete')

    const user = {
      id: faker.datatype.uuid()
    }

    await deleteUserService.execute(user.id);

    expect(fakeDeleteMethodSpy).toBeCalled()

  })

  it('Should be able to delete a new user', async () => {
    const { deleteUserService, fakeUserRepository } = makeSut()

    const user = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }
    const userTwo = {
      name: faker.name.findName(),
      email: faker.internet.email()
    }

    await fakeUserRepository.create(user)
    const userTwoCreated = await fakeUserRepository.create(userTwo)
    await deleteUserService.execute(userTwoCreated.id);

    const users = await fakeUserRepository.findAll()

    expect(users.length).toBe(1)

  })

})