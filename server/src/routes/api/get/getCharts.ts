import { ApiHandler } from '../../../types'
import { getCharts } from '../../../main'

const path: ApiHandler['path'] = '/getCharts'

const handler: ApiHandler['handler'] = async (_, res) => {
	const chartsData = await getCharts()
	res.send(chartsData)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
