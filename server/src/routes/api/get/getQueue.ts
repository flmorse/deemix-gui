// import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { getQueue } from '../../../main'

const path: ApiHandler['path'] = '/getQueue'

// let homeCache: any

const handler: ApiHandler['handler'] = (_, res) => {
	const result: any = getQueue()
	res.send(result)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
