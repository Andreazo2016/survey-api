import { createUserDTO, UserDTO } from "@/domain/user/dtos";

export interface IUserRepository {
  create(user: createUserDTO): Promise<UserDTO>
  findAll(): Promise<UserDTO[]>
  findByEmail(email: string): Promise<UserDTO | null>
  findById(id: string): Promise<UserDTO | null>
  delete(id: string): Promise<void>
}