import { Application } from 'express'
import getEndpoints from './get'

const prependApiPath = (path:string) => `/api${path}`

export function registerApis (app: Application) {
  getEndpoints.forEach((getApi) => {
    app.get(prependApiPath(getApi.path), getApi.handler)
  })
}
