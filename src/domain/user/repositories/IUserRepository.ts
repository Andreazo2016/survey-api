import { createUserDTO, UserDTO } from "@/domain/user/dtos";

export interface IUserRepository {
  create(user: createUserDTO): Promise<void>
  findAll(): Promise<UserDTO[]>
  findByEmail(email: string): Promise<UserDTO>
}