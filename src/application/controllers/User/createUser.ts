import { IBaseController, HttpResponse, IValidation } from "@/application/interfaces";
import { ValidationFactory, UserFactory } from '@/application/factories';
import { serverError, noContent, badRequest } from '@/common/helpers/httpHelper'

class CreateUserController implements IBaseController {

  constructor(private validation: IValidation) { }
  async execute(request: any): Promise<HttpResponse> {
    const createUserService = UserFactory.createUser()
    const { name, email } = request
    try {
      const error = await this.validation.validate({ email, name })
      if (error) {
        return badRequest(error)
      }
      await createUserService.execute({ name, email })
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export default new CreateUserController(ValidationFactory.createUserValidation())