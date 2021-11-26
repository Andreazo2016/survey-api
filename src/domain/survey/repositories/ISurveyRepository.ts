import { CreateSurveyDTO, SurveyDTO } from "@/domain/survey/dtos";

export interface ISurveyRepository {
  create(survey: CreateSurveyDTO): Promise<SurveyDTO>
}