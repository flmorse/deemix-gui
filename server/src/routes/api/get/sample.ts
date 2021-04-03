import { ApiHandler } from '../../../types'

const path: ApiHandler['path'] = '/sample'

const handler: ApiHandler['handler'] = (_, res) => {
	res.send('Mandi')
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
