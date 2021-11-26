import expressLoader from './loaders/express';
import HomeRoutes from './application/routes/home.routes'
import UserRoutes from './application/routes/user.routes'
import SurveyRoutes from './application/routes/survey.routes'

const routes = [...HomeRoutes, ...UserRoutes, ...SurveyRoutes]
const app = expressLoader([routes])



export default app