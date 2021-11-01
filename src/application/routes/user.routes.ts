import { IRoute } from '../interfaces/IRoutes'
import createUserController from '../controllers/User/createUser'
import listUserController from '../controllers/User/listUser'
import { Method } from '../../common/enums/http-methods'

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: '/users',
    description: 'create an user',
    controller: createUserController
  },
  {
    method: Method.GET,
    path: '/users',
    description: 'list all user',
    controller: listUserController
  }
]


export default routes
