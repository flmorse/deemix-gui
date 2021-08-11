import { ApiHandler } from '../../../types'
import { plugins } from '../../../main'

const path: ApiHandler['path'] = '/spotifyStatus'

const handler: ApiHandler['handler'] = (_, res) => {
	res.send({ spotifyEnabled: plugins.spotify.enabled })
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
