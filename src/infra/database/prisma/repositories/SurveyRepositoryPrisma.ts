import { CreateSurveyDTO, SurveyDTO } from "@/domain/survey/dtos";
import { ISurveyRepository } from "@/domain/survey/repositories/ISurveyRepository";
import { PrismaClient } from '@prisma/client'

export class SurveyRepositoryPrisma implements ISurveyRepository {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async create({ name, user_creator_id }: CreateSurveyDTO): Promise<SurveyDTO> {
    return this.prismaClient.survey.create({
      data: {
        name, user_creator_id
      }
    })
  }

}