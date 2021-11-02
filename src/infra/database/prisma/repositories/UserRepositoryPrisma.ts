import { createUserDTO, UserDTO } from "@/domain/user/dtos";
import { IUserRepository } from "@/domain/user/repositories/IUserRepository";
import { PrismaClient } from '@prisma/client'

export class UserRepositoryPrisma implements IUserRepository {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async create({ name, email }: createUserDTO): Promise<UserDTO> {
    return this.prismaClient.users.create({
      data: {
        name, email
      }
    })
  }

  findAll(): Promise<UserDTO[]> {
    return this.prismaClient.users.findMany()
  }

  findByEmail(email: string): Promise<UserDTO> {
    return this.prismaClient.users.findUnique({
      where: {
        email,
      },
    })
  }
}