import { ApiHandler } from '../../../types'
import { settings } from '../../../main'

const path: ApiHandler['path'] = '/getSettings'

const handler: ApiHandler['handler'] = async (_, res) => {
	res.send(settings)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
