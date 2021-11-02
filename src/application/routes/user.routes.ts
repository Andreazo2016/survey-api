import { IRoute } from '@/application/interfaces/IRoutes'
import createUserController from '@/application/controllers/User/createUser'
import listUserController from '@/application/controllers/User/listUser'
import deleteUserController from '@/application/controllers/User/deleteUser'
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
  },
  {
    method: Method.DELETE,
    path: '/users/:id',
    description: 'delete an user by id',
    controller: deleteUserController
  }
]


export default routes
