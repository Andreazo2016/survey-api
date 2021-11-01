import { IUserRepository } from "../repositories/IUserRepository";
import { ListUserRequestDTO } from '../dtos'

export class ListUser {

  constructor(private userRepository: IUserRepository) { }
  async execute(): Promise<ListUserRequestDTO[]> {
    return this.userRepository.findAll();
  }
}