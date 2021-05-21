import { RequestHandler } from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ, startQueue } from '../../../main'
import { ApiHandler } from '../../../types'

export interface RawLoginArlQuery {
	arl: string
	child?: number
}

const LoginStatus = {
	NOT_AVAILABLE: -1,
	FAILED: 0,
	SUCCESS: 1,
	ALREADY_LOGGED: 2,
	FORCED_SUCCESS: 3
}

const path: ApiHandler['path'] = '/login-arl/'

const handler: RequestHandler<{}, {}, {}, RawLoginArlQuery> = async (req, res, next) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	if (!req.query) {
		res.status(400).send()
		return next()
	}

	if (!req.query.arl) {
		res.status(400).send()
		return next()
	}

	const loginParams: (string | number)[] = [req.query.arl]

	// TODO Handle the child === 0 case, don't want to rely on the login_via_arl default param (it may change in the
	//  future)
	if (req.query.child) {
		loginParams.push(req.query.child)
	}

	let response

	if (process.env.NODE_ENV !== 'test') {
		if (!dz.logged_in) {
			response = await dz.login_via_arl(...loginParams)
			response = response ? 1 : 0
		} else {
			response = LoginStatus.ALREADY_LOGGED
		}
	} else {
		const testDz = new Deezer()
		response = await testDz.login_via_arl(...loginParams)
	}
	console.log(response)
	const returnValue = { status: response, arl: req.query.arl, user: dz.current_user }

	res.status(200).send(returnValue)
	startQueue(dz)
	next()
}

const apiHandler = { path, handler }

export default apiHandler
