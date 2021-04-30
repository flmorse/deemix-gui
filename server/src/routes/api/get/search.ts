import { ApiHandler } from '../../../types'
import { dz } from '../../../main'

const path: ApiHandler['path'] = '/search'

const handler: ApiHandler['handler'] = async (req, res) => {
	const term = String(req.query.term)
	const type = String(req.query.type)
	const start = parseInt(String(req.query.start))
	const nb = parseInt(String(req.query.nb))

	switch (type) {
		case 'track':
			res.send( await dz.api.search_track(term, { limit: nb, index: start }) )
			break
		case 'album':
			res.send( await dz.api.search_album(term, { limit: nb, index: start }) )
			break
		case 'artist':
			res.send( await dz.api.search_artist(term, { limit: nb, index: start }) )
			break
		case 'playlist':
			res.send( await dz.api.search_playlist(term, { limit: nb, index: start }) )
			break
		case 'radio':
			res.send( await dz.api.search_radio(term, { limit: nb, index: start }) )
			break
		case 'user':
			res.send( await dz.api.search_user(term, { limit: nb, index: start }) )
			break
		default:
			res.send( await dz.api.search(term, { limit: nb, index: start }) )
			break
	}
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
