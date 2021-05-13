import type { Application } from 'express'
import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import { WEBUI_DIR } from './helpers/paths'

declare module 'express-session' {
	export interface SessionData {
		dz: any
	}
}

export function registerMiddlewares(app: Application) {
	if (process.env.NODE_ENV !== 'test') {
		app.use(logger('dev'))
	}

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	app.use(cookieParser())
	app.use(
		session({
			secret: 'U2hoLCBpdHMgYSBzZWNyZXQh',
			resave: true,
			saveUninitialized: true
		})
	)
	app.use(express.static(WEBUI_DIR))
}
