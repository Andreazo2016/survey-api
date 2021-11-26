import { IBaseController, HttpResponse, IValidation } from "@/application/interfaces";
import { ValidationFactory, SurveyFactory } from '@/application/factories';
import { serverError, noContent, badRequest } from '@/common/helpers/httpHelper'

class CreateSurveyController implements IBaseController {

  constructor(private validation: IValidation) { }
  async execute(request: any): Promise<HttpResponse> {
    const createSurveyService = SurveyFactory.createSurvey()
    const { name, user_creator_id } = request
    try {
      const error = await this.validation.validate({ name, user_creator_id })
      if (error) {
        return badRequest(error)
      }
      await createSurveyService.execute({ name, user_creator_id })
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export default new CreateSurveyController(ValidationFactory.createSurveyValidation())