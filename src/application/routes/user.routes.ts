import { IRoute } from '../interfaces/IRoutes'
import createUserController from '../controllers/User/createUser'
import { Method } from '../../common/enums/http-methods'

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: '/users',
    description: 'create an user',
    controller: createUserController
  }
]


export default routes
