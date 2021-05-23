import { ApiHandler } from '../../../types'

const path = '/loginWithCredentials'

const handler: ApiHandler['handler'] = (req, res) => {
	const { username, password } = req.body

	console.log({ username, password })
	res.send(null)
}

const apiHandler = { path, handler }

export default apiHandler
