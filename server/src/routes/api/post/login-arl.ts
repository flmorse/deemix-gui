import { RequestHandler } from 'express'
import { ApiHandler } from '../../../types'
import { dz } from '../../../main'

export interface RawLoginArlQuery {
	arl: string
	child?: number
}

const path: ApiHandler['path'] = '/login-arl/'

const handler: RequestHandler<{}, {}, {}, RawLoginArlQuery> = async (req, res, next) => {
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

	const response = await dz.login_via_arl(...loginParams)

	res.status(200).send(response)
	next()
}

const apiHandler = { path, handler }

export default apiHandler
