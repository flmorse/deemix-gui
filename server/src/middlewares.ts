import type { Application } from 'express'
import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import cors from 'cors'

import { WEBUI_DIR } from './helpers/paths'

const MemoryStore = require('memorystore')(session)

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
			store: new MemoryStore({
				checkPeriod: 86400000 // prune expired entries every 24h
			}),
			secret: 'U2hoLCBpdHMgYSBzZWNyZXQh',
			resave: true,
			saveUninitialized: true
		})
	)

	// Enabling CORS only in dev because the dev server is on a different port
	// while in production there's no dev server and the built webui is served
	if (process.env.NODE_ENV === 'production') {
		app.use(express.static(WEBUI_DIR))
	} else {
		app.use(
			cors({
				credentials: true,
				origin: ['http://localhost:3000', 'http://localhost:5000']
			})
		)
	}
}
