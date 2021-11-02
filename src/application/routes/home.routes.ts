import { IRoute } from '@/application/interfaces/IRoutes'
import HomeController from '@/application/controllers/Home/home'
import { Method } from '@/common/enums/http-methods'
import LogMiddleware from '@/application/middlewares/log-request'

const routes: IRoute[] = [
  {
    method: Method.GET,
    path: '/',
    description: 'Home controller',
    middlewares: [LogMiddleware],
    controller: HomeController
  }
]


export default routes
