import { ApiHandler } from '../../../types'
import { getAccessToken, getArlFromAccessToken } from '../../../main'

const path = '/loginWithCredentials'

const handler: ApiHandler['handler'] = async (req, res) => {
	const { username, password } = req.body
	let accessToken = req.body.accessToken

	if (!accessToken){
		const accessToken = await getAccessToken(username, password)
		console.log({ accessToken })
	}
	let arl
	if (accessToken) arl = getArlFromAccessToken(accessToken)
	
	res.send({ accessToken, arl })
}

const apiHandler = { path, handler }

export default apiHandler
