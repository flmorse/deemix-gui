import { ApiHandler } from '../../../types'
import { plugins } from '../../../main'

const path: ApiHandler['path'] = '/getUserSpotifyPlaylists'

const handler: ApiHandler['handler'] = async (req, res) => {
	let data

	if (plugins.spotify.enabled) {
		const sp = plugins.spotify.sp
		const username = req.query.spotifyUser
		data = []
		let playlists = await sp.getUserPlaylists(username)
		playlists = playlists.body
		let playlistList = playlists.items
		while (playlists.next) {
			const regExec = /offset=(\d+)&limit=(\d+)/g.exec(playlists.next)
			const offset = regExec![1]
			const limit = regExec![2]
			const newPlaylists = await sp.getUserPlaylists(username, { offset, limit })
			playlists = newPlaylists.body
			playlistList = playlistList.concat(playlists.items)
		}
		playlistList.forEach((playlist: any) => {
			data.push(plugins.spotify._convertPlaylistStructure(playlist))
		})
	} else {
		data = { error: 'spotifyNotEnabled' }
	}
	res.send(data)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
