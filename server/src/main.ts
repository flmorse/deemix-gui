// @ts-expect-error
import { Deezer } from 'deezer-js'

export const dz = new Deezer()
let homeCache: any, chartsCache: any

export async function getHome() {
	if (!homeCache) {
		homeCache = await dz.api.get_chart(0, { limit: 30 })
	}
	return homeCache
}

export async function getCharts() {
	if (!chartsCache) {
		const chartsData = await dz.api.get_countries_charts()
		const countries: any[] = []
		chartsData.forEach((country: any) => {
			countries.push({
				title: country.title.replace('Top ', ''),
				id: country.id,
				picture_small: country.picture_small,
				picture_medium: country.picture_medium,
				picture_big: country.picture_big
			})
		})
		chartsCache = { data: countries }
	}
	return chartsCache
}

export async function getTracklist(list_id: string, list_type: string) {
	switch (list_type) {
		case 'artist': {
			const artistAPI = await dz.api.get_artist(list_id)
			artistAPI.releases = await dz.gw.get_artist_discography_tabs(list_id, 100)
			return artistAPI
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
			return releaseAPI
		}
	}
}

export async function searchAll(term: string) {
	const results = await dz.gw.search(term)
	const order: string[] = []
	results.ORDER.forEach((element: string) => {
		if (['TOP_RESULT', 'TRACK', 'ALBUM', 'ARTIST', 'PLAYLIST'].includes(element)) order.push(element)
	})
	if (results.TOP_RESULT && results.TOP_RESULT.length) {
		const originalTopResult = results.TOP_RESULT[0]
		const topResult: any = {
			type: originalTopResult.__TYPE__
		}
		switch (topResult.type) {
			case 'artist':
				topResult.id = originalTopResult.ART_ID
				topResult.picture = `https://e-cdns-images.dzcdn.net/images/artist/${originalTopResult.ART_PICTURE}`
				topResult.title = originalTopResult.ART_NAME
				topResult.nb_fan = originalTopResult.NB_FAN
				break
			case 'album':
				topResult.id = originalTopResult.ALB_ID
				topResult.picture = `https://e-cdns-images.dzcdn.net/images/cover/${originalTopResult.ALB_PICTURE}`
				topResult.title = originalTopResult.ALB_TITLE
				topResult.artist = originalTopResult.ART_NAME
				topResult.nb_song = originalTopResult.NUMBER_TRACK
				break
			case 'playlist':
				topResult.id = originalTopResult.PLAYLIST_ID
				topResult.picture = `https://e-cdns-images.dzcdn.net/images/${originalTopResult.PICTURE_TYPE}/${originalTopResult.PLAYLIST_PICTURE}`
				topResult.title = originalTopResult.TITLE
				topResult.artist = originalTopResult.PARENT_USERNAME
				topResult.nb_song = originalTopResult.NB_SONG
				break
			default:
				topResult.id = '0'
				topResult.picture = 'https://e-cdns-images.dzcdn.net/images/cover'
				break
		}
	}
	results.ORDER = order
	return results
}

export async function search(term: string, type: string, start: number, nb: number) {
	switch (type) {
		case 'track':
			return await dz.api.search_track(term, { limit: nb, index: start })
		case 'album':
			return await dz.api.search_album(term, { limit: nb, index: start })
		case 'artist':
			return await dz.api.search_artist(term, { limit: nb, index: start })
		case 'playlist':
			return await dz.api.search_playlist(term, { limit: nb, index: start })
		case 'radio':
			return await dz.api.search_radio(term, { limit: nb, index: start })
		case 'user':
			return await dz.api.search_user(term, { limit: nb, index: start })
		default:
			return await dz.api.search(term, { limit: nb, index: start })
	}
}
