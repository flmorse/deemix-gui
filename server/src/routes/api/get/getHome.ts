import { ApiHandler } from '../../../types'

const path: ApiHandler['path'] = '/getHome'

const handler: ApiHandler['handler'] = (_, res) => {
	res.send('getHome')
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
