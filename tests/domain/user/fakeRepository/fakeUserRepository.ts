import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { createUserDTO, UserDTO } from "@/domain/user/dtos";
import faker from 'faker';
export class FakeUserRepository implements IUserRepository {
  private users: UserDTO[] = []
  async create({ name, email }: createUserDTO): Promise<UserDTO> {
    const userCreated = {
      id: faker.datatype.uuid(),
      email,
      name
    }
    this.users.push(userCreated)
    return userCreated
  }
  async findAll(): Promise<UserDTO[]> {
    return this.users
  }
  async findByEmail(email: string): Promise<UserDTO | null> {
    return this.users.find(user => user.email === email)
  }
}