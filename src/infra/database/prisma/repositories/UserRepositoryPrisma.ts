import { createUserDTO } from "../../../../domain/user/dtos";
import { IUserRepository } from "../../../../domain/user/repositories/IUserRepository";
import { PrismaClient } from '@prisma/client'

export class UserRepositoryPrisma implements IUserRepository {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async create({ name, email }: createUserDTO): Promise<void> {
    await this.prismaClient.users.create({
      data: {
        name, email
      }
    })
  }
}