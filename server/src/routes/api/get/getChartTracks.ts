import { RequestHandler } from 'express'
import { ApiHandler } from '../../../types'
import { dz } from '../../../main'
import { isObjectEmpy } from '../../../helpers/primitive-checks'
import { BadRequestError, isBadRequestError, consoleError } from '../../../helpers/errors'

export interface RawChartTracksQuery {
	id: string
	index?: number
	limit?: number
}

const path: ApiHandler['path'] = '/getChartTracks'

const handler: RequestHandler<{}, {}, {}, RawChartTracksQuery> = async (req, res, next) => {
	try {
		if (isObjectEmpy(req.query) || !req.query.id) {
			throw new BadRequestError()
		}

		const playlistId = req.query.id
		const index = req.query.index
		const limit = req.query.limit

		const response = await dz.api.get_playlist_tracks(playlistId, { index, limit })
		res.status(200).send(response)
		next()
	} catch (error) {
		if (isBadRequestError(error)) {
			consoleError(error.message).unsafePerformIO()
			res.status(400).send()
			return next()
		}
	}
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
