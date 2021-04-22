import { ApiHandler } from '../../../types'
import { searchAll } from '../../../main'

const path: ApiHandler['path'] = '/mainSearch'

const handler: ApiHandler['handler'] = async (req, res) => {
	const searchData = await searchAll(String(req.query.term))
	res.send(searchData)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
