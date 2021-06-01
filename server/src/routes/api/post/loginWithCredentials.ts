import { ApiHandler } from '../../../types'
import { getAccessToken, getArlFromAccessToken } from '../../../main'

const path = '/loginWithCredentials'

const handler: ApiHandler['handler'] = async (req, res) => {
	const { email, password } = req.body
	let accessToken = req.body.accessToken

	if (!accessToken) {
		accessToken = await getAccessToken(email, password)
	}
	let arl
	if (accessToken) arl = await getArlFromAccessToken(accessToken)

	console.log({ accessToken, arl })
	res.send({ accessToken, arl })
}

const apiHandler = { path, handler }

export default apiHandler
