import { ApiHandler } from '../../../types'
import { search } from '../../../main'

const path: ApiHandler['path'] = '/search'

const handler: ApiHandler['handler'] = async (req, res) => {
	const searchData = await search(String(req.query.term), String(req.query.type), parseInt(String(req.query.start)), parseInt(String(req.query.nb)))
	res.send(searchData)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
