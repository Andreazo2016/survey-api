import { createUserRequestDTO } from "../dtos";
import { IUserRepository } from "../repositories/IUserRepository";

export class CreateUser {

  constructor(private userRepository: IUserRepository) { }
  async execute({ name, email }: createUserRequestDTO): Promise<void> {
    await this.userRepository.create({ name, email })
  }
}