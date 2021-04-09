import type { Application } from 'express'
import logger from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import { WEBUI_DIR } from './helpers/paths'

export function registerMiddlewares(app: Application) {
	if (process.env.NODE_ENV !== 'test') {
		app.use(logger('dev'))
	}

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	app.use(cookieParser())
	app.use(express.static(WEBUI_DIR))
}
