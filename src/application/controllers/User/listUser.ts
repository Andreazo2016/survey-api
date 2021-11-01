import { IBaseController } from "../../interfaces/IBaseController";
import { UserFactory } from '../../../application/factories/UserFactory'

class ListUserController implements IBaseController {
  async execute(request: any, response: any) {
    const ListUserService = UserFactory.listUser()
    try {
      const users = await ListUserService.execute()
      return response.status(200).json(users)
    } catch (error) {
      console.log(error)
      return response.status(201).json({ message: 'Internal Server Error' })
    }
  }
}

export default new ListUserController()