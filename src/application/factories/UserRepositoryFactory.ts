import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { UserRepositoryPrisma } from '@/infra/database/prisma/repositories/UserRepositoryPrisma'
export class UserRepositoryFactory {
  static userRepository: IUserRepository = null
  static getInstance(): IUserRepository {
    if (!UserRepositoryFactory.userRepository) {
      UserRepositoryFactory.userRepository = new UserRepositoryPrisma()
      return UserRepositoryFactory.userRepository
    }
    return UserRepositoryFactory.userRepository
  }
}