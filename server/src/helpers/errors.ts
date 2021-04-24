import { compose, concat, map } from 'ramda'
import { IO } from '../functors/IO'

export const consoleErrorIo = IO.of(console.error)

const prependDeemix = concat('[deemix-server]: ')

export const consoleError = (errorText: string) =>
	map((fn: any) => compose(fn, prependDeemix)(errorText), consoleErrorIo)

export class BadRequestError extends Error {
	constructor() {
		super()
		this.message = 'Bad request!'
	}
}

export const isBadRequestError = (error: any) => error instanceof BadRequestError
