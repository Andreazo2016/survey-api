import { createUserDTO } from "../dtos";

export interface IUserRepository {
  create(user: createUserDTO): Promise<void>
}