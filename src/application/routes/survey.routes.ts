import { IRoute } from '@/application/interfaces/IRoutes'
import createSurveyController from '@/application/controllers/Survey/createSurvey'
import { Method } from '@/common/enums/http-methods'

const routes: IRoute[] = [
  {
    method: Method.POST,
    path: '/surveis',
    description: 'create a survey by user',
    controller: createSurveyController
  }
]


export default routes
