import { RequestHandler } from 'express'

/* === Utilities === */
// https://github.com/Microsoft/TypeScript/issues/25760#issuecomment-614417742
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

export type Port = number | string | boolean

export interface ApiHandler {
	path: string
	handler: RequestHandler<any, any, any, any>
}
