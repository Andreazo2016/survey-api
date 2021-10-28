import expressLoader from './loaders/express';
import HomeRoutes from './infra/routes/home.routes'

const app = expressLoader([HomeRoutes])



export default app