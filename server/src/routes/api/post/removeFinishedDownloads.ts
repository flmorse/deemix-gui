import { ApiHandler } from '../../../types'
import { clearCompletedDownloads } from '../../../main'

const path = '/removeFinishedDownloads'

const handler: ApiHandler['handler'] = (_, res) => {
	clearCompletedDownloads()
	res.send({ result: true })
}

const apiHandler = { path, handler }

export default apiHandler
