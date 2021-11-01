import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { UserDTO } from '@/domain/user/dtos'

export class ListUser {

  constructor(private userRepository: IUserRepository) { }
  async execute(): Promise<UserDTO[]> {
    return this.userRepository.findAll();
  }
}