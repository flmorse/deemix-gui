import { ApiHandler } from '../../../types'
import { getAccessToken, getArlFromAccessToken } from '../../../main'

const path = '/loginWithCredentials'

const handler: ApiHandler['handler'] = (req, res) => {
	const { username, password } = req.body
	let accessToken = req.body.accessToken

	if (!accessToken){
		const accessToken = getAccessToken(username, password)
		console.log({ accessToken })
	}
	const arl = getArlFromAccessToken(accessToken)

	console.log({ username, password })
	res.send({ accessToken, arl })
}

const apiHandler = { path, handler }

export default apiHandler
