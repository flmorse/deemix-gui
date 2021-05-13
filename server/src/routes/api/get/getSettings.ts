import { ApiHandler } from '../../../types'
import { settings, defaultSettings } from '../../../main'

const path: ApiHandler['path'] = '/getSettings'

const handler: ApiHandler['handler'] = (_, res) => {
	res.send({ settings, defaultSettings })
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
