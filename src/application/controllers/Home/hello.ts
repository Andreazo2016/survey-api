import { IBaseController } from "../../interfaces/IBaseController";

class HelloController implements IBaseController {
  execute(request, response) {
    return response.json({ message: 'hello' })
  }
}

export default new HelloController()

