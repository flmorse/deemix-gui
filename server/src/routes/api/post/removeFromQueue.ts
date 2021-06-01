import { ApiHandler } from '../../../types'
import { cancelDownload } from '../../../main'

const path = '/removeFromQueue'

const handler: ApiHandler['handler'] = (req, res) => {
	const { uuid } = req.query
	if (uuid) {
		cancelDownload(uuid)
		res.send({ result: true })
	} else {
		res.send({ result: false })
	}
}

const apiHandler = { path, handler }

export default apiHandler
