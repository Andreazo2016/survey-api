import express from 'express';
import { IRoute } from '@/application/interfaces/IRoutes'
import { adaptRoute } from '@/infra/adapters/express-router';


export default (routes: [IRoute[]]) => {
  const app = express()
  app.use(express.json())
  const allRoutes = routes.flat()
  allRoutes.forEach(route => {
    const middlewares = route.middlewares || [];
    app[route.method.toLocaleLowerCase()](
      route.path,
      middlewares,
      adaptRoute(route.controller)
    )
  })

  return app
}






