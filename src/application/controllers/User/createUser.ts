import { IBaseController } from "../../interfaces/IBaseController";
import { UserFactory } from '../../../application/factories/UserFactory'

class CreateUserController implements IBaseController {
  async execute(request: any, response: any) {
    const createUserService = UserFactory.createUser()
    const { name, email } = request.body
    try {
      await createUserService.execute({ name, email })
      return response.status(201).send()
    } catch (error) {
      console.log(error)
      return response.status(201).json({ message: 'Internal Server Error' })
    }
  }
}

export default new CreateUserController()