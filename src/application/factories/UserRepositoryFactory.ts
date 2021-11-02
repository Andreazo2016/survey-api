import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { UserRepositoryPrisma } from '@/infra/database/prisma/repositories/UserRepositoryPrisma'
export class UserRepositoryFactory {
  static userRepositoryPrisma: UserRepositoryPrisma = null
  static getInstance(): IUserRepository {
    if (UserRepositoryFactory.userRepositoryPrisma) {
      return UserRepositoryFactory.userRepositoryPrisma
    }
    UserRepositoryFactory.userRepositoryPrisma = new UserRepositoryPrisma()
    return UserRepositoryFactory.userRepositoryPrisma
  }
}