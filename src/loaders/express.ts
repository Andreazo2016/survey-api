import express from 'express';
import { IRoute } from '../interfaces/IRoutes'


export default (routes: [IRoute[]]) => {
  const app = express()
  app.use(express.json())
  const allRoutes = routes.flat()

  allRoutes.forEach(route => {
    const middlewares = route.middlewares || [];
    app[route.method.toLocaleLowerCase()](
      route.path,
      middlewares,
      route.controller.execute
    )
  })

  return app
}






