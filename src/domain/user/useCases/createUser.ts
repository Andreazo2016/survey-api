import { createUserRequestDTO, UserDTO } from "@/domain/user/dtos";
import { IUserRepository } from "@/domain/user/repositories/IUserRepository";

export class CreateUser {
  constructor(private userRepository: IUserRepository) { }
  async execute({ name, email }: createUserRequestDTO): Promise<UserDTO> {
    return this.userRepository.create({ name, email })
  }
}