import { ApiHandler } from '../../../types'
import { dz } from '../../../main'

const path: ApiHandler['path'] = '/getHome'

let homeCache: any

const handler: ApiHandler['handler'] = async (_, res) => {
	if (!homeCache) {
		homeCache = await dz.api.get_chart(0, { limit: 30 })
	}
	res.send(homeCache)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
