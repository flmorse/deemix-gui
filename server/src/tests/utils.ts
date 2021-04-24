import { Application } from 'express'
import request from 'supertest'
import { app } from '../app'

export const sendGet = (app: Application) => (uri: string) => request(app).get(uri).send()

export const appSendGet = sendGet(app)
