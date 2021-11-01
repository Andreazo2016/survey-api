import { CreateUser, ListUser } from "../../domain/user/useCases";

import { UserRepositoryPrisma } from '../../infra/database/prisma/repositories/UserRepositoryPrisma'
export class UserFactory {
  static createUser(): CreateUser {
    return new CreateUser(new UserRepositoryPrisma())
  }
  static listUser(): ListUser {
    return new ListUser(new UserRepositoryPrisma())
  }
}