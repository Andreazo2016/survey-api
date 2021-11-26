import { ISurveyRepository } from "@/domain/survey/repositories/ISurveyRepository";
import { CreateSurveyDTO, SurveyDTO } from "@/domain/survey/dtos";
import faker from 'faker';
export class FakeSurveyRepository implements ISurveyRepository {
  private users: SurveyDTO[] = []
  async create({ name, user_creator_id }: CreateSurveyDTO): Promise<SurveyDTO> {
    const survey = {
      id: faker.datatype.uuid(),
      name,
      user_creator_id,
    }
    this.users.push(survey)
    return survey
  }

}