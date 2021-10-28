import { Request, Response, NextFunction } from 'express'


export default async (request: Request, response: Response, next: NextFunction) => {
  console.log(`${request.method} | url: ${request.url}`)
  return next()
}