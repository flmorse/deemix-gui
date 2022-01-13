import { ApiHandler } from '../../../types'
import { getLatestVersion, isUpdateAvailable } from '../../../main'

const path: ApiHandler['path'] = '/checkForUpdates'

const handler: ApiHandler['handler'] = async (_, res) => {
	const latestCommit = await getLatestVersion()
	res.send({
		latestCommit,
		updateAvailable: isUpdateAvailable()
	})
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
