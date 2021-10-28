import { IBaseController } from "../../../interfaces/IBaseController";

class AliveController implements IBaseController {
  execute(request, response) {
    return response.json({ message: 'Server Alive teste' })
  }
}

export default new AliveController()