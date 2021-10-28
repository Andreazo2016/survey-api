import { IRoute } from '../../interfaces/IRoutes'
import AliveController from '../controllers/Home/alive'
import HelloController from '../controllers/Home/hello'
import { Method } from '../../common/enums/http-methods'
const routes: IRoute[] = [
  {
    method: Method.GET,
    path: '/home',
    description: 'Home controller',
    controller: HelloController
  },
  {
    method: Method.GET,
    path: '/alive',
    description: 'Alive Server',
    controller: AliveController
  }
]


export default routes
