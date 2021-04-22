import { ApiHandler } from '../../../types'
import { getTracklist } from '../../../main'

const path: ApiHandler['path'] = '/getTracklist'

const handler: ApiHandler['handler'] = async (req, res) => {
	const tracklistData = await getTracklist(String(req.query.id), String(req.query.type))
	res.send(tracklistData)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
