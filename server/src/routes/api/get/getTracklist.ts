// @ts-expect-error
import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { sessionDZ } from '../../../main'

const path: ApiHandler['path'] = '/getTracklist'

const handler: ApiHandler['handler'] = async (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	const list_id = String(req.query.id)
	const list_type = String(req.query.type)
	switch (list_type) {
		case 'artist': {
			const artistAPI = await dz.api.get_artist(list_id)
			artistAPI.releases = await dz.gw.get_artist_discography_tabs(list_id, { limit: 100 })
			res.send(artistAPI)
			break
		}
		default: {
			const releaseAPI = await dz.api[`get_${list_type}`](list_id)
			let releaseTracksAPI = await dz.api[`get_${list_type}_tracks`](list_id)
			releaseTracksAPI = releaseTracksAPI.data

			const tracks: any[] = []
			const showdiscs =
				list_type === 'album' &&
				releaseTracksAPI.length &&
				releaseTracksAPI[releaseTracksAPI.length - 1].disk_number !== 1
			let current_disk = 0

			releaseTracksAPI.forEach((track: any) => {
				if (showdiscs && parseInt(track.disk_number) !== current_disk) {
					current_disk = parseInt(track.disk_number)
					tracks.push({ type: 'disc_separator', number: current_disk })
				}
				track.selected = false
				tracks.push(track)
			})
			releaseAPI.tracks = tracks
			res.send(releaseAPI)
			break
		}
	}
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
