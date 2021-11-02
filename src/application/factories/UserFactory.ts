import { CreateUser, ListUser, DeleteUser } from "@/domain/user/useCases";
import { UserRepositoryFactory } from './UserRepositoryFactory';

export class UserFactory {
  static createUser(): CreateUser {
    return new CreateUser(UserRepositoryFactory.getInstance())
  }
  static listUser(): ListUser {
    return new ListUser(UserRepositoryFactory.getInstance())
  }
  static deleteUser(): DeleteUser {
    return new DeleteUser(UserRepositoryFactory.getInstance())
  }
}