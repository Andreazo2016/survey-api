import { CreateUser } from "../../domain/user/useCases/createUser";

import { UserRepositoryPrisma } from '../../infra/database/prisma/repositories/UserRepositoryPrisma'
export class UserFactory {
  static createUser(): CreateUser {
    return new CreateUser(new UserRepositoryPrisma())
  }
}