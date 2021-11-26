import { ISurveyRepository } from "@/domain/survey/repositories/ISurveyRepository";
import { SurveyRepositoryPrisma } from '@/infra/database/prisma/repositories/SurveyRepositoryPrisma'
export class SurveyRepositoryFactory {
  static surveyRepository: ISurveyRepository = null
  static getInstance(): ISurveyRepository {
    if (!SurveyRepositoryFactory.surveyRepository) {
      SurveyRepositoryFactory.surveyRepository = new SurveyRepositoryPrisma()
      return SurveyRepositoryFactory.surveyRepository
    }
    return SurveyRepositoryFactory.surveyRepository
  }
}