import { IBaseController } from "../../../interfaces/IBaseController";

class HelloController implements IBaseController {
  public execute(request, response) {
    return response.json({ message: 'hello' })
  }

}

export default new HelloController()