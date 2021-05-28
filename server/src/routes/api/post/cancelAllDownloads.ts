import { ApiHandler } from '../../../types'
import { cancelAllDownloads } from '../../../main'

const path = '/cancelAllDownloads'

const handler: ApiHandler['handler'] = async (req, res) => {
	cancelAllDownloads()
	res.send({ result: true })
}

const apiHandler = { path, handler }

export default apiHandler
