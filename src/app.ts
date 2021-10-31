import expressLoader from './loaders/express';
import HomeRoutes from './application/routes/home.routes'
import UserRoutes from './application/routes/user.routes'

const routes = [...HomeRoutes, ...UserRoutes]
const app = expressLoader([routes])



export default app