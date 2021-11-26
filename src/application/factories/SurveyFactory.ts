import { CreateSurvey } from "@/domain/survey/useCases";
import { SurveyRepositoryFactory } from './SurveyRepositoryFactory';

export class SurveyFactory {
  static createSurvey(): CreateSurvey {
    return new CreateSurvey(SurveyRepositoryFactory.getInstance())
  }
}