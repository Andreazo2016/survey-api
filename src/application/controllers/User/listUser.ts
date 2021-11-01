import { IBaseController } from "@/application/interfaces/IBaseController";
import { UserFactory } from '@/application/factories/UserFactory'
import { ok, serverError } from '@/common/helpers/httpHelper'

class ListUserController implements IBaseController {
  async execute(request: any) {
    const ListUserService = UserFactory.listUser()
    try {
      const users = await ListUserService.execute()
      return ok(users)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export default new ListUserController()