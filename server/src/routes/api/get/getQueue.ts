// import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { queueOrder, queue, currentJob } from '../../../main'

const path: ApiHandler['path'] = '/getQueue'

// let homeCache: any

const handler: ApiHandler['handler'] = (req, res) => {
	const result = {
		queue,
		order: queueOrder,
		currentItem: ''
	}
	if (currentJob) result.currentItem = currentJob.downloadObject.uuid

	res.send(result)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
