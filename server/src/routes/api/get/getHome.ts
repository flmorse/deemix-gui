import { ApiHandler } from '../../../types'
import { getHome } from '../../../main'

const path: ApiHandler['path'] = '/getHome'

const handler: ApiHandler['handler'] = async (_, res) => {
	const homeData = await getHome()
	res.send(homeData)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
