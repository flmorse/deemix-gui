import { ApiHandler } from '../../../types'
import { getSettings } from '../../../main'

const path: ApiHandler['path'] = '/getSettings'

const handler: ApiHandler['handler'] = (_, res) => {
	res.send(getSettings())
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
