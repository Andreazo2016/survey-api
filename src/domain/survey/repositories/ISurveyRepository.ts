import { CreateSurvey } from "@/domain/survey/dtos";

export interface ISurveyRepository {
  create(user: CreateSurvey): Promise<void>
}