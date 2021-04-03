import type { Application } from 'express'
import logger from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import { WEBUI_DIR } from './helpers/paths'

export function registerMiddlewares(app: Application) {
	app.use(logger('dev'))
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	app.use(cookieParser())
	app.use(express.static(WEBUI_DIR))
}
