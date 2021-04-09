import { RequestHandler } from 'express'
import { ApiHandler } from '../../../types'

export interface RawAlbumQuery {
	term: string
	start?: string
	nb?: string
	ack: number
}

export interface AlbumSearchParams extends Omit<RawAlbumQuery, 'start' | 'nb'> {
	start: number
	nb: number
}

export interface AlbumResponse {
	data: any[]
	total: number
	ack: RawAlbumQuery['ack']
}

const path: ApiHandler['path'] = '/album-search/'

const handler: RequestHandler<{}, {}, {}, RawAlbumQuery> = (req, res, next) => {
	if (!req.query) {
		res.status(400).send()
		next()
	}

	const { term, start, nb, ack } = parseQuery(req.query)

	if (!term || term.trim() === '') {
		res.status(400).send()
		next()
	}

	// const albums = getAlbums(term, start, nb)

	// const output: AlbumResponse = {
	// 	data: albums,
	// 	total: albums.length,
	// 	ack
	// }

	// res.send(output)
	res.send()
	next()
}

const apiHandler = { path, handler }

export default apiHandler

function parseQuery(query: RawAlbumQuery): AlbumSearchParams {
	let startingPoint = 0

	if (typeof query.start !== 'undefined') {
		startingPoint = parseInt(query.start)
	}

	let newNb = 30

	if (typeof query.nb !== 'undefined') {
		newNb = parseInt(query.nb)
	}

	return {
		term: query.term,
		start: startingPoint,
		nb: newNb,
		ack: query.ack
	}
}

// function getAlbums(term: string, start: number, nb: number): any[] {
// 	return []
// }
