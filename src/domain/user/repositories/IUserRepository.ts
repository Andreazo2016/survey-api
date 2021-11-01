import { createUserDTO, ListUserRequestDTO } from "../dtos";

export interface IUserRepository {
  create(user: createUserDTO): Promise<void>
  findAll(): Promise<ListUserRequestDTO[]>
}