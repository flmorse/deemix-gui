import { RequestHandler } from 'express'

/* === Utilities === */
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type Port = number | string | boolean

export interface ApiHandler {
	path: string
	handler: RequestHandler
}
