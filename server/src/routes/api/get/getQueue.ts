// import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { queueOrder, queue, currentJob } from '../../../main'

const path: ApiHandler['path'] = '/getQueue'

// let homeCache: any

const handler: ApiHandler['handler'] = (_, res) => {
	const result: any = {
		queue,
		order: queueOrder
	}
	if (currentJob) result.currentItem = currentJob.downloadObject.getSlimmedDict()

	res.send(result)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
