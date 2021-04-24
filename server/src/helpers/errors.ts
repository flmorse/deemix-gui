export const logError = (console: any) => (errorText: string) => console.error(`[deemix-server]: ${errorText}`)
export const consoleError = logError(console)

export class BadRequestError extends Error {
	constructor() {
		super()
		this.message = 'Bad request!'
	}
}

export const isBadRequestError = (error: any) => error instanceof BadRequestError
