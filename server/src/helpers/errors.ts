import { concat } from 'ramda'

const prependDeemix = concat('[deemix-server]: ')

export const consoleError = (errorText: string) => console.error(prependDeemix(errorText))

export class BadRequestError extends Error {
	constructor() {
		super()
		this.message = 'Bad request!'
	}
}

export const isBadRequestError = (error: any) => error instanceof BadRequestError
