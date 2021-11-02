import { IBaseController } from "@/application/interfaces/IBaseController";
import { UserFactory, ValidationFactory } from '@/application/factories'
import { noContent, serverError, badRequest } from '@/common/helpers/httpHelper'
import { IValidation } from "@/application/interfaces";

class DeleteUserController implements IBaseController {
  constructor(private validation: IValidation) { }
  async execute(request: any) {
    const { id } = request
    const deleteUserService = UserFactory.deleteUser()
    try {
      const error = await this.validation.validate({ id })
      if (error) {
        return badRequest(error)
      }
      await deleteUserService.execute(id)
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export default new DeleteUserController(ValidationFactory.deleteUserValidation())