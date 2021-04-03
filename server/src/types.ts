import { RequestHandler } from 'express'

export type Port = number | string | boolean

export interface ApiHandler {
	path: string
	handler: RequestHandler
}
