import { IRoute } from '@/application/interfaces/IRoutes'
import createUserController from '@/application/controllers/User/createUser'
import listUserController from '@/application/controllers/User/listUser'
import { Method } from '@/common/enums/http-methods'

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
