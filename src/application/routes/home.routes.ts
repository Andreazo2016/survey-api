import { IRoute } from '../interfaces/IRoutes'
import AliveController from '../controllers/Home/alive'
import HelloController from '../controllers/Home/hello'
import { Method } from '../../common/enums/http-methods'
import LogMiddleware from '../middlewares/log-request'

const routes: IRoute[] = [
  {
    method: Method.GET,
    path: '/home',
    description: 'Home controller',
    middlewares: [LogMiddleware],
    controller: HelloController
  },
  {
    method: Method.GET,
    path: '/alive',
    description: 'Alive Server',
    middlewares: [LogMiddleware],
    controller: AliveController
  }
]


export default routes
