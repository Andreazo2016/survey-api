import { CreateSurveyDTO, SurveyDTO } from "@/domain/survey/dtos";
import { ISurveyRepository } from "../repositories/ISurveyRepository";
export class CreateSurvey {

  constructor(private surveyRepository: ISurveyRepository) { }
  async execute({ name, user_creator_id }: CreateSurveyDTO): Promise<SurveyDTO> {
    return this.surveyRepository.create({ name, user_creator_id });
  }
}