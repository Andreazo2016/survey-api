import expressLoader from './loaders/express';
import HomeRoutes from './application/routes/home.routes'

const app = expressLoader([HomeRoutes])



export default app